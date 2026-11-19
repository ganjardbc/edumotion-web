import type React from "react";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { LubangHitam } from "../../../dark-chalk/objek/LubangHitam";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Cta: lubang hitam dengan cincin cahaya terang; teleskop emas muncul saat "melihat"; ajakan saat "komentar".
export const Cta: React.FC<SceneProps> = ({ at }) => {
  const melihat = at("melihat");
  const komentar = at("komentar");
  return (
    <>
      <Teks text="Bagaimana kita melihatnya?" sorot="melihatnya" size={90} top={250} />
      <Kanvas>
        <LubangHitam cx={540} cy={790} size={640} mulai={4} terang />
        <Ikon nama="telescope" cx={800} cy={1020} size={200} mulai={melihat} warna={KAPUR.gold} tebal={7} />
      </Kanvas>
      <Label teks="tulis di komentar" x={540} y={1170} at={komentar} size={60} warna={KAPUR.gold} lebar={760} />
    </>
  );
};
