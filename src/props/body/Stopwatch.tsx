import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Stopwatch: badan bulat 3 nada, jarum berputar sesuai `progress` (0..1 = satu putaran penuh).
export const Stopwatch: React.FC<PropProps & { readonly progress?: number }> = ({ topic = "tubuh", progress = 0, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const angle = progress * 360;
  return (
    <PropFrame {...frame}>
      <rect x={350} y={70} width={100} height={70} rx={24} fill={c.rim} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
      <circle cx={400} cy={440} r={300} fill={c.rim} />
      <circle cx={400} cy={430} r={290} fill={c.main} stroke={c.ink} strokeWidth={8} />
      <circle cx={400} cy={430} r={235} fill="#FFFFFF" stroke={c.ink} strokeWidth={8} />
      {Array.from({ length: 12 }, (_, i) => (
        <line key={i} x1={400} y1={215} x2={400} y2={i % 3 === 0 ? 255 : 240} stroke={c.ink} strokeWidth={8} strokeLinecap="round" transform={`rotate(${i * 30} 400 430)`} />
      ))}
      <g transform={`rotate(${angle} 400 430)`}>
        <line x1={400} y1={430} x2={400} y2={245} stroke={c.rim} strokeWidth={14} strokeLinecap="round" />
      </g>
      <circle cx={400} cy={430} r={22} fill={c.ink} />
      <path d="M215 300 C250 235 310 195 380 180" fill="none" stroke={c.shine} strokeWidth={14} strokeLinecap="round" />
    </PropFrame>
  );
};
