import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Satelit: badan kotak, dua panel surya, antena parabola. `rotate` memiringkannya.
export const Satelit: React.FC<PropProps> = ({ topic = "planet", ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const panel = (x: number) => (
    <g>
      <rect x={x} y={300} width={190} height={200} rx={12} fill={c.main} stroke={c.ink} strokeWidth={8} />
      <path d={`M${x + 63} 300 L${x + 63} 500 M${x + 126} 300 L${x + 126} 500 M${x} 400 L${x + 190} 400`} stroke={c.rim} strokeWidth={8} />
    </g>
  );
  return (
    <PropFrame {...frame}>
      <path d="M180 400 L260 400 M540 400 L620 400" stroke={c.ink} strokeWidth={16} strokeLinecap="round" />
      {panel(0)}
      {panel(610)}
      <rect x={290} y={310} width={220} height={180} rx={24} fill={c.rim} stroke={c.ink} strokeWidth={8} />
      <rect x={300} y={310} width={200} height={170} rx={24} fill={c.shine} stroke={c.ink} strokeWidth={8} />
      <circle cx={400} cy={395} r={38} fill={c.main} stroke={c.ink} strokeWidth={8} />
      <path d="M400 310 L400 240 M340 200 Q400 270 460 200" fill="none" stroke={c.ink} strokeWidth={10} strokeLinecap="round" />
    </PropFrame>
  );
};
