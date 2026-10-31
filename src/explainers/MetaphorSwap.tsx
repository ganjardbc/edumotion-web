import type React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../themes";
import { TOPIC_COLORS } from "../themes/topics";
import type { VideoTopic } from "../videos/_shared/types";

// Payoff "oh iya ya!": objek asli berubah menjadi analoginya (jantung jadi pompa).
// `from` dan `to` digambar di pusat (x, y); label berganti bersamaan. Pasang di dalam Sequence; `swapAt` dalam frame relatif.
export const MetaphorSwap: React.FC<{
  readonly x: number;
  readonly y: number;
  readonly from: React.ReactNode;
  readonly to: React.ReactNode;
  readonly fromLabel: string;
  readonly toLabel: string;
  readonly topic?: VideoTopic;
  readonly swapAt?: number;
}> = ({ x, y, from, to, fromLabel, toLabel, topic = "alam", swapAt = 30 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = useTheme();
  const c = TOPIC_COLORS[topic];
  const p = spring({ frame: frame - swapAt, fps, config: { damping: 11, stiffness: 150 } });
  const done = frame >= swapAt;
  const layer = (opacity: number, scale: number, rotate: number): React.CSSProperties => ({ position: "absolute", left: 0, top: 0, transform: `scale(${scale}) rotate(${rotate}deg)`, opacity });
  return (
    <div style={{ position: "absolute", left: x, top: y, width: 0, height: 0 }}>
      <div style={layer(Math.max(0, 1 - p * 2), 1 - 0.3 * Math.min(1, p), -12 * Math.min(1, p))}>{from}</div>
      <div style={layer(Math.min(1, p * 2), 0.7 + 0.3 * p, 12 * (1 - Math.min(1, p)))}>{to}</div>
      <div style={{ position: "absolute", left: 0, top: 300, transform: "translateX(-50%)", whiteSpace: "nowrap", backgroundColor: done ? c.main : t.colors.surface, border: `8px solid ${c.ink}`, borderRadius: 44, padding: "6px 36px", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 56, color: done ? t.colors.surface : c.ink }}>
        {done ? toLabel : fromLabel}
      </div>
    </div>
  );
};
