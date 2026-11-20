import type React from "react";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { PetaIndonesia } from "../../../dark-chalk/objek/PetaIndonesia";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Cta: peta kapur kepulauan Indonesia; titik getaran berdenyut saat "diguncang"; ajakan saat "komentar".
export const Cta: React.FC<SceneProps> = ({ at }) => {
  const guncang = at("diguncang");
  const komentar = at("komentar");
  return (
    <>
      <Judul teks="Indonesia, kenapa sering?" sorot="sering" />
      <Kanvas>
        <PetaIndonesia cx={530} cy={900} size={760} mulai={4} getar={guncang} />
      </Kanvas>
      <Label teks="tulis di komentar" x={540} y={1260} at={komentar} size={60} warna={KAPUR.gold} lebar={760} />
    </>
  );
};
