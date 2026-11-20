import type React from "react";
import { useCurrentFrame } from "remotion";
import { Garis } from "../Garis";
import { KAPUR } from "../palette";

const ISI = "rgba(242, 240, 232, 0.14)";
const BELUM = 99999; // frame yang tidak pernah tercapai: aksi belum terjadi

const PULAU = [
  "M-400 -120 L-330 -130 L-200 -20 L-120 60 L-150 90 L-260 20 L-350 -50 Z", // Sumatera
  "M-110 95 L100 80 L120 112 L-95 135 Z", // Jawa
  "M-90 -120 L10 -140 L90 -90 L80 10 L-10 40 L-80 -20 Z", // Kalimantan
  "M140 -90 L190 -110 L200 -60 L170 -40 L190 20 L220 80 L180 70 L150 0 L130 -40 Z", // Sulawesi
  "M270 -30 L370 -40 L420 0 L400 50 L330 40 L300 70 L270 20 Z", // Papua
] as const;
const TITIK: ReadonlyArray<readonly [number, number]> = [[-170, 20], [0, 108], [180, 20], [340, 10]];

// Objek dipakai ulang lintas video (pertama: GempaBumi Cta). Peta kapur sederhana kepulauan Indonesia (bentuk kasar, bukan peta akurat). Lebar lokal ±420. Dari `getar`, titik-titik
// oranye berdenyut seperti getaran di empat tempat.
export const PetaIndonesia: React.FC<{
  readonly cx: number;
  readonly cy: number;
  readonly size?: number;
  readonly mulai?: number;
  readonly getar?: number;
}> = ({ cx, cy, size = 900, mulai = 0, getar = BELUM }) => {
  const frame = useCurrentFrame();
  const s = size / 840;
  const tebal = 5 / s;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      {PULAU.map((d, i) => (
        <Garis key={i} d={d} mulai={mulai + i * 6} lama={18} tebal={tebal} kasar={0.8} isi={ISI} />
      ))}
      {TITIK.map(([x, y], i) => {
        const t = frame - getar - i * 7;
        if (t < 0) return null;
        const r = 8 + (t % 26) * 1.5;
        return (
          <g key={i}>
            <circle cx={x} cy={y} r={8} fill={KAPUR.orange} />
            <circle cx={x} cy={y} r={r} fill="none" stroke={KAPUR.orange} strokeWidth={tebal} opacity={1 - (r - 8) / 40} />
          </g>
        );
      })}
    </g>
  );
};
