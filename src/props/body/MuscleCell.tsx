import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Posisi tetap (deterministik) pabrik energi di dalam sel; sel mengambil `count` pertama.
const SLOTS: ReadonlyArray<readonly [number, number, number]> = [
  [190, 330, 0], [330, 290, 20], [470, 340, -15], [610, 300, 10], [240, 470, 15], [400, 470, -10],
  [560, 460, 25], [140, 400, -20], [680, 420, 0], [330, 380, 30], [500, 400, -25], [620, 380, 15],
];

// Sel otot memanjang berisi `count` mitokondria kecil; `reveal` 0..1 memunculkan satu per satu.
export const MuscleCell: React.FC<PropProps & { readonly count: number; readonly reveal?: number }> = ({ topic = "tubuh", count, reveal = 1, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const shown = Math.round(count * Math.min(1, Math.max(0, reveal)));
  return (
    <PropFrame {...frame}>
      <rect x={20} y={200} width={760} height={400} rx={200} fill={c.rim} />
      <rect x={20} y={190} width={760} height={400} rx={200} fill={c.shine} stroke={c.ink} strokeWidth={8} />
      <circle cx={400} cy={390} r={44} fill={c.rim} opacity={0.35} />
      {SLOTS.slice(0, shown).map(([sx, sy, rot], i) => (
        <g key={i} transform={`translate(${sx - 400 * 0.22} ${sy - 400 * 0.22}) scale(0.22)`}>
          <g transform={`rotate(${rot} 400 400)`}>
            <rect x={110} y={260} width={580} height={280} rx={140} fill={c.main} stroke={c.ink} strokeWidth={26} />
            <path d="M230 300 C260 380 230 420 270 490 M390 290 C420 360 390 430 430 500 M550 300 C580 370 550 420 590 480" fill="none" stroke={c.rim} strokeWidth={40} strokeLinecap="round" />
          </g>
        </g>
      ))}
    </PropFrame>
  );
};
