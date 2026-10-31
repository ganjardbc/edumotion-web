import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Planet kecil mengelilingi bintang pusat. `progress` 0..1 = satu putaran orbit.
export const Orbit: React.FC<PropProps & { readonly progress?: number }> = ({ topic = "planet", progress = 0, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const a = progress * Math.PI * 2;
  return (
    <PropFrame {...frame}>
      <ellipse cx={400} cy={400} rx={330} ry={330} fill="none" stroke={c.ink} strokeWidth={8} strokeDasharray="6 26" strokeLinecap="round" />
      <circle cx={400} cy={410} r={110} fill={c.rim} />
      <circle cx={400} cy={400} r={110} fill={c.shine} stroke={c.ink} strokeWidth={8} />
      <circle cx={400 + Math.cos(a) * 330} cy={400 + Math.sin(a) * 330} r={52} fill={c.main} stroke={c.ink} strokeWidth={8} />
      <path d="M340 360 C350 340 370 326 392 322" fill="none" stroke="#FFFFFF" strokeWidth={12} strokeLinecap="round" />
    </PropFrame>
  );
};
