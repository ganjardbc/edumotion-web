import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Paru-paru dua cuping dengan batang tenggorokan. `breath` 0..1 mengembang.
export const ParuParu: React.FC<PropProps & { readonly breath?: number }> = ({ topic = "tubuh", breath = 0, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const lobe = "M330 250 C220 230 120 380 110 520 C100 620 170 680 250 660 C320 640 340 560 340 450 Z";
  const k = 1 + 0.07 * breath;
  return (
    <PropFrame {...frame}>
      <path d="M400 90 L400 330 M400 330 L330 400 M400 330 L470 400" fill="none" stroke={c.ink} strokeWidth={64} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M400 90 L400 330 M400 330 L330 400 M400 330 L470 400" fill="none" stroke={c.shine} strokeWidth={44} strokeLinecap="round" strokeLinejoin="round" />
      <g transform={`translate(330 450) scale(${k}) translate(-330 -450)`}>
        <path d={lobe} fill={c.main} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
        <path d="M160 440 C190 420 230 420 260 440 M150 530 C190 510 240 510 280 530" fill="none" stroke={c.rim} strokeWidth={14} strokeLinecap="round" />
      </g>
      <g transform={`translate(470 450) scale(${k}) translate(-470 -450)`}>
        <g transform="translate(800 0) scale(-1 1)">
          <path d={lobe} fill={c.main} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
          <path d="M160 440 C190 420 230 420 260 440 M150 530 C190 510 240 510 280 530" fill="none" stroke={c.rim} strokeWidth={14} strokeLinecap="round" />
        </g>
      </g>
    </PropFrame>
  );
};
