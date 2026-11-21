import type React from "react";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { PetaAsia } from "../../../dark-chalk/objek/Badak";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain2: peta yang sama; titik memudar saat "menyusut", titik Vietnam dicoret saat "Vietnam"; hanya titik Jawa yang bertahan.
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const susut = at("menyusut");
  const vietnam = at("Vietnam");
  return (
    <>
      <Judul teks="Terus menyusut" sorot="menyusut" />
      <Kanvas>
        <PetaAsia cx={540} cy={860} size={820} mulai={0} muncul={0} redup={susut} coret={vietnam} />
      </Kanvas>
      <Label teks="Vietnam" x={820} y={960} at={vietnam} size={52} warna={KAPUR.orange} lebar={300} />
    </>
  );
};
