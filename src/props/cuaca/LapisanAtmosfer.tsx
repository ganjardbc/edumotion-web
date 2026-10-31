import type React from "react";
import { HIGHLIGHT, TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Bumi dengan selimut udara tipis dan dua sinar Matahari: siang (di puncak) dan senja (di tepi kiri).
// Bagian sinar di dalam udara digambar tebal supaya panjang jalurnya terbaca: siang pendek, senja jauh lebih panjang.
// `progress` 0..1 menggambar kedua sinar dari atas sampai permukaan; sinar senja berubah dari kuning ke merah di dalam udara.
const CX = 400;
const CY = 760;
const EARTH = 360;
const AIR = 392;
const TOP = 80;
const DUSK_DEG = 86;
const clamp01 = (v: number): number => Math.min(1, Math.max(0, v));

export const LapisanAtmosfer: React.FC<PropProps & { readonly progress?: number }> = ({ topic = "planet", progress = 1, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const p = clamp01(progress);
  const duskX = CX - EARTH * Math.sin((DUSK_DEG * Math.PI) / 180);
  const duskEnd = CY - EARTH * Math.cos((DUSK_DEG * Math.PI) / 180);
  const duskEntry = CY - Math.sqrt(AIR * AIR - (CX - duskX) ** 2);
  const noonEntry = CY - AIR;
  const noonEnd = CY - EARTH;
  const lerp = (a: number, b: number): number => a + (b - a) * p;
  const noonNow = lerp(TOP, noonEnd);
  const duskNow = lerp(TOP, duskEnd);
  const ray = (x: number, from: number, to: number, w: number, color: string) => (to > from ? <line x1={x} y1={from} x2={x} y2={to} stroke={color} strokeWidth={w} strokeLinecap="round" /> : null);
  return (
    <PropFrame {...frame}>
      <defs>
        <linearGradient id="atmosfer-senja" gradientUnits="userSpaceOnUse" x1={duskX} y1={duskEntry} x2={duskX} y2={duskEnd}>
          <stop offset="0" stopColor={HIGHLIGHT} />
          <stop offset="1" stopColor={TOPIC_COLORS.tubuh.main} />
        </linearGradient>
      </defs>
      <circle cx={CX} cy={CY} r={AIR} fill={c.shine} opacity={0.7} />
      <circle cx={CX} cy={CY} r={EARTH} fill={c.main} stroke={c.ink} strokeWidth={8} />
      {/* di luar udara: garis tipis */}
      {ray(CX, TOP, noonNow, 14, HIGHLIGHT)}
      {ray(duskX, TOP, duskNow, 14, HIGHLIGHT)}
      {/* di dalam udara: garis tebal */}
      {ray(CX, noonEntry, noonNow, 44, c.ink)}
      {ray(CX, noonEntry, noonNow, 28, HIGHLIGHT)}
      {ray(duskX, duskEntry, duskNow, 44, c.ink)}
      {ray(duskX, duskEntry, duskNow, 28, "url(#atmosfer-senja)")}
      <circle cx={CX} cy={noonEnd} r={18} fill={c.ink} />
      <circle cx={duskX} cy={duskEnd} r={18} fill={c.ink} />
    </PropFrame>
  );
};
