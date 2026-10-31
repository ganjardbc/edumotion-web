import type React from "react";
import { AbsoluteFill } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { mixHex, type TimeOfDay } from "../shared";
import { FloorSpot } from "./Floor";
import { gradeGround, SkyLayer, timeValue } from "./SkyLayer";

const SCALE = 1.4;
const SATE_Y = [-515, -535, -555, -575, -595, -615];

// Latar Gedung Sate (Bandung), disederhanakan: dua sayap panjang berjendela lengkung, bangunan tengah berpilar,
// menara bertingkat beratap merah dengan tusuk "sate" bulat keemasan di puncak. Titik acuan di (540, floorY).
export const GedungSate: React.FC<{ readonly topic: VideoTopic; readonly floorY: number; readonly time: TimeOfDay | number }> = ({ topic, floorY, time }) => {
  const c = TOPIC_COLORS[topic];
  const night = Math.max(0, (timeValue(time) - 0.5) * 2);
  const g = (hex: string): string => gradeGround(hex, time);
  const wall = g(mixHex(c.shine, "#FFF1D0", 0.75));
  const wallShade = g(mixHex(c.rim, "#EBD7AC", 0.7));
  const roof = g(mixHex(c.rim, "#C65A41", 0.75));
  const gold = g("#F2B84B");
  const windowC = g(mixHex(c.ink, "#6C7A96", 0.6));
  const door = g(mixHex(c.ink, "#7A4B3A", 0.7));
  const bush = g(mixHex(c.main, "#46B25A", 0.85));
  const grass = g(mixHex(c.rim, "#4FA24A", 0.85));
  const wingWindows = [-500, -450, -400, -350, -300, -250, -200, 200, 250, 300, 350, 400, 450, 500];
  return (
    <AbsoluteFill>
      <SkyLayer time={time} />
      <svg width={1080} height={1920} style={{ position: "absolute", inset: 0 }}>
        <g transform={`translate(540 ${floorY}) scale(${SCALE})`}>
          <rect x={-560} y={-150} width={410} height={150} fill={wall} />
          <rect x={150} y={-150} width={410} height={150} fill={wall} />
          <rect x={-560} y={-166} width={410} height={16} fill={roof} />
          <rect x={150} y={-166} width={410} height={16} fill={roof} />
          {wingWindows.map((x) => (
            <rect key={x} x={x - 11} y={-118} width={22} height={64} rx={11} fill={windowC} />
          ))}
          <rect x={-170} y={-230} width={340} height={230} fill={wall} />
          <rect x={-170} y={-230} width={340} height={22} fill={wallShade} />
          {[-120, -72, -24, 24, 72, 120].map((x) => (
            <rect key={x} x={x - 8} y={-190} width={16} height={180} fill={wallShade} />
          ))}
          <rect x={-40} y={-100} width={80} height={100} rx={40} fill={door} />
          <rect x={-110} y={-14} width={220} height={14} fill={wallShade} />
          <rect x={-90} y={-28} width={180} height={14} fill={wall} />
          <polygon points="-196,-230 196,-230 150,-294 -150,-294" fill={roof} />
          <rect x={-90} y={-352} width={180} height={58} fill={wall} />
          {[-60, -20, 20, 60].map((x) => (
            <rect key={x} x={x - 7} y={-338} width={14} height={34} rx={7} fill={windowC} />
          ))}
          <polygon points="-104,-352 104,-352 70,-398 -70,-398" fill={roof} />
          <rect x={-44} y={-444} width={88} height={46} fill={wall} />
          <polygon points="-56,-444 56,-444 0,-492" fill={roof} />
          <rect x={-3} y={-640} width={6} height={150} fill={gold} />
          {SATE_Y.map((y) => (
            <ellipse key={y} cx={0} cy={y} rx={12} ry={8} fill={gold} />
          ))}
        </g>
      </svg>
      {[100, 330, 750, 980].map((x) => (
        <div key={x} style={{ position: "absolute", left: x - 70, top: floorY - 40, width: 140, height: 80, borderRadius: "50%", backgroundColor: bush }} />
      ))}
      <div style={{ position: "absolute", left: 0, right: 0, top: floorY, bottom: 0, backgroundColor: grass, borderTop: `6px solid ${g(c.rim)}`, boxSizing: "border-box" }} />
      <FloorSpot floorY={floorY} opacity={0.3 * (1 - night)} />
    </AbsoluteFill>
  );
};
