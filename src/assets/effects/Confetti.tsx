import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { HIGHLIGHT, TOPIC_COLORS } from "../../themes/topics";
import type { VideoTopic } from "../../videos/_shared/types";
import { seeded } from "./seed";

// Hujan konfeti dari atas. Posisi dan warna ditentukan seed, jadi sama di setiap render.
export const Confetti: React.FC<{ readonly topic?: VideoTopic; readonly count?: number; readonly seed?: number; readonly speed?: number }> = ({ topic = "alam", count = 40, seed = 7, speed = 1 }) => {
  const frame = useCurrentFrame();
  const c = TOPIC_COLORS[topic];
  const colors = [c.main, c.rim, c.shine, HIGHLIGHT];
  const rnd = seeded(seed);
  return (
    <AbsoluteFill style={{ pointerEvents: "none", overflow: "hidden" }}>
      {Array.from({ length: count }, (_, i) => {
        const x = rnd() * 1080;
        const delay = rnd() * 40;
        const fall = 0.8 + rnd() * 0.8;
        const sway = 20 + rnd() * 40;
        const spin = 4 + rnd() * 10;
        const w = 18 + rnd() * 16;
        const color = colors[Math.floor(rnd() * colors.length)];
        const t = Math.max(0, frame - delay);
        const y = -60 + t * 14 * fall * speed;
        return <div key={i} style={{ position: "absolute", left: x + Math.sin(t / 12 + i) * sway, top: y, width: w, height: w * 0.55, backgroundColor: color, borderRadius: 4, transform: `rotate(${t * spin}deg)`, opacity: y < 2000 ? 1 : 0 }} />;
      })}
    </AbsoluteFill>
  );
};
