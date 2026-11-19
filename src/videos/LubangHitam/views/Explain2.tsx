import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { LubangHitam, Silang } from "../../../dark-chalk/objek/LubangHitam";
import { KAPUR } from "../../../dark-chalk/palette";
import { Sorot } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Titik di batas (r 215) untuk penanda, dan panah tarik kecil di empat sudut menuju lubang.
const BATAS = { x: 705, y: 998 };
const TARIK = [45, 135, 225, 315].map((deg) => {
  const a = (deg * Math.PI) / 180;
  return { dari: { x: 540 + Math.cos(a) * 292, y: 860 + Math.sin(a) * 292 }, ke: { x: 540 + Math.cos(a) * 236, y: 860 + Math.sin(a) * 236 } };
});

// Explain2: lensa berisi lubang hitam; panah tarik emas saat "gravitasi"; lingkaran putus-putus (batas) saat
// "cakrawala"; panah keluar dicoret saat "kembali".
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const gravitasi = at("gravitasi");
  const cakrawala = at("cakrawala");
  const kembali = at("kembali");
  return (
    <>
      <Sorot
        judul="Batas tanpa kembali"
        sorotJudul="kembali"
        gambar={({ x, y }) => (
          <>
            <LubangHitam cx={x} cy={y} size={340} mulai={6} cincin={false} />
            {TARIK.map((t, i) => (
              <Garis key={i} kasar={0.6} d={`M${t.dari.x} ${t.dari.y} L${t.ke.x} ${t.ke.y}`} mulai={gravitasi + i * 3} lama={8} warna={KAPUR.gold} tebal={9} />
            ))}
            <Pop at={cakrawala}>
              <circle cx={x} cy={y} r={215} fill="none" stroke={KAPUR.es} strokeWidth={7} strokeDasharray="26 20" strokeLinecap="round" />
            </Pop>
            <Garis kasar={1} d={`M${x + 20} ${y + 20} L${x + 150} ${y + 60}`} mulai={kembali - 6} lama={10} warna={KAPUR.abu} tebal={8} />
            <Silang cx={x + 90} cy={y + 42} size={70} mulai={kembali} />
          </>
        )}
        penanda={{ teks: "cakrawala peristiwa", dari: { x: 700, y: 1300 }, ke: BATAS, at: cakrawala }}
      />
      <Label teks="gravitasi" x={270} y={1250} at={gravitasi + 6} size={56} warna={KAPUR.gold} lebar={340} />
    </>
  );
};
