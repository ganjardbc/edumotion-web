import type React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { Garis } from "../Garis";
import { KAPUR } from "../palette";

// Objek kapur video BadakKrakatau: gunung api (getar + asap) dan garis waktu 1857-1949.
// Berpusat di (cx, cy); `size` = lebar kira-kira. Dirender di titik asal lalu digeser lewat transform (goresan kasar stabil).

const CLAMP = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const ISI = "rgba(242, 240, 232, 0.14)";
const BELUM = 99999; // frame yang tidak pernah tercapai: aksi belum terjadi

// Gunung api: kerucut berkawah. Lebar lokal ±200, dasar y=100, kawah y≈-100.
// `getar`: gunung bergetar ±6 lalu mereda (45 frame). `asap`: tiga kepul asap abu naik dari kawah.
export const GunungApi: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly getar?: number; readonly asap?: number }> = ({ cx, cy, size = 400, mulai = 0, getar = BELUM, asap = BELUM }) => {
  const frame = useCurrentFrame();
  const s = size / 400;
  const tebal = 6 / s;
  const g = frame >= getar && frame < getar + 45 ? Math.sin((frame - getar) * 1.9) * 6 * (1 - (frame - getar) / 45) : 0;
  return (
    <g transform={`translate(${cx + g} ${cy}) scale(${s})`}>
      <Garis kasar={0.9} d="M-200 100 L-50 -100 L-22 -82 L22 -88 L50 -100 L200 100 Z" mulai={mulai} lama={28} tebal={tebal} warna={KAPUR.coklat} isi={ISI} />
      {[0, 1, 2].map((i) => {
        const t = interpolate(frame, [asap + i * 14, asap + i * 14 + 70], [0, 1], { ...CLAMP, easing: Easing.out(Easing.quad) });
        if (t <= 0) return null;
        return <circle key={i} cx={(i - 1) * 34 + t * (i - 1) * 40} cy={-110 - t * 190} r={26 + t * 40} fill={KAPUR.debuIsi} fillOpacity={0.5 * (1 - t)} stroke={KAPUR.abu} strokeWidth={tebal} opacity={1 - t * 0.8} />;
      })}
    </g>
  );
};

export const TAHUN_AWAL = 1857;
export const TAHUN_AKHIR = 1949;
// Posisi x layar untuk `tahun` pada garis waktu berpusat di `cx` selebar `lebar`.
export const xWaktu = (tahun: number, cx: number, lebar: number, awal = TAHUN_AWAL, akhir = TAHUN_AKHIR): number => cx - lebar / 2 + ((tahun - awal) / (akhir - awal)) * lebar;

// Garis waktu 1857-1949: garis dasar abu, garis emas terisi dari kiri saat `isi`, tanda tegak di tiap tahun `tanda`
// (muncul saat garis emas sampai). `tanda.warna` opsional (bawaan kapur putih).
export const GarisWaktu: React.FC<{
  readonly cx: number;
  readonly cy: number;
  readonly lebar?: number;
  readonly mulai?: number;
  readonly isi?: number;
  readonly lamaIsi?: number;
  // Rentang tahun yang ditampilkan (bawaan 1857-1949).
  readonly awal?: number;
  readonly akhir?: number;
  readonly tanda: ReadonlyArray<{ readonly tahun: number; readonly warna?: string }>;
}> = ({ cx, cy, lebar = 780, mulai = 0, isi = BELUM, lamaIsi = 60, awal = TAHUN_AWAL, akhir = TAHUN_AKHIR, tanda }) => {
  const x0 = xWaktu(awal, cx, lebar, awal, akhir);
  const x1 = xWaktu(akhir, cx, lebar, awal, akhir);
  return (
    <>
      <Garis kasar={0.6} d={`M${x0} ${cy} L${x1} ${cy}`} mulai={mulai} lama={20} warna={KAPUR.abu} tebal={8} />
      <Garis kasar={0.6} d={`M${x0} ${cy} L${x1} ${cy}`} mulai={isi} lama={lamaIsi} warna={KAPUR.gold} tebal={10} />
      {tanda.map((t) => {
        const x = xWaktu(t.tahun, cx, lebar, awal, akhir);
        const at = isi + ((t.tahun - awal) / (akhir - awal)) * lamaIsi;
        return <Garis key={t.tahun} d={`M${x} ${cy - 24} L${x} ${cy + 24}`} mulai={at} lama={8} warna={t.warna ?? KAPUR.chalk} tebal={9} />;
      })}
    </>
  );
};
