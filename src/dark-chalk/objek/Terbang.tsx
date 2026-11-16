import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Garis } from "../Garis";
import { KAPUR } from "../palette";

// Objek kapur untuk video PesawatTerbang. Semua berpusat di (cx, cy); `size` = lebar kira-kira.
// Path digambar di titik asal lalu digeser lewat transform, supaya goresan kasar (seed dari isi path) tetap stabil saat bergerak.

const CLAMP = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const JENDELA = [-48, -36, -24, -12, 0, 12, 24, 36, 48];

// Pesawat tampak samping, menghadap kanan. Koordinat lokal ±104 x, -56..40 y. `miring` dalam derajat (negatif = hidung naik).
export const Pesawat: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly miring?: number }> = ({ cx, cy, size = 480, mulai = 0, miring = 0 }) => {
  const frame = useCurrentFrame();
  const s = size / 208;
  const jendela = interpolate(frame, [mulai + 30, mulai + 42], [0, 1], CLAMP);
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${miring}) scale(${s})`}>
      {/* sirip tegak dan sirip datar ekor */}
      <Garis d="M-82 -18 L-98 -56 L-82 -56 L-54 -20" mulai={mulai + 12} lama={12} tebal={4.5 / (s / 2.4)} kasar={1} isi="rgba(242, 240, 232, 0.10)" />
      <Garis d="M-86 0 L-104 10 L-88 12 L-72 4" mulai={mulai + 16} lama={10} tebal={4.5 / (s / 2.4)} kasar={1} />
      {/* badan */}
      <Garis
        d="M-92 -6 C-92 -16 -80 -20 -60 -20 L56 -20 C80 -20 96 -10 102 0 C96 10 82 14 60 14 L-62 14 C-82 14 -92 6 -92 -6 Z"
        mulai={mulai}
        lama={26}
        tebal={4.5 / (s / 2.4)}
        kasar={1}
        isi="rgba(242, 240, 232, 0.14)"
      />
      {/* garis hias, kaca kokpit */}
      <Garis d="M-82 4 L70 4" mulai={mulai + 24} lama={14} tebal={3} warna={KAPUR.es} />
      <Garis d="M74 -12 L86 -12 L94 -5 L78 -5 Z" mulai={mulai + 26} lama={8} tebal={3} warna={KAPUR.es} isi={KAPUR.esIsi} />
      {JENDELA.map((x) => (
        <circle key={x} cx={x} cy={-8} r={2.6} fill={KAPUR.es} opacity={jendela} />
      ))}
      {/* sayap menyapu ke belakang, mesin di bawahnya */}
      <Garis d="M14 6 L-30 38 L-12 38 L36 8" mulai={mulai + 18} lama={14} tebal={4.5 / (s / 2.4)} kasar={1} isi="rgba(242, 240, 232, 0.10)" />
      <Garis d="M-2 20 L22 20 C30 20 30 31 22 31 L-2 31 C-8 31 -8 20 -2 20 Z" mulai={mulai + 28} lama={10} tebal={4} kasar={0.8} warna={KAPUR.gold} isi="rgba(244, 185, 66, 0.2)" />
    </g>
  );
};

// Penampang sayap (menghadap kanan, tepi depan membulat di kiri, lengkung di atas).
// `miring` dalam derajat; positif = tepi depan naik (sudut serang).
export const Penampang: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly miring?: number }> = ({ cx, cy, size = 240, mulai = 0, miring = 10 }) => {
  const s = size / 200;
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${miring}) scale(${s})`}>
      <Garis d="M-100 0 C-100 -22 -40 -34 20 -26 C60 -20 90 -6 100 4 C60 10 -40 14 -100 0 Z" mulai={mulai} lama={22} tebal={6 / s} kasar={1} isi="rgba(242, 240, 232, 0.22)" />
    </g>
  );
};

// Aliran udara bergaris putus yang terus bergerak (mengalir), mulai tampak di `mulai`.
export const Aliran: React.FC<{ readonly d: string; readonly mulai?: number; readonly warna?: string; readonly tebal?: number; readonly laju?: number }> = ({ d, mulai = 0, warna = KAPUR.es, tebal = 6, laju = 6 }) => {
  const frame = useCurrentFrame();
  const muncul = interpolate(frame, [mulai, mulai + 10], [0, 1], CLAMP);
  return <path d={d} fill="none" stroke={warna} strokeWidth={tebal} strokeLinecap="round" strokeDasharray="34 26" strokeDashoffset={-(frame - mulai) * laju} opacity={muncul * 0.9} />;
};

// Sayap dengan sudut serang (sebab) atau sayap yang membelokkan udara ke bawah (akibat). Lebar lokal ±230.
export const SayapUdara: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly belok?: boolean }> = ({ cx, cy, size = 460, mulai = 0, belok = false }) => {
  const s = size / 460;
  const angin = mulai + 16;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      {belok ? (
        <>
          <Aliran d="M-230 -70 C-120 -78 40 -84 140 -40 C190 -18 210 20 225 70" mulai={angin} />
          <Aliran d="M-230 50 C-120 50 40 44 140 30 C185 40 205 70 215 110" mulai={angin + 8} />
          <Garis kasar={1} d="M238 60 L238 118 M218 98 L238 120 L258 98" mulai={angin + 14} lama={14} warna={KAPUR.gold} tebal={10} />
        </>
      ) : (
        <>
          <Garis d="M-200 0 L200 0" mulai={mulai + 10} lama={14} warna={KAPUR.abu} tebal={4} />
          <Garis d="M-118 0 A118 118 0 0 1 -116 -21" mulai={angin} lama={10} warna={KAPUR.gold} tebal={7} />
          {[-60, 0, 60].map((y, i) => (
            <Aliran key={y} d={`M-230 ${y - 30} L-160 ${y - 30}`} mulai={angin + i * 3} />
          ))}
        </>
      )}
      <Penampang cx={0} cy={0} size={320} mulai={mulai} miring={10} />
    </g>
  );
};

// Panah tebal ke atas atau bawah. `size` = tinggi. Berpusat di (cx, cy).
export const Panah: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly arah: "atas" | "bawah"; readonly mulai?: number; readonly warna?: string; readonly tebal?: number }> = ({ cx, cy, size = 170, arah, mulai = 0, warna = KAPUR.gold, tebal = 11 }) => {
  const h = size / 2;
  const k = arah === "atas" ? 1 : -1;
  const kepala = Math.min(40, size * 0.3);
  return (
    <g>
      <Garis kasar={1} d={`M${cx} ${cy + h * k} L${cx} ${cy - h * k}`} mulai={mulai} lama={12} warna={warna} tebal={tebal} />
      <Garis kasar={1} d={`M${cx - kepala} ${cy - h * k + kepala * k} L${cx} ${cy - h * k} L${cx + kepala} ${cy - h * k + kepala * k}`} mulai={mulai + 8} lama={8} warna={warna} tebal={tebal} />
    </g>
  );
};
