import type React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../themes";
import { TOPIC_COLORS } from "../themes/topics";
import type { VideoTopic } from "../videos/_shared/types";

// Penanda "fakta 2 dari 3": deretan titik, titik aktif membesar. `current` mulai dari 1.
// Berubah `current` antar Sequence menghasilkan pop pada titik yang baru aktif.
export const ProgressDots: React.FC<{ readonly top: number; readonly total: number; readonly current: number; readonly label?: string; readonly topic?: VideoTopic }> = ({ top, total, current, label, topic = "alam" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = useTheme();
  const c = TOPIC_COLORS[topic];
  const pop = spring({ frame, fps, config: { damping: 11, stiffness: 170 } });
  return (
    <div style={{ position: "absolute", left: 64, right: 160, top, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
      {label ? <div style={{ fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 44, color: c.ink }}>{label}</div> : null}
      <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
        {Array.from({ length: total }, (_, i) => {
          const n = i + 1;
          const active = n === current;
          const size = active ? 44 * (0.6 + 0.4 * pop) : 28;
          return <div key={n} style={{ width: size, height: size, borderRadius: "50%", backgroundColor: n <= current ? c.main : t.colors.surface, border: `8px solid ${c.ink}`, boxSizing: "border-box" }} />;
        })}
      </div>
    </div>
  );
};
