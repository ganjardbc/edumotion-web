import type React from "react";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Cta: tiga ikon sebab muncul saat "tiga"; tanda tanya emas saat "mana".
export const Cta: React.FC<SceneProps> = ({ at }) => {
  const tiga = at("tiga");
  return (
    <>
      <Judul teks="Mana yang paling berat?" sorot="berat" />
      <Kanvas>
        <Ikon nama="plant" cx={270} cy={760} size={200} mulai={tiga} />
        <Ikon nama="skull" cx={540} cy={760} size={200} mulai={tiga + 10} />
        <Ikon nama="trees" cx={810} cy={760} size={200} mulai={tiga + 20} />
      </Kanvas>
      <Label teks="?" x={540} y={1080} at={at("mana")} size={320} warna={KAPUR.gold} lebar={360} />
    </>
  );
};
