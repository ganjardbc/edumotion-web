import type React from "react";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { PetaAsia } from "../../../dark-chalk/objek/Badak";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain1: peta Asia; titik sebaran muncul satu per satu saat "banyak"; label India timur laut dan Asia Tenggara menyusul.
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const banyak = at("banyak");
  const india = at("India");
  const asia = at("Asia");
  return (
    <>
      <Judul teks="Dulu tersebar luas" sorot="luas" />
      <Kanvas>
        <PetaAsia cx={540} cy={860} size={820} mulai={4} muncul={banyak} />
      </Kanvas>
      <Label teks="India timur laut" x={300} y={470} at={india} size={50} warna={KAPUR.gold} lebar={420} />
      <Label teks="Asia Tenggara" x={760} y={1230} at={asia} size={50} warna={KAPUR.gold} lebar={420} />
    </>
  );
};
