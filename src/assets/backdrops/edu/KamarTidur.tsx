import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { blendTimes, mixHex, type TimeOfDay } from "../shared";
import { FloorSpot } from "./Floor";
import { eduColors } from "./palette";
import { SKY_TIMES, timeValue } from "./SkyLayer";

const LIGHTS: ReadonlyArray<readonly [number, number]> = [[90, 60], [200, 92], [310, 106], [420, 92], [530, 60], [640, 92], [750, 106], [860, 92], [970, 60]];

// Latar kamar tidur: jendela dengan tirai (langit mengikuti waktu), kasur dan bantal di kiri, meja samping dan lampu di kanan,
// lampu hias berkelip, karpet bulat di lantai kayu.
export const KamarTidur: React.FC<{ readonly topic: VideoTopic; readonly floorY: number; readonly time: TimeOfDay | number }> = ({ topic, floorY, time }) => {
  const frame = useCurrentFrame();
  const c = TOPIC_COLORS[topic];
  const e = eduColors(topic);
  const sky = blendTimes(SKY_TIMES, time);
  const night = Math.max(0, (timeValue(time) - 0.5) * 2);
  const wood = mixHex(mixHex("#C99A6B", c.main, 0.15), "#14152A", night * 0.25);
  const woodDark = mixHex(wood, "#000000", 0.18);
  const wall = night > 0 ? mixHex(e.wallBottom, "#2B2E4A", night * 0.5) : e.wallBottom;
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(${mixHex(e.wallTop, "#2B2E4A", night * 0.5)}, ${wall})` }} />
      {LIGHTS.map(([x, y], i) => (
        <div key={x} style={{ position: "absolute", left: x - 9, top: y - 9, width: 18, height: 18, borderRadius: "50%", backgroundColor: "#FFE9A8", opacity: 0.55 + 0.4 * Math.sin(frame / 14 + i * 1.3), boxShadow: "0 0 18px #FFE9A8" }} />
      ))}
      <div style={{ position: "absolute", left: 620, top: 230, width: 340, height: 400, border: `14px solid ${mixHex(c.rim, "#FFFFFF", 0.4)}`, borderRadius: 20, boxSizing: "border-box", background: `linear-gradient(${sky.sky}, ${sky.skyLow})`, overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 200, top: 50, width: 70, height: 70, borderRadius: "50%", backgroundColor: sky.celestial, boxShadow: `0 0 40px ${sky.celestial}` }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 8, backgroundColor: mixHex(c.rim, "#FFFFFF", 0.4) }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 8, backgroundColor: mixHex(c.rim, "#FFFFFF", 0.4) }} />
      </div>
      <div style={{ position: "absolute", left: 580, top: 210, width: 110, height: 460, backgroundColor: c.main, opacity: 0.8, borderRadius: "0 0 40px 40px" }} />
      <div style={{ position: "absolute", left: 890, top: 210, width: 110, height: 460, backgroundColor: c.main, opacity: 0.8, borderRadius: "0 0 40px 40px" }} />
      <div style={{ position: "absolute", left: 80, top: 360, width: 240, height: 180, border: `12px solid ${woodDark}`, borderRadius: 14, boxSizing: "border-box", backgroundColor: e.soft }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: floorY, bottom: 0, backgroundColor: wood, borderTop: `6px solid ${woodDark}`, boxSizing: "border-box", backgroundImage: `repeating-linear-gradient(90deg, transparent 0 177px, ${woodDark} 177px 183px)` }} />
      <div style={{ position: "absolute", left: -30, top: 860, width: 500, height: floorY - 860, backgroundColor: mixHex(c.shine, "#FFFFFF", 0.4), borderRadius: "40px 0 0 0" }} />
      <div style={{ position: "absolute", left: -30, top: 960, width: 500, height: floorY - 960, backgroundColor: c.main, opacity: 0.85 }} />
      <div style={{ position: "absolute", left: 40, top: 900, width: 200, height: 80, borderRadius: 40, backgroundColor: "#FFFFFF", boxShadow: "0 6px 0 rgba(0,0,0,0.08)" }} />
      <div style={{ position: "absolute", left: -30, top: 800, width: 40, height: floorY - 800, backgroundColor: woodDark }} />
      <div style={{ position: "absolute", left: 870, top: 1000, width: 150, height: floorY - 1000, backgroundColor: woodDark, borderRadius: "10px 10px 0 0" }} />
      <div style={{ position: "absolute", left: 905, top: 880, width: 80, height: 90, backgroundColor: mixHex(c.shine, "#FFF3D6", 0.5), borderRadius: "30px 30px 6px 6px" }} />
      <div style={{ position: "absolute", left: 940, top: 970, width: 10, height: 34, backgroundColor: woodDark }} />
      <div style={{ position: "absolute", left: 845, top: 840, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(closest-side, #FFE9A8, transparent)", opacity: 0.15 + 0.5 * night }} />
      <div style={{ position: "absolute", left: 240, top: floorY + 40, width: 600, height: 150, borderRadius: "50%", backgroundColor: mixHex(c.shine, "#FFFFFF", 0.2), border: `8px solid ${c.main}`, boxSizing: "border-box", opacity: 0.9 }} />
      <FloorSpot floorY={floorY} opacity={0.2} />
    </AbsoluteFill>
  );
};
