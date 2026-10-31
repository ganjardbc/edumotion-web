import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Otot rangka berbentuk gelendong dengan serat dan dua tendon. `flex` 0..1 menggembungkan otot.
export const Otot: React.FC<PropProps & { readonly flex?: number }> = ({ topic = "tubuh", flex = 0, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const h = 130 + 70 * flex;
  const body = `M180 400 C260 ${400 - h} 540 ${400 - h} 620 400 C540 ${400 + h} 260 ${400 + h} 180 400 Z`;
  return (
    <PropFrame {...frame}>
      <path d="M40 400 L190 400 M610 400 L760 400" fill="none" stroke={c.ink} strokeWidth={64} strokeLinecap="round" />
      <path d="M40 400 L190 400 M610 400 L760 400" fill="none" stroke={c.shine} strokeWidth={44} strokeLinecap="round" />
      <path d={body} fill={c.rim} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
      <path d={body} fill={c.main} transform="translate(400 400) scale(0.95 0.9) translate(-400 -400)" />
      <path d="M260 400 C340 380 460 380 540 400 M280 450 C360 440 440 440 520 450 M280 350 C360 340 440 340 520 350" fill="none" stroke={c.rim} strokeWidth={10} strokeLinecap="round" />
    </PropFrame>
  );
};
