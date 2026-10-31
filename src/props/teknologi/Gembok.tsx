import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Gembok. `open` 0..1 mengangkat gagang sampai terbuka.
export const Gembok: React.FC<PropProps & { readonly open?: number }> = ({ topic = "teknologi", open = 0, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  return (
    <PropFrame {...frame}>
      <g transform={`translate(0 ${-70 * open}) rotate(${-18 * open} 250 330)`}>
        <path d="M250 340 L250 260 C250 130 550 130 550 260 L550 340" fill="none" stroke={c.ink} strokeWidth={84} strokeLinecap="round" />
        <path d="M250 340 L250 260 C250 130 550 130 550 260 L550 340" fill="none" stroke={c.shine} strokeWidth={52} strokeLinecap="round" />
      </g>
      <rect x={150} y={330} width={500} height={380} rx={60} fill={c.rim} stroke={c.ink} strokeWidth={8} />
      <rect x={150} y={320} width={500} height={370} rx={60} fill={c.main} stroke={c.ink} strokeWidth={8} />
      <circle cx={400} cy={480} r={48} fill={c.ink} />
      <path d="M400 500 L400 590" stroke={c.ink} strokeWidth={36} strokeLinecap="round" />
      <path d="M200 400 C205 370 230 350 260 346" fill="none" stroke={c.shine} strokeWidth={14} strokeLinecap="round" />
    </PropFrame>
  );
};
