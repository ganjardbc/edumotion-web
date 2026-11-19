import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { BulanKapur } from "../../../dark-chalk/objek/Bulan";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Payoff: dua Bulan sama besar dengan tanda "=" emas saat "tidak benar-benar".
export const Payoff: React.FC<SceneProps> = ({ at }) => {
  const jadi = at("Jadi");
  const sama = at("tidak benar-benar");
  return (
    <>
      <Judul teks="Cuma ilusi mata" sorot="ilusi" at={jadi} />
      <Kanvas>
        <BulanKapur cx={290} cy={820} size={300} mulai={jadi + 6} />
        <BulanKapur cx={790} cy={820} size={300} mulai={sama - 10} />
        <Garis kasar={1} d="M490 800 L590 800" mulai={sama} lama={8} warna={KAPUR.gold} tebal={11} />
        <Garis kasar={1} d="M490 850 L590 850" mulai={sama + 6} lama={8} warna={KAPUR.gold} tebal={11} />
      </Kanvas>
      <Label teks="langit tinggi" x={290} y={1030} at={jadi + 14} size={52} lebar={380} />
      <Label teks="cakrawala" x={790} y={1030} at={sama} size={52} lebar={380} />
      <Label teks="sama besar" x={540} y={1160} at={sama + 10} size={62} warna={KAPUR.gold} lebar={640} />
    </>
  );
};
