import type React from "react";
import { Garis } from "../Garis";
import { KAPUR } from "../palette";

// Objek kapur video BulanCakrawala. Berpusat di (cx, cy).

// Bulan purnama: lingkaran isi emas pucat dengan tiga kawah. `size` = diameter. Bentuk digambar di titik asal lalu
// diskalakan lewat transform supaya goresan kasar tetap sama tiap frame.
export const BulanKapur: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly warna?: string; readonly tebal?: number }> = ({ cx, cy, size = 300, mulai = 0, warna = KAPUR.chalk, tebal = 9 }) => {
  const s = size / 200;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      <Garis kasar={0.8} d="M-100 0 a100 100 0 1 0 200 0 a100 100 0 1 0 -200 0" mulai={mulai} lama={22} warna={warna} isi="rgba(244, 185, 66, 0.2)" tebal={tebal / s} />
      <Garis kasar={0.8} d="M-48 -34 a18 18 0 1 0 36 0 a18 18 0 1 0 -36 0" mulai={mulai + 14} lama={10} warna={warna} tebal={6 / s} />
      <Garis kasar={0.8} d="M12 20 a26 26 0 1 0 52 0 a26 26 0 1 0 -52 0" mulai={mulai + 18} lama={12} warna={warna} tebal={6 / s} />
      <Garis kasar={0.8} d="M-60 38 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0" mulai={mulai + 22} lama={8} warna={warna} tebal={6 / s} />
    </g>
  );
};

// Cakrawala: garis tanah dengan siluet gedung dan pohon di kiri dan kanan (bagian tengah dikosongkan untuk Bulan).
// `y` = tinggi garis tanah.
export const Cakrawala: React.FC<{ readonly y: number; readonly mulai?: number; readonly siluet?: boolean }> = ({ y, mulai = 0, siluet = true }) => (
  <g>
    <Garis kasar={1} d={`M40 ${y} L1040 ${y}`} mulai={mulai} lama={16} warna={KAPUR.abu} tebal={8} />
    {siluet ? (
      <>
        <Garis kasar={1} d={`M70 ${y} L70 ${y - 150} L170 ${y - 150} L170 ${y - 70} L230 ${y - 70} L230 ${y}`} mulai={mulai + 8} lama={20} warna={KAPUR.abu} tebal={7} isi="rgba(169, 173, 185, 0.18)" />
        <Garis kasar={1} d={`M820 ${y} L820 ${y - 110} L900 ${y - 110} L900 ${y - 180} L990 ${y - 180} L990 ${y}`} mulai={mulai + 12} lama={20} warna={KAPUR.abu} tebal={7} isi="rgba(169, 173, 185, 0.18)" />
        <Garis kasar={1} d={`M300 ${y} L300 ${y - 60} M300 ${y - 60} C250 ${y - 70} 260 ${y - 150} 300 ${y - 150} C340 ${y - 150} 350 ${y - 70} 300 ${y - 60}`} mulai={mulai + 16} lama={18} warna={KAPUR.daun} tebal={7} isi={KAPUR.daunIsi} />
      </>
    ) : null}
  </g>
);

// Penanda lebar: dua garis tegak kecil dihubungkan garis datar (seperti jangka sorong), menunjukkan lebar `lebar`.
export const Ukur: React.FC<{ readonly cx: number; readonly cy: number; readonly lebar?: number; readonly mulai?: number; readonly warna?: string }> = ({ cx, cy, lebar = 200, mulai = 0, warna = KAPUR.gold }) => {
  const h = lebar / 2;
  return (
    <g>
      <Garis kasar={1} d={`M${cx - h} ${cy} L${cx + h} ${cy}`} mulai={mulai} lama={12} warna={warna} tebal={8} />
      <Garis kasar={1} d={`M${cx - h} ${cy - 22} L${cx - h} ${cy + 22}`} mulai={mulai} lama={6} warna={warna} tebal={8} />
      <Garis kasar={1} d={`M${cx + h} ${cy - 22} L${cx + h} ${cy + 22}`} mulai={mulai + 8} lama={6} warna={warna} tebal={8} />
    </g>
  );
};
