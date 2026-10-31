import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { TOPIC_COLORS } from "../../themes/topics";
import type { VideoTopic } from "../../videos/_shared/types";
import { seeded } from "./seed";

// Garis kecepatan memanjang di seluruh layar. `direction` "vertikal" untuk jatuh atau naik, "horizontal" untuk melesat.
export const SpeedLines: React.FC<{ readonly topic?: VideoTopic; readonly direction?: "vertikal" | "horizontal"; readonly count?: number; readonly seed?: number }> = ({ topic = "alam", direction = "vertikal", count = 18, seed = 3 }) => {
  const frame = useCurrentFrame();
  const c = TOPIC_COLORS[topic];
  const rnd = seeded(seed);
  const vertical = direction === "vertikal";
  const span = vertical ? 1920 : 1080;
  return (
    <AbsoluteFill style={{ pointerEvents: "none", overflow: "hidden" }}>
      {Array.from({ length: count }, (_, i) => {
        const lane = rnd() * (vertical ? 1080 : 1920);
        const len = 260 + rnd() * 380;
        const speed = 40 + rnd() * 40;
        const offset = rnd() * span;
        const pos = (((offset + frame * speed) % (span + len * 2)) + (span + len * 2)) % (span + len * 2) - len;
        const style: React.CSSProperties = vertical
          ? { left: lane, top: pos, width: 8, height: len }
          : { left: pos, top: lane, width: len, height: 8 };
        return <div key={i} style={{ position: "absolute", ...style, borderRadius: 4, backgroundColor: i % 2 ? c.shine : c.main, opacity: 0.7 }} />;
      })}
    </AbsoluteFill>
  );
};
