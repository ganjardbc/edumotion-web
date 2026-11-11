import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { useTheme } from "../../themes";
import { HIGHLIGHT, TOPIC_COLORS } from "../../themes/topics";
import type { VideoTopic } from "../../videos/_shared/types";
import { Judul } from "./Judul";
import { Muncul } from "./Muncul";
import { AREA, CLAMP, type Gambar, TEKS } from "./tata";

export type Butir = { readonly teks: string; readonly gambar?: Gambar; readonly at: number };

// Pola LANGKAH: 2–4 butir bernomor dari atas ke bawah (urutan proses, atau daftar alasan). Tiap butir muncul saat
// narator menyebutnya; butir yang terakhir muncul diberi stabilo, garis penghubung tumbuh di antara nomor.
export const Langkah: React.FC<{ readonly judul?: string; readonly sorotJudul?: string; readonly judulAt?: number; readonly butir: ReadonlyArray<Butir>; readonly topic: VideoTopic }> = ({ judul, sorotJudul, judulAt = 0, butir, topic }) => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const c = TOPIC_COLORS[topic];
  if (butir.length < 2 || butir.length > 4) throw new Error("Langkah: butir harus 2 sampai 4");
  const rowH = butir.length === 2 ? 300 : butir.length === 3 ? 250 : 195;
  const start = AREA.top + (AREA.bottom - AREA.top - rowH * butir.length) / 2;
  const adaGambar = butir.some((b) => b.gambar);
  const g = Math.min(170, rowH - 60);
  const teksLeft = adaGambar ? 300 + g : 290;
  let aktif = -1;
  butir.forEach((b, i) => {
    if (frame >= b.at) aktif = i;
  });
  return (
    <>
      {judul ? <Judul teks={judul} sorot={sorotJudul} at={judulAt} /> : null}
      <svg width={1080} height={1920} style={{ position: "absolute", inset: 0 }}>
        {butir.slice(1).map((b, i) => {
          const y1 = start + rowH * i + rowH / 2 + 48;
          const y2 = start + rowH * (i + 1) + rowH / 2 - 48;
          const grow = interpolate(frame, [b.at - 8, b.at], [0, 1], CLAMP);
          return <line key={i} x1={210} y1={y1} x2={210} y2={y1 + (y2 - y1) * grow} stroke={c.ink} strokeWidth={8} strokeLinecap="round" />;
        })}
      </svg>
      {butir.map((b, i) => {
        const cy = start + rowH * i + rowH / 2;
        return (
          <Muncul key={i} at={b.at}>
            <div style={{ position: "absolute", left: 210 - 48, top: cy - 48, width: 96, height: 96, borderRadius: "50%", backgroundColor: i === aktif ? c.main : t.colors.surface, border: `8px solid ${c.ink}`, boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 52, color: c.ink }}>
              {i + 1}
            </div>
            {b.gambar ? b.gambar({ x: 290 + g / 2, y: cy, size: g }) : null}
            <div style={{ position: "absolute", left: teksLeft, right: 1080 - AREA.right, top: cy, transform: "translateY(-50%)", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: TEKS.label, lineHeight: 1.15, color: t.colors.ink }}>
              <span style={i === aktif ? { backgroundColor: HIGHLIGHT, borderRadius: 14, padding: "0 10px", boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" } : undefined}>{b.teks}</span>
            </div>
          </Muncul>
        );
      })}
    </>
  );
};
