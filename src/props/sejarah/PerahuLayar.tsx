import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Perahu layar. `bob` -1..1 menaikturunkan perahu di atas gelombang.
export const PerahuLayar: React.FC<PropProps & { readonly bob?: number }> = ({ topic = "sejarah", bob = 0, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  return (
    <PropFrame {...frame}>
      <g transform={`translate(0 ${bob * 14}) rotate(${bob * 3} 400 600)`}>
        <path d="M400 110 L400 560" stroke={c.ink} strokeWidth={20} strokeLinecap="round" />
        <path d="M420 130 C560 230 600 380 610 500 L420 500 Z" fill="#FFFFFF" stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
        <path d="M380 190 C300 270 250 370 230 500 L380 500 Z" fill={c.shine} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
        <path d="M150 540 L650 540 C620 640 560 690 480 690 L320 690 C240 690 180 640 150 540 Z" fill={c.rim} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
        <path d="M150 540 L650 540 C640 570 630 590 615 610 L185 610 C170 590 160 570 150 540 Z" fill={c.main} />
      </g>
      <path d="M60 700 C110 670 160 730 210 700 C260 670 310 730 360 700 C410 670 460 730 510 700 C560 670 610 730 660 700 C700 680 730 700 750 710" fill="none" stroke={c.shine} strokeWidth={24} strokeLinecap="round" />
    </PropFrame>
  );
};
