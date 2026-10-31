import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Chip prosesor: kotak dengan pin di empat sisi dan inti di tengah. `glow` 0..1 menyalakan inti.
export const Chip: React.FC<PropProps & { readonly glow?: number }> = ({ topic = "teknologi", glow = 0, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const pins = [200, 300, 400, 500, 600];
  return (
    <PropFrame {...frame}>
      <g stroke={c.ink} strokeWidth={20} strokeLinecap="round">
        {pins.map((p) => (
          <g key={p}>
            <line x1={p} y1={90} x2={p} y2={170} />
            <line x1={p} y1={630} x2={p} y2={710} />
            <line x1={90} y1={p} x2={170} y2={p} />
            <line x1={630} y1={p} x2={710} y2={p} />
          </g>
        ))}
      </g>
      <rect x={150} y={160} width={500} height={500} rx={56} fill={c.rim} stroke={c.ink} strokeWidth={8} />
      <rect x={150} y={150} width={500} height={490} rx={56} fill={c.main} stroke={c.ink} strokeWidth={8} />
      <rect x={270} y={270} width={260} height={260} rx={36} fill={glow > 0.5 ? c.shine : "#FFFFFF"} stroke={c.ink} strokeWidth={8} />
      <circle cx={400} cy={400} r={50 + 20 * glow} fill={c.rim} opacity={0.4 + 0.6 * glow} />
    </PropFrame>
  );
};
