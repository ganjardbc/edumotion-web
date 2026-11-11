import type React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../../themes";
import { TOPIC_COLORS } from "../../themes/topics";
import type { VideoTopic } from "../../videos/_shared/types";
import { Kartu } from "./Kartu";
import { AREA, CLAMP, TEKS } from "./tata";

// Lebar huruf rata-rata Nunito 800 kira-kira 0,5 kali ukuran huruf; dipakai supaya tebakan muat satu baris
// (coretan hanya rapi pada satu baris).
const fit = (teks: string, max: number, lebar: number): number => Math.min(max, Math.floor(lebar / (teks.length * 0.5)));

// Pola KOREKSI (Twist): tebakan umum dalam satu baris dicoret di `coretAt`, cap SALAH menempel di bawah kanan,
// lalu kartu jawaban benar muncul di `jawabAt`. Menempati y 250–650; karakter boleh berdiri di bawahnya.
export const Koreksi: React.FC<{ readonly tebakan: string; readonly jawaban: string; readonly coretAt: number; readonly jawabAt: number; readonly topic: VideoTopic; readonly label?: string }> = ({ tebakan, jawaban, coretAt, jawabAt, topic, label = "Banyak yang mengira" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = useTheme();
  const c = TOPIC_COLORS[topic];
  const coret = interpolate(frame, [coretAt, coretAt + 10], [0, 1], CLAMP);
  const cap = frame >= coretAt + 10 ? spring({ frame: frame - coretAt - 10, fps, config: { damping: 10, stiffness: 200 } }) : 0;
  const jawab = frame >= jawabAt ? spring({ frame: frame - jawabAt, fps, config: { damping: 12, stiffness: 160 } }) : 0;
  const ukTebak = fit(tebakan, 64, AREA.width - 60);
  const ukJawab = fit(jawaban, TEKS.judul, AREA.width - 100);
  const kecil = { fontFamily: t.fonts.heading, fontWeight: 800, fontSize: TEKS.kecil, color: t.colors.muted } as const;
  return (
    <>
      <Kartu left={AREA.left} top={250} width={AREA.width} height={190} topic={topic}>
        <div style={{ ...kecil, position: "absolute", left: 0, right: 0, top: 24, textAlign: "center" }}>{label}</div>
        <div style={{ position: "absolute", left: 0, right: 0, top: 78, textAlign: "center", whiteSpace: "nowrap" }}>
          <span style={{ position: "relative", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: ukTebak, lineHeight: 1.1, color: t.colors.ink }}>
            {tebakan}
            <span style={{ position: "absolute", left: -8, top: "52%", height: 14, width: `calc(${coret * 100}% + 16px)`, borderRadius: 7, backgroundColor: t.colors.danger }} />
          </span>
        </div>
        <div style={{ position: "absolute", right: -20, bottom: -34, transform: `rotate(-6deg) scale(${cap})`, fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 52, color: "#FFFFFF", backgroundColor: t.colors.danger, borderRadius: 20, padding: "2px 26px" }}>SALAH</div>
      </Kartu>
      <div style={{ position: "absolute", left: AREA.left, top: 480, width: AREA.width, height: 170, opacity: Math.min(1, jawab * 1.6), transform: `scale(${0.85 + 0.15 * jawab})` }}>
        <div style={{ position: "absolute", inset: 0, boxSizing: "border-box", backgroundColor: c.main, border: `8px solid ${c.ink}`, borderRadius: t.radius.card, boxShadow: t.shadows.md, textAlign: "center" }}>
          <div style={{ ...kecil, color: c.ink, marginTop: 14 }}>Yang benar</div>
          <div style={{ fontFamily: t.fonts.heading, fontWeight: 800, fontSize: ukJawab, lineHeight: 1.1, color: c.ink, whiteSpace: "nowrap" }}>{jawaban}</div>
        </div>
      </div>
    </>
  );
};
