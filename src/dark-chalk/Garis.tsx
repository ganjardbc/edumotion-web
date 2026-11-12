import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { kasarkan } from "./kasar";
import { KAPUR } from "./palette";

// Garis kapur yang "digambar" dari awal ke ujung (strokeDashoffset). `mulai` dan `lama` dalam frame scene.
export const Garis: React.FC<{
  readonly d: string;
  readonly mulai?: number;
  readonly lama?: number;
  readonly warna?: string;
  readonly tebal?: number;
  readonly isi?: string;
  // Bila > 0, path diubah menjadi goresan sketsa tangan (roughjs); 1 = sedang. Bawaan 0 (garis mulus).
  readonly kasar?: number;
}> = ({ d, mulai = 0, lama = 24, warna = KAPUR.chalk, tebal = 9, isi = "none", kasar = 0 }) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [mulai, mulai + lama], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const kontur = kasar > 0 ? kasarkan(d, kasar) : d;
  // Dengan goresan kasar, isi digambar dari path mulus supaya dua lintasan roughjs tidak membuat isian tumpang tindih.
  const isiTerpisah = kasar > 0 && isi !== "none";
  return (
    <>
      {isiTerpisah ? <path d={d} fill={isi} fillOpacity={p > 0.95 ? 1 : 0} stroke="none" opacity={p > 0 ? 1 : 0} /> : null}
      <path d={kontur} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} fill={isiTerpisah ? "none" : isi} fillOpacity={p > 0.95 ? 1 : 0} stroke={warna} strokeWidth={tebal} strokeLinecap="round" strokeLinejoin="round" opacity={p > 0 ? 1 : 0} />
    </>
  );
};
