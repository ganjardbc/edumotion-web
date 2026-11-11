import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { useTheme } from "../../themes";
import { TOPIC_COLORS } from "../../themes/topics";
import type { VideoTopic } from "../../videos/_shared/types";
import { Judul } from "./Judul";
import { Muncul } from "./Muncul";
import { AREA, CLAMP, type Gambar, TEKS } from "./tata";

export type Simpul = { readonly gambar?: Gambar; readonly teks: string; readonly at: number };

// Pola SEBAB → AKIBAT: sebab di atas, panah tumbuh ke bawah, akibat muncul di bawah. Untuk satu hubungan sebab-akibat.
export const SebabAkibat: React.FC<{ readonly judul?: string; readonly sorotJudul?: string; readonly judulAt?: number; readonly sebab: Simpul; readonly akibat: Simpul; readonly topic: VideoTopic }> = ({ judul, sorotJudul, judulAt = 0, sebab, akibat, topic }) => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const c = TOPIC_COLORS[topic];
  const teks = { position: "absolute", left: AREA.left, width: AREA.width, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: TEKS.label, lineHeight: 1.1, color: t.colors.ink } as const;
  const panah = interpolate(frame, [akibat.at - 12, akibat.at], [0, 1], CLAMP);
  const y1 = 820;
  const y2 = 900;
  return (
    <>
      {judul ? <Judul teks={judul} sorot={sorotJudul} at={judulAt} /> : null}
      <Muncul at={sebab.at}>
        {sebab.gambar?.({ x: AREA.cx, y: 600, size: 260 })}
        <div style={{ ...teks, top: 740 }}>{sebab.teks}</div>
      </Muncul>
      <svg width={1080} height={1920} style={{ position: "absolute", inset: 0 }}>
        <line x1={AREA.cx} y1={y1} x2={AREA.cx} y2={y1 + (y2 - y1) * panah} stroke={c.ink} strokeWidth={14} strokeLinecap="round" />
        {panah >= 1 ? <path d={`M${AREA.cx - 30} ${y2 - 24} L${AREA.cx} ${y2 + 8} L${AREA.cx + 30} ${y2 - 24}`} fill="none" stroke={c.ink} strokeWidth={14} strokeLinecap="round" strokeLinejoin="round" /> : null}
      </svg>
      <Muncul at={akibat.at}>
        {akibat.gambar?.({ x: AREA.cx, y: 1030, size: 230 })}
        <div style={{ ...teks, top: akibat.gambar ? 1150 : 960, color: c.ink }}>{akibat.teks}</div>
      </Muncul>
    </>
  );
};
