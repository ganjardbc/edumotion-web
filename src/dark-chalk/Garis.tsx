import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { KAPUR } from "./palette";

// Garis kapur yang "digambar" dari awal ke ujung (strokeDashoffset). `mulai` dan `lama` dalam frame scene.
export const Garis: React.FC<{
  readonly d: string;
  readonly mulai?: number;
  readonly lama?: number;
  readonly warna?: string;
  readonly tebal?: number;
  readonly isi?: string;
}> = ({ d, mulai = 0, lama = 24, warna = KAPUR.chalk, tebal = 9, isi = "none" }) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [mulai, mulai + lama], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <path d={d} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} fill={isi} fillOpacity={p > 0.95 ? 1 : 0} stroke={warna} strokeWidth={tebal} strokeLinecap="round" strokeLinejoin="round" opacity={p > 0 ? 1 : 0} />
  );
};
