import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { mixHex } from "../shared";
import { eduColors } from "./palette";
import { FloorSpot } from "./Floor";

// Sel melayang: posisi tetap (x, y, jari-jari, fase), geraknya dari frame. Semua di atas lantai.
const CELLS: ReadonlyArray<readonly [number, number, number, number]> = [
  [180, 420, 120, 0],
  [880, 360, 90, 1.4],
  [520, 560, 70, 2.6],
  [940, 760, 130, 0.8],
  [140, 860, 80, 2.1],
  [700, 960, 100, 3.3],
  [330, 1040, 60, 1.1],
  [560, 280, 54, 4.0],
];

// Sel darah kecil yang mengalir naik di pembuluh kiri dan kanan: [sisi, awal 0..1, kecepatan].
const FLOW: ReadonlyArray<readonly [0 | 1, number, number]> = [
  [0, 0.05, 1.6], [0, 0.4, 1.6], [0, 0.72, 1.6],
  [1, 0.2, 1.3], [1, 0.55, 1.3], [1, 0.88, 1.3],
];
const VESSEL_X: readonly [number, number] = [56, 1024];
const VESSEL_W = 110;

// Latar jaringan tubuh: dinding merah muda, pembuluh di tepi dengan sel mengalir, sel melayang pelan, lantai jaringan.
export const DalamTubuh: React.FC<{ readonly topic: VideoTopic; readonly floorY: number }> = ({ topic, floorY }) => {
  const frame = useCurrentFrame();
  const c = TOPIC_COLORS[topic];
  const e = eduColors(topic);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(${e.wallTop}, ${mixHex(c.main, "#FFFFFF", 0.6)})` }} />
      {CELLS.map(([x, y, r, phase]) => {
        const dx = 12 * Math.cos(frame / 70 + phase);
        const dy = 18 * Math.sin(frame / 55 + phase);
        return (
          <div key={`${x}-${y}`} style={{ position: "absolute", left: x - r + dx, top: y - r + dy, width: r * 2, height: r * 2, borderRadius: "50%", backgroundColor: c.main, opacity: 0.14 }}>
            <div style={{ position: "absolute", left: r * 0.7, top: r * 0.55, width: r * 0.7, height: r * 0.7, borderRadius: "50%", backgroundColor: c.shine, opacity: 0.8 }} />
          </div>
        );
      })}
      {VESSEL_X.map((x) => (
        <div key={x} style={{ position: "absolute", left: x - VESSEL_W / 2, top: 0, width: VESSEL_W, height: floorY, borderRadius: VESSEL_W / 2, backgroundColor: c.rim, opacity: 0.38 }} />
      ))}
      {FLOW.map(([side, start, speed], i) => {
        const y = floorY - ((start + (frame * speed) / 1000) % 1) * floorY;
        return <div key={i} style={{ position: "absolute", left: VESSEL_X[side] - 22, top: y - 22, width: 44, height: 44, borderRadius: "50%", backgroundColor: c.main, border: `5px solid ${c.shine}`, boxSizing: "border-box" }} />;
      })}
      <svg width={1080} height={1920} style={{ position: "absolute", inset: 0 }}>
        <path d={`M0 ${floorY + 10} Q135 ${floorY - 22} 270 ${floorY + 10} T540 ${floorY + 10} T810 ${floorY + 10} T1080 ${floorY + 10} V1920 H0 Z`} fill={e.floor} stroke={e.floorEdge} strokeWidth={6} strokeLinejoin="round" />
      </svg>
      <FloorSpot floorY={floorY} opacity={0.4} />
    </AbsoluteFill>
  );
};
