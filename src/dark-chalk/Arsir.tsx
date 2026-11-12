import { getBoundingBox } from "@remotion/paths";
import type React from "react";
import { useId } from "react";
import { Garis } from "./Garis";
import { KAPUR } from "./palette";

// Arsiran kapur: garis-garis diagonal tipis yang mengisi bagian dalam sebuah path (dipotong clipPath), digambar berurutan.
// Dipakai sebagai pengganti isian warna datar supaya objek terlihat diarsir dengan kapur. `d` dalam sistem koordinat induk.
export const Arsir: React.FC<{
  readonly d: string;
  readonly jarak?: number;
  readonly warna?: string;
  readonly tebal?: number;
  readonly mulai?: number;
  readonly lama?: number;
  readonly kasar?: number;
  readonly opacity?: number;
}> = ({ d, jarak = 14, warna = KAPUR.chalk, tebal = 3, mulai = 0, lama = 30, kasar = 0.6, opacity = 0.7 }) => {
  const id = useId().replace(/:/g, "");
  const bb = getBoundingBox(d);
  const c0 = bb.x1 + bb.y1;
  const c1 = bb.x2 + bb.y2;
  const garis: string[] = [];
  for (let c = c0 + jarak / 2; c < c1; c += jarak) garis.push(`M${(c - bb.y1).toFixed(1)} ${bb.y1.toFixed(1)} L${(c - bb.y2).toFixed(1)} ${bb.y2.toFixed(1)}`);
  return (
    <g opacity={opacity}>
      <clipPath id={`arsir-${id}`}>
        <path d={d} />
      </clipPath>
      <g clipPath={`url(#arsir-${id})`}>
        <Garis d={garis.join(" ")} mulai={mulai} lama={lama} warna={warna} tebal={tebal} kasar={kasar} />
      </g>
    </g>
  );
};
