import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { Asteroid, Bumi } from "../../../dark-chalk/objek/Purba";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Payoff: Bumi di tengah; asteroid dari kiri-atas dengan panah emas saat "luar"; gunung api di bawah dengan
// panah emas ke atas saat "dalam".
export const Payoff: React.FC<SceneProps> = ({ at }) => {
  const dua = at("dua");
  const luar = at("luar");
  const dalam = at("dalam");
  return (
    <>
      <Judul teks="Dua sumber air laut" sorot="Dua" at={dua} />
      <Kanvas>
        <Bumi cx={600} cy={850} r={150} mulai={4} />
        <Asteroid cx={250} cy={620} size={150} mulai={luar} />
        <Garis kasar={1} d="M330 690 L450 770" mulai={luar + 8} lama={12} warna={KAPUR.gold} tebal={10} />
        <Ikon nama="volcano" cx={600} cy={1130} size={150} mulai={dalam} warna={KAPUR.orange} tebal={7} />
        <Garis kasar={1} d="M600 1050 L600 1020" mulai={dalam + 10} lama={8} warna={KAPUR.gold} tebal={10} />
      </Kanvas>
      <Label teks="luar angkasa" x={250} y={520} at={luar} size={48} warna={KAPUR.gold} lebar={340} />
      <Label teks="dalam Bumi" x={600} y={1250} at={dalam} size={48} warna={KAPUR.gold} lebar={380} />
    </>
  );
};
