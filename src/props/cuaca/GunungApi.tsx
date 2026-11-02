import type React from "react";
import { HIGHLIGHT, TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Gunung api: lereng, kawah berlava, dan tiga kepul uap naik. `progress` 0..1 = satu siklus kepul (ulangi untuk uap terus).
export const GunungApi: React.FC<PropProps & { readonly progress?: number }> = ({ topic = "ai", progress = 0, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  return (
    <PropFrame {...frame}>
      {[0, 1, 2].map((i) => {
        const t = (progress + i / 3) % 1;
        return <circle key={i} cx={400 + Math.sin((t + i) * 6) * 36} cy={330 - t * 330} r={34 + t * 46} fill="#FFFFFF" stroke={c.ink} strokeWidth={8} opacity={Math.min(1, t * 6) * (1 - t * t)} />;
      })}
      <path d="M90 700 L300 340 C340 300 460 300 500 340 L710 700 Z" fill={c.rim} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
      <path d="M130 700 L322 358 C350 330 450 330 478 358 L670 700 Z" fill={c.main} />
      <path d="M300 340 C340 300 460 300 500 340 C470 370 330 370 300 340 Z" fill={HIGHLIGHT} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
      <path d="M395 365 C395 420 380 470 360 520 M420 370 C430 450 450 520 470 560" fill="none" stroke={HIGHLIGHT} strokeWidth={20} strokeLinecap="round" />
    </PropFrame>
  );
};
