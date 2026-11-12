import type React from "react";
import { Garis } from "../Garis";
import { Kanvas, Pop } from "../Kanvas";
import { Label } from "../Label";
import { KAPUR } from "../palette";
import { Judul } from "./Judul";

// Pola SOROT (kapur): satu lingkaran lensa besar berisi gambar, dengan satu penanda (label + garis emas) ke bagian penting.
export const Sorot: React.FC<{
  readonly judul: string;
  readonly sorotJudul?: string;
  readonly lensaAt?: number;
  readonly cepat?: boolean;
  readonly gambar: (pusat: { readonly x: number; readonly y: number; readonly r: number }) => React.ReactNode;
  readonly penanda?: { readonly teks: string; readonly dari: { readonly x: number; readonly y: number }; readonly ke: { readonly x: number; readonly y: number }; readonly at: number };
}> = ({ judul, sorotJudul, lensaAt = 4, gambar, penanda, cepat = false }) => {
  const R = 300;
  const cx = 540;
  const cy = 860;
  return (
    <>
      <Judul teks={judul} sorot={sorotJudul} />
      <Kanvas>
        <Garis kasar={1} d={`M${cx - R} ${cy} a${R} ${R} 0 1 0 ${2 * R} 0 a${R} ${R} 0 1 0 ${-2 * R} 0`} mulai={lensaAt} lama={cepat ? 8 : 30} tebal={9} isi="rgba(158, 216, 240, 0.12)" />
        {gambar({ x: cx, y: cy, r: R })}
        {penanda ? (
          <Pop at={penanda.at} durasi={cepat ? 3 : 10}>
            <line x1={penanda.dari.x} y1={penanda.dari.y} x2={penanda.ke.x} y2={penanda.ke.y} stroke={KAPUR.gold} strokeWidth={6} strokeLinecap="round" />
            <circle cx={penanda.ke.x} cy={penanda.ke.y} r={10} fill={KAPUR.gold} />
          </Pop>
        ) : null}
      </Kanvas>
      {penanda ? <Label teks={penanda.teks} x={penanda.dari.x} y={penanda.dari.y - 36} at={penanda.at} size={48} warna={KAPUR.gold} lebar={420} durasi={cepat ? 3 : 10} /> : null}
    </>
  );
};
