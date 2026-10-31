import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Awan dengan tetes hujan jatuh berulang. `progress` 0..1 = satu siklus jatuh (ulangi untuk hujan terus).
export const AwanHujan: React.FC<PropProps & { readonly progress?: number }> = ({ topic = "cuaca", progress = 0, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const cloud = "M210 430 C130 430 100 330 180 300 C170 200 280 150 350 200 C390 120 520 130 550 220 C650 210 700 320 620 380 C650 430 610 450 580 430 Z";
  return (
    <PropFrame {...frame}>
      {[0, 1, 2, 3].map((i) => {
        const t = (progress + i / 4) % 1;
        return <path key={i} d="M0 -40 C14 -10 24 4 24 18 C24 34 14 44 0 44 C-14 44 -24 34 -24 18 C-24 4 -14 -10 0 -40 Z" fill={c.rim} stroke={c.ink} strokeWidth={8} transform={`translate(${250 + i * 100} ${470 + t * 260})`} opacity={1 - t * t} />;
      })}
      <path d={cloud} fill={c.rim} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" transform="translate(0 12)" />
      <path d={cloud} fill={c.main} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
      <path d="M200 330 C215 280 260 250 310 245" fill="none" stroke={c.shine} strokeWidth={14} strokeLinecap="round" />
    </PropFrame>
  );
};
