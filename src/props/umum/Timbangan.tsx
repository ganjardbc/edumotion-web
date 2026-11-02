import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Timbangan dengan piringan bulat dan jarum. `level` 0..1 memutar jarum dari kiri (ringan) ke kanan (berat).
export const Timbangan: React.FC<PropProps & { readonly level?: number }> = ({ topic = "teknologi", level = 0, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const angle = -120 + 240 * Math.min(1, Math.max(0, level));
  return (
    <PropFrame {...frame}>
      <rect x={120} y={570} width={560} height={150} rx={50} fill={c.rim} stroke={c.ink} strokeWidth={8} />
      <rect x={120} y={540} width={560} height={150} rx={50} fill={c.main} stroke={c.ink} strokeWidth={8} />
      <rect x={200} y={470} width={400} height={50} rx={25} fill={c.shine} stroke={c.ink} strokeWidth={8} />
      <circle cx={400} cy={290} r={190} fill={c.rim} stroke={c.ink} strokeWidth={8} transform="translate(0 12)" />
      <circle cx={400} cy={290} r={190} fill="#FFFFFF" stroke={c.ink} strokeWidth={8} />
      {[-120, -60, 0, 60, 120].map((a) => (
        <line key={a} x1={400} y1={130} x2={400} y2={165} stroke={c.ink} strokeWidth={8} strokeLinecap="round" transform={`rotate(${a} 400 290)`} />
      ))}
      <g transform={`rotate(${angle} 400 290)`}>
        <path d="M400 290 L400 150" stroke={c.ink} strokeWidth={20} strokeLinecap="round" />
      </g>
      <circle cx={400} cy={290} r={26} fill={c.main} stroke={c.ink} strokeWidth={8} />
      <path d="M270 230 C285 180 330 150 380 145" fill="none" stroke={c.shine} strokeWidth={14} strokeLinecap="round" />
    </PropFrame>
  );
};
