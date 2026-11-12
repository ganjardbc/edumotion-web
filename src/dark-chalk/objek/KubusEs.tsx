import type React from "react";
import { Garis } from "../Garis";
import { KAPUR } from "../palette";

const GELEMBUNG: ReadonlyArray<readonly [number, number, number]> = [[-0.22, -0.2, 0.09], [0.18, -0.26, 0.06], [0.05, 0.02, 0.11], [-0.2, 0.22, 0.07], [0.24, 0.2, 0.08]];

// Kubus es garis kapur: kotak membulat berisi biru es, dua kilap, dan (opsional) gelembung udara. Berpusat di (cx, cy).
export const KubusEs: React.FC<{
  readonly cx: number;
  readonly cy: number;
  readonly size?: number;
  readonly gelembung?: boolean;
  readonly tilt?: number;
  readonly mulai?: number;
}> = ({ cx, cy, size = 130, gelembung = false, tilt = 0, mulai = 0 }) => {
  const h = size / 2;
  const r = size * 0.14;
  const d = `M${cx - h + r} ${cy - h} L${cx + h - r} ${cy - h} Q${cx + h} ${cy - h} ${cx + h} ${cy - h + r} L${cx + h} ${cy + h - r} Q${cx + h} ${cy + h} ${cx + h - r} ${cy + h} L${cx - h + r} ${cy + h} Q${cx - h} ${cy + h} ${cx - h} ${cy + h - r} L${cx - h} ${cy - h + r} Q${cx - h} ${cy - h} ${cx - h + r} ${cy - h} Z`;
  return (
    <g transform={`rotate(${tilt} ${cx} ${cy})`}>
      <Garis d={d} mulai={mulai} lama={22} isi={KAPUR.esIsi} tebal={7} />
      <Garis d={`M${cx - h * 0.62} ${cy - h * 0.5} L${cx - h * 0.18} ${cy - h * 0.7}`} mulai={mulai + 18} lama={8} tebal={5} warna={KAPUR.es} />
      <Garis d={`M${cx - h * 0.66} ${cy - h * 0.12} L${cx - h * 0.5} ${cy - h * 0.2}`} mulai={mulai + 22} lama={6} tebal={5} warna={KAPUR.es} />
      {gelembung
        ? GELEMBUNG.map(([gx, gy, gr], i) => <circle key={i} cx={cx + gx * size} cy={cy + gy * size} r={gr * size} fill="none" stroke={KAPUR.chalk} strokeWidth={4} opacity={0.9} />)
        : null}
    </g>
  );
};
