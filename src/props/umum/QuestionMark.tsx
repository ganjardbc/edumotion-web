import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Tanda tanya besar untuk rasa penasaran (Hook, Setup). `pop` 0..1 membesar dari kecil.
export const QuestionMark: React.FC<PropProps & { readonly pop?: number }> = ({ topic = "alam", pop = 1, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const hook = "M270 270 C270 130 530 130 530 280 C530 400 400 400 400 510";
  return (
    <PropFrame {...frame}>
      <g transform={`translate(400 400) scale(${0.4 + 0.6 * pop}) translate(-400 -400)`}>
        <path d={hook} fill="none" stroke={c.ink} strokeWidth={112} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={400} cy={650} r={56} fill={c.ink} />
        <path d={hook} fill="none" stroke={c.rim} strokeWidth={80} strokeLinecap="round" strokeLinejoin="round" transform="translate(0 8)" />
        <path d={hook} fill="none" stroke={c.main} strokeWidth={80} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={400} cy={650} r={42} fill={c.main} />
        <path d="M312 232 C330 200 368 184 404 186" fill="none" stroke={c.shine} strokeWidth={14} strokeLinecap="round" />
      </g>
    </PropFrame>
  );
};
