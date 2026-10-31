import type React from "react";
import { HIGHLIGHT, TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Koin kuno dengan lambang bintang. `flip` 0..1 memutar koin satu putaran di sumbu tegak (mengecil lalu melebar).
export const Koin: React.FC<PropProps & { readonly flip?: number }> = ({ topic = "sejarah", flip = 0, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const sx = Math.abs(Math.cos(flip * Math.PI * 2));
  return (
    <PropFrame {...frame}>
      <g transform={`translate(400 400) scale(${Math.max(0.05, sx)} 1) translate(-400 -400)`}>
        <circle cx={400} cy={412} r={300} fill={c.rim} stroke={c.ink} strokeWidth={8} />
        <circle cx={400} cy={400} r={300} fill={HIGHLIGHT} stroke={c.ink} strokeWidth={8} />
        <circle cx={400} cy={400} r={235} fill="none" stroke={c.rim} strokeWidth={14} strokeDasharray="30 18" />
        <path d="M400 270 L432 360 L528 360 L450 416 L480 510 L400 452 L320 510 L350 416 L272 360 L368 360 Z" fill={c.main} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
        <path d="M200 330 C225 270 275 225 335 205" fill="none" stroke="#FFFFFF" strokeWidth={14} strokeLinecap="round" />
      </g>
    </PropFrame>
  );
};
