import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { mixHex, type TimeOfDay } from "../shared";
import { FloorSpot } from "./Floor";
import { gradeGround, SkyLayer, timeValue } from "./SkyLayer";

// Latar pedesaan: gunung biru kehijauan, petak sawah berlapis dengan barisan padi, gubuk beratap rumbia, pohon kelapa yang bergoyang.
export const Pedesaan: React.FC<{ readonly topic: VideoTopic; readonly floorY: number; readonly time: TimeOfDay | number }> = ({ topic, floorY, time }) => {
  const frame = useCurrentFrame();
  const c = TOPIC_COLORS[topic];
  const night = Math.max(0, (timeValue(time) - 0.5) * 2);
  const g = (hex: string): string => gradeGround(hex, time);
  const mountainFar = g(mixHex(c.shine, "#8FB9C0", 0.75));
  const mountainNear = g(mixHex(c.rim, "#5E9AA0", 0.75));
  const paddyA = g(mixHex(c.shine, "#A5D46A", 0.85));
  const paddyB = g(mixHex(c.main, "#8CC152", 0.85));
  const grass = g(mixHex(c.rim, "#4FA24A", 0.85));
  const wood = g("#A9744A");
  const thatch = g("#D9B45F");
  const trunk = g("#8A5E3B");
  const frond = g(mixHex(c.main, "#3E9A4E", 0.85));
  const stripes = (a: string, b: string): string => `repeating-linear-gradient(0deg, ${a} 0 18px, ${b} 18px 30px)`;
  const sway = 4 * Math.sin(frame / 50);
  return (
    <AbsoluteFill>
      <SkyLayer time={time} />
      <svg width={1080} height={1920} style={{ position: "absolute", inset: 0 }}>
        <polygon points={`-120,${floorY - 120} 300,${floorY - 640} 720,${floorY - 120}`} fill={mountainFar} />
        <polygon points={`420,${floorY - 120} 820,${floorY - 520} 1240,${floorY - 120}`} fill={mountainNear} />
        <polygon points={`-300,${floorY - 100} 130,${floorY - 380} 560,${floorY - 100}`} fill={mountainNear} opacity={0.85} />
      </svg>
      <div style={{ position: "absolute", left: -260, top: floorY - 260, width: 1100, height: 520, borderRadius: "50%", backgroundColor: paddyA, backgroundImage: stripes("transparent", `${paddyB}`), overflow: "hidden" }} />
      <div style={{ position: "absolute", left: 340, top: floorY - 200, width: 1100, height: 460, borderRadius: "50%", backgroundColor: paddyB, backgroundImage: stripes("transparent", `${paddyA}`), overflow: "hidden" }} />
      <div style={{ position: "absolute", left: 790, top: floorY - 330, width: 190, height: 190 }}>
        <div style={{ position: "absolute", left: 18, bottom: 0, width: 154, height: 84, backgroundColor: wood }} />
        <div style={{ position: "absolute", left: 76, bottom: 0, width: 38, height: 56, backgroundColor: g(mixHex(wood, "#000000", 0.35)) }} />
        <svg width={190} height={190} style={{ position: "absolute", inset: 0 }}>
          <polygon points="0,110 95,20 190,110" fill={thatch} />
        </svg>
        {night > 0.3 ? <div style={{ position: "absolute", left: 128, bottom: 36, width: 22, height: 22, backgroundColor: "#FFE9A8", opacity: night }} /> : null}
      </div>
      <div style={{ position: "absolute", left: 100, top: floorY - 520, width: 20, height: 520, backgroundColor: trunk, borderRadius: 10, transform: `rotate(${-5 + sway * 0.3}deg)`, transformOrigin: "50% 100%" }} />
      <svg width={1080} height={1920} style={{ position: "absolute", inset: 0 }}>
        <g transform={`translate(${108 + sway} ${floorY - 520})`}>
          {[-165, -125, -85, -45, -5, 35, 75, 115].map((rot) => (
            <ellipse key={rot} cx={0} cy={0} rx={96} ry={16} fill={frond} transform={`rotate(${rot - 20}) translate(84 0)`} />
          ))}
        </g>
      </svg>
      <div style={{ position: "absolute", left: 0, right: 0, top: floorY, bottom: 0, backgroundColor: grass, borderTop: `6px solid ${g(c.rim)}`, boxSizing: "border-box" }} />
      <FloorSpot floorY={floorY} opacity={0.3 * (1 - night)} />
    </AbsoluteFill>
  );
};
