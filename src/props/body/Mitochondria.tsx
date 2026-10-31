import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Mitokondria: kacang 3 nada dengan lipatan dalam (krista).
export const MitochondriaShape: React.FC<{ readonly topic?: NonNullable<PropProps["topic"]> }> = ({ topic = "tubuh" }) => {
  const c = TOPIC_COLORS[topic];
  return (
    <g>
      <rect x={110} y={260} width={580} height={280} rx={140} fill={c.rim} />
      <rect x={110} y={250} width={580} height={280} rx={140} fill={c.main} stroke={c.ink} strokeWidth={8} />
      <path d="M230 300 C260 380 230 420 270 490 M340 290 C370 360 340 430 380 500 M450 290 C480 360 450 430 490 500 M560 300 C590 370 560 420 590 480" fill="none" stroke={c.rim} strokeWidth={14} strokeLinecap="round" />
      <path d="M190 330 C200 300 230 285 270 282" fill="none" stroke={c.shine} strokeWidth={14} strokeLinecap="round" />
    </g>
  );
};

export const Mitochondria: React.FC<PropProps> = ({ topic = "tubuh", ...frame }) => (
  <PropFrame {...frame}>
    <MitochondriaShape topic={topic} />
  </PropFrame>
);
