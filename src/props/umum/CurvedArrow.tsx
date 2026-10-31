import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Panah melengkung (arah atau urutan). `progress` 0..1 menggambar panah dari pangkal ke ujung.
const ARC = "M150 560 C150 240 430 150 620 300";
const LENGTH = 760;
export const CurvedArrow: React.FC<PropProps & { readonly progress?: number }> = ({ topic = "alam", progress = 1, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  return (
    <PropFrame {...frame}>
      <path d={ARC} fill="none" stroke={c.ink} strokeWidth={56} strokeLinecap="round" strokeDasharray={LENGTH} strokeDashoffset={LENGTH * (1 - progress)} />
      <path d={ARC} fill="none" stroke={c.main} strokeWidth={40} strokeLinecap="round" strokeDasharray={LENGTH} strokeDashoffset={LENGTH * (1 - progress)} />
      <g opacity={progress > 0.92 ? 1 : 0}>
        <path d="M560 190 L700 330 L520 360 Z" fill={c.main} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
      </g>
    </PropFrame>
  );
};
