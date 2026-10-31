import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { mixHex, type TimeOfDay } from "../shared";
import { FloorSpot } from "./Floor";
import { gradeGround, SkyLayer } from "./SkyLayer";

// Gedung jauh: [x, lebar, tinggi].
const BUILDINGS: ReadonlyArray<readonly [number, number, number]> = [
  [0, 190, 520], [170, 150, 380], [310, 210, 600], [500, 160, 440], [640, 200, 540], [820, 140, 360], [940, 180, 480],
];

// Latar jalan raya: langit, deretan gedung berjendela, jalan beraspal dengan marka yang bergeser, trotoar sebagai lantai.
export const JalanRaya: React.FC<{ readonly topic: VideoTopic; readonly floorY: number; readonly time: TimeOfDay | number }> = ({ topic, floorY, time }) => {
  const frame = useCurrentFrame();
  const c = TOPIC_COLORS[topic];
  const roadTop = floorY - 190;
  const building = gradeGround(mixHex(c.shine, "#C9D4E2", 0.7), time);
  const window = gradeGround(mixHex(c.main, "#FFFFFF", 0.5), time);
  const road = gradeGround(mixHex(c.ink, "#8A94A3", 0.55), time);
  const walk = gradeGround(mixHex(c.shine, "#E4E8EE", 0.6), time);
  const shift = (frame * 6) % 240;
  return (
    <AbsoluteFill>
      <SkyLayer time={time} clouds={false} />
      {BUILDINGS.map(([x, w, h]) => (
        <div key={x} style={{ position: "absolute", left: x, top: roadTop - h, width: w, height: h, backgroundColor: building, borderRadius: "14px 14px 0 0" }}>
          {Array.from({ length: Math.floor(h / 90) }, (_, r) => (
            <div key={r} style={{ position: "absolute", left: 24, right: 24, top: 30 + r * 90, height: 46, backgroundColor: window, borderRadius: 8, opacity: 0.9, backgroundImage: `linear-gradient(to right, ${building} 6px, transparent 6px)`, backgroundSize: `${Math.max(40, w / 3)}px 100%` }} />
          ))}
        </div>
      ))}
      <div style={{ position: "absolute", left: 0, right: 0, top: roadTop, height: floorY - roadTop, backgroundColor: road }}>
        <div style={{ position: "absolute", left: -240 + shift, top: 82, width: 1560, height: 18, backgroundImage: "linear-gradient(to right, #FFFFFF 120px, transparent 120px)", backgroundSize: "240px 100%" }} />
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, top: floorY, bottom: 0, backgroundColor: walk, borderTop: `10px solid ${c.ink}`, boxSizing: "border-box" }} />
      <FloorSpot floorY={floorY} opacity={0.3} />
    </AbsoluteFill>
  );
};
