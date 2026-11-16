import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Garis } from "../Garis";
import { KAPUR } from "../palette";

// Objek kapur untuk video LubangHitam. Semua berpusat di (cx, cy); `size` = lebar kira-kira.
// Path digambar di titik asal lalu digeser lewat transform, supaya goresan kasar tetap stabil.

const CLAMP = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const HITAM = "rgba(0, 0, 0, 0.88)";

// Lubang hitam: lingkaran gelap besar dengan cincin cahaya miring (cakram) di sekelilingnya.
// Koordinat lokal: jari-jari lubang 100, cincin lebar ±210. `terang` menebalkan cincin (untuk Cta).
export const LubangHitam: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly cincin?: boolean; readonly terang?: boolean }> = ({ cx, cy, size = 400, mulai = 0, cincin = true, terang = false }) => {
  const s = size / 420;
  const tebal = (terang ? 11 : 6) / s;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      <Garis d="M-100 0 a100 100 0 1 0 200 0 a100 100 0 1 0 -200 0" mulai={mulai} lama={26} tebal={6 / s} kasar={1} isi={HITAM} />
      {cincin ? (
        <>
          <Garis d="M-208 8 C-190 -52 190 -52 208 8 C190 68 -190 68 -208 8 Z" mulai={mulai + 14} lama={30} tebal={tebal} kasar={1} warna={terang ? KAPUR.gold : KAPUR.orange} />
          <Garis d="M-150 -6 C-120 -44 120 -44 150 -6" mulai={mulai + 30} lama={16} tebal={tebal * 0.7} kasar={0.8} warna={KAPUR.gold} />
        </>
      ) : null}
    </g>
  );
};

// Bintang besar yang mengerut. `kerut` = frame saat mulai runtuh; setelahnya jari-jari mengecil dari 120 ke 16.
export const BintangRuntuh: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly kerut?: number }> = ({ cx, cy, size = 240, mulai = 0, kerut = 60 }) => {
  const frame = useCurrentFrame();
  const s = size / 240;
  const muncul = interpolate(frame, [mulai, mulai + 14], [0, 1], CLAMP);
  const p = interpolate(frame, [kerut, kerut + 40], [0, 1], CLAMP);
  const r = 120 - p * 104;
  const getar = frame > kerut && frame < kerut + 40 ? Math.sin(frame * 2.2) * 2 : 0;
  const sinar = Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4);
  return (
    <g transform={`translate(${cx + getar} ${cy}) scale(${s})`} opacity={muncul}>
      <circle r={r} fill="rgba(237, 120, 83, 0.35)" stroke={KAPUR.orange} strokeWidth={7 / s} />
      {sinar.map((a) => (
        <line key={a} x1={Math.cos(a) * (r + 14)} y1={Math.sin(a) * (r + 14)} x2={Math.cos(a) * (r + 34)} y2={Math.sin(a) * (r + 34)} stroke={KAPUR.gold} strokeWidth={6 / s} strokeLinecap="round" opacity={1 - p} />
      ))}
    </g>
  );
};

// Bola yang terulur memanjang seperti mi. `ulur` = frame mulai memanjang (selama 40 frame); bola berpusat di (cx, cy).
export const Spageti: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly ulur?: number }> = ({ cx, cy, size = 120, mulai = 0, ulur = 40 }) => {
  const frame = useCurrentFrame();
  const muncul = interpolate(frame, [mulai, mulai + 12], [0, 1], CLAMP);
  const p = interpolate(frame, [ulur, ulur + 40], [0, 1], CLAMP);
  const rx = size / 2 + p * size * 1.3;
  const ry = size / 2 - p * size * 0.36;
  return (
    <g opacity={muncul}>
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={KAPUR.esIsi} stroke={KAPUR.es} strokeWidth={8} />
    </g>
  );
};

// Tanda silang kapur (menandai "tidak bisa"). Berpusat di (cx, cy).
export const Silang: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number }> = ({ cx, cy, size = 90, mulai = 0 }) => {
  const h = size / 2;
  return (
    <g>
      <Garis kasar={1} d={`M${cx - h} ${cy - h} L${cx + h} ${cy + h}`} mulai={mulai} lama={8} warna={KAPUR.orange} tebal={12} />
      <Garis kasar={1} d={`M${cx + h} ${cy - h} L${cx - h} ${cy + h}`} mulai={mulai + 6} lama={8} warna={KAPUR.orange} tebal={12} />
    </g>
  );
};
