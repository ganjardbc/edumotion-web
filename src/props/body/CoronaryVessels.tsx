import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

const HEART = "M400 700 C250 590 90 470 90 310 C90 200 170 130 260 140 C330 148 380 190 400 240 C420 190 470 148 540 140 C630 130 710 200 710 310 C710 470 550 590 400 700 Z";
const AORTA = "M400 250 C396 200 410 150 450 110";
const VESSELS: ReadonlyArray<string> = [
  "M400 255 C340 215 235 225 170 295 C120 350 130 440 175 500",
  "M170 295 C200 380 240 450 300 530",
  "M175 500 C200 540 215 560 240 585",
  "M400 255 C460 215 565 225 630 295 C680 350 670 440 625 500",
  "M630 295 C600 380 560 450 500 530",
  "M625 500 C600 540 585 560 560 585",
];

// Jantung dengan pembuluh koroner di permukaannya; `flow` (frame) menggerakkan titik darah di sepanjang pembuluh.
export const CoronaryVessels: React.FC<PropProps & { readonly flow?: number }> = ({ topic = "tubuh", flow = 0, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  return (
    <PropFrame {...frame}>
      <path d={HEART} fill={c.rim} transform="translate(0 10)" />
      <path d={HEART} fill={c.main} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
      <path d={AORTA} fill="none" stroke={c.ink} strokeWidth={44} strokeLinecap="round" />
      <path d={AORTA} fill="none" stroke={c.rim} strokeWidth={28} strokeLinecap="round" />
      <path d="M540 170 C590 165 640 195 660 245" fill="none" stroke={c.shine} strokeWidth={14} strokeLinecap="round" />
      {VESSELS.map((d, i) => (
        <g key={i}>
          <path d={d} fill="none" stroke={c.ink} strokeWidth={22} strokeLinecap="round" opacity={0.85} />
          <path d={d} fill="none" stroke={c.shine} strokeWidth={10} strokeLinecap="round" strokeDasharray="6 38" strokeDashoffset={-(flow * 2 + i * 9)} />
        </g>
      ))}
    </PropFrame>
  );
};
