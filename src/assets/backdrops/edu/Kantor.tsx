import type React from "react";
import { AbsoluteFill } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { blendTimes, mixHex, type TimeOfDay } from "../shared";
import { OUTDOOR_BUILDINGS } from "../outdoor/OutdoorBack";
import { FloorSpot } from "./Floor";
import { eduColors } from "./palette";
import { SKY_TIMES } from "./SkyLayer";

// Latar kantor: lampu panel di langit-langit, jendela lebar berpemandangan kota (pucat supaya teks terbaca),
// sekat meja kerja dengan monitor di kiri dan kanan, karpet abu berpetak.
export const Kantor: React.FC<{ readonly topic: VideoTopic; readonly floorY: number; readonly time: TimeOfDay | number }> = ({ topic, floorY, time }) => {
  const c = TOPIC_COLORS[topic];
  const e = eduColors(topic);
  const sky = blendTimes(SKY_TIMES, time);
  const pane = mixHex(sky.skyLow, "#FFFFFF", 0.45);
  const skyline = mixHex(c.shine, pane, 0.5);
  const carpet = mixHex(c.ink, "#B7BCC8", 0.8);
  const partition = mixHex(c.main, "#FFFFFF", 0.35);
  let bx = 0;
  const buildings = OUTDOOR_BUILDINGS.map(([w, h], i) => {
    const x = bx;
    bx += w;
    return <div key={i} style={{ position: "absolute", left: x, bottom: 0, width: w, height: h * 0.8, backgroundColor: skyline }} />;
  });
  const desk = (x: number, mirror: boolean): React.ReactNode => (
    <div key={x} style={{ position: "absolute", left: x, top: 780, width: 260, height: floorY - 780 }}>
      <div style={{ position: "absolute", inset: 0, backgroundColor: partition, borderRadius: mirror ? "40px 0 0 0" : "0 40px 0 0", border: `6px solid ${mixHex(c.rim, "#FFFFFF", 0.3)}`, boxSizing: "border-box" }} />
      <div style={{ position: "absolute", left: 50, top: 50, width: 160, height: 110, backgroundColor: c.ink, borderRadius: 10 }}>
        <div style={{ position: "absolute", inset: 10, backgroundColor: mixHex(c.shine, "#FFFFFF", 0.4), borderRadius: 4 }} />
      </div>
      <div style={{ position: "absolute", left: 110, top: 160, width: 40, height: 30, backgroundColor: c.ink }} />
      <div style={{ position: "absolute", left: 40, top: 200, width: 180, height: 24, backgroundColor: mixHex(c.rim, "#FFFFFF", 0.2), borderRadius: 8 }} />
    </div>
  );
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(${e.wallTop}, ${e.wallBottom})` }} />
      {[120, 440, 760].map((x) => (
        <div key={x} style={{ position: "absolute", left: x, top: 24, width: 200, height: 26, borderRadius: 13, backgroundColor: "#FFFFFF", boxShadow: "0 0 30px rgba(255,255,255,0.9)" }} />
      ))}
      <div style={{ position: "absolute", left: 60, top: 130, width: 960, height: 560, backgroundColor: pane, border: `12px solid ${mixHex(c.rim, "#FFFFFF", 0.4)}`, boxSizing: "border-box", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 360 }}>{buildings}</div>
        {[1, 2].map((i) => (
          <div key={i} style={{ position: "absolute", top: 0, bottom: 0, left: `${(i * 100) / 3}%`, width: 10, backgroundColor: mixHex(c.rim, "#FFFFFF", 0.4) }} />
        ))}
      </div>
      {desk(-20, true)}
      {desk(840, false)}
      <div style={{ position: "absolute", left: 0, right: 0, top: floorY, bottom: 0, backgroundColor: carpet, borderTop: `6px solid ${mixHex(carpet, "#000000", 0.15)}`, boxSizing: "border-box", backgroundImage: `conic-gradient(${mixHex(carpet, "#FFFFFF", 0.1)} 25%, transparent 0 50%, ${mixHex(carpet, "#FFFFFF", 0.1)} 0 75%, transparent 0)`, backgroundSize: "120px 120px" }} />
      <FloorSpot floorY={floorY} opacity={0.3} />
    </AbsoluteFill>
  );
};
