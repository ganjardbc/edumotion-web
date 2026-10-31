import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Jantung anatomi sederhana: empat ruang (dua atrium atas, dua bilik bawah) dan pembuluh besar. `beat` 0..1 membesarkan jantung sesaat.
export const JantungAnatomi: React.FC<PropProps & { readonly beat?: number }> = ({ topic = "tubuh", beat = 0, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const heart = "M400 700 C280 620 130 500 130 360 C130 250 220 200 300 220 C350 232 385 260 400 300 C415 260 450 232 500 220 C580 200 670 250 670 360 C670 500 520 620 400 700 Z";
  return (
    <PropFrame {...frame}>
      <g transform={`translate(400 430) scale(${1 + 0.06 * beat}) translate(-400 -430)`}>
        <path d="M360 250 C340 160 330 110 300 70" fill="none" stroke={c.ink} strokeWidth={64} strokeLinecap="round" />
        <path d="M360 250 C340 160 330 110 300 70" fill="none" stroke={c.main} strokeWidth={44} strokeLinecap="round" />
        <path d="M450 250 C470 170 520 120 590 100" fill="none" stroke={c.ink} strokeWidth={64} strokeLinecap="round" />
        <path d="M450 250 C470 170 520 120 590 100" fill="none" stroke={c.rim} strokeWidth={44} strokeLinecap="round" />
        <path d={heart} fill={c.rim} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
        <path d={heart} fill={c.main} transform="translate(400 300) scale(0.95) translate(-400 -300)" />
        <path d="M400 300 L400 640 M170 440 C300 420 500 420 630 440" fill="none" stroke={c.rim} strokeWidth={14} strokeLinecap="round" />
        <path d="M210 300 C230 270 260 260 290 266" fill="none" stroke={c.shine} strokeWidth={14} strokeLinecap="round" />
      </g>
    </PropFrame>
  );
};
