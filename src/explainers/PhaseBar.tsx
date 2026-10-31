import type React from "react";
import { TOPIC_COLORS } from "../themes/topics";
import { useTheme } from "../themes";
import type { VideoTopic } from "../videos/_shared/types";

// Satu siklus dibagi dua fase (mis. kerja dan istirahat). `progress` 0..1 menggerakkan penanda; `split` = porsi fase pertama.
export const PhaseBar: React.FC<{
  readonly top: number;
  readonly progress: number;
  readonly split?: number;
  readonly labels: readonly [string, string];
  readonly topic?: VideoTopic;
  readonly left?: number;
  readonly width?: number;
}> = ({ top, progress, split = 0.35, labels, topic = "tubuh", left = 64, width = 856 }) => {
  const t = useTheme();
  const c = TOPIC_COLORS[topic];
  const firstW = width * split;
  const label = { fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 44, color: t.colors.ink } as const;
  return (
    <div style={{ position: "absolute", left, top, width }}>
      <div style={{ display: "flex", height: 84, borderRadius: 42, overflow: "hidden", border: `8px solid ${c.ink}`, boxSizing: "border-box", backgroundColor: "#FFFFFF" }}>
        <div style={{ width: firstW, backgroundColor: c.main }} />
        <div style={{ flex: 1, backgroundColor: c.shine }} />
      </div>
      <div style={{ position: "absolute", left: Math.min(1, Math.max(0, progress)) * width - 10, top: -12, width: 20, height: 108, borderRadius: 10, backgroundColor: c.ink }} />
      <div style={{ display: "flex", marginTop: 16 }}>
        <div style={{ ...label, width: firstW }}>{labels[0]}</div>
        <div style={{ ...label, flex: 1 }}>{labels[1]}</div>
      </div>
    </div>
  );
};
