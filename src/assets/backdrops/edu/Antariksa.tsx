import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { mixHex } from "../shared";
import { FloorSpot } from "./Floor";

// Bintang: [x, y, jari-jari, fase], posisi tetap, kelap-kelip dari frame.
const STARS: ReadonlyArray<readonly [number, number, number, number]> = [
  [90, 140, 5, 0], [250, 300, 4, 1.2], [420, 90, 6, 2.4], [610, 240, 4, 0.6], [800, 130, 5, 1.8], [960, 330, 4, 3.0],
  [140, 520, 4, 2.0], [330, 640, 5, 0.3], [520, 480, 4, 2.7], [720, 600, 6, 1.1], [900, 760, 4, 0.9], [90, 860, 5, 2.2],
  [260, 980, 4, 1.5], [470, 880, 5, 3.3], [660, 960, 4, 0.2], [840, 1040, 5, 2.6], [980, 560, 4, 1.4], [560, 720, 3, 0.8],
];

// Kawah di permukaan: [x, lebar].
const CRATERS: ReadonlyArray<readonly [number, number]> = [[150, 200], [520, 130], [820, 230]];

// Latar antariksa: gradasi gelap, bintang berkelip, planet bercincin di pojok (warna `accent`, bawaan topik), bulan kecil, permukaan berkawah.
export const Antariksa: React.FC<{ readonly topic: VideoTopic; readonly floorY: number; readonly accent?: VideoTopic; readonly decorShift?: { readonly x: number; readonly y: number }; readonly moonShift?: { readonly x: number; readonly y: number } }> = ({ topic, floorY, accent, decorShift = { x: 0, y: 0 }, moonShift = decorShift }) => {
  const frame = useCurrentFrame();
  const c = TOPIC_COLORS[topic];
  const p = TOPIC_COLORS[accent ?? topic];
  const top = mixHex(c.ink, "#0B0D2A", 0.6);
  const bottom = mixHex(c.rim, "#2B2F7A", 0.7);
  const ground = mixHex(c.ink, "#6C6F9A", 0.55);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(${top}, ${bottom})` }} />
      {STARS.map(([x, y, r, phase]) => (
        <div key={`${x}-${y}`} style={{ position: "absolute", left: x - r, top: y - r, width: r * 2, height: r * 2, borderRadius: "50%", backgroundColor: "#FFFFFF", opacity: 0.45 + 0.45 * Math.sin(frame / 18 + phase) }} />
      ))}
      <svg width={1080} height={1920} style={{ position: "absolute", inset: 0 }}>
        <g transform={`translate(${770 + decorShift.x} ${330 + decorShift.y + 6 * Math.sin(frame / 90)})`}>
          <ellipse cx={0} cy={0} rx={250} ry={62} fill="none" stroke={p.shine} strokeWidth={22} opacity={0.5} transform="rotate(-18)" />
          <circle cx={0} cy={0} r={130} fill={p.main} />
          <path d="M-100 -84 A130 130 0 0 1 100 -84 Q0 -50 -100 -84 Z" fill={p.shine} opacity={0.45} />
          <path d="M-130 20 A130 130 0 0 0 130 20 A130 130 0 0 1 -130 20 Z" fill={p.rim} opacity={0.55} />
          <ellipse cx={0} cy={0} rx={250} ry={62} fill="none" stroke={p.shine} strokeWidth={22} strokeDasharray="0 0" opacity={0.0} />
          <path d="M-244 -20 A250 62 -18 0 0 244 20" fill="none" stroke={p.shine} strokeWidth={22} strokeLinecap="round" opacity={0.7} transform="rotate(-18)" />
        </g>
        <g transform={`translate(${moonShift.x} ${moonShift.y})`}>
        <circle cx={170} cy={560} r={56} fill={mixHex(c.shine, "#FFFFFF", 0.5)} />
        <circle cx={150} cy={540} r={14} fill={mixHex(c.shine, "#8E92B8", 0.5)} />
        <circle cx={190} cy={582} r={10} fill={mixHex(c.shine, "#8E92B8", 0.5)} />
        </g>
      </svg>
      <div style={{ position: "absolute", left: 0, right: 0, top: floorY, bottom: 0, backgroundColor: ground, borderTop: `6px solid ${mixHex(ground, "#FFFFFF", 0.3)}`, boxSizing: "border-box" }} />
      {CRATERS.map(([x, w]) => (
        <div key={x} style={{ position: "absolute", left: x - w / 2, top: floorY + 60, width: w, height: w * 0.22, borderRadius: "50%", backgroundColor: mixHex(ground, "#000000", 0.18), borderTop: `5px solid ${mixHex(ground, "#FFFFFF", 0.25)}`, boxSizing: "border-box" }} />
      ))}
      <FloorSpot floorY={floorY} opacity={0.18} />
    </AbsoluteFill>
  );
};
