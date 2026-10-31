import type React from "react";
import { AbsoluteFill } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { mixHex } from "../shared";
import { FloorSpot } from "./Floor";
import { eduColors } from "./palette";

const BLOCK_W = 180;
const BLOCK_H = 90;

// Latar museum: dinding batu berblok, dua pilar di tepi, bingkai lukisan di atas, lantai marmer kotak-kotak.
export const Museum: React.FC<{ readonly topic: VideoTopic; readonly floorY: number }> = ({ topic, floorY }) => {
  const c = TOPIC_COLORS[topic];
  const e = eduColors(topic);
  const stone = mixHex(c.shine, "#FFFFFF", 0.7);
  const stoneLine = mixHex(c.rim, "#FFFFFF", 0.65);
  const pillar = mixHex(c.shine, "#FFFFFF", 0.35);
  const pillarEdge = mixHex(c.rim, "#FFFFFF", 0.3);
  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: stone,
          backgroundImage: `linear-gradient(to bottom, ${stoneLine} 3px, transparent 3px), linear-gradient(to right, ${stoneLine} 3px, transparent 3px)`,
          backgroundSize: `${BLOCK_W}px ${BLOCK_H}px`,
        }}
      />
      {[90, 810].map((x) => (
        <div key={x} style={{ position: "absolute", left: x, top: 150, width: 180, height: floorY - 150 }}>
          <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 44, backgroundColor: pillarEdge, borderRadius: 10 }} />
          <div style={{ position: "absolute", left: 24, right: 24, top: 44, bottom: 34, backgroundColor: pillar, borderLeft: `8px solid ${pillarEdge}`, borderRight: `8px solid ${pillarEdge}`, boxSizing: "border-box", opacity: 0.55 }} />
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 34, backgroundColor: pillarEdge, borderRadius: 10 }} />
        </div>
      ))}
      <div style={{ position: "absolute", left: 340, top: 40, width: 400, height: 110, border: `12px solid ${c.rim}`, borderRadius: 14, boxSizing: "border-box", backgroundColor: e.soft }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: floorY, bottom: 0, borderTop: `6px solid ${e.floorEdge}`, boxSizing: "border-box", backgroundColor: e.floor, backgroundImage: `conic-gradient(${e.soft} 25%, transparent 0 50%, ${e.soft} 0 75%, transparent 0)`, backgroundSize: "180px 180px" }} />
      <FloorSpot floorY={floorY} />
    </AbsoluteFill>
  );
};
