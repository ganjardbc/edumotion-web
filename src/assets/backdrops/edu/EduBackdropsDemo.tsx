import type React from "react";
import { AbsoluteFill } from "remotion";
import type { VideoTopic } from "../../../videos/_shared/types";
import { EDU_BACKDROP_KINDS, EduBackdrop } from "./EduBackdrop";

const TOPICS: ReadonlyArray<VideoTopic> = ["tubuh", "cuaca", "planet", "sejarah"];
const SCALE = 0.2;
const COLS = 8;
const ROWS_PER_TOPIC = Math.ceil(EDU_BACKDROP_KINDS.length / COLS);
const GAP = 20;
const PANEL_W = 1080 * SCALE;
const PANEL_H = 1920 * SCALE;

export const EDU_BACKDROPS_DEMO = {
  width: GAP + COLS * (PANEL_W + GAP),
  height: GAP + TOPICS.length * ROWS_PER_TOPIC * (PANEL_H + GAP),
} as const;

// Matriks semua latar edu × topik, untuk membandingkan warna dan komposisi (Still di Studio).
export const EduBackdropsDemo: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#FFFFFF" }}>
    {TOPICS.map((topic, row) =>
      EDU_BACKDROP_KINDS.map((kind, k) => {
        const col = k % COLS;
        const r = row * ROWS_PER_TOPIC + Math.floor(k / COLS);
        return (
        <div key={`${topic}-${kind}`} style={{ position: "absolute", left: GAP + col * (PANEL_W + GAP), top: GAP + r * (PANEL_H + GAP), width: PANEL_W, height: PANEL_H, overflow: "hidden", borderRadius: 12 }}>
          <div style={{ position: "absolute", left: 0, top: 0, width: 1080, height: 1920, transform: `scale(${SCALE})`, transformOrigin: "0 0" }}>
            <EduBackdrop kind={kind} topic={topic} />
          </div>
        </div>
        );
      }),
    )}
  </AbsoluteFill>
);
