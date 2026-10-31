import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Sinyal nirkabel: tiga lengkung dan titik. `level` 0..3 menyalakan lengkung satu per satu.
export const WifiSignal: React.FC<PropProps & { readonly level?: number }> = ({ topic = "teknologi", level = 3, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const arcs = [140, 260, 380];
  const on = (i: number): number => Math.min(1, Math.max(0, level - i));
  return (
    <PropFrame {...frame}>
      {arcs.map((r, i) => (
        <g key={r} opacity={0.25 + 0.75 * on(i)}>
          <path d={`M${400 - r * 0.8} ${580 - r * 0.6} A${r} ${r} 0 0 1 ${400 + r * 0.8} ${580 - r * 0.6}`} fill="none" stroke={c.ink} strokeWidth={64} strokeLinecap="round" />
          <path d={`M${400 - r * 0.8} ${580 - r * 0.6} A${r} ${r} 0 0 1 ${400 + r * 0.8} ${580 - r * 0.6}`} fill="none" stroke={on(i) > 0.5 ? c.main : c.shine} strokeWidth={44} strokeLinecap="round" />
        </g>
      ))}
      <circle cx={400} cy={600} r={58} fill={c.ink} />
      <circle cx={400} cy={600} r={42} fill={c.main} />
    </PropFrame>
  );
};
