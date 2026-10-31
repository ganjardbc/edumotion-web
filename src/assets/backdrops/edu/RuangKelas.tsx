import type React from "react";
import { AbsoluteFill } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { mixHex } from "../shared";
import { FloorSpot } from "./Floor";
import { eduColors } from "./palette";

const WOOD = "#C99A6B";

// Latar ruang kelas: dinding dengan lis bawah, papan tulis putih di tengah atas (tempat info), jam dinding, lantai kayu berpapan.
export const RuangKelas: React.FC<{ readonly topic: VideoTopic; readonly floorY: number }> = ({ topic, floorY }) => {
  const c = TOPIC_COLORS[topic];
  const e = eduColors(topic);
  const wood = mixHex(WOOD, c.main, 0.15);
  const woodDark = mixHex(wood, "#000000", 0.18);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(${e.wallTop}, ${e.wallBottom})` }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: floorY - 150, height: 150, backgroundColor: e.soft, borderTop: `6px solid ${e.floorEdge}`, boxSizing: "border-box" }} />
      <div style={{ position: "absolute", left: 90, top: 190, width: 900, height: 700, backgroundColor: "#FFFFFF", border: `14px solid ${woodDark}`, borderRadius: 28, boxSizing: "border-box", boxShadow: "0 10px 0 rgba(0,0,0,0.08)" }} />
      <div style={{ position: "absolute", left: 130, top: 890, width: 820, height: 22, backgroundColor: woodDark, borderRadius: 11 }} />
      {[0, 1, 2].map((i) => (
        <div key={i} style={{ position: "absolute", left: 300 + i * 160, top: 868, width: 90, height: 22, borderRadius: 8, backgroundColor: [c.main, c.shine, c.rim][i] }} />
      ))}
      <svg width={1080} height={1920} style={{ position: "absolute", inset: 0 }}>
        <circle cx={940} cy={120} r={64} fill="#FFFFFF" stroke={woodDark} strokeWidth={10} />
        <path d="M940 120 V76 M940 120 L968 136" stroke={c.ink} strokeWidth={8} strokeLinecap="round" fill="none" />
      </svg>
      <div style={{ position: "absolute", left: 0, right: 0, top: floorY, bottom: 0, backgroundColor: wood, borderTop: `6px solid ${woodDark}`, boxSizing: "border-box", backgroundImage: `repeating-linear-gradient(90deg, transparent 0 177px, ${woodDark} 177px 183px)` }} />
      <FloorSpot floorY={floorY} opacity={0.3} />
    </AbsoluteFill>
  );
};
