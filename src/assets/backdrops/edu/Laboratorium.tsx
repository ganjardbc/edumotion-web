import type React from "react";
import { AbsoluteFill } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { mixHex } from "../shared";
import { FloorSpot } from "./Floor";
import { eduColors } from "./palette";

const TILE = 120;

// Labu dan tabung di rak atas: [x, jenis, tinggi]. Cairan memakai warna topik.
const GLASS: ReadonlyArray<readonly [number, "labu" | "tabung", number]> = [
  [110, "labu", 100], [260, "tabung", 120], [420, "labu", 84], [650, "tabung", 110], [800, "labu", 104], [950, "tabung", 90],
];

// Latar laboratorium: dinding berubin di bawah, rak kaca di atas (di luar safe zone), meja lab di lantai.
export const Laboratorium: React.FC<{ readonly topic: VideoTopic; readonly floorY: number }> = ({ topic, floorY }) => {
  const c = TOPIC_COLORS[topic];
  const e = eduColors(topic);
  const tileLine = mixHex(c.rim, "#FFFFFF", 0.7);
  const shelfY = 190;
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(${e.wallTop}, ${e.wallBottom})` }} />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: floorY - 5 * TILE,
          height: 5 * TILE,
          backgroundColor: "rgba(255,255,255,0.55)",
          backgroundImage: `linear-gradient(to right, ${tileLine} 4px, transparent 4px), linear-gradient(to bottom, ${tileLine} 4px, transparent 4px)`,
          backgroundSize: `${TILE}px ${TILE}px`,
        }}
      />
      <div style={{ position: "absolute", left: 40, right: 40, top: shelfY, height: 20, backgroundColor: mixHex(c.ink, "#FFFFFF", 0.35), borderRadius: 10 }} />
      {GLASS.map(([x, kind, h]) => {
        const w = kind === "labu" ? 80 : 40;
        return (
          <div key={x} style={{ position: "absolute", left: x - w / 2, top: shelfY - h, width: w, height: h, border: `6px solid ${c.ink}`, boxSizing: "border-box", borderRadius: kind === "labu" ? "40% 40% 50% 50%" : "8px 8px 20px 20px", overflow: "hidden", backgroundColor: "rgba(255,255,255,0.7)" }}>
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "58%", backgroundColor: kind === "labu" ? c.main : c.shine }} />
          </div>
        );
      })}
      <div style={{ position: "absolute", left: 0, right: 0, top: floorY, bottom: 0, backgroundColor: e.floor, borderTop: `6px solid ${e.floorEdge}`, boxSizing: "border-box", backgroundImage: `linear-gradient(to right, ${e.floorEdge} 4px, transparent 4px)`, backgroundSize: `${TILE * 1.5}px 100%` }} />
      <FloorSpot floorY={floorY} />
    </AbsoluteFill>
  );
};
