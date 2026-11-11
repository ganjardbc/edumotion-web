import type React from "react";
import { HIGHLIGHT, TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Jalur cahaya Matahari menembus lapisan udara sampai ke pengamat di tanah.
// `waktu` "siang": Matahari di atas, jalur di dalam udara pendek. "senja": Matahari di cakrawala, jalur panjang mendatar.
// `progress` 0..1 menggambar sinar dari Matahari ke pengamat. Lapisan udara = pita putih transparan di atas tanah.
const GROUND = 640;
const AIR_TOP = 380;
const EYE = { x: 560, y: GROUND - 46 };

export const JalurCahaya: React.FC<PropProps & { readonly waktu?: "siang" | "senja"; readonly progress?: number }> = ({ topic = "cuaca", waktu = "siang", progress = 1, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const sky = waktu === "siang" ? TOPIC_COLORS.planet.main : TOPIC_COLORS.ai.main;
  const sun = waktu === "siang" ? { x: EYE.x, y: 150 } : { x: 120, y: EYE.y };
  const end = { x: sun.x + (EYE.x - sun.x) * progress, y: sun.y + (EYE.y - sun.y) * progress };
  return (
    <PropFrame {...frame}>
      <rect x={40} y={40} width={720} height={720} rx={56} fill={sky} stroke={c.ink} strokeWidth={8} />
      {/* lapisan udara */}
      <rect x={44} y={AIR_TOP} width={712} height={GROUND - AIR_TOP} fill="#FFFFFF" opacity={0.35} />
      <line x1={44} y1={AIR_TOP} x2={756} y2={AIR_TOP} stroke="#FFFFFF" strokeWidth={8} strokeDasharray="4 22" strokeLinecap="round" />
      {/* tanah */}
      <path d={`M44 ${GROUND} H756 V704 Q756 756 704 756 H96 Q44 756 44 704 Z`} fill={c.ink} />
      {/* sinar */}
      <line x1={sun.x} y1={sun.y} x2={end.x} y2={end.y} stroke={c.ink} strokeWidth={34} strokeLinecap="round" />
      <line x1={sun.x} y1={sun.y} x2={end.x} y2={end.y} stroke={HIGHLIGHT} strokeWidth={18} strokeLinecap="round" />
      {/* Matahari */}
      <circle cx={sun.x} cy={sun.y} r={62} fill={HIGHLIGHT} stroke={c.ink} strokeWidth={8} />
      <path d={`M${sun.x - 30} ${sun.y - 22} q14 -16 34 -14`} fill="none" stroke="#FFFFFF" strokeWidth={14} strokeLinecap="round" />
      {/* pengamat (mata) */}
      <ellipse cx={EYE.x} cy={EYE.y} rx={54} ry={34} fill="#FFFFFF" stroke={c.ink} strokeWidth={8} />
      <circle cx={EYE.x} cy={EYE.y} r={18} fill={c.ink} />
    </PropFrame>
  );
};
