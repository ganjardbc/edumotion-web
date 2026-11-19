import type React from "react";
import { Arsir } from "../Arsir";
import { Garis } from "../Garis";
import { KAPUR } from "../palette";

// Objek kapur video BumiPunyaLaut. Berpusat di (cx, cy).

// Bumi muda yang membara: bola oranye berarsir dengan retakan lava emas.
export const BumiLava: React.FC<{ readonly cx: number; readonly cy: number; readonly r?: number; readonly mulai?: number }> = ({ cx, cy, r = 200, mulai = 0 }) => {
  const LINGKAR = `M${cx - r} ${cy} a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0`;
  const retak = (a: number, b: number, c: number, d: number, e: number, f: number) => `M${cx + r * a} ${cy + r * b} L${cx + r * c} ${cy + r * d} L${cx + r * e} ${cy + r * f}`;
  return (
    <g>
      <Garis kasar={1} d={LINGKAR} mulai={mulai} lama={26} warna={KAPUR.orange} isi="rgba(237, 120, 83, 0.3)" tebal={9} />
      <Arsir d={LINGKAR} jarak={13} warna={KAPUR.orange} tebal={3} mulai={mulai + 20} lama={26} opacity={0.6} />
      <Garis kasar={0.8} d={retak(-0.55, -0.3, -0.2, -0.05, -0.3, 0.3)} mulai={mulai + 24} lama={14} warna={KAPUR.gold} tebal={8} />
      <Garis kasar={0.8} d={retak(0.1, -0.6, 0.3, -0.2, 0.65, -0.05)} mulai={mulai + 28} lama={14} warna={KAPUR.gold} tebal={8} />
      <Garis kasar={0.8} d={retak(0.05, 0.3, 0.3, 0.5, 0.15, 0.72)} mulai={mulai + 32} lama={14} warna={KAPUR.gold} tebal={8} />
    </g>
  );
};

// Tetes air dengan ujung runcing di atas.
export const Tetes: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number }> = ({ cx, cy, size = 100, mulai = 0 }) => {
  const u = size / 100;
  const d = `M${cx} ${cy - 50 * u} C${cx + 14 * u} ${cy - 20 * u} ${cx + 38 * u} ${cy + 4 * u} ${cx + 38 * u} ${cy + 22 * u} A${38 * u} ${38 * u} 0 0 1 ${cx - 38 * u} ${cy + 22 * u} C${cx - 38 * u} ${cy + 4 * u} ${cx - 14 * u} ${cy - 20 * u} ${cx} ${cy - 50 * u} Z`;
  return <Garis kasar={0.8} d={d} mulai={mulai} lama={16} warna={KAPUR.es} isi={KAPUR.esIsi} tebal={7} />;
};
