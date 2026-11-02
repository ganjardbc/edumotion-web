import type React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../themes";
import { TOPIC_COLORS } from "../themes/topics";
import type { VideoTopic } from "../videos/_shared/types";

// Label kecil yang menempel pada objek di dunia scene (pengganti kartu besar yang menutupi latar).
// (x, y) = pusat label; muncul pop mulai frame `at`. `number` menambah lingkaran nomor langkah di kiri.
export const LabelPill: React.FC<{ readonly x: number; readonly y: number; readonly text: string; readonly topic?: VideoTopic; readonly at?: number; readonly number?: number; readonly size?: number }> = ({ x, y, text, topic = "alam", at = 0, number, size = 40 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = useTheme();
  const c = TOPIC_COLORS[topic];
  const pop = spring({ frame: frame - at, fps, config: { damping: 12, stiffness: 160 } });
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${0.6 + 0.4 * pop})`, opacity: Math.min(1, pop * 1.5), whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 12, backgroundColor: t.colors.surface, border: `6px solid ${c.ink}`, borderRadius: 60, padding: "6px 26px 6px 12px", boxShadow: t.shadows.md, fontFamily: t.fonts.heading, fontWeight: 800, fontSize: size, color: c.ink, paddingLeft: number === undefined ? 26 : 12 }}>
      {number === undefined ? null : <span style={{ width: size + 8, height: size + 8, borderRadius: "50%", backgroundColor: c.ink, color: t.colors.surface, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{number}</span>}
      {text}
    </div>
  );
};
