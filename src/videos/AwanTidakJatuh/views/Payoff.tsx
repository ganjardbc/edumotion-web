import type React from "react";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { AwanKapur, TetesMelayang } from "../../../dark-chalk/objek/Awan";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Payoff: awan besar saat "berat"; tetes-tetes kecil melayang di dalamnya saat "kecil"; judul disorot saat "terlalu".
export const Payoff: React.FC<SceneProps> = ({ at }) => {
  const berat = at("berat");
  const terlalu = at("terlalu");
  const kecil = at("kecil");
  return (
    <>
      <Judul teks="Terlalu kecil untuk jatuh" sorot="kecil" at={terlalu - 6} />
      <Kanvas>
        <AwanKapur cx={540} cy={840} size={760} mulai={berat - 8} />
        <TetesMelayang cx={430} cy={850} size={56} mulai={kecil} />
        <TetesMelayang cx={540} cy={800} size={56} mulai={kecil + 4} fase={8} />
        <TetesMelayang cx={650} cy={860} size={56} mulai={kecil + 8} fase={16} />
        <TetesMelayang cx={590} cy={910} size={56} mulai={kecil + 12} fase={24} />
      </Kanvas>
      <Label teks="awan itu berat" x={540} y={1130} at={berat} size={60} lebar={640} />
      <Label teks="tetesnya kecil" x={540} y={1230} at={kecil} size={60} warna={KAPUR.gold} lebar={640} />
    </>
  );
};
