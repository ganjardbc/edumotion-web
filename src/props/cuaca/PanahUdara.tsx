import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Tiga panah arus udara naik. `progress` 0..1 menggeser panah ke atas satu putaran (ulangi untuk arus terus).
export const PanahUdara: React.FC<PropProps & { readonly progress?: number }> = ({ topic = "cuaca", progress = 0, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const arrow = "M0 -120 L70 -30 L28 -30 L28 120 L-28 120 L-28 -30 L-70 -30 Z";
  return (
    <PropFrame {...frame}>
      {[0, 1, 2].map((i) => {
        const t = (progress + i / 3) % 1;
        const y = 760 - t * 720;
        const fade = Math.sin(Math.PI * t);
        return (
          <g key={i} transform={`translate(${i === 1 ? 400 : i === 0 ? 190 : 610} ${y}) scale(0.9)`} opacity={fade}>
            <path d={arrow} fill={c.rim} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" transform="translate(0 10)" />
            <path d={arrow} fill={c.main} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
            <path d="M-12 -20 L-12 100" fill="none" stroke={c.shine} strokeWidth={12} strokeLinecap="round" />
          </g>
        );
      })}
    </PropFrame>
  );
};
