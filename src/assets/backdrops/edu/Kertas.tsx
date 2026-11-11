import type React from "react";
import { AbsoluteFill } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { mixHex } from "../shared";

const GRID = 72;
// Batas bawah petak: di bawahnya (zona caption) kertas polos supaya caption tetap paling mudah dibaca.
const GRID_END = 1260;

// Latar format stickman: kertas putih hangat dengan petak sangat tipis berwarna tinta topik. Tanpa lantai, tanpa dekor,
// tanpa gerak (KISS). Pembawa (stickman) menggambar bayangan kakinya sendiri.
export const Kertas: React.FC<{ readonly topic: VideoTopic }> = ({ topic }) => {
  const c = TOPIC_COLORS[topic];
  const paper = mixHex(c.shine, "#FFFDF8", 0.9);
  const line = mixHex(c.ink, paper, 0.86);
  return (
    <AbsoluteFill style={{ backgroundColor: paper }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: GRID_END,
          backgroundImage: `linear-gradient(to right, ${line} 2px, transparent 2px), linear-gradient(to bottom, ${line} 2px, transparent 2px)`,
          backgroundSize: `${GRID}px ${GRID}px`,
          backgroundPosition: `${(1080 % GRID) / 2}px 0`,
          WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
