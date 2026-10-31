import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Meteor: batu bergerigi dengan ekor ke kiri atas. `rotate` mengubah arah jatuh.
export const Meteor: React.FC<PropProps> = ({ topic = "planet", ...frame }) => {
  const c = TOPIC_COLORS[topic];
  return (
    <PropFrame {...frame}>
      <path d="M60 80 L420 330 M40 260 L400 400 M200 40 L440 280" stroke={c.shine} strokeWidth={36} strokeLinecap="round" opacity={0.8} />
      <path d="M520 290 C600 280 690 340 680 440 C670 540 570 620 470 600 C390 580 360 490 390 410 C410 350 450 300 520 290 Z" fill={c.rim} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
      <path d="M520 290 C600 280 690 340 680 440 C670 540 570 620 470 600 C390 580 360 490 390 410 C410 350 450 300 520 290 Z" fill={c.main} transform="translate(520 450) scale(0.94) translate(-520 -450)" />
      <circle cx={560} cy={420} r={34} fill={c.rim} />
      <circle cx={480} cy={520} r={22} fill={c.rim} />
      <path d="M450 350 C470 320 500 308 530 306" fill="none" stroke={c.shine} strokeWidth={14} strokeLinecap="round" />
    </PropFrame>
  );
};
