import type React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { useTheme } from "../../themes";
import { TOPIC_COLORS } from "../../themes/topics";
import type { VideoTopic } from "../../videos/_shared/types";
import { Judul } from "./Judul";
import { Muncul } from "./Muncul";
import { AREA, CLAMP, type Gambar, TEKS } from "./tata";

// Pola ANGKA BESAR: satu angka yang naik dari 0, satuan, keterangan pendek, dan (opsional) gambar pembanding.
export const AngkaBesar: React.FC<{ readonly judul?: string; readonly sorotJudul?: string; readonly angka: number; readonly satuan?: string; readonly keterangan: string; readonly gambar?: Gambar; readonly at?: number; readonly topic: VideoTopic }> = ({ judul, sorotJudul, angka, satuan, keterangan, gambar, at = 0, topic }) => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const c = TOPIC_COLORS[topic];
  const v = Math.round(interpolate(frame, [at, at + 40], [0, angka], { ...CLAMP, easing: Easing.out(Easing.cubic) }));
  return (
    <>
      {judul ? <Judul teks={judul} sorot={sorotJudul} at={at} /> : null}
      <Muncul at={at}>
        <div style={{ position: "absolute", left: AREA.left, width: AREA.width, top: AREA.top, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, color: c.ink, fontVariantNumeric: "tabular-nums" }}>
          <span style={{ fontSize: TEKS.angka, lineHeight: 1 }}>{v.toLocaleString("id-ID")}</span>
          {satuan ? <span style={{ fontSize: 88 }}> {satuan}</span> : null}
          <div style={{ fontSize: TEKS.label, lineHeight: 1.15, color: t.colors.ink, marginTop: 12 }}>{keterangan}</div>
        </div>
        {gambar?.({ x: AREA.cx, y: 1000, size: 380 })}
      </Muncul>
    </>
  );
};
