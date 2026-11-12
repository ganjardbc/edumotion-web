import type React from "react";
import { Garis } from "../Garis";
import { KAPUR } from "../palette";

// Objek kapur video BateraiCepatHabis: Hape, Baterai, SinyalBar, Wifi. Semua berpusat di (cx, cy).

// Hape tegak. `terang` 0..1: layar makin kuning dan memancarkan sinar. `aplikasi`: kotak-kotak ikon aplikasi di layar.
export const Hape: React.FC<{ readonly cx: number; readonly cy: number; readonly tinggi?: number; readonly terang?: number; readonly aplikasi?: boolean; readonly mulai?: number }> = ({ cx, cy, tinggi = 360, terang = 0.15, aplikasi = false, mulai = 0 }) => {
  const w = tinggi * 0.52;
  const x = cx - w / 2;
  const y = cy - tinggi / 2;
  const r = w * 0.14;
  const badan = `M${x + r} ${y} L${x + w - r} ${y} Q${x + w} ${y} ${x + w} ${y + r} L${x + w} ${y + tinggi - r} Q${x + w} ${y + tinggi} ${x + w - r} ${y + tinggi} L${x + r} ${y + tinggi} Q${x} ${y + tinggi} ${x} ${y + tinggi - r} L${x} ${y + r} Q${x} ${y} ${x + r} ${y} Z`;
  const layar = { x: x + w * 0.1, y: y + tinggi * 0.09, w: w * 0.8, h: tinggi * 0.78 };
  const sinar = terang > 0.6 ? [-70, -35, 0, 35, 70, 110, 145, 180, 215, 250] : [];
  return (
    <g>
      <Garis kasar={1} d={badan} mulai={mulai} lama={18} tebal={8} />
      <rect x={layar.x} y={layar.y} width={layar.w} height={layar.h} rx={r * 0.5} fill={KAPUR.gold} fillOpacity={0.1 + 0.8 * terang} stroke={KAPUR.chalk} strokeOpacity={0.6} strokeWidth={4} />
      {aplikasi
        ? [0, 1, 2].flatMap((b) =>
            [0, 1].map((k) => <rect key={`${b}${k}`} x={layar.x + layar.w * (0.14 + k * 0.45)} y={layar.y + layar.h * (0.1 + b * 0.28)} width={layar.w * 0.32} height={layar.w * 0.32} rx={8} fill={[KAPUR.es, KAPUR.daun, KAPUR.orange][b]} fillOpacity={0.55} stroke={KAPUR.chalk} strokeWidth={3} />)
          )
        : null}
      {sinar.map((deg, i) => {
        const t = (deg * Math.PI) / 180;
        const c = Math.cos(t);
        const sn = Math.sin(t);
        return <line key={i} x1={cx + c * w * 0.78} y1={cy + sn * tinggi * 0.6} x2={cx + c * w * 1.02} y2={cy + sn * tinggi * 0.7} stroke={KAPUR.gold} strokeWidth={7} strokeLinecap="round" opacity={terang} />;
      })}
    </g>
  );
};

// Baterai mendatar. `level` 0..1 = isi; `kapasitas` 0..1 = bagian yang masih bisa diisi (sisanya putus-putus, tanda baterai menua).
export const Baterai: React.FC<{ readonly cx: number; readonly cy: number; readonly lebar?: number; readonly level?: number; readonly kapasitas?: number; readonly warna?: string; readonly mulai?: number }> = ({ cx, cy, lebar = 400, level = 1, kapasitas = 1, warna, mulai = 0 }) => {
  const h = lebar * 0.5;
  const x = cx - lebar / 2;
  const y = cy - h / 2;
  const dalamX = x + 14;
  const dalamW = lebar - 28;
  const isiW = Math.max(0, dalamW * level * kapasitas);
  const w = warna ?? (level * kapasitas < 0.3 ? KAPUR.orange : KAPUR.daun);
  return (
    <g>
      <Garis kasar={1} d={`M${x} ${y} L${x + lebar} ${y} L${x + lebar} ${y + h} L${x} ${y + h} Z`} mulai={mulai} lama={18} tebal={8} />
      <Garis kasar={1} d={`M${x + lebar + 6} ${cy - h * 0.18} L${x + lebar + 28} ${cy - h * 0.18} L${x + lebar + 28} ${cy + h * 0.18} L${x + lebar + 6} ${cy + h * 0.18}`} mulai={mulai + 10} lama={10} tebal={8} />
      {kapasitas < 1 ? <rect x={dalamX + dalamW * kapasitas} y={y + 14} width={dalamW * (1 - kapasitas)} height={h - 28} fill="none" stroke={KAPUR.abu} strokeWidth={4} strokeDasharray="10 12" /> : null}
      {isiW > 0 ? <rect x={dalamX} y={y + 14} width={isiW} height={h - 28} rx={6} fill={w} fillOpacity={0.75} /> : null}
    </g>
  );
};

// Batang sinyal seluler. `level` 0..4 = jumlah batang menyala.
export const SinyalBar: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly level?: number }> = ({ cx, cy, size = 200, level = 4 }) => {
  const lebar = size / 6;
  return (
    <g>
      {[1, 2, 3, 4].map((n) => {
        const h = size * (0.2 + 0.2 * n);
        const x = cx - size / 2 + (n - 1) * (lebar + size * 0.08);
        const nyala = n <= level;
        return <rect key={n} x={x} y={cy + size / 2 - h} width={lebar} height={h} rx={6} fill={nyala ? KAPUR.gold : "none"} fillOpacity={0.8} stroke={nyala ? KAPUR.gold : KAPUR.abu} strokeOpacity={nyala ? 1 : 0.7} strokeWidth={6} />;
      })}
    </g>
  );
};

// Lambang Wi-Fi: titik dan tiga busur.
export const Wifi: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number }> = ({ cx, cy, size = 200, mulai = 0 }) => {
  const dasar = cy + size * 0.35;
  const busur = (r: number) => {
    const a = Math.PI / 4;
    return `M${cx - r * Math.sin(a)} ${dasar - r * Math.cos(a)} A${r} ${r} 0 0 1 ${cx + r * Math.sin(a)} ${dasar - r * Math.cos(a)}`;
  };
  return (
    <g>
      <Garis kasar={1} d={busur(size * 0.9)} mulai={mulai + 12} lama={12} warna={KAPUR.es} tebal={9} />
      <Garis kasar={1} d={busur(size * 0.62)} mulai={mulai + 6} lama={12} warna={KAPUR.es} tebal={9} />
      <Garis kasar={1} d={busur(size * 0.34)} mulai={mulai} lama={12} warna={KAPUR.es} tebal={9} />
      <circle cx={cx} cy={dasar} r={size * 0.07} fill={KAPUR.es} />
    </g>
  );
};
