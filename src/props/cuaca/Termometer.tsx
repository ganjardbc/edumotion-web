import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Termometer tegak. `level` 0..1 menaikkan cairan di tabung.
export const Termometer: React.FC<PropProps & { readonly level?: number }> = ({ topic = "tubuh", level = 0.6, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const top = 600 - 440 * Math.min(1, Math.max(0, level));
  return (
    <PropFrame {...frame}>
      <rect x={330} y={70} width={140} height={560} rx={70} fill="#FFFFFF" stroke={c.ink} strokeWidth={8} />
      <circle cx={400} cy={650} r={110} fill={c.rim} stroke={c.ink} strokeWidth={8} />
      <circle cx={400} cy={650} r={84} fill={c.main} />
      <rect x={374} y={top} width={52} height={600 - top} fill={c.main} />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={490} y1={160 + i * 100} x2={i % 2 === 0 ? 560 : 535} y2={160 + i * 100} stroke={c.ink} strokeWidth={8} strokeLinecap="round" />
      ))}
      <path d="M352 140 L352 330" fill="none" stroke={c.shine} strokeWidth={12} strokeLinecap="round" />
    </PropFrame>
  );
};
