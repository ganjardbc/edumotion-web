import type React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../themes";
import { TOPIC_COLORS } from "../themes/topics";
import type { VideoTopic } from "../videos/_shared/types";

type Point = { readonly x: number; readonly y: number };

// Penanda yang menunjuk satu bagian objek: titik di `target`, garis menuju label di `label` (pusat label).
// Garis tumbuh mulai frame `at`, label muncul setelahnya. Satu callout per bagian; jangan menumpuk banyak.
export const Callout: React.FC<{ readonly target: Point; readonly label: Point; readonly text: string; readonly topic?: VideoTopic; readonly at?: number }> = ({ target, label, text, topic = "alam", at = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = useTheme();
  const c = TOPIC_COLORS[topic];
  const grow = interpolate(frame, [at, at + 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pop = spring({ frame: frame - (at + 8), fps, config: { damping: 12, stiffness: 160 } });
  const pulse = 1 + 0.25 * Math.sin(((frame - at) / fps) * Math.PI * 3);
  const end = { x: target.x + (label.x - target.x) * grow, y: target.y + (label.y - target.y) * grow };
  return (
    <>
      <svg width="100%" height="100%" viewBox="0 0 1080 1920" style={{ position: "absolute", inset: 0, overflow: "visible" }}>
        <line x1={target.x} y1={target.y} x2={end.x} y2={end.y} stroke={c.ink} strokeWidth={8} strokeLinecap="round" />
        <circle cx={target.x} cy={target.y} r={26 * pulse} fill="none" stroke={c.main} strokeWidth={8} opacity={grow} />
        <circle cx={target.x} cy={target.y} r={12 * grow} fill={c.ink} />
      </svg>
      <div style={{ position: "absolute", left: label.x, top: label.y, transform: `translate(-50%, -50%) scale(${0.6 + 0.4 * pop})`, opacity: Math.min(1, pop * 1.5), whiteSpace: "nowrap", backgroundColor: t.colors.surface, border: `8px solid ${c.ink}`, borderRadius: t.radius.card, padding: "10px 32px", boxShadow: t.shadows.md, fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 48, color: c.ink }}>
        {text}
      </div>
    </>
  );
};
