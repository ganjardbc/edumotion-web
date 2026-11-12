import type React from "react";
import { Garis } from "../Garis";
import { KAPUR } from "../palette";
import { IKON_DATA, type NamaIkon } from "./data";

// Ikon garis (Tabler Icons, MIT) yang digambar ulang bergaya kapur: tiap path digambar berurutan (Garis) dengan goresan kasar.
// Berpusat di (cx, cy); `size` = sisi kotak. `tebal` dalam piksel layar. `isi` mengisi path pertama (badan ikon).
export const Ikon: React.FC<{
  readonly nama: NamaIkon;
  readonly cx: number;
  readonly cy: number;
  readonly size?: number;
  readonly mulai?: number;
  readonly warna?: string;
  readonly tebal?: number;
  readonly kasar?: number;
  readonly isi?: string;
  // Jeda frame antar path.
  readonly jeda?: number;
  readonly lama?: number;
}> = ({ nama, cx, cy, size = 160, mulai = 0, warna = KAPUR.chalk, tebal = 6, kasar = 0.35, isi = "none", jeda = 8, lama = 18 }) => {
  const paths = IKON_DATA[nama];
  if (!paths) throw new Error(`Ikon tidak dikenal: ${nama}`);
  const s = size / 24;
  return (
    <g transform={`translate(${cx - size / 2} ${cy - size / 2}) scale(${s})`}>
      {paths.map((d, i) => (
        <Garis key={i} d={d} mulai={mulai + i * jeda} lama={lama} warna={warna} tebal={tebal / s} kasar={kasar} isi={i === 0 ? isi : "none"} />
      ))}
    </g>
  );
};
