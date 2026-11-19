import type React from "react";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { Bumi } from "../../../dark-chalk/objek/Purba";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Hook: Bumi besar di tengah; label "71% laut" di bawah Bumi muncul saat "tujuh"; tiga tetes air di sekelilingnya saat "air";
// tanda tanya emas saat "itu".
export const Hook: React.FC<SceneProps> = ({ at }) => {
  const tujuh = at("tujuh");
  const air = at("air");
  const itu = at("itu");
  return (
    <>
      <Teks text="Dari mana air laut?" sorot="mana" size={96} top={250} />
      <Kanvas>
        <Bumi cx={540} cy={810} r={250} mulai={4} />
        <Ikon nama="droplet" cx={190} cy={640} size={130} mulai={air} warna={KAPUR.es} tebal={7} />
        <Ikon nama="droplet" cx={895} cy={720} size={110} mulai={air + 6} warna={KAPUR.es} tebal={7} />
        <Ikon nama="droplet" cx={230} cy={1010} size={100} mulai={air + 12} warna={KAPUR.es} tebal={7} />
      </Kanvas>
      <Label teks="71% laut" x={540} y={1150} at={tujuh} size={100} warna={KAPUR.gold} lebar={560} />
      <Label teks="?" x={820} y={1010} at={itu} size={200} warna={KAPUR.gold} lebar={200} />
    </>
  );
};
