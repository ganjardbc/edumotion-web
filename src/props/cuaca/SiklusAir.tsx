import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Siklus air: tiga panah melingkar mengelilingi tetes. `progress` 0..1 memutar panah satu putaran.
export const SiklusAir: React.FC<PropProps & { readonly progress?: number }> = ({ topic = "air", progress = 0, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const arrow = "M400 120 A280 280 0 0 1 640 270";
  return (
    <PropFrame {...frame}>
      <g transform={`rotate(${progress * 360} 400 400)`}>
        {[0, 120, 240].map((a) => (
          <g key={a} transform={`rotate(${a} 400 400)`}>
            <path d={arrow} fill="none" stroke={c.ink} strokeWidth={44} strokeLinecap="round" />
            <path d={arrow} fill="none" stroke={c.main} strokeWidth={28} strokeLinecap="round" />
            <path d="M600 190 L700 290 L570 330 Z" fill={c.main} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
          </g>
        ))}
      </g>
      <path d="M400 270 C425 330 500 400 500 460 C500 520 455 560 400 560 C345 560 300 520 300 460 C300 400 375 330 400 270 Z" fill={c.rim} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
      <path d="M400 290 C422 345 485 405 485 460 C485 512 450 545 400 545 C350 545 315 512 315 460 C315 405 378 345 400 290 Z" fill={c.main} />
      <path d="M440 380 C458 410 470 430 474 460" fill="none" stroke={c.shine} strokeWidth={12} strokeLinecap="round" />
    </PropFrame>
  );
};
