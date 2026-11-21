import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Garis } from "../Garis";
import { KAPUR } from "../palette";

// Objek kapur video BadakJawaTinggal: peta Asia kasar dengan titik sebaran, Pulau Jawa dengan pin,
// dan semenanjung Ujung Kulon. Berpusat di (cx, cy); `size` = lebar kira-kira. Bentuk kasar, bukan peta akurat.

const CLAMP = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const ISI = "rgba(242, 240, 232, 0.14)";
const BELUM = 99999; // frame yang tidak pernah tercapai: aksi belum terjadi

// Titik sebaran pada peta Asia (koordinat lokal): kelompok India timur laut, lalu Asia Tenggara. Titik ke-VIETNAM = Cat Tien, ke-JAWA = Ujung Kulon.
const TITIK: ReadonlyArray<readonly [number, number]> = [
  [-5, -100], [25, -60], [-40, -80], // 0-2 India timur laut
  [60, -50], [130, 10], [190, -40], [190, 90], [160, 190], [110, 200], [150, 270], // 3-9 Asia Tenggara
  [270, 95], // 10 Vietnam
  [215, 360], // 11 Jawa (Ujung Kulon)
];
const VIETNAM = 10;
const JAWA = 11;

// Peta Asia kasar (India, daratan Asia Tenggara, Sumatra, Jawa). Lebar lokal ±400, tinggi ≈ -230..370.
// `muncul`: titik muncul satu per satu. `redup`: titik memudar satu per satu kecuali Vietnam dan Jawa. `coret`: tanda silang di titik Vietnam
// (lalu titiknya ikut padam). `sendiri`: hanya titik Jawa yang tersisa dan berdenyut.
export const PetaAsia: React.FC<{
  readonly cx: number;
  readonly cy: number;
  readonly size?: number;
  readonly mulai?: number;
  readonly muncul?: number;
  readonly redup?: number;
  readonly coret?: number;
}> = ({ cx, cy, size = 860, mulai = 0, muncul = BELUM, redup = BELUM, coret = BELUM }) => {
  const frame = useCurrentFrame();
  const s = size / 800;
  const tebal = 5 / s;
  return (
    <g transform={`translate(${cx + 32 * s} ${cy - 70 * s}) scale(${s})`}>
      <Garis kasar={0.8} tebal={tebal} mulai={mulai} lama={40} isi={ISI} d="M-400 -170 L-300 -230 L-170 -210 L-60 -190 L60 -200 L170 -180 L260 -130 L290 -40 L330 40 L300 120 L230 150 L180 120 L160 170 L190 250 L150 250 L120 170 L100 90 L60 30 L20 -20 L-20 40 L-70 70 L-120 120 L-150 230 L-175 120 L-230 20 L-290 -50 L-360 -90 Z" />
      <Garis kasar={0.8} tebal={tebal} mulai={mulai + 20} lama={20} isi={ISI} d="M60 170 L100 230 L190 330 L170 340 L90 280 L40 210 Z" />
      <Garis kasar={0.8} tebal={tebal} mulai={mulai + 28} lama={14} isi={ISI} d="M195 350 L330 345 L335 368 L195 372 Z" />
      {TITIK.map(([x, y], i) => {
        const lahir = muncul + i * 5;
        let op = interpolate(frame, [lahir, lahir + 8], [0, 1], CLAMP);
        const sisa = i === VIETNAM ? coret + 14 : i === JAWA ? BELUM : redup + i * 6;
        op *= 1 - interpolate(frame, [sisa, sisa + 10], [0, 1], CLAMP);
        const denyut = i === JAWA && frame > redup + 40 ? 1 + 0.18 * Math.sin(frame / 5) : 1;
        return op > 0 ? <circle key={i} cx={x} cy={y} r={15 * denyut} fill={i === JAWA ? KAPUR.orange : KAPUR.gold} opacity={op} /> : null;
      })}
      <Garis tebal={tebal * 1.6} warna={KAPUR.orange} mulai={coret} lama={8} d={`M${TITIK[VIETNAM][0] - 28} ${TITIK[VIETNAM][1] - 28} L${TITIK[VIETNAM][0] + 28} ${TITIK[VIETNAM][1] + 28}`} />
      <Garis tebal={tebal * 1.6} warna={KAPUR.orange} mulai={coret + 5} lama={8} d={`M${TITIK[VIETNAM][0] + 28} ${TITIK[VIETNAM][1] - 28} L${TITIK[VIETNAM][0] - 28} ${TITIK[VIETNAM][1] + 28}`} />
    </g>
  );
};

// Pin menyala (cincin berdenyut + titik) di (x, y) lokal.
const Pin: React.FC<{ readonly x: number; readonly y: number; readonly mulai: number; readonly tebal: number }> = ({ x, y, mulai, tebal }) => {
  const frame = useCurrentFrame();
  if (frame < mulai) return null;
  const t = (frame - mulai) % 36;
  const r = 20 + t * 1.6;
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="none" stroke={KAPUR.orange} strokeWidth={tebal} opacity={1 - t / 36} />
      <circle cx={x} cy={y} r={18} fill={KAPUR.orange} opacity={interpolate(frame, [mulai, mulai + 6], [0, 1], CLAMP)} />
    </g>
  );
};

// Pulau Jawa memanjang barat-timur. Ujung barat (semenanjung Ujung Kulon) ada di x lokal -380. Lebar lokal ±400.
export const PulauJawa: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly pin?: number }> = ({ cx, cy, size = 800, mulai = 0, pin = BELUM }) => {
  const s = size / 800;
  const tebal = 6 / s;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      <Garis kasar={0.8} tebal={tebal} mulai={mulai} lama={40} isi={ISI} d="M-395 15 L-365 -28 L-300 -38 L-200 -30 L-100 -48 L0 -36 L100 -48 L200 -32 L300 -42 L392 -22 L382 16 L300 32 L200 26 L100 42 L0 30 L-100 42 L-200 26 L-290 32 L-340 58 L-378 52 Z" />
      <Pin x={-372} y={20} mulai={pin} tebal={tebal} />
    </g>
  );
};

// Semenanjung Ujung Kulon diperbesar (menjorok ke barat). `batas`: garis batas emas melingkari semenanjung. Lebar lokal ±200.
export const Semenanjung: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly batas?: number }> = ({ cx, cy, size = 400, mulai = 0, batas = BELUM }) => {
  const s = size / 400;
  const tebal = 6 / s;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      <Garis kasar={0.9} tebal={tebal} mulai={mulai} lama={34} isi={ISI} d="M200 -90 L120 -100 L40 -80 L-40 -92 L-110 -60 L-170 -20 L-195 30 L-150 70 L-90 60 L-40 90 L40 80 L120 96 L200 90 Q170 40 205 0 Q175 -45 200 -90" />
      <Garis kasar={0.9} tebal={tebal * 1.5} warna={KAPUR.gold} mulai={batas} lama={30} d="M-60 -125 C-140 -110 -230 -40 -235 30 C-235 110 -140 130 -60 125 C20 120 60 110 60 0 C60 -100 20 -135 -60 -125 Z" />
    </g>
  );
};

// Pohon palem kapur (video BadakJawaLangka): lima pelepah berbentuk lensa dari pucuk (cx, cy), batang turun ke `dasar` (y).
// `size` = lebar tajuk kira-kira. Lebar lokal ±230.
const PELEPAH = [
  "M0 0 Q-110 -80 -230 40 Q-110 -20 0 0 Z",
  "M0 0 Q-60 -130 -140 -60 Q-70 -60 0 0 Z",
  "M0 0 Q-30 -120 0 -160 Q30 -120 0 0 Z",
  "M0 0 Q60 -130 140 -60 Q70 -60 0 0 Z",
  "M0 0 Q110 -80 230 40 Q110 -20 0 0 Z",
];
export const PalemLangkap: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly dasar: number; readonly mulai?: number }> = ({ cx, cy, size = 460, dasar, mulai = 0 }) => {
  const s = size / 460;
  return (
    <g>
      <Garis kasar={0.8} d={`M${cx} ${cy} L${cx} ${dasar}`} mulai={mulai} lama={18} warna={KAPUR.coklat} tebal={14} />
      <g transform={`translate(${cx} ${cy}) scale(${s})`}>
        {PELEPAH.map((d, i) => (
          <Garis key={i} kasar={0.8} d={d} mulai={mulai + 10 + i * 5} lama={16} warna={KAPUR.daun} isi={KAPUR.daunIsi} tebal={6 / s} />
        ))}
      </g>
    </g>
  );
};

// Tunas tanaman berpusat di pangkal (cx, cy): dua daun tegak; saat `layu`, tegak memudar dan versi merunduk (oranye) muncul.
export const Tunas: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly layu?: number }> = ({ cx, cy, size = 150, mulai = 0, layu = BELUM }) => {
  const frame = useCurrentFrame();
  const s = size / 100;
  const k = interpolate(frame, [layu, layu + 14], [0, 1], CLAMP);
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      <g opacity={1 - k}>
        <Garis kasar={0.8} d="M0 0 L0 -90" mulai={mulai} lama={12} warna={KAPUR.daun} tebal={6 / s} />
        <Garis kasar={0.8} d="M0 -50 Q-40 -60 -50 -90 Q-15 -85 0 -50 Z" mulai={mulai + 6} lama={12} warna={KAPUR.daun} isi={KAPUR.daunIsi} tebal={6 / s} />
        <Garis kasar={0.8} d="M0 -70 Q40 -80 52 -110 Q15 -105 0 -70 Z" mulai={mulai + 10} lama={12} warna={KAPUR.daun} isi={KAPUR.daunIsi} tebal={6 / s} />
      </g>
      <g opacity={k}>
        <path d="M0 0 Q0 -50 40 -60" fill="none" stroke={KAPUR.orange} strokeWidth={6 / s} strokeLinecap="round" />
        <path d="M40 -60 Q50 -30 70 -20 Q65 -45 40 -60 Z" fill="none" stroke={KAPUR.orange} strokeWidth={6 / s} strokeLinejoin="round" />
        <path d="M0 -30 Q-30 -30 -50 -10 Q-25 -5 0 -30 Z" fill="none" stroke={KAPUR.orange} strokeWidth={6 / s} strokeLinejoin="round" />
      </g>
    </g>
  );
};

// Badak jawa kapur tampak samping (bercula satu, lipatan kulit), menghadap kiri; `hadap` -1 membalik ke kanan.
// Berpusat di (cx, cy); `size` = lebar badan (±200 lokal); tanah di cy + 100 * size / 400. Anak = panggil dengan `size` kecil.
// Dirender di titik asal lalu diskalakan lewat transform supaya goresan kasar tetap stabil.
const BADAN = "M-200 45 L-206 15 Q-196 -8 -172 -18 Q-140 -48 -108 -58 Q-60 -92 10 -84 L120 -74 Q190 -68 198 -20 L192 48 L192 100 L150 100 L146 52 Q80 64 -10 62 L-18 100 L-66 100 L-76 58 Q-110 72 -140 62 Q-175 62 -200 45 Z";
export const BadakKapur: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly hadap?: 1 | -1 }> = ({ cx, cy, size = 400, mulai = 0, hadap = 1 }) => {
  const s = size / 400;
  const tebal = 6 / s;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${hadap === 1 ? s : -s} ${s})`}>
      <Garis kasar={0.9} tebal={tebal} mulai={mulai} lama={36} warna={KAPUR.chalk} isi={ISI} d={BADAN} />
      <Garis kasar={0.8} tebal={tebal} mulai={mulai + 22} lama={10} warna={KAPUR.gold} isi="rgba(244, 185, 66, 0.35)" d="M-199 2 L-188 -44 L-181 -14" />
      <Garis kasar={0.8} tebal={tebal} mulai={mulai + 26} lama={10} warna={KAPUR.chalk} d="M-98 -58 L-90 -82 L-72 -64" />
      <Garis kasar={0.8} tebal={tebal * 1.2} mulai={mulai + 28} lama={20} warna={KAPUR.abu} d="M-112 -56 Q-96 -8 -126 56 M-70 -80 Q-34 -22 -58 56 M-20 -84 Q10 -30 0 58 M118 -74 Q140 -20 118 52 M198 -20 Q216 10 208 42 M-204 20 Q-194 30 -176 31" />
      <circle cx={-152} cy={-12} r={6} fill={KAPUR.chalk} opacity={0.9} />
    </g>
  );
};
