import type React from "react";
import { AbsoluteFill } from "remotion";
import { useTheme } from "../themes";
import { HIGHLIGHT, TOPIC_COLORS } from "../themes/topics";
import type { VideoTopic } from "../videos/_shared/types";

// Kartu sampul 9:16: hook maksimal 6 kata, satu kata disorot, karakter di bawah (children), warna topik.
// Isi tetap di dalam safe zone supaya tidak tertutup antarmuka platform (atas 220, bawah 480, kiri 64, kanan 160).
export const ThumbnailCard: React.FC<{
  readonly hook: string;
  readonly highlight?: string;
  readonly topic?: VideoTopic;
  readonly badge?: string;
  readonly children?: React.ReactNode;
}> = ({ hook, highlight, topic = "alam", badge, children }) => {
  const t = useTheme();
  const c = TOPIC_COLORS[topic];
  const words = hook.split(" ");
  return (
    <AbsoluteFill style={{ backgroundColor: c.shine }}>
      <div style={{ position: "absolute", left: -260, top: 900, width: 1600, height: 1600, borderRadius: "50%", backgroundColor: c.main, opacity: 0.55 }} />
      {badge ? (
        <div style={{ position: "absolute", left: 64, top: 240, fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 48, color: t.colors.surface, backgroundColor: c.ink, borderRadius: 40, padding: "6px 32px" }}>{badge}</div>
      ) : null}
      <div style={{ position: "absolute", left: 64, right: 160, top: 330, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 124, lineHeight: 1.12, color: c.ink, textWrap: "balance" }}>
        {words.map((w, i) => {
          const on = highlight !== undefined && w.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase() === highlight.toLowerCase();
          return (
            <span key={i}>
              {i > 0 ? " " : null}
              <span style={on ? { backgroundColor: HIGHLIGHT, borderRadius: 28, padding: "0 20px" } : undefined}>{w}</span>
            </span>
          );
        })}
      </div>
      <div style={{ position: "absolute", left: 64, right: 160, top: 960, bottom: 480 }}>{children}</div>
    </AbsoluteFill>
  );
};
