import type React from "react";
import { FONT_KAPUR } from "../font";
import { Garis } from "../Garis";
import { KAPUR } from "../palette";

// Objek kapur untuk video angka: angka nol (elips), titik penanda kosong, angka teks (SVG), gulungan naskah, dan tanda "beda".
// Semua berpusat di (cx, cy) dan digambar di dalam <Kanvas>. `mulai` dalam frame scene.

// Angka nol besar: elips kapur setinggi `tinggi`.
export const Nol: React.FC<{ readonly cx: number; readonly cy: number; readonly tinggi?: number; readonly mulai?: number; readonly warna?: string; readonly tebal?: number }> = ({ cx, cy, tinggi = 300, mulai = 0, warna = KAPUR.chalk, tebal = 12 }) => {
  const ry = tinggi / 2;
  const rx = ry * 0.62;
  return <Garis kasar={1} d={`M${cx} ${cy - ry} a${rx} ${ry} 0 0 1 0 ${2 * ry} a${rx} ${ry} 0 0 1 0 ${-2 * ry}`} mulai={mulai} lama={26} warna={warna} tebal={tebal} />;
};

// Titik kecil penanda tempat kosong (bulatan terisi emas).
export const Titik: React.FC<{ readonly cx: number; readonly cy: number; readonly r?: number; readonly mulai?: number; readonly warna?: string }> = ({ cx, cy, r = 24, mulai = 0, warna = KAPUR.gold }) => (
  <Garis d={`M${cx - r} ${cy} a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0`} mulai={mulai} lama={10} warna={warna} tebal={8} isi={warna} />
);

// Teks angka di dalam SVG (font kapur), berpusat di (cx, cy).
export const AngkaTeks: React.FC<{ readonly cx: number; readonly cy: number; readonly teks: string; readonly size?: number; readonly warna?: string }> = ({ cx, cy, teks, size = 120, warna = KAPUR.chalk }) => (
  <text x={cx} y={cy + size * 0.32} textAnchor="middle" fontFamily={FONT_KAPUR} fontSize={size} fill={warna}>
    {teks}
  </text>
);

// Tanda "tidak sama" (≠) digambar dengan garis supaya tidak bergantung pada glyph font.
export const TandaBeda: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly warna?: string }> = ({ cx, cy, size = 70, mulai = 0, warna = KAPUR.orange }) => {
  const h = size / 2;
  return (
    <>
      <Garis kasar={1} d={`M${cx - h} ${cy - h * 0.35} L${cx + h} ${cy - h * 0.35}`} mulai={mulai} lama={8} warna={warna} tebal={9} />
      <Garis kasar={1} d={`M${cx - h} ${cy + h * 0.35} L${cx + h} ${cy + h * 0.35}`} mulai={mulai + 4} lama={8} warna={warna} tebal={9} />
      <Garis kasar={1} d={`M${cx + h * 0.4} ${cy - h * 1.1} L${cx - h * 0.4} ${cy + h * 1.1}`} mulai={mulai + 8} lama={8} warna={warna} tebal={9} />
    </>
  );
};

// Gulungan naskah: persegi panjang dengan dua gulungan di atas dan bawah.
export const Gulungan: React.FC<{ readonly cx: number; readonly cy: number; readonly lebar?: number; readonly tinggi?: number; readonly mulai?: number }> = ({ cx, cy, lebar = 440, tinggi = 330, mulai = 0 }) => {
  const x0 = cx - lebar / 2;
  const x1 = cx + lebar / 2;
  const y0 = cy - tinggi / 2;
  const y1 = cy + tinggi / 2;
  return (
    <>
      <Garis kasar={1} d={`M${x0} ${y0} L${x1} ${y0} L${x1} ${y1} L${x0} ${y1} Z`} mulai={mulai} lama={22} warna={KAPUR.coklat} tebal={9} isi="rgba(185, 138, 90, 0.16)" />
      <Garis kasar={1} d={`M${x0 - 16} ${y0} L${x1 + 16} ${y0}`} mulai={mulai + 6} lama={10} warna={KAPUR.coklatTua} tebal={14} />
      <Garis kasar={1} d={`M${x0 - 16} ${y1} L${x1 + 16} ${y1}`} mulai={mulai + 10} lama={10} warna={KAPUR.coklatTua} tebal={14} />
    </>
  );
};
