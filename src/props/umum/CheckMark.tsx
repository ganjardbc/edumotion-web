import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Lencana centang untuk jawaban benar. `progress` 0..1 menggambar tanda centang.
export const CheckMark: React.FC<PropProps & { readonly progress?: number }> = ({ topic = "alam", progress = 1, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  return (
    <PropFrame {...frame}>
      <circle cx={400} cy={414} r={300} fill={c.rim} />
      <circle cx={400} cy={400} r={300} fill={c.main} stroke={c.ink} strokeWidth={8} />
      <path d="M240 410 L360 530 L570 290" fill="none" stroke="#FFFFFF" strokeWidth={64} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={640} strokeDashoffset={640 * (1 - progress)} />
      <path d="M180 300 C210 240 270 190 340 170" fill="none" stroke={c.shine} strokeWidth={14} strokeLinecap="round" />
    </PropFrame>
  );
};
