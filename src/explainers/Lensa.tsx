import type React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../themes";
import { TOPIC_COLORS } from "../themes/topics";
import type { VideoTopic } from "../videos/_shared/types";

// Lensa bulat yang memperbesar bagian dalam objek. `children` digambar di pusat lensa (koordinat lokal, pusat = 0,0);
// `zoom` memperbesarnya. `source` (opsional) menandai bagian asal di objek utama dengan cincin dan garis putus ke lensa.
export const Lensa: React.FC<{
  readonly x: number;
  readonly y: number;
  readonly size: number;
  readonly children: React.ReactNode;
  readonly label?: string;
  readonly zoom?: number;
  readonly topic?: VideoTopic;
  readonly at?: number;
  readonly source?: { readonly x: number; readonly y: number; readonly r: number };
}> = ({ x, y, size, children, label, zoom = 1.4, topic = "alam", at = 0, source }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = useTheme();
  const c = TOPIC_COLORS[topic];
  const pop = spring({ frame: frame - at, fps, config: { damping: 13, stiffness: 140 } });
  return (
    <>
      {source ? (
        <svg width="100%" height="100%" viewBox="0 0 1080 1920" style={{ position: "absolute", inset: 0, overflow: "visible", opacity: Math.min(1, pop * 1.5) }}>
          <line x1={source.x} y1={source.y} x2={x} y2={y} stroke={c.ink} strokeWidth={8} strokeLinecap="round" strokeDasharray="4 22" />
          <circle cx={source.x} cy={source.y} r={source.r} fill="none" stroke={c.ink} strokeWidth={8} strokeDasharray="14 14" />
        </svg>
      ) : null}
      <div style={{ position: "absolute", left: x - size / 2, top: y - size / 2, width: size, height: size, transform: `scale(${pop})`, opacity: Math.min(1, pop * 1.5) }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: `8px solid ${c.ink}`, backgroundColor: t.colors.surface, boxShadow: t.shadows.md, overflow: "hidden", boxSizing: "border-box" }}>
          <div style={{ position: "absolute", left: "50%", top: "50%", transform: `scale(${zoom})`, transformOrigin: "0 0" }}>{children}</div>
        </div>
        {label ? (
          <div style={{ position: "absolute", left: "50%", top: size - 24, transform: "translateX(-50%)", whiteSpace: "nowrap", backgroundColor: c.main, border: `8px solid ${c.ink}`, borderRadius: 40, padding: "4px 30px", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 44, color: t.colors.surface }}>{label}</div>
        ) : null}
      </div>
    </>
  );
};
