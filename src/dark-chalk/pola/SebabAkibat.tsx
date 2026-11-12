import type React from "react";
import { Garis } from "../Garis";
import { Kanvas, Pop } from "../Kanvas";
import { Label } from "../Label";
import { KAPUR } from "../palette";
import { Judul } from "./Judul";

export type Kotak = { readonly x: number; readonly y: number; readonly size: number };
export type Simpul = { readonly teks: string; readonly at: number; readonly gambar: (k: Kotak) => React.ReactNode };

// Pola SEBAB → AKIBAT (kapur): sebab di atas, panah emas turun, akibat di bawah. Tiap simpul muncul di `at`-nya sendiri
// (boleh akibat dulu bila narasi menyebut akibat lebih dulu); panah tumbuh setelah keduanya ada.
export const SebabAkibat: React.FC<{ readonly judul: string; readonly sorotJudul?: string; readonly sebab: Simpul; readonly akibat: Simpul; }> = ({ judul, sorotJudul, sebab, akibat }) => {
  const mulaiPanah = Math.max(sebab.at, akibat.at);
  return (
    <>
      <Judul teks={judul} sorot={sorotJudul} />
      <Kanvas>
        <Pop at={sebab.at}>{sebab.gambar({ x: 540, y: 640, size: 240 })}</Pop>
        <Pop at={akibat.at}>{akibat.gambar({ x: 540, y: 1040, size: 240 })}</Pop>
        <Garis d="M540 830 L540 930" mulai={mulaiPanah} lama={12} warna={KAPUR.gold} tebal={10} />
        <Garis d="M510 902 L540 936 L570 902" mulai={mulaiPanah + 10} lama={8} warna={KAPUR.gold} tebal={10} />
      </Kanvas>
      <Label teks={sebab.teks} x={540} y={790} at={sebab.at} size={52} />
      <Label teks={akibat.teks} x={540} y={1190} at={akibat.at} size={52} />
    </>
  );
};
