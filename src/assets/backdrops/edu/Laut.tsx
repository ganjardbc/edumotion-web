import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { mixHex, type TimeOfDay } from "../shared";
import { FloorSpot } from "./Floor";
import { gradeGround, SkyLayer } from "./SkyLayer";

const WAVE_ROWS = 4;

// Gelombang satu baris: tepi atas bergelombang, bergeser pelan mengikuti frame.
const Wave: React.FC<{ readonly top: number; readonly color: string; readonly phase: number; readonly amp: number }> = ({ top, color, phase, amp }) => {
  const frame = useCurrentFrame();
  const pts: string[] = [];
  for (let x = 0; x <= 1080; x += 40) pts.push(`${x} ${(amp * Math.sin((x / 1080) * Math.PI * 4 + frame / 40 + phase)).toFixed(1)}`);
  return (
    <svg width={1080} height={900} style={{ position: "absolute", left: 0, top }}>
      <path d={`M0 ${amp * 2} L${pts.join(" L")} L1080 900 L0 900 Z`} fill={color} transform={`translate(0 ${amp})`} />
    </svg>
  );
};

// Latar laut: langit, cakrawala, empat lapis gelombang berwarna topik, dan pantai berpasir sebagai lantai.
export const Laut: React.FC<{ readonly topic: VideoTopic; readonly floorY: number; readonly time: TimeOfDay | number }> = ({ topic, floorY, time }) => {
  const c = TOPIC_COLORS[topic];
  const sand = gradeGround(mixHex(c.shine, "#F2D9A6", 0.7), time);
  const sandEdge = gradeGround(mixHex(c.rim, "#D9B77A", 0.6), time);
  const horizon = floorY - 520;
  return (
    <AbsoluteFill>
      <SkyLayer time={time} />
      {Array.from({ length: WAVE_ROWS }, (_, i) => (
        <Wave key={i} top={horizon + i * 120} amp={10 + i * 4} phase={i * 1.7} color={gradeGround(mixHex(c.main, c.shine, 1 - (i + 1) / WAVE_ROWS), time)} />
      ))}
      <div style={{ position: "absolute", left: 0, right: 0, top: floorY, bottom: 0, backgroundColor: sand, borderTop: `6px solid ${sandEdge}`, boxSizing: "border-box" }} />
      <FloorSpot floorY={floorY} opacity={0.3} />
    </AbsoluteFill>
  );
};
