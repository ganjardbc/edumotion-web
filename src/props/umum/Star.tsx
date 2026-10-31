import type React from "react";
import { HIGHLIGHT, TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Bintang bulat 3 nada untuk sorotan atau penilaian. `pop` 0..1 membesar dari kecil.
const STAR = "M400 90 L470 300 L690 300 L510 430 L580 640 L400 510 L220 640 L290 430 L110 300 L330 300 Z";
export const Star: React.FC<PropProps & { readonly pop?: number }> = ({ topic = "alam", pop = 1, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  return (
    <PropFrame {...frame}>
      <g transform={`translate(400 400) scale(${0.3 + 0.7 * pop}) translate(-400 -400)`}>
        <path d={STAR} fill={c.rim} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" transform="translate(0 14)" />
        <path d={STAR} fill={HIGHLIGHT} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
        <path d="M330 240 L400 160" fill="none" stroke="#FFFFFF" strokeWidth={14} strokeLinecap="round" />
      </g>
    </PropFrame>
  );
};
