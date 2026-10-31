import type React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TOPIC_COLORS } from "../../themes/topics";
import type { VideoTopic } from "../../videos/_shared/types";

// Ledakan kecil "pop": cincin dan garis memancar dari (x, y) lalu memudar. Pasang di Sequence pada saat kejutan.
export const PopBurst: React.FC<{ readonly x: number; readonly y: number; readonly size?: number; readonly topic?: VideoTopic; readonly rays?: number }> = ({ x, y, size = 360, topic = "alam", rays = 10 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const c = TOPIC_COLORS[topic];
  const p = spring({ frame, fps, config: { damping: 18, stiffness: 120 }, durationInFrames: 18 });
  const fade = Math.max(0, 1 - frame / 18);
  return (
    <svg viewBox="-200 -200 400 400" width={size} height={size} style={{ position: "absolute", left: x - size / 2, top: y - size / 2, overflow: "visible", pointerEvents: "none", opacity: fade }}>
      <circle r={40 + 120 * p} fill="none" stroke={c.main} strokeWidth={16 * (1 - p) + 4} />
      {Array.from({ length: rays }, (_, i) => (
        <line key={i} x1={0} y1={-(70 + 60 * p)} x2={0} y2={-(110 + 80 * p)} stroke={i % 2 ? c.rim : c.ink} strokeWidth={14} strokeLinecap="round" transform={`rotate(${(i * 360) / rays} 0 0)`} />
      ))}
    </svg>
  );
};
