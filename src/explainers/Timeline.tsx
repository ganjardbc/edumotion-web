import type React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../themes";
import { TOPIC_COLORS } from "../themes/topics";
import type { VideoTopic } from "../videos/_shared/types";

export type TimelineEvent = { readonly year: string; readonly label: string };

// Garis waktu mendatar: garis tumbuh dari kiri, tiap peristiwa muncul saat garis mencapainya.
// Label bergantian di atas dan di bawah garis agar tidak bertabrakan. Cocok untuk 2 sampai 4 peristiwa.
export const Timeline: React.FC<{
  readonly top: number;
  readonly events: ReadonlyArray<TimelineEvent>;
  readonly topic?: VideoTopic;
  readonly frames?: number;
  readonly left?: number;
  readonly width?: number;
}> = ({ top, events, topic = "sejarah", frames = 60, left = 64, width = 856 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = useTheme();
  const c = TOPIC_COLORS[topic];
  const n = events.length;
  const inset = 120;
  const span = width - inset * 2;
  const grow = interpolate(frame, [0, frames], [0, 1], { extrapolateRight: "clamp" });
  const xAt = (i: number): number => inset + (n === 1 ? span / 2 : (span * i) / (n - 1));
  return (
    <div style={{ position: "absolute", left, top, width, height: 360 }}>
      <div style={{ position: "absolute", left: inset - 40, top: 176, width: (span + 80) * grow, height: 8, borderRadius: 4, backgroundColor: c.ink }} />
      {events.map((e, i) => {
        const x = xAt(i);
        const reached = (x - (inset - 40)) / (span + 80);
        const start = reached * frames;
        const pop = spring({ frame: frame - start, fps, config: { damping: 12, stiffness: 160 } });
        const above = i % 2 === 0;
        return (
          <div key={e.year + e.label} style={{ opacity: Math.min(1, pop * 1.5) }}>
            <div style={{ position: "absolute", left: x - 24, top: 156, width: 48, height: 48, borderRadius: "50%", backgroundColor: c.main, border: `8px solid ${c.ink}`, boxSizing: "border-box", transform: `scale(${pop})` }} />
            <div style={{ position: "absolute", left: x - 140, width: 280, textAlign: "center", ...(above ? { bottom: 224 } : { top: 224 }), transform: `translateY(${(1 - pop) * (above ? 16 : -16)}px)` }}>
              <div style={{ fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 56, lineHeight: 1.1, color: c.ink }}>{e.year}</div>
              <div style={{ fontFamily: t.fonts.heading, fontWeight: 700, fontSize: 38, lineHeight: 1.15, color: t.colors.muted }}>{e.label}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
