import type React from "react";
import { Garis } from "../Garis";
import { Kanvas } from "../Kanvas";
import { Label } from "../Label";
import { KAPUR } from "../palette";
import { Judul } from "./Judul";

// Pola KUNCI (kapur, layar penuh tanpa karakter): judul besar (paling banyak 6 kata, satu kata disorot) dengan garis emas
// di bawahnya, satu gambar besar yang boleh bergerak, dan keterangan pendek.
export const Kunci: React.FC<{ readonly judul: string; readonly sorotJudul?: string; readonly gambar: React.ReactNode; readonly keterangan: string; readonly keteranganAt?: number }> = ({ judul, sorotJudul, gambar, keterangan, keteranganAt = 20 }) => (
  <>
    <Judul teks={judul} sorot={sorotJudul} size={96} />
    <Kanvas>
      <Garis kasar={1} d="M300 520 Q540 536 780 516" mulai={8} lama={16} warna={KAPUR.gold} tebal={10} />
      {gambar}
    </Kanvas>
    <Label teks={keterangan} x={540} y={1215} at={keteranganAt} size={58} warna={KAPUR.gold} lebar={760} />
  </>
);
