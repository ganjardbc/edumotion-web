import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { TOPIC_COLORS } from "../../themes/topics";
import type { VideoTopic } from "../../videos/_shared/types";
import { seeded } from "./seed";

// Gelembung naik pelan sambil bergoyang, untuk latar air atau suasana ringan.
export const Bubbles: React.FC<{ readonly topic?: VideoTopic; readonly count?: number; readonly seed?: number }> = ({ topic = "air", count = 16, seed = 11 }) => {
  const frame = useCurrentFrame();
  const c = TOPIC_COLORS[topic];
  const rnd = seeded(seed);
  return (
    <AbsoluteFill style={{ pointerEvents: "none", overflow: "hidden" }}>
      {Array.from({ length: count }, (_, i) => {
        const x = rnd() * 1000 + 40;
        const r = 16 + rnd() * 34;
        const speed = 1.5 + rnd() * 2.5;
        const offset = rnd() * 2200;
        const y = 1960 - ((offset + frame * speed) % 2200);
        return <div key={i} style={{ position: "absolute", left: x + Math.sin(frame / 25 + i) * 18 - r, top: y, width: r * 2, height: r * 2, borderRadius: "50%", border: `6px solid ${c.main}`, backgroundColor: c.shine, opacity: 0.45, boxSizing: "border-box" }} />;
      })}
    </AbsoluteFill>
  );
};
