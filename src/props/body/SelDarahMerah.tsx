import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Sel darah merah: cakram cekung dilihat dari atas. `rotate` memutar sel.
export const SelDarahMerah: React.FC<PropProps> = ({ topic = "tubuh", ...frame }) => {
  const c = TOPIC_COLORS[topic];
  return (
    <PropFrame {...frame}>
      <ellipse cx={400} cy={420} rx={310} ry={270} fill={c.rim} />
      <ellipse cx={400} cy={400} rx={310} ry={270} fill={c.main} stroke={c.ink} strokeWidth={8} />
      <ellipse cx={400} cy={405} rx={150} ry={120} fill={c.rim} opacity={0.55} />
      <path d="M170 300 C200 240 260 200 330 190" fill="none" stroke={c.shine} strokeWidth={14} strokeLinecap="round" />
    </PropFrame>
  );
};
