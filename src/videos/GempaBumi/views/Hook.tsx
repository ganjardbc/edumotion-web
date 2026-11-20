import type React from "react";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { PenampangTanah } from "../../../dark-chalk/objek/Gempa";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Hook: penampang tanah dengan rumah digambar kapur; tanah bergetar saat "bergerak", retak dan bergeser saat "gempa".
export const Hook: React.FC<SceneProps> = ({ at }) => {
  const gerak = at("bergerak");
  const gempa = at("gempa");
  return (
    <>
      <Teks text="Tanah bergerak?" sorot="bergerak" size={96} top={250} />
      <Kanvas>
        <PenampangTanah cx={540} cy={900} size={760} mulai={4} getar={gerak} retak={gempa} />
      </Kanvas>
      <Label teks="?" x={840} y={640} at={gempa} size={220} warna={KAPUR.gold} lebar={200} />
    </>
  );
};
