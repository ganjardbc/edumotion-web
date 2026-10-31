import type React from "react";
import { AbsoluteFill } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { mixHex, type TimeOfDay } from "../shared";
import { FloorSpot } from "./Floor";
import { gradeGround, SkyLayer, timeValue } from "./SkyLayer";

// Latar langit: gradasi siang, sore, atau malam, awan melayang pelan, bukit berwarna topik di bawah.
export const Langit: React.FC<{ readonly topic: VideoTopic; readonly floorY: number; readonly time: TimeOfDay | number }> = ({ topic, floorY, time }) => {
  const c = TOPIC_COLORS[topic];
  const night = Math.max(0, (timeValue(time) - 0.5) * 2);
  const farHill = gradeGround(mixHex(c.shine, "#7BCB7E", 0.8), time);
  const nearHill = gradeGround(mixHex(c.rim, "#4FAF58", 0.85), time);
  return (
    <AbsoluteFill>
      <SkyLayer time={time} />
      <div style={{ position: "absolute", left: -200, top: floorY - 170, width: 1000, height: 420, borderRadius: "50%", backgroundColor: farHill }} />
      <div style={{ position: "absolute", left: 500, top: floorY - 120, width: 1000, height: 380, borderRadius: "50%", backgroundColor: farHill }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: floorY, bottom: 0, backgroundColor: nearHill, borderTop: `6px solid ${gradeGround(c.rim, time)}`, boxSizing: "border-box" }} />
      <FloorSpot floorY={floorY} opacity={0.35 * (1 - night)} />
    </AbsoluteFill>
  );
};
