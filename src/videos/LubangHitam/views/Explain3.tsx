import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { LubangHitam, Spageti } from "../../../dark-chalk/objek/LubangHitam";
import { KAPUR } from "../../../dark-chalk/palette";
import { SebabAkibat } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain3: sebab = bola jatuh ke lubang hitam, panah tarik di sisi dekat tebal dan di sisi jauh tipis (saat "keras");
// akibat = bola memanjang seperti mi (saat "terulur").
export const Explain3: React.FC<SceneProps> = ({ at }) => {
  const jatuh = at("jatuh");
  const keras = at("keras");
  const terulur = at("terulur");
  return (
    <SebabAkibat
      renggang
      judul="Ditarik, lalu terulur"
      sorotJudul="terulur"
      sebab={{
        teks: "tarikan tak sama",
        at: jatuh,
        gambar: ({ x, y }) => (
          <>
            <LubangHitam cx={x - 220} cy={y} size={300} mulai={jatuh} cincin={false} />
            <circle cx={x + 60} cy={y} r={56} fill={KAPUR.esIsi} stroke={KAPUR.es} strokeWidth={8} />
            <Garis kasar={0.8} d={`M${x - 8} ${y} L${x - 110} ${y}`} mulai={keras} lama={10} warna={KAPUR.gold} tebal={16} />
            <Garis kasar={0.8} d={`M${x - 96} ${y - 26} L${x - 110} ${y} L${x - 96} ${y + 26}`} mulai={keras + 6} lama={6} warna={KAPUR.gold} tebal={12} />
            <Garis kasar={0.8} d={`M${x + 172} ${y} L${x + 134} ${y} M${x + 146} ${y - 12} L${x + 134} ${y} L${x + 146} ${y + 12}`} mulai={keras + 4} lama={10} warna={KAPUR.gold} tebal={5} />
          </>
        ),
      }}
      akibat={{ teks: "terulur seperti mi", at: terulur, gambar: ({ x, y }) => <Spageti cx={x} cy={y} size={150} mulai={terulur} ulur={terulur} /> }}
    />
  );
};
