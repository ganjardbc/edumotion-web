import type React from "react";
import { Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { BulanKapur } from "../../../dark-chalk/objek/Bulan";
import { KAPUR } from "../../../dark-chalk/palette";
import { Kunci as KunciPola } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Kunci (layar penuh, tanpa karakter): Bulan besar; lingkaran putus-putus saat "penyebab"; tanda tanya emas besar saat
// "belum diketahui".
export const Kunci: React.FC<SceneProps> = ({ at }) => {
  const penyebab = at("penyebab");
  const belum = at("belum");
  return (
    <>
    <KunciPola
      judul="Penyebab belum pasti"
      sorotJudul="belum"
      keterangan="masih diteliti"
      keteranganAt={belum + 8}
      gambar={
        <>
          <BulanKapur cx={540} cy={860} size={440} mulai={4} />
          <Pop at={penyebab}>
            <circle cx={540} cy={860} r={290} fill="none" stroke={KAPUR.es} strokeWidth={8} strokeDasharray="28 22" strokeLinecap="round" />
          </Pop>
        </>
      }
    />
    <Label teks="?" x={540} y={860} at={belum} size={260} warna={KAPUR.gold} lebar={260} />
    </>
  );
};
