import type React from "react";
import { useTheme } from "../../themes";
import { HIGHLIGHT, TOPIC_COLORS } from "../../themes/topics";
import { mixHex } from "../../assets/backdrops";
import type { VideoTopic } from "../../videos/_shared/types";

// Kartu dasar pola: putih, garis tinta topik 8 px, sudut 28. `sorot` memberi latar stabilo pucat (satu per scene).
export const Kartu: React.FC<{ readonly left: number; readonly top: number; readonly width: number; readonly height: number; readonly topic: VideoTopic; readonly sorot?: boolean; readonly children?: React.ReactNode }> = ({ left, top, width, height, topic, sorot = false, children }) => {
  const t = useTheme();
  const c = TOPIC_COLORS[topic];
  return (
    <div style={{ position: "absolute", left, top, width, height, boxSizing: "border-box", backgroundColor: sorot ? mixHex(HIGHLIGHT, "#FFFFFF", 0.55) : t.colors.surface, border: `8px solid ${c.ink}`, borderRadius: t.radius.card, boxShadow: t.shadows.md }}>
      {children}
    </div>
  );
};
