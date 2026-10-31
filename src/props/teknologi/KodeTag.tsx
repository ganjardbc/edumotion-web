import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Lambang kode </> di dalam papan bulat. `progress` 0..1 menggambar tiga bagiannya berurutan.
export const KodeTag: React.FC<PropProps & { readonly progress?: number }> = ({ topic = "teknologi", progress = 1, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const part = (from: number, d: string, len: number) => <path d={d} fill="none" stroke="#FFFFFF" strokeWidth={48} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={len} strokeDashoffset={len * (1 - Math.min(1, Math.max(0, (progress - from) * 3)))} />;
  return (
    <PropFrame {...frame}>
      <rect x={70} y={110} width={660} height={580} rx={100} fill={c.rim} stroke={c.ink} strokeWidth={8} />
      <rect x={70} y={96} width={660} height={580} rx={100} fill={c.main} stroke={c.ink} strokeWidth={8} />
      {part(0, "M290 270 L170 386 L290 502", 330)}
      {part(0.33, "M450 230 L350 540", 330)}
      {part(0.66, "M510 270 L630 386 L510 502", 330)}
      <path d="M150 190 C180 150 230 135 280 132" fill="none" stroke={c.shine} strokeWidth={14} strokeLinecap="round" />
    </PropFrame>
  );
};
