import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Lencana silang untuk jawaban salah (selalu merah). `progress` 0..1 menggambar tanda silang.
export const CrossMark: React.FC<PropProps & { readonly progress?: number }> = ({ progress = 1, ...frame }) => {
  const c = TOPIC_COLORS.tubuh;
  return (
    <PropFrame {...frame}>
      <circle cx={400} cy={414} r={300} fill={c.rim} />
      <circle cx={400} cy={400} r={300} fill={c.main} stroke={c.ink} strokeWidth={8} />
      <path d="M270 270 L530 530" fill="none" stroke="#FFFFFF" strokeWidth={64} strokeLinecap="round" strokeDasharray={380} strokeDashoffset={380 * (1 - Math.min(1, progress * 2))} />
      <path d="M530 270 L270 530" fill="none" stroke="#FFFFFF" strokeWidth={64} strokeLinecap="round" strokeDasharray={380} strokeDashoffset={380 * (1 - Math.max(0, progress * 2 - 1))} />
      <path d="M180 300 C210 240 270 190 340 170" fill="none" stroke={c.shine} strokeWidth={14} strokeLinecap="round" />
    </PropFrame>
  );
};
