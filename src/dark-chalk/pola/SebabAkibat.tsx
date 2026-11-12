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
export const SebabAkibat: React.FC<{ readonly judul: string; readonly sorotJudul?: string; readonly sebab: Simpul; readonly akibat: Simpul;
  // Tata letak lebih renggang (jarak antar gambar, label, dan panah lebih lebar) untuk gambar yang kecil.
  readonly renggang?: boolean;
  readonly cepat?: boolean;
}> = ({ judul, sorotJudul, sebab, akibat, renggang = false, cepat = false }) => {
  const L = renggang
    ? { sY: 585, sLabel: 765, panah1: 830, panah2: 925, aY: 1030, aLabel: 1210 }
    : { sY: 640, sLabel: 790, panah1: 830, panah2: 930, aY: 1040, aLabel: 1190 };
  const mulaiPanah = Math.max(sebab.at, akibat.at);
  return (
    <>
      <Judul teks={judul} sorot={sorotJudul} />
      <Kanvas>
        <Pop at={sebab.at} durasi={cepat ? 3 : 10}>{sebab.gambar({ x: 540, y: L.sY, size: 240 })}</Pop>
        <Pop at={akibat.at} durasi={cepat ? 3 : 10}>{akibat.gambar({ x: 540, y: L.aY, size: 240 })}</Pop>
        <Garis kasar={1} d={`M540 ${L.panah1} L540 ${L.panah2}`} mulai={mulaiPanah} lama={cepat ? 6 : 12} warna={KAPUR.gold} tebal={10} />
        <Garis kasar={1} d={`M510 ${L.panah2 - 28} L540 ${L.panah2 + 6} L570 ${L.panah2 - 28}`} mulai={mulaiPanah + (cepat ? 5 : 10)} lama={cepat ? 4 : 8} warna={KAPUR.gold} tebal={10} />
      </Kanvas>
      <Label teks={sebab.teks} x={540} y={L.sLabel} at={sebab.at} size={52} durasi={cepat ? 3 : 10} />
      <Label teks={akibat.teks} x={540} y={L.aLabel} at={akibat.at} size={52} durasi={cepat ? 3 : 10} />
    </>
  );
};
