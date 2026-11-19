import type React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { Garis } from "../Garis";
import { KAPUR } from "../palette";

// Objek kapur untuk video BorobudurDibangun. Semua berpusat di (cx, cy); `size` = lebar kira-kira.
// Path digambar di titik asal lalu digeser lewat transform, supaya goresan kasar (seed dari isi path) tetap stabil saat bergerak.

const CLAMP = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const ISI = "rgba(242, 240, 232, 0.14)";

const persegi = (w: number, y1: number, y2: number) => `M${-w} ${y1} L${w} ${y1} L${w} ${y2} L${-w} ${y2} Z`;

// Lima teras persegi (bawah ke atas), kubah, ujung stupa. Koordinat lokal: lebar ±200, y -108..110.
const TERAS = [persegi(200, 78, 110), persegi(172, 48, 78), persegi(146, 20, 48), persegi(120, -8, 20), persegi(64, -26, -8)];
const KUBAH = "M-34 -26 A34 34 0 0 1 34 -26 Z";
const TUBUH = [...TERAS, KUBAH];

// Stupa kecil di pinggir tiap teras: [x awal sisi kanan, y, jari-jari].
const STUPA_KECIL: ReadonlyArray<readonly [number, number, number]> = [
  [78, -8, 12],
  [124, 20, 9],
  [150, 48, 9],
  [176, 78, 10],
];

// Borobudur tampak depan (teras bertingkat, kubah, ujung emas). Tiap bagian muncul berurutan dari bawah, selang `jeda` frame.
// `jatuh`: tiap teras meluncur jatuh dari atas ke tempatnya (dipakai untuk "disusun"); bila tidak, digambar garis demi garis.
export const Borobudur: React.FC<{
  readonly cx: number;
  readonly cy: number;
  readonly size?: number;
  readonly mulai?: number;
  readonly jeda?: number;
  readonly jatuh?: boolean;
}> = ({ cx, cy, size = 760, mulai = 0, jeda = 10, jatuh = false }) => {
  const frame = useCurrentFrame();
  const s = size / 400;
  const tebal = 5 / s;
  const lama = jatuh ? 6 : 18;
  const hias = mulai + TUBUH.length * jeda + 4;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      {TUBUH.map((d, i) => {
        const t = mulai + i * jeda;
        const geser = jatuh ? interpolate(frame, [t, t + 14], [-300, 0], { ...CLAMP, easing: Easing.out(Easing.cubic) }) : 0;
        return (
          <g key={i} transform={`translate(0 ${geser})`}>
            <Garis d={d} mulai={t} lama={lama} tebal={tebal} kasar={0.8} isi={ISI} />
          </g>
        );
      })}
      {(() => {
        const t = mulai + TUBUH.length * jeda;
        const geser = jatuh ? interpolate(frame, [t, t + 14], [-300, 0], { ...CLAMP, easing: Easing.out(Easing.cubic) }) : 0;
        return (
          <g transform={`translate(0 ${geser})`}>
            <Garis d="M0 -60 L0 -92" mulai={t} lama={lama} tebal={tebal} kasar={0.6} />
            <Garis d="M-8 -92 L8 -92 L0 -108 Z" mulai={t + 4} lama={lama} tebal={tebal * 0.8} warna={KAPUR.gold} isi="rgba(244, 185, 66, 0.3)" />
          </g>
        );
      })()}
      {STUPA_KECIL.map(([a, y, r], i) => (
        <g key={i}>
          <Garis d={`M${a} ${y} a${r} ${r} 0 0 1 ${2 * r} 0`} mulai={hias + i * 3} lama={10} tebal={3.5 / s} warna={KAPUR.es} />
          <Garis d={`M${-a} ${y} a${r} ${r} 0 0 0 ${-2 * r} 0`} mulai={hias + i * 3} lama={10} tebal={3.5 / s} warna={KAPUR.es} />
        </g>
      ))}
    </g>
  );
};

// Satu blok batu. `kasar`: batu mentah bentuk tak beraturan; `rapi`: balok yang sudah dipahat (tampak tiga sisi).
// Lebar lokal sekitar 110; `size` = lebar.
export const BlokBatu: React.FC<{
  readonly cx: number;
  readonly cy: number;
  readonly size?: number;
  readonly mulai?: number;
  readonly jenis?: "kasar" | "rapi";
  readonly warna?: string;
}> = ({ cx, cy, size = 120, mulai = 0, jenis = "rapi", warna = KAPUR.chalk }) => {
  const s = size / 110;
  const tebal = 5 / s;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      {jenis === "kasar" ? (
        <>
          <Garis d="M-52 -14 L-30 -30 L20 -26 L54 -18 L50 14 L38 32 L-20 30 L-54 20 Z" mulai={mulai} lama={20} tebal={tebal} kasar={1.6} warna={warna} isi="rgba(169, 173, 185, 0.22)" />
          <Garis d="M-14 -22 L-6 -4 L-18 10" mulai={mulai + 14} lama={8} tebal={3 / s} warna={KAPUR.abu} />
          <Garis d="M24 6 L34 -2" mulai={mulai + 18} lama={6} tebal={3 / s} warna={KAPUR.abu} />
        </>
      ) : (
        <>
          <Garis d="M-50 -20 L50 -20 L50 30 L-50 30 Z" mulai={mulai} lama={14} tebal={tebal} kasar={0.8} warna={warna} isi="rgba(242, 240, 232, 0.14)" />
          <Garis d="M-50 -20 L-34 -34 L66 -34 L50 -20" mulai={mulai + 8} lama={10} tebal={tebal} kasar={0.8} warna={warna} isi="rgba(242, 240, 232, 0.26)" />
          <Garis d="M50 -20 L66 -34 L66 16 L50 30" mulai={mulai + 12} lama={10} tebal={tebal} kasar={0.8} warna={warna} isi="rgba(242, 240, 232, 0.07)" />
        </>
      )}
    </g>
  );
};

// Tumpukan batu 3-2-1 (piramida kecil), tiap batu muncul berurutan dari bawah. `size` = lebar.
export const Tumpukan: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number }> = ({ cx, cy, size = 140, mulai = 0 }) => {
  const s = size / 130;
  const tebal = 5 / s;
  const baris: ReadonlyArray<ReadonlyArray<number>> = [[-44, 0, 44], [-22, 22], [0]];
  let n = 0;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      {baris.map((xs, r) =>
        xs.map((x) => {
          const y = 26 - r * 28;
          const i = n++;
          return <Garis key={`${r}-${x}`} d={`M${x - 20} ${y - 12} L${x + 20} ${y - 12} L${x + 20} ${y + 12} L${x - 20} ${y + 12} Z`} mulai={mulai + i * 5} lama={10} tebal={tebal} kasar={0.7} isi="rgba(242, 240, 232, 0.16)" />;
        }),
      )}
    </g>
  );
};

// Dua balok bertumpuk. `semen`: ada lapisan semen abu di antaranya; selain itu, balok bawah punya tonjolan dan balok atas
// punya lekukan yang saling mengunci. Balok atas jatuh ke tempatnya mulai frame `jatuh`. `size` = lebar balok.
export const SusunanBlok: React.FC<{
  readonly cx: number;
  readonly cy: number;
  readonly size?: number;
  readonly mulai?: number;
  readonly jatuh?: number;
  readonly semen?: boolean;
}> = ({ cx, cy, size = 220, mulai = 0, jatuh = 0, semen = false }) => {
  const frame = useCurrentFrame();
  const s = size / 200;
  const tebal = 5 / s;
  const geser = interpolate(frame, [jatuh, jatuh + 14], [-80, 0], { ...CLAMP, easing: Easing.out(Easing.cubic) });
  const bawah = semen ? "M-100 14 L100 14 L100 84 L-100 84 Z" : "M-100 0 L-25 0 L-25 -16 L25 -16 L25 0 L100 0 L100 70 L-100 70 Z";
  const atas = semen ? "M-100 -70 L100 -70 L100 0 L-100 0 Z" : "M-100 -70 L100 -70 L100 0 L25 0 L25 -16 L-25 -16 L-25 0 L-100 0 Z";
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      <Garis d={bawah} mulai={mulai} lama={16} tebal={tebal} kasar={0.8} isi={ISI} />
      <g transform={`translate(0 ${geser})`}>
        <Garis d={atas} mulai={jatuh} lama={8} tebal={tebal} kasar={0.8} isi={ISI} warna={semen ? KAPUR.chalk : KAPUR.gold} />
      </g>
      {semen ? <Garis d="M-100 0 L100 0 L100 14 L-100 14 Z" mulai={jatuh + 14} lama={8} tebal={tebal * 0.6} warna={KAPUR.abu} isi={KAPUR.debuIsi} /> : null}
    </g>
  );
};
