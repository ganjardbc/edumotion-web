import type React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { Garis } from "../Garis";
import { KAPUR } from "../palette";

// Objek kapur untuk video TsunamiTerjadi. Semua berpusat di (cx, cy); `size` = lebar kira-kira.
// Dirender di titik asal lalu digeser lewat transform, supaya goresan kasar (seed dari isi path) tetap stabil.

const CLAMP = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const ISI = "rgba(242, 240, 232, 0.14)";
const PASIR = "rgba(185, 138, 90, 0.22)";
const BELUM = 99999; // frame yang tidak pernah tercapai: aksi belum terjadi

// Penampang laut: air (permukaan y=-60), dasar laut y=100 dengan blok kanan yang bisa naik (`naik`, disertai panah emas ke atas),
// lalu garis gelombang di permukaan menyebar (`sebar`). Lebar lokal ±200.
export const PenampangLaut: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly naik?: number; readonly sebar?: number }> = ({ cx, cy, size = 400, mulai = 0, naik = BELUM, sebar = BELUM }) => {
  const frame = useCurrentFrame();
  const s = size / 400;
  const tebal = 5 / s;
  const dy = interpolate(frame, [naik, naik + 8], [0, -26], { ...CLAMP, easing: Easing.out(Easing.cubic) });
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      <Garis d="M-200 -60 L200 -60 L200 100 L-200 100 Z" mulai={mulai} lama={18} tebal={tebal} kasar={0.8} warna={KAPUR.es} isi={KAPUR.airIsi} />
      <Garis d="M-200 100 L-8 100 L-8 150 L-200 150 Z" mulai={mulai + 6} lama={14} tebal={tebal} kasar={0.8} isi={ISI} />
      <g transform={`translate(0 ${dy})`}>
        <Garis d="M8 100 L200 100 L200 150 L8 150 Z" mulai={mulai + 8} lama={14} tebal={tebal} kasar={0.8} isi={ISI} />
      </g>
      <Garis d="M100 70 L100 0 M80 22 L100 0 L120 22" mulai={naik} lama={10} tebal={tebal * 1.3} warna={KAPUR.gold} />
      <Garis d="M-200 -60 q25 -34 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0" mulai={sebar} lama={26} tebal={tebal * 1.3} warna={KAPUR.chalk} />
    </g>
  );
};

// Gelombang laut mendatar: garis sinus setinggi `tinggi` dengan `siklus` puncak, air di bawahnya, dasar laut `dasar` di bawah garis.
// Lebar lokal ±size/2, berpusat di garis air tenang.
export const GelombangLaut: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly tinggi?: number; readonly siklus?: number; readonly dasar?: number }> = ({ cx, cy, size = 320, mulai = 0, tinggi = 12, siklus = 2, dasar = 160 }) => {
  const w = size / 2;
  const puncak = Array.from({ length: 41 }, (_, i) => {
    const x = -w + (i / 40) * size;
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${(-tinggi * Math.sin((i / 40) * siklus * 2 * Math.PI)).toFixed(1)}`;
  }).join(" ");
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <Garis d={`${puncak} L${w} ${dasar} L${-w} ${dasar} Z`} mulai={mulai} lama={22} tebal={7} warna={KAPUR.es} isi={KAPUR.airIsi} />
      <Garis kasar={0.8} d={`M${-w} ${dasar} L${w} ${dasar} L${w} ${dasar + 40} L${-w} ${dasar + 40} Z`} mulai={mulai + 8} lama={14} tebal={6} isi={ISI} />
    </g>
  );
};

// Panah mendatar ke kanan sepanjang `panjang`, berpusat di (cx, cy).
export const PanahMendatar: React.FC<{ readonly cx: number; readonly cy: number; readonly panjang?: number; readonly mulai?: number; readonly warna?: string; readonly tebal?: number }> = ({ cx, cy, panjang = 200, mulai = 0, warna = KAPUR.gold, tebal = 10 }) => {
  const a = cx - panjang / 2;
  const b = cx + panjang / 2;
  return <Garis kasar={0.8} d={`M${a} ${cy} L${b} ${cy} M${b - 24} ${cy - 20} L${b} ${cy} L${b - 24} ${cy + 20}`} mulai={mulai} lama={14} tebal={tebal} warna={warna} />;
};

const DASAR = (x: number): number => 110 - 0.3 * (x + 200); // garis dasar laut miring ke pantai (lokal)

// Gelombang mendekati pantai: laut tenang di kiri, dasar laut makin dangkal ke kanan. Saat `menjulang`, gelombang menumpuk,
// bergeser ke pantai, dan puncaknya naik. Lebar lokal ±200.
export const Ombak: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly menjulang?: number }> = ({ cx, cy, size = 400, mulai = 0, menjulang = BELUM }) => {
  const frame = useCurrentFrame();
  const s = size / 400;
  const tebal = 5 / s;
  const p = interpolate(frame, [menjulang, menjulang + 45], [0, 1], { ...CLAMP, easing: Easing.out(Easing.quad) });
  const h = 14 + 150 * p;
  const c = 10 + 70 * p;
  const atas: string[] = [];
  for (let x = -200; x <= 140; x += 10) {
    const g = Math.exp(-(((x - c) / (x < c ? 90 : 38)) ** 2));
    atas.push(`${x === -200 ? "M" : "L"}${x} ${(-20 - h * g).toFixed(1)}`);
  }
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      <Garis d="M-200 110 L200 -10 L200 150 L-200 150 Z" mulai={mulai} lama={16} tebal={tebal} kasar={0.8} warna={KAPUR.coklat} isi={PASIR} />
      <Garis d={`${atas.join(" ")} L140 ${DASAR(140)} L-200 110 Z`} mulai={mulai + 8} lama={18} tebal={tebal * 1.2} warna={KAPUR.es} isi={KAPUR.airIsi} />
    </g>
  );
};

// Pantai landai dengan laut di kiri. Saat `surut`, garis air mundur ke kiri dan pantai terbuka. Lebar lokal ±200.
export const Pantai: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly surut?: number }> = ({ cx, cy, size = 400, mulai = 0, surut = BELUM }) => {
  const frame = useCurrentFrame();
  const s = size / 400;
  const tebal = 5 / s;
  const level = 40 + 40 * interpolate(frame, [surut, surut + 60], [0, 1], CLAMP);
  const tepi = -200 + (110 - level) / 0.3;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      <Garis d="M-200 110 L200 -10 L200 150 L-200 150 Z" mulai={mulai} lama={16} tebal={tebal} kasar={0.8} warna={KAPUR.coklat} isi={PASIR} />
      <Garis d={`M-200 ${level} L${tepi} ${level} L-200 110 Z`} mulai={mulai + 8} lama={14} tebal={tebal} warna={KAPUR.es} isi={KAPUR.airIsi} />
      <Garis d="M-200 0 q25 -22 50 0 t50 0 t50 0" mulai={mulai + 14} lama={16} tebal={tebal} warna={KAPUR.es} />
    </g>
  );
};
