import type React from "react";
import { useCurrentFrame } from "remotion";
import { Garis } from "../Garis";
import { KAPUR } from "../palette";

// Gelas garis kapur. (x, y) = tengah alas; dinding menyempit 16% ke alas. `isi` 0..1 = tinggi air; `warnaAir` bisa
// dianimasikan (mis. air menjadi es). Anak (SVG) digambar di atas air, jadi benda yang mengapung ditaruh di sini.
export const GelasAir: React.FC<{
  readonly x: number;
  readonly y: number;
  readonly lebar?: number;
  readonly tinggi?: number;
  readonly isi?: number;
  readonly warnaAir?: string;
  readonly mulai?: number;
  readonly warna?: string;
  readonly gelombang?: boolean;
  readonly children?: React.ReactNode;
}> = ({ x, y, lebar = 300, tinggi = 380, isi = 0.72, warnaAir = KAPUR.airIsi, mulai = 0, warna = KAPUR.chalk, gelombang = true, children }) => {
  const frame = useCurrentFrame();
  const atas = y - tinggi;
  const half = (yy: number) => (lebar / 2) * (1 - 0.16 * ((yy - atas) / tinggi));
  const muka = permukaanAir(y, tinggi, isi);
  const m = 6;
  const titik = Array.from({ length: 21 }, (_, i) => {
    const u = i / 20;
    const hw = half(muka) - m;
    return `${(x - hw + 2 * hw * u).toFixed(1)} ${(muka + (gelombang ? Math.sin(frame / 9 + u * 7) * 3 : 0)).toFixed(1)}`;
  });
  return (
    <g>
      {isi > 0 ? (
        <>
          <path d={`M${x - half(muka) + m} ${muka} L${x + half(muka) - m} ${muka} L${x + half(y) - m} ${y - m} L${x - half(y) + m} ${y - m} Z`} fill={warnaAir} />
          <path d={`M${titik.join(" L")}`} fill="none" stroke={KAPUR.es} strokeWidth={5} strokeLinecap="round" opacity={0.9} />
        </>
      ) : null}
      {children}
      <Garis d={`M${x - half(atas)} ${atas} L${x - half(y)} ${y} L${x + half(y)} ${y} L${x + half(atas)} ${atas}`} mulai={mulai} lama={26} warna={warna} tebal={8} />
    </g>
  );
};

// y permukaan air untuk gelas dengan alas di y, tinggi `tinggi`, terisi `isi`.
export const permukaanAir = (y: number, tinggi: number, isi: number): number => y - tinggi * isi;
