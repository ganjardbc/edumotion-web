import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Pop } from "../../../dark-chalk/Kanvas";
import { AngkaTeks, TandaBeda, Titik } from "../../../dark-chalk/objek/Angka";
import { KAPUR } from "../../../dark-chalk/palette";
import { SebabAkibat } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain1: sebab: titik kecil mengisi tempat kosong (kotak kosong); akibat: angka 1 dan 10 jadi berbeda.
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const kosong = 10;
  const titik = Math.max(kosong + 10, at("titik"));
  const beda = at("sepuluh");
  return (
    <SebabAkibat
      renggang
      judul="Titik tanda tempat kosong"
      sorotJudul="kosong"
      sebab={{
        teks: "tempat kosong",
        at: kosong,
        gambar: (k) => (
          <>
            <Garis kasar={1} d={`M${k.x - 70} ${k.y - 70} L${k.x + 70} ${k.y - 70} L${k.x + 70} ${k.y + 70} L${k.x - 70} ${k.y + 70} Z`} mulai={kosong} lama={14} warna={KAPUR.abu} tebal={7} />
            <Pop at={titik}>
              <Titik cx={k.x} cy={k.y} r={24} mulai={titik} />
            </Pop>
          </>
        ),
      }}
      akibat={{
        teks: "angka jadi beda",
        at: beda,
        gambar: (k) => (
          <>
            <AngkaTeks cx={k.x - 150} cy={k.y} teks="1" size={150} />
            <TandaBeda cx={k.x} cy={k.y} size={80} mulai={beda + 6} />
            <AngkaTeks cx={k.x + 150} cy={k.y} teks="10" size={150} warna={KAPUR.gold} />
          </>
        ),
      }}
    />
  );
};
