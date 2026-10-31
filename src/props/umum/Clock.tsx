import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Jam dinding. `progress` 0..1 = satu putaran jarum menit penuh (jarum jam berputar 1/12-nya).
export const Clock: React.FC<PropProps & { readonly progress?: number }> = ({ topic = "alam", progress = 0, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  return (
    <PropFrame {...frame}>
      <circle cx={400} cy={410} r={310} fill={c.rim} />
      <circle cx={400} cy={400} r={300} fill={c.main} stroke={c.ink} strokeWidth={8} />
      <circle cx={400} cy={400} r={245} fill="#FFFFFF" stroke={c.ink} strokeWidth={8} />
      {Array.from({ length: 12 }, (_, i) => (
        <line key={i} x1={400} y1={175} x2={400} y2={i % 3 === 0 ? 215 : 198} stroke={c.ink} strokeWidth={8} strokeLinecap="round" transform={`rotate(${i * 30} 400 400)`} />
      ))}
      <g id="hour" transform={`rotate(${progress * 30} 400 400)`}>
        <line x1={400} y1={400} x2={400} y2={270} stroke={c.ink} strokeWidth={20} strokeLinecap="round" />
      </g>
      <g id="minute" transform={`rotate(${progress * 360} 400 400)`}>
        <line x1={400} y1={400} x2={400} y2={200} stroke={c.rim} strokeWidth={14} strokeLinecap="round" />
      </g>
      <circle cx={400} cy={400} r={20} fill={c.ink} />
      <path d="M190 300 C220 240 280 195 350 180" fill="none" stroke={c.shine} strokeWidth={14} strokeLinecap="round" />
    </PropFrame>
  );
};
