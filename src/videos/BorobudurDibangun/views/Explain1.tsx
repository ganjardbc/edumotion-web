import type React from "react";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Label } from "../../../dark-chalk/Label";
import { BlokBatu, Tumpukan } from "../../../dark-chalk/objek/Borobudur";
import { KAPUR } from "../../../dark-chalk/palette";
import { Sorot } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain1: lensa berisi gunung berapi; satu blok batu muncul di kakinya saat "andesit" (penanda emas),
// lalu tumpukan blok bertambah dan label "±2 juta blok" muncul saat "dua".
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const gunung = at("gunung");
  const andesit = at("andesit");
  const dua = at("dua");
  return (
    <>
      <Sorot
        judul="Batu dari gunung"
        sorotJudul="gunung"
        penanda={{ teks: "", dari: { x: 360, y: 1215 }, ke: { x: 395, y: 1012 }, at: andesit }}
        gambar={({ x, y }) => (
          <>
            <Ikon nama="mountain" cx={x} cy={y - 100} size={330} mulai={gunung - 20 < 6 ? 6 : gunung - 20} warna={KAPUR.abu} tebal={7} />
            <BlokBatu cx={x - 148} cy={y + 150} size={110} jenis="kasar" mulai={andesit} />
            <Tumpukan cx={x + 90} cy={y + 140} size={200} mulai={dua} />
          </>
        )}
      />
      <Label teks="andesit" x={215} y={1200} at={andesit + 8} size={56} warna={KAPUR.gold} lebar={300} />
      <Label teks="±2 juta blok" x={720} y={1215} at={dua + 10} size={56} warna={KAPUR.gold} lebar={400} />
    </>
  );
};
