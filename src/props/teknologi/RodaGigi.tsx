import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Roda gigi dengan sepuluh gigi. `progress` 0..1 = satu putaran penuh; dua roda berdampingan perlu progress berlawanan.
const TEETH = 10;
const gear = (): string => {
  const pts: string[] = [];
  for (let i = 0; i < TEETH; i++) {
    const a = (i / TEETH) * Math.PI * 2;
    const w = Math.PI / TEETH / 2;
    const p = (r: number, ang: number): string => `${(400 + Math.cos(ang) * r).toFixed(1)} ${(400 + Math.sin(ang) * r).toFixed(1)}`;
    pts.push(`${i === 0 ? "M" : "L"}${p(230, a - w * 1.6)} L${p(320, a - w * 0.8)} L${p(320, a + w * 0.8)} L${p(230, a + w * 1.6)}`);
  }
  return `${pts.join(" ")} Z`;
};
const GEAR = gear();
export const RodaGigi: React.FC<PropProps & { readonly progress?: number }> = ({ topic = "teknologi", progress = 0, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  return (
    <PropFrame {...frame}>
      <g transform={`rotate(${progress * 360} 400 400)`}>
        <path d={GEAR} fill={c.rim} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" transform="translate(0 10)" />
        <path d={GEAR} fill={c.main} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
        <circle cx={400} cy={400} r={90} fill="#FFFFFF" stroke={c.ink} strokeWidth={8} />
        <path d="M260 300 C285 260 320 235 360 228" fill="none" stroke={c.shine} strokeWidth={14} strokeLinecap="round" />
      </g>
    </PropFrame>
  );
};
