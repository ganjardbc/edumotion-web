import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Candi bertingkat dengan pintu dan puncak runcing.
export const Candi: React.FC<PropProps> = ({ topic = "sejarah", ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const tier = (x: number, y: number, w: number, h: number, shade: boolean) => <rect x={x} y={y} width={w} height={h} rx={14} fill={shade ? c.rim : c.main} stroke={c.ink} strokeWidth={8} />;
  return (
    <PropFrame {...frame}>
      {tier(90, 560, 620, 120, true)}
      {tier(150, 440, 500, 120, false)}
      {tier(210, 330, 380, 110, true)}
      {tier(270, 230, 260, 100, false)}
      <path d="M400 60 L520 230 L280 230 Z" fill={c.main} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
      <path d="M340 600 C340 540 460 540 460 600 L460 680 L340 680 Z" fill={c.ink} />
      <path d="M180 470 L180 540 M620 470 L620 540 M300 260 L300 310" stroke={c.shine} strokeWidth={14} strokeLinecap="round" />
    </PropFrame>
  );
};
