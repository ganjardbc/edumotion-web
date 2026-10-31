import type React from "react";
import { HIGHLIGHT, TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Roket tegak. `flame` 0..1 mengatur panjang api; beri nilai berubah tiap frame agar api bergoyang.
export const Roket: React.FC<PropProps & { readonly flame?: number }> = ({ topic = "planet", flame = 1, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const tail = 90 + 90 * flame;
  return (
    <PropFrame {...frame}>
      <path d={`M340 600 L400 ${600 + tail} L460 600 Z`} fill={HIGHLIGHT} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
      <path d="M300 420 L170 560 L170 640 L300 580 Z M500 420 L630 560 L630 640 L500 580 Z" fill={c.rim} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
      <path d="M400 70 C520 160 540 320 520 480 L520 600 L280 600 L280 480 C260 320 280 160 400 70 Z" fill={c.main} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
      <path d="M400 70 C460 120 500 190 515 270 L285 270 C300 190 340 120 400 70 Z" fill={c.rim} />
      <circle cx={400} cy={380} r={70} fill={c.shine} stroke={c.ink} strokeWidth={8} />
      <circle cx={400} cy={380} r={46} fill={c.rim} />
      <path d="M318 330 C316 250 340 190 372 150" fill="none" stroke={c.shine} strokeWidth={14} strokeLinecap="round" />
    </PropFrame>
  );
};
