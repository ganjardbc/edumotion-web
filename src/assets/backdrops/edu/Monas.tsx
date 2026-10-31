import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { mixHex, type TimeOfDay } from "../shared";
import { OUTDOOR_BUILDINGS } from "../outdoor/OutdoorBack";
import { FloorSpot } from "./Floor";
import { gradeGround, SkyLayer, timeValue } from "./SkyLayer";

const SCALE = 1.2;

// Latar Monas (Jakarta), disederhanakan: tugu putih meruncing di atas pelataran bertangga dan cawan, nyala emas berdenyut
// di puncak, siluet gedung Jakarta di belakang. Titik acuan di (540, floorY).
export const Monas: React.FC<{ readonly topic: VideoTopic; readonly floorY: number; readonly time: TimeOfDay | number }> = ({ topic, floorY, time }) => {
  const frame = useCurrentFrame();
  const c = TOPIC_COLORS[topic];
  const night = Math.max(0, (timeValue(time) - 0.5) * 2);
  const g = (hex: string): string => gradeGround(hex, time);
  const stone = g(mixHex(c.shine, "#F4F1E8", 0.8));
  const stoneShade = g(mixHex(c.rim, "#D8D3C4", 0.75));
  const gold = g("#F2B84B");
  const skyline = g(mixHex(c.shine, "#C9D3E3", 0.65));
  const grass = g(mixHex(c.rim, "#4FA24A", 0.85));
  const bush = g(mixHex(c.main, "#46B25A", 0.85));
  const pulse = 1 + 0.06 * Math.sin(frame / 8);
  let bx = 0;
  const skylineBlocks = OUTDOOR_BUILDINGS.map(([w, h], i) => {
    const x = bx;
    bx += w;
    return <div key={i} style={{ position: "absolute", left: x, top: floorY - h * 0.9, width: w, height: h * 0.9, backgroundColor: skyline }} />;
  });
  return (
    <AbsoluteFill>
      <SkyLayer time={time} />
      <div style={{ position: "absolute", left: 0, top: 0, width: 1080, height: floorY, overflow: "hidden" }}>{skylineBlocks}</div>
      <svg width={1080} height={1920} style={{ position: "absolute", inset: 0 }}>
        <g transform={`translate(540 ${floorY}) scale(${SCALE})`}>
          <rect x={-280} y={-44} width={560} height={44} fill={stone} />
          <rect x={-210} y={-88} width={420} height={44} fill={stoneShade} />
          <polygon points="-150,-88 150,-88 108,-158 -108,-158" fill={stone} />
          <polygon points="-34,-158 34,-158 22,-650 -22,-650" fill={stone} />
          <polygon points="0,-158 34,-158 22,-650 0,-650" fill={stoneShade} />
          <rect x={-50} y={-670} width={100} height={20} fill={stoneShade} />
          <g transform={`translate(0 -670) scale(${pulse})`}>
            <path d="M0 -110 C34 -66 36 -26 0 0 C-36 -26 -34 -66 0 -110 Z" fill={gold} />
            <path d="M0 -70 C16 -46 16 -22 0 -6 C-16 -22 -16 -46 0 -70 Z" fill={g("#FFE08A")} />
          </g>
        </g>
      </svg>
      {[130, 960].map((x) => (
        <div key={x} style={{ position: "absolute", left: x - 90, top: floorY - 110, width: 180, height: 140, borderRadius: "50%", backgroundColor: bush }} />
      ))}
      <div style={{ position: "absolute", left: 0, right: 0, top: floorY, bottom: 0, backgroundColor: grass, borderTop: `6px solid ${g(c.rim)}`, boxSizing: "border-box" }} />
      <FloorSpot floorY={floorY} opacity={0.3 * (1 - night)} />
    </AbsoluteFill>
  );
};
