import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { mixHex } from "../shared";
import { eduColors } from "./palette";
import { FloorSpot, FloorStrip } from "./Floor";

const GRID = 72;

// Latar penjelasan: kertas berpetak halus yang bergeser sangat pelan, berbingkai papan. Netral supaya label dan grafik terbaca.
export const PapanDiagram: React.FC<{ readonly topic: VideoTopic; readonly floorY: number }> = ({ topic, floorY }) => {
  const frame = useCurrentFrame();
  const e = eduColors(topic);
  const shift = (frame * 0.25) % GRID;
  const line = `${e.line} 3px`;
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", inset: 0, backgroundColor: mixHex(TOPIC_COLORS[topic].shine, "#FFFFFF", 0.88) }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(to right, ${line}, transparent 3px), linear-gradient(to bottom, ${line}, transparent 3px)`,
          backgroundSize: `${GRID}px ${GRID}px`,
          backgroundPosition: `${-shift}px ${-shift}px`,
        }}
      />
      <FloorStrip floorY={floorY} color={e.floor} edge={e.floorEdge} />
      <FloorSpot floorY={floorY} />
      <div style={{ position: "absolute", inset: 24, border: `10px solid ${e.floorEdge}`, borderRadius: 36, boxSizing: "border-box" }} />
    </AbsoluteFill>
  );
};
