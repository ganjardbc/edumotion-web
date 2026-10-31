import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Planet dengan cincin miring (cincin belakang dan depan digambar terpisah).
export const PlanetBercincin: React.FC<PropProps> = ({ topic = "planet", ...frame }) => {
  const c = TOPIC_COLORS[topic];
  return (
    <PropFrame {...frame}>
      <g transform="rotate(-20 400 400)">
        <path d="M80 400 A320 90 0 0 1 720 400" fill="none" stroke={c.rim} strokeWidth={44} />
        <circle cx={400} cy={400} r={210} fill={c.rim} />
        <circle cx={400} cy={392} r={205} fill={c.main} stroke={c.ink} strokeWidth={8} />
        <path d="M215 360 C330 330 470 330 585 360 M205 430 C330 400 470 400 595 430" fill="none" stroke={c.shine} strokeWidth={24} strokeLinecap="round" opacity={0.7} />
        <path d="M80 400 A320 90 0 0 0 720 400" fill="none" stroke={c.shine} strokeWidth={44} />
        <path d="M80 400 A320 90 0 0 0 720 400" fill="none" stroke={c.ink} strokeWidth={8} transform="translate(0 22)" />
      </g>
      <path d="M260 240 C290 210 330 195 370 192" fill="none" stroke={c.shine} strokeWidth={14} strokeLinecap="round" />
    </PropFrame>
  );
};
