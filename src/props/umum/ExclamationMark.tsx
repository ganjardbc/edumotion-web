import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Tanda seru besar untuk kejutan (Twist). `pop` 0..1 membesar dari kecil.
export const ExclamationMark: React.FC<PropProps & { readonly pop?: number }> = ({ topic = "alam", pop = 1, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  return (
    <PropFrame {...frame}>
      <g transform={`translate(400 400) scale(${0.4 + 0.6 * pop}) translate(-400 -400)`}>
        <path d="M400 150 L400 470" stroke={c.ink} strokeWidth={128} strokeLinecap="round" />
        <circle cx={400} cy={650} r={64} fill={c.ink} />
        <path d="M400 150 L400 470" stroke={c.rim} strokeWidth={96} strokeLinecap="round" transform="translate(0 8)" />
        <path d="M400 150 L400 470" stroke={c.main} strokeWidth={96} strokeLinecap="round" />
        <circle cx={400} cy={650} r={48} fill={c.main} />
        <path d="M372 190 L372 280" stroke={c.shine} strokeWidth={14} strokeLinecap="round" />
      </g>
    </PropFrame>
  );
};
