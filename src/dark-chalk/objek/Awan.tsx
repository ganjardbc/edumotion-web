import type React from "react";
import { useCurrentFrame } from "remotion";
import { Garis } from "../Garis";
import { KAPUR } from "../palette";
import { Tetes } from "./Laut";

// Objek kapur video AwanTidakJatuh. Berpusat di (cx, cy).

// Bentuk awan (lebar asli ±740, berpusat di (430, 655)); diskalakan lewat transform supaya goresan kasar tetap sama tiap frame.
const AWAN = "M170 800 C70 800 60 660 180 650 C190 540 340 510 410 590 C470 490 650 520 660 650 C790 650 800 800 670 800 Z";

export const AwanKapur: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly warna?: string; readonly isi?: string; readonly tebal?: number }> = ({ cx, cy, size = 600, mulai = 0, warna = KAPUR.chalk, isi = KAPUR.esIsi, tebal = 9 }) => {
  const s = size / 740;
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s}) translate(-430 -655)`}>
      <Garis kasar={1} d={AWAN} mulai={mulai} lama={30} warna={warna} isi={isi} tebal={tebal / s} />
    </g>
  );
};

// Tetes yang melayang pelan naik-turun (bergoyang dari frame, tanpa keacakan). `fase` menggeser gelombangnya.
export const TetesMelayang: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number; readonly fase?: number; readonly amplitudo?: number }> = ({ cx, cy, size = 70, mulai = 0, fase = 0, amplitudo = 10 }) => {
  const frame = useCurrentFrame();
  const dy = Math.sin((frame + fase) / 14) * amplitudo;
  return (
    <g transform={`translate(0 ${dy})`}>
      <Tetes cx={cx} cy={cy} size={size} mulai={mulai} />
    </g>
  );
};

// Sehelai rambut: garis tegak bergelombang yang tebal (pembanding ukuran).
export const Rambut: React.FC<{ readonly cx: number; readonly cy: number; readonly tinggi?: number; readonly mulai?: number }> = ({ cx, cy, tinggi = 360, mulai = 0 }) => {
  const h = tinggi / 2;
  return <Garis kasar={0.6} d={`M${cx} ${cy - h} C${cx + 26} ${cy - h / 2} ${cx - 26} ${cy + h / 2} ${cx} ${cy + h}`} mulai={mulai} lama={20} warna={KAPUR.coklat} tebal={30} />;
};

// Gajah dari samping, menghadap kiri (pembanding berat awan). Lebar lokal ±180; `size` = lebar total.
export const Gajah: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number }> = ({ cx, cy, size = 300, mulai = 0 }) => {
  const s = size / 360;
  const badan = "M-120 -60 C-100 -105 -30 -105 0 -78 C60 -105 140 -88 150 -20 C155 20 142 48 136 52 L132 100 L100 100 L96 58 L10 58 L6 100 L-26 100 L-30 58 C-55 58 -80 40 -92 10";
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      <Garis kasar={0.8} d={badan} mulai={mulai} lama={28} warna={KAPUR.chalk} isi="rgba(242, 240, 232, 0.12)" tebal={8 / s} />
      <Garis kasar={0.8} d="M-120 -60 C-155 -45 -164 0 -154 36 C-150 64 -168 84 -186 74" mulai={mulai + 14} lama={16} warna={KAPUR.chalk} tebal={8 / s} />
      <Garis kasar={0.8} d="M-92 10 C-112 40 -128 56 -136 70 C-142 88 -160 98 -176 92" mulai={mulai + 18} lama={14} warna={KAPUR.chalk} tebal={8 / s} />
      <Garis kasar={0.8} d="M-66 -52 C-26 -62 -18 -2 -58 22 C-84 6 -90 -34 -66 -52 Z" mulai={mulai + 22} lama={14} warna={KAPUR.chalk} tebal={7 / s} />
      <Garis d="M-104 -44 L-104 -40" mulai={mulai + 30} lama={4} warna={KAPUR.chalk} tebal={12 / s} />
      <Garis kasar={0.8} d="M150 -20 C168 0 170 32 160 54" mulai={mulai + 26} lama={10} warna={KAPUR.chalk} tebal={7 / s} />
    </g>
  );
};
