import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Gulungan peta dengan jalur putus-putus menuju tanda X. `progress` 0..1 menggambar jalur.
export const GulunganPeta: React.FC<PropProps & { readonly progress?: number }> = ({ topic = "sejarah", progress = 1, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  return (
    <PropFrame {...frame}>
      <rect x={150} y={150} width={500} height={500} rx={16} fill="#FFFFFF" stroke={c.ink} strokeWidth={8} />
      <rect x={150} y={150} width={500} height={500} rx={16} fill={c.shine} opacity={0.6} />
      <rect x={90} y={110} width={620} height={90} rx={45} fill={c.rim} stroke={c.ink} strokeWidth={8} />
      <rect x={90} y={600} width={620} height={90} rx={45} fill={c.main} stroke={c.ink} strokeWidth={8} />
      <path d="M230 560 C300 420 200 340 350 330 C470 322 480 260 560 250" fill="none" stroke={c.ink} strokeWidth={10} strokeLinecap="round" strokeDasharray="4 26" pathLength={1} style={{ strokeDashoffset: 0 }} opacity={Math.min(1, progress * 3)} />
      <g opacity={progress > 0.9 ? 1 : 0} stroke={c.rim} strokeWidth={26} strokeLinecap="round">
        <line x1={535} y1={225} x2={585} y2={275} />
        <line x1={585} y1={225} x2={535} y2={275} />
      </g>
    </PropFrame>
  );
};
