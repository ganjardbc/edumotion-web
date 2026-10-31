import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { mixHex, type TimeOfDay } from "../shared";
import { FloorSpot } from "./Floor";
import { gradeGround, SkyLayer, timeValue } from "./SkyLayer";

// Pohon: [x, tinggi, fase]. Tajuk bulat bergoyang pelan dari frame.
const TREES: ReadonlyArray<readonly [number, number, number]> = [[110, 260, 0], [900, 320, 1.7], [260, 190, 3.1], [760, 200, 4.4]];

// Latar alam: langit, tiga lapis bukit, pohon bulat bergoyang, padang rumput di lantai.
export const Alam: React.FC<{ readonly topic: VideoTopic; readonly floorY: number; readonly time: TimeOfDay | number }> = ({ topic, floorY, time }) => {
  const frame = useCurrentFrame();
  const c = TOPIC_COLORS[topic];
  const night = Math.max(0, (timeValue(time) - 0.5) * 2);
  const g = (hex: string): string => gradeGround(hex, time);
  const hill3 = g(mixHex(c.shine, "#9ADB86", 0.85));
  const hill2 = g(mixHex(c.main, "#6CC27A", 0.85));
  const grass = g(mixHex(c.rim, "#3FA352", 0.85));
  const leaf = g(mixHex(c.main, "#46B25A", 0.85));
  const trunk = g("#9A6B45");
  return (
    <AbsoluteFill>
      <SkyLayer time={time} />
      <div style={{ position: "absolute", left: -240, top: floorY - 330, width: 1100, height: 600, borderRadius: "50%", backgroundColor: hill3 }} />
      <div style={{ position: "absolute", left: 300, top: floorY - 260, width: 1100, height: 520, borderRadius: "50%", backgroundColor: hill2 }} />
      {TREES.map(([x, h, phase]) => {
        const sway = 3 * Math.sin(frame / 60 + phase);
        return (
          <div key={x} style={{ position: "absolute", left: x - 60, top: floorY - h, width: 120, height: h }}>
            <div style={{ position: "absolute", left: 48, bottom: 0, width: 24, height: h * 0.45, backgroundColor: trunk, borderRadius: 8 }} />
            <div style={{ position: "absolute", left: -20 + sway, top: 0, width: 160, height: h * 0.7, borderRadius: "50%", backgroundColor: leaf }} />
          </div>
        );
      })}
      <div style={{ position: "absolute", left: 0, right: 0, top: floorY, bottom: 0, backgroundColor: grass, borderTop: `6px solid ${g(c.rim)}`, boxSizing: "border-box" }} />
      <FloorSpot floorY={floorY} opacity={0.3 * (1 - night)} />
    </AbsoluteFill>
  );
};
