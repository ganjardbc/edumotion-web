import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Setetes darah (atau cairan tubuh); `topic` mengganti warnanya.
export const TetesDarah: React.FC<PropProps> = ({ topic = "tubuh", ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const drop = "M400 90 C440 200 600 350 600 500 C600 620 510 700 400 700 C290 700 200 620 200 500 C200 350 360 200 400 90 Z";
  return (
    <PropFrame {...frame}>
      <path d={drop} fill={c.rim} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
      <path d={drop} fill={c.main} transform="translate(400 90) scale(0.95) translate(-400 -90)" />
      <path d="M490 330 C520 380 545 430 555 490" fill="none" stroke={c.shine} strokeWidth={16} strokeLinecap="round" />
    </PropFrame>
  );
};
