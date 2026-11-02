import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { mixHex } from "../shared";
import { FloorSpot } from "./Floor";

// Titik melayang: posisi tetap (bukan acak), naik pelan dan berputar ke bawah lagi. [x, y awal, diameter, kecepatan px/frame, 0 = warna terang, 1 = warna gelap]
const DOTS: ReadonlyArray<readonly [number, number, number, number, 0 | 1]> = [
  [110, 300, 36, 0.5, 0],
  [930, 420, 26, 0.7, 1],
  [220, 640, 22, 0.9, 1],
  [860, 760, 44, 0.4, 0],
  [90, 980, 30, 0.6, 0],
  [980, 1060, 20, 0.8, 1],
  [300, 1240, 34, 0.5, 1],
  [780, 1330, 24, 0.7, 0],
  [160, 1500, 40, 0.4, 0],
  [920, 1600, 28, 0.6, 1],
  [560, 1740, 22, 0.8, 0],
  [420, 120, 28, 0.6, 1],
  [700, 200, 18, 0.9, 0],
];

const H = 1920;
const RING_COUNT = 3;
const RING_PERIOD = 120;

// Latar warna polos untuk Hook dan Cta (cover): gradasi keluarga warna topik, sorot cahaya di belakang tokoh,
// cincin yang memancar pelan, dan titik melayang. Tanpa lantai dan dekor dunia, jadi teks dan tokoh jadi satu-satunya fokus.
export const Warna: React.FC<{ readonly topic: VideoTopic; readonly floorY: number }> = ({ topic, floorY }) => {
  const frame = useCurrentFrame();
  const c = TOPIC_COLORS[topic];
  const top = mixHex(c.shine, "#FFFFFF", 0.5);
  const light = mixHex(c.shine, "#FFFFFF", 0.35);
  const dark = c.rim;
  return (
    <AbsoluteFill style={{ background: `linear-gradient(180deg, ${top} 0%, ${c.main} 55%, ${c.rim} 100%)` }}>
      <div style={{ position: "absolute", left: 540 - 620, top: 860 - 620, width: 1240, height: 1240, borderRadius: "50%", background: "radial-gradient(closest-side, #FFFFFF, transparent)", opacity: 0.55 }} />
      <svg width="1080" height="1920" viewBox="0 0 1080 1920" style={{ position: "absolute", inset: 0 }}>
        {Array.from({ length: RING_COUNT }, (_, i) => {
          const t = (frame / RING_PERIOD + i / RING_COUNT) % 1;
          return <circle key={i} cx={540} cy={860} r={160 + t * 820} fill="none" stroke={light} strokeWidth={14 * (1 - t) + 4} opacity={0.75 * (1 - t)} />;
        })}
        {DOTS.map(([x, y0, d, speed, tone], i) => {
          const y = (((y0 - frame * speed) % H) + H) % H;
          const sway = Math.sin((frame + i * 17) / 40) * 10;
          return <circle key={i} cx={x + sway} cy={y} r={d / 2} fill={tone === 0 ? light : dark} opacity={tone === 0 ? 0.7 : 0.35} />;
        })}
      </svg>
      <FloorSpot floorY={floorY} opacity={0.4} />
    </AbsoluteFill>
  );
};
