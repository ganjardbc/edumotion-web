import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { mixHex } from "../shared";
import { FloorSpot } from "./Floor";
import { eduColors } from "./palette";

const TILE = 110;

// Latar dapur: dinding berubin, lemari gantung di atas (di luar safe zone), meja dengan panci beruap, lantai kotak-kotak.
export const Dapur: React.FC<{ readonly topic: VideoTopic; readonly floorY: number }> = ({ topic, floorY }) => {
  const frame = useCurrentFrame();
  const c = TOPIC_COLORS[topic];
  const e = eduColors(topic);
  const counterTop = floorY - 300;
  const tileLine = mixHex(c.rim, "#FFFFFF", 0.7);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(${e.wallTop}, ${e.wallBottom})` }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 120, height: 150, backgroundColor: e.soft, borderBottom: `6px solid ${e.floorEdge}`, boxSizing: "border-box" }}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} style={{ position: "absolute", left: 30 + i * 260, top: 20, width: 230, height: 110, borderRadius: 18, border: `6px solid ${c.ink}`, backgroundColor: e.wallTop, boxSizing: "border-box" }}>
            <div style={{ position: "absolute", left: 95, bottom: 16, width: 40, height: 10, borderRadius: 5, backgroundColor: c.ink }} />
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: counterTop - 3 * TILE,
          height: 3 * TILE,
          backgroundColor: "rgba(255,255,255,0.55)",
          backgroundImage: `linear-gradient(to right, ${tileLine} 4px, transparent 4px), linear-gradient(to bottom, ${tileLine} 4px, transparent 4px)`,
          backgroundSize: `${TILE}px ${TILE}px`,
        }}
      />
      <div style={{ position: "absolute", left: 0, right: 0, top: counterTop, height: floorY - counterTop, backgroundColor: e.floor, borderTop: `10px solid ${c.ink}`, boxSizing: "border-box" }} />
      <div style={{ position: "absolute", left: 740, top: counterTop - 150, width: 200, height: 150, backgroundColor: c.main, border: `8px solid ${c.ink}`, borderRadius: "16px 16px 40px 40px", boxSizing: "border-box" }} />
      <div style={{ position: "absolute", left: 710, top: counterTop - 128, width: 260, height: 18, borderRadius: 9, backgroundColor: c.rim }} />
      {[0, 1, 2].map((i) => {
        const t = ((frame / 60 + i / 3) % 1);
        return <div key={i} style={{ position: "absolute", left: 800 + i * 36 - t * 10, top: counterTop - 170 - t * 120, width: 30, height: 30, borderRadius: "50%", backgroundColor: "#FFFFFF", opacity: 0.7 * (1 - t) }} />;
      })}
      <div style={{ position: "absolute", left: 0, right: 0, top: floorY, bottom: 0, backgroundColor: e.floor, borderTop: `6px solid ${e.floorEdge}`, boxSizing: "border-box", backgroundImage: `linear-gradient(45deg, ${e.floorEdge} 25%, transparent 25%, transparent 75%, ${e.floorEdge} 75%), linear-gradient(45deg, ${e.floorEdge} 25%, transparent 25%, transparent 75%, ${e.floorEdge} 75%)`, backgroundSize: "120px 120px", backgroundPosition: "0 0, 60px 60px", opacity: 0.95 }} />
      <FloorSpot floorY={floorY} />
    </AbsoluteFill>
  );
};
