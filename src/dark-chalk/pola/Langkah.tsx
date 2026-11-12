import type React from "react";
import { Garis } from "../Garis";
import { Kanvas, Pop } from "../Kanvas";
import { Label } from "../Label";
import { KAPUR } from "../palette";
import { Judul } from "./Judul";

export type Butir = { readonly teks: string; readonly at: number; readonly gambar: (k: { readonly x: number; readonly y: number; readonly size: number }) => React.ReactNode };

// Pola LANGKAH (kapur): 2–4 butir bernomor, tiap baris punya lingkaran nomor emas, gambar kecil, dan teks. Muncul di `at` butir.
export const Langkah: React.FC<{ readonly judul: string; readonly sorotJudul?: string; readonly butir: ReadonlyArray<Butir> }> = ({ judul, sorotJudul, butir }) => {
  if (butir.length < 2 || butir.length > 4) throw new Error("Langkah: 2–4 butir");
  const jarak = 240;
  const y0 = 620;
  return (
    <>
      <Judul teks={judul} sorot={sorotJudul} />
      <Kanvas>
        {butir.map((b, i) => {
          const y = y0 + i * jarak;
          return (
            <g key={i}>
              <Garis kasar={1} d={`M188 ${y} a36 36 0 1 0 72 0 a36 36 0 1 0 -72 0`} mulai={b.at} lama={14} warna={KAPUR.gold} tebal={7} />
              <Pop at={b.at + 8}>{b.gambar({ x: 414, y, size: 170 })}</Pop>
            </g>
          );
        })}
      </Kanvas>
      {butir.map((b, i) => (
        <div key={i}>
          <Label teks={String(i + 1)} x={224} y={y0 + i * jarak} at={b.at + 6} size={50} warna={KAPUR.gold} lebar={72} />
          <Label teks={b.teks} x={735} y={y0 + i * jarak} at={b.at + 8} size={52} lebar={380} />
        </div>
      ))}
    </>
  );
};
