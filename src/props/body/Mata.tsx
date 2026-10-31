import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Mata menghadap depan: kelopak berbentuk almond, iris warna topik, pupil di tengah (sesuai aturan karakter menghadap depan).
export const Mata: React.FC<PropProps> = ({ topic = "tubuh", ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const almond = "M80 400 C200 220 600 220 720 400 C600 580 200 580 80 400 Z";
  return (
    <PropFrame {...frame}>
      <path d={almond} fill="#FFFFFF" stroke={c.ink} strokeWidth={24} strokeLinejoin="round" />
      <circle cx={400} cy={400} r={125} fill={c.main} stroke={c.ink} strokeWidth={16} />
      <circle cx={400} cy={400} r={58} fill={c.ink} />
      <circle cx={360} cy={355} r={26} fill={c.shine} />
    </PropFrame>
  );
};
