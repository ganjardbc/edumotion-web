import type React from "react";
import { Garis } from "../Garis";
import { KAPUR } from "../palette";

// Objek kapur untuk video DinosaurusPunah. Semua berpusat di (cx, cy); `size` = lebar kira-kira.

// Siluet dinosaurus (T-rex, menghadap kanan). Koordinat lokal ±100 x, -58..62 y.
export const Dinosaurus: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number }> = ({ cx, cy, size = 600, mulai = 0 }) => {
  const s = size / 200;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      <Garis
        d="M-100 20 C-70 10 -50 -20 -10 -30 C10 -34 20 -50 40 -58 L84 -58 C92 -56 92 -40 84 -36 L56 -30 C52 -14 50 -4 46 6 L34 10 L40 30 L50 62 L18 62 L16 40 L0 28 L-20 30 L-26 62 L-56 62 L-52 30 L-70 22 Z"
        mulai={mulai}
        lama={30}
        tebal={4}
        kasar={1.4}
        isi="rgba(242, 240, 232, 0.14)"
      />
      <circle cx={66} cy={-46} r={3.4} fill={KAPUR.chalk} />
    </g>
  );
};

// Batu angkasa berkawah dengan ekor api oranye di kiri-atas bila `api` benar.
export const Asteroid: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly api?: boolean; readonly mulai?: number }> = ({ cx, cy, size = 160, api = false, mulai = 0 }) => {
  const s = size / 110;
  // Path digambar di titik asal lalu digeser lewat transform, supaya goresan kasar (seed dari isi path) tidak berubah saat asteroid bergerak.
  const p = (a: number, b: number) => `${(a * s).toFixed(1)} ${(b * s).toFixed(1)}`;
  return (
    <g transform={`translate(${cx} ${cy})`}>
      {api ? (
        <>
          <Garis kasar={1} d={`M${p(-30, -40)} L${p(-85, -105)}`} mulai={mulai} lama={10} warna={KAPUR.orange} tebal={7} />
          <Garis kasar={1} d={`M${p(0, -48)} L${p(-40, -125)}`} mulai={mulai + 2} lama={10} warna={KAPUR.gold} tebal={7} />
          <Garis kasar={1} d={`M${p(-52, -10)} L${p(-125, -62)}`} mulai={mulai + 4} lama={10} warna={KAPUR.orange} tebal={7} />
        </>
      ) : null}
      <Garis d={`M${p(-50, 8)} L${p(-34, -32)} L${p(0, -48)} L${p(40, -34)} L${p(54, 6)} L${p(30, 40)} L${p(-20, 44)} Z`} mulai={mulai} lama={16} isi={KAPUR.abu} tebal={7} kasar={1.2} />
      <circle cx={-12 * s} cy={-8 * s} r={9 * s} fill="none" stroke={KAPUR.chalk} strokeWidth={4} opacity={0.8} />
      <circle cx={20 * s} cy={16 * s} r={6 * s} fill="none" stroke={KAPUR.chalk} strokeWidth={4} opacity={0.8} />
    </g>
  );
};

// Bumi bulat dengan dua benua.
export const Bumi: React.FC<{ readonly cx: number; readonly cy: number; readonly r?: number; readonly mulai?: number }> = ({ cx, cy, r = 140, mulai = 0 }) => (
  <g>
    <Garis kasar={1} d={`M${cx - r} ${cy} a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0`} mulai={mulai} lama={26} isi="rgba(90, 120, 196, 0.35)" tebal={8} />
    <Garis kasar={1} d={`M${cx - r * 0.55} ${cy - r * 0.2} q${r * 0.2} ${-r * 0.35} ${r * 0.5} ${-r * 0.1} q${r * 0.1} ${r * 0.3} ${-r * 0.2} ${r * 0.45} q${-r * 0.3} ${r * 0.05} ${-r * 0.3} ${-r * 0.35} Z`} mulai={mulai + 18} lama={14} warna={KAPUR.daun} isi={KAPUR.daunIsi} tebal={5} />
    <Garis kasar={1} d={`M${cx + r * 0.2} ${cy + r * 0.25} q${r * 0.3} ${-r * 0.1} ${r * 0.4} ${r * 0.15} q${-r * 0.1} ${r * 0.3} ${-r * 0.35} ${r * 0.25} Z`} mulai={mulai + 22} lama={12} warna={KAPUR.daun} isi={KAPUR.daunIsi} tebal={5} />
  </g>
);

// Awan debu: gugusan lingkaran abu. `buram` 0..1.
export const Debu: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly buram?: number }> = ({ cx, cy, size = 200, buram = 1 }) => {
  const u = size / 200;
  const bulat: ReadonlyArray<readonly [number, number, number]> = [[-60, 10, 44], [-14, -16, 58], [42, 6, 48], [80, 24, 32], [-96, 28, 28], [10, 30, 40]];
  return (
    <g opacity={buram}>
      {bulat.map(([x, y, r], i) => (
        <circle key={i} cx={cx + x * u} cy={cy + y * u} r={r * u} fill={KAPUR.debuIsi} stroke={KAPUR.abu} strokeWidth={5} />
      ))}
    </g>
  );
};

// Matahari emas dengan sinar. `tutup` 0..1 = seberapa tertutup awan debu.
export const Matahari: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly tutup?: number; readonly mulai?: number }> = ({ cx, cy, size = 180, tutup = 0, mulai = 0 }) => {
  const r = size * 0.28;
  const sinar = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2;
    return `M${(cx + Math.cos(a) * r * 1.35).toFixed(1)} ${(cy + Math.sin(a) * r * 1.35).toFixed(1)} L${(cx + Math.cos(a) * r * 1.8).toFixed(1)} ${(cy + Math.sin(a) * r * 1.8).toFixed(1)}`;
  }).join(" ");
  return (
    <g>
      <Garis kasar={1} d={`M${cx - r} ${cy} a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0`} mulai={mulai} lama={16} warna={KAPUR.gold} isi="rgba(244, 185, 66, 0.35)" tebal={7} />
      <Garis kasar={1} d={sinar} mulai={mulai + 10} lama={12} warna={KAPUR.gold} tebal={7} />
      {tutup > 0 ? <Debu cx={cx} cy={cy + size * 0.04} size={size * 1.15} buram={tutup} /> : null}
    </g>
  );
};

// Tumbuhan kecil. `layu` 0..1: batang menunduk dan daun turun. Berdiri di tanah (cx, cy = pangkal).
export const Tumbuhan: React.FC<{ readonly cx: number; readonly cy: number; readonly tinggi?: number; readonly layu?: number }> = ({ cx, cy, tinggi = 300, layu = 0 }) => {
  const atasX = cx + layu * tinggi * 0.45;
  const atasY = cy - tinggi * (1 - layu * 0.4);
  const ctrlX = cx;
  const ctrlY = cy - tinggi * (0.75 - layu * 0.2);
  const daun = (arah: number, pangkalT: number) => {
    const t = pangkalT;
    const bx = (1 - t) * (1 - t) * cx + 2 * (1 - t) * t * ctrlX + t * t * atasX;
    const by = (1 - t) * (1 - t) * cy + 2 * (1 - t) * t * ctrlY + t * t * atasY;
    const turun = layu * tinggi * 0.22;
    const ujungX = bx + arah * tinggi * 0.3;
    const ujungY = by - tinggi * 0.12 + turun;
    return `M${bx.toFixed(1)} ${by.toFixed(1)} Q${(bx + arah * tinggi * 0.15).toFixed(1)} ${(by - tinggi * 0.2 + turun * 0.4).toFixed(1)} ${ujungX.toFixed(1)} ${ujungY.toFixed(1)} Q${(bx + arah * tinggi * 0.18).toFixed(1)} ${(by + tinggi * 0.02).toFixed(1)} ${bx.toFixed(1)} ${by.toFixed(1)} Z`;
  };
  const warna = layu > 0.5 ? KAPUR.coklat : KAPUR.daun;
  const isi = layu > 0.5 ? "rgba(185, 138, 90, 0.3)" : KAPUR.daunIsi;
  return (
    <g fill="none" stroke={warna} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round">
      <path d={`M${cx} ${cy} Q${ctrlX} ${ctrlY} ${atasX} ${atasY}`} />
      <path d={daun(-1, 0.55)} fill={isi} />
      <path d={daun(1, 0.8)} fill={isi} />
    </g>
  );
};

// Termometer: tabung dengan cairan setinggi `level` 0..1.
export const Termometer: React.FC<{ readonly cx: number; readonly cy: number; readonly tinggi?: number; readonly level?: number; readonly mulai?: number }> = ({ cx, cy, tinggi = 300, level = 0.8, mulai = 0 }) => {
  const atas = cy - tinggi / 2;
  const dasar = cy + tinggi / 2 - 30;
  const isiTinggi = (dasar - atas - 20) * level;
  return (
    <g>
      <Garis kasar={1} d={`M${cx - 20} ${dasar} L${cx - 20} ${atas + 20} Q${cx - 20} ${atas} ${cx} ${atas} Q${cx + 20} ${atas} ${cx + 20} ${atas + 20} L${cx + 20} ${dasar}`} mulai={mulai} lama={16} tebal={7} />
      <Garis kasar={1} d={`M${cx - 20} ${dasar} a42 42 0 1 0 40 0`} mulai={mulai + 10} lama={14} tebal={7} />
      <rect x={cx - 8} y={dasar - isiTinggi} width={16} height={isiTinggi + 20} rx={6} fill={KAPUR.es} />
      <circle cx={cx} cy={dasar + 20} r={24} fill={KAPUR.es} />
    </g>
  );
};

// Kepingan salju enam sinar.
export const Salju: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number }> = ({ cx, cy, size = 200, mulai = 0 }) => {
  const r = size / 2;
  const d = Array.from({ length: 6 }, (_, i) => {
    const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
    const ex = cx + Math.cos(a) * r;
    const ey = cy + Math.sin(a) * r;
    const mx = cx + Math.cos(a) * r * 0.62;
    const my = cy + Math.sin(a) * r * 0.62;
    const b1x = mx + Math.cos(a + 0.8) * r * 0.28;
    const b1y = my + Math.sin(a + 0.8) * r * 0.28;
    const b2x = mx + Math.cos(a - 0.8) * r * 0.28;
    const b2y = my + Math.sin(a - 0.8) * r * 0.28;
    return `M${cx} ${cy} L${ex.toFixed(1)} ${ey.toFixed(1)} M${mx.toFixed(1)} ${my.toFixed(1)} L${b1x.toFixed(1)} ${b1y.toFixed(1)} M${mx.toFixed(1)} ${my.toFixed(1)} L${b2x.toFixed(1)} ${b2y.toFixed(1)}`;
  }).join(" ");
  return <Garis kasar={1} d={d} mulai={mulai} lama={24} warna={KAPUR.es} tebal={7} />;
};
