import type React from "react";
import { HIGHLIGHT, TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Bohlam ide. `on` 0..1 menyalakan cahaya dan sinar di sekelilingnya.
export const LightBulb: React.FC<PropProps & { readonly on?: number }> = ({ topic = "alam", on = 1, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  return (
    <PropFrame {...frame}>
      <g opacity={on} stroke={HIGHLIGHT} strokeWidth={14} strokeLinecap="round">
        {[-70, -35, 0, 35, 70].map((a) => (
          <line key={a} x1={400} y1={80} x2={400} y2={20} transform={`rotate(${a} 400 330)`} />
        ))}
      </g>
      <path d="M400 110 C520 110 600 200 600 310 C600 390 550 440 520 500 L280 500 C250 440 200 390 200 310 C200 200 280 110 400 110 Z" fill={on > 0.5 ? HIGHLIGHT : "#FFFFFF"} stroke={c.ink} strokeWidth={8} strokeLinejoin="round" />
      <path d="M320 500 L320 460 L400 400 L480 460 L480 500" fill="none" stroke={c.ink} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />
      <rect x={290} y={500} width={220} height={50} rx={16} fill={c.main} stroke={c.ink} strokeWidth={8} />
      <rect x={320} y={550} width={160} height={50} rx={16} fill={c.rim} stroke={c.ink} strokeWidth={8} />
      <path d="M250 260 C255 215 285 180 325 165" fill="none" stroke="#FFFFFF" strokeWidth={14} strokeLinecap="round" />
    </PropFrame>
  );
};
