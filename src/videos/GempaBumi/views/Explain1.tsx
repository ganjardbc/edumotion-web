import type React from "react";
import { Label } from "../../../dark-chalk/Label";
import { BumiLempeng } from "../../../dark-chalk/objek/Gempa";
import { KAPUR } from "../../../dark-chalk/palette";
import { Sorot } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain1: lensa berisi bumi dengan batas lempeng; penanda emas ke satu lempeng saat "lempeng",
// panah saling mendekat pelan dan label "beberapa cm/tahun" saat "sentimeter".
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const lempeng = at("lempeng");
  const senti = at("sentimeter");
  return (
    <>
      <Sorot
        judul="Bumi terbelah jadi lempeng"
        sorotJudul="lempeng"
        penanda={{ teks: "lempeng", dari: { x: 230, y: 1215 }, ke: { x: 440, y: 730 }, at: lempeng }}
        gambar={({ x, y }) => <BumiLempeng cx={x} cy={y} size={460} mulai={6} gerak={senti} />}
      />
      <Label teks="beberapa cm/tahun" x={700} y={1215} at={senti + 8} size={52} warna={KAPUR.gold} lebar={460} />
    </>
  );
};
