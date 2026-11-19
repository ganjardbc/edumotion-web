import type React from "react";
import { useCurrentFrame } from "remotion";
import { Garis } from "../Garis";
import { KAPUR } from "../palette";

// Objek kapur video KilatLebihDuluDariGuntur. Berpusat di (cx, cy). Hanya bergantung pada frame.

// Kilat zig-zag (tinggi asli 300, berpusat di 0,0); diskalakan lewat transform supaya goresan kasar tetap sama tiap frame.
const KILAT = "M10 -150 L-40 10 L-2 10 L-25 150 L45 -35 L5 -35 L40 -150 Z";

export const Kilat: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly warna?: string; readonly tebal?: number }> = ({ cx, cy, size = 300, mulai = 0, warna = KAPUR.gold, tebal = 9 }) => {
  const s = size / 300;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      <Garis kasar={0.8} d={KILAT} mulai={mulai} lama={14} warna={warna} isi="rgba(244, 185, 66, 0.35)" tebal={tebal / s} />
    </g>
  );
};

// Gelombang suara: lingkaran-lingkaran biru es yang melebar dari pusat sambil memudar, berulang. `laju` = piksel per frame.
export const GelombangSuara: React.FC<{
  readonly cx: number;
  readonly cy: number;
  readonly mulai?: number;
  readonly laju?: number;
  readonly maxR?: number;
  readonly jumlah?: number;
  readonly tebal?: number;
  readonly warna?: string;
}> = ({ cx, cy, mulai = 0, laju = 3, maxR = 260, jumlah = 3, tebal = 7, warna = KAPUR.es }) => {
  const frame = useCurrentFrame();
  const t = frame - mulai;
  if (t < 0) return null;
  const jarak = maxR / laju / jumlah;
  return (
    <g>
      {Array.from({ length: jumlah }, (_, k) => {
        const tk = t - k * jarak;
        if (tk < 0) return null;
        const r = (tk * laju) % maxR;
        const pudar = Math.min(1, tk / 6) * (1 - r / maxR);
        return <circle key={k} cx={cx} cy={cy} r={Math.max(r, 1)} fill="none" stroke={warna} strokeWidth={tebal} opacity={pudar} />;
      })}
    </g>
  );
};

// Rumah sederhana (badan, atap, pintu). `size` = lebar atap.
export const Rumah: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number }> = ({ cx, cy, size = 240, mulai = 0 }) => {
  const s = size / 160;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      <Garis kasar={0.8} d="M-60 0 L-60 -90 L60 -90 L60 0 Z" mulai={mulai} lama={20} warna={KAPUR.chalk} isi="rgba(242, 240, 232, 0.1)" tebal={8 / s} />
      <Garis kasar={0.8} d="M-80 -90 L0 -160 L80 -90 Z" mulai={mulai + 10} lama={16} warna={KAPUR.coklat} tebal={8 / s} />
      <Garis kasar={0.8} d="M-16 0 L-16 -52 L16 -52 L16 0" mulai={mulai + 20} lama={12} warna={KAPUR.chalk} tebal={7 / s} />
    </g>
  );
};
