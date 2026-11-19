import type React from "react";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Cta: planet besar saat "planet"; tanda tanya emas saat "laut"; ajakan saat "komentar".
export const Cta: React.FC<SceneProps> = ({ at }) => {
  const planet = at("planet");
  const laut = at("laut");
  const komentar = at("komentar");
  return (
    <>
      <Teks text="Planet lain punya laut?" sorot="laut" size={90} top={250} />
      <Kanvas>
        <Ikon nama="planet" cx={540} cy={800} size={420} mulai={planet} warna={KAPUR.es} tebal={7} />
        <Ikon nama="droplet" cx={820} cy={1010} size={120} mulai={laut} warna={KAPUR.es} tebal={7} />
      </Kanvas>
      <Label teks="?" x={540} y={800} at={laut} size={200} warna={KAPUR.gold} lebar={200} />
      <Label teks="tulis di komentar" x={540} y={1170} at={komentar} size={60} warna={KAPUR.gold} lebar={760} />
    </>
  );
};
