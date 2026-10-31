import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Satu denyut EKG berulang. `progress` 0..1 menggambar garis dari kiri ke kanan.
const BEAT = "M0 0 L60 0 L80 -30 L100 0 L130 0 L150 40 L180 -170 L210 90 L235 0 L290 0 L320 -45 L360 0 L400 0";
const PATH = `M0 400 ${[0, 1].map((i) => BEAT.replace(/M0 0 /, "").replace(/L(-?\d+) (-?\d+)/g, (_, px, py) => `L${Number(px) + i * 400} ${400 + Number(py)}`)).join(" ")}`;

export const EkgLine: React.FC<PropProps & { readonly progress?: number }> = ({ topic = "tubuh", progress = 1, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const LENGTH = 1900;
  return (
    <PropFrame {...frame}>
      <rect x={0} y={170} width={800} height={460} rx={44} fill="#FFFFFF" stroke={c.ink} strokeWidth={8} />
      <path d={PATH} fill="none" stroke={c.main} strokeWidth={14} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={LENGTH} strokeDashoffset={LENGTH * (1 - progress)} />
      <circle cx={Math.min(800, progress * 800)} cy={400} r={16} fill={c.rim} opacity={progress < 1 ? 1 : 0} />
    </PropFrame>
  );
};
