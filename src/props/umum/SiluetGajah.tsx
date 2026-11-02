import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Gajah datar menghadap kiri, dipakai sebagai pembanding berat. Tidak ada bagian bergerak.
export const SiluetGajah: React.FC<PropProps> = ({ topic = "teknologi", ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const leg = (x: number) => <rect x={x} y={470} width={70} height={170} rx={30} fill={c.rim} stroke={c.ink} strokeWidth={8} />;
  return (
    <PropFrame {...frame}>
      {leg(250)}
      {leg(470)}
      <ellipse cx={420} cy={400} rx={250} ry={170} fill={c.main} stroke={c.ink} strokeWidth={8} />
      {leg(210)}
      {leg(520)}
      <circle cx={190} cy={320} r={120} fill={c.main} stroke={c.ink} strokeWidth={8} />
      <path d="M110 380 C60 450 70 560 120 600 C150 620 175 600 160 575 C130 540 140 470 175 430 Z" fill={c.main} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
      <path d="M200 255 C270 230 330 290 290 360 C250 400 200 370 205 320 Z" fill={c.rim} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
      <circle cx={150} cy={300} r={14} fill={c.ink} />
      <path d="M115 360 C95 385 90 410 100 425" fill="none" stroke="#FFFFFF" strokeWidth={22} strokeLinecap="round" />
      <path d="M660 330 C700 360 705 420 690 470" fill="none" stroke={c.ink} strokeWidth={16} strokeLinecap="round" />
      <path d="M260 280 C300 230 370 220 430 240" fill="none" stroke={c.shine} strokeWidth={16} strokeLinecap="round" />
    </PropFrame>
  );
};
