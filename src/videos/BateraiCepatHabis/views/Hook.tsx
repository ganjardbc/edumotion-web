import type React from "react";
import { useCurrentFrame } from "remotion";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas, maju } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { Baterai } from "../../../dark-chalk/objek/Gawai";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Hook: baterai penuh di "Pagi" terkuras sampai merah di "sore". Tanpa tokoh.
export const Hook: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const pagi = Math.max(6, at("Pagi"));
  const sore = at("sore");
  const level = 1 - 0.88 * maju(frame, pagi + 10, Math.max(20, sore - pagi));
  return (
    <>
      <Teks text="Baterai HP cepat habis?" sorot="habis" size={96} top={250} />
      <Kanvas>
        <Baterai cx={520} cy={800} lebar={560} level={level} mulai={4} />
        {level > 0.9 ? <Ikon nama="bolt" cx={520} cy={800} size={130} mulai={pagi} warna={KAPUR.gold} tebal={7} /> : null}
        <Ikon nama="sun" cx={200} cy={540} size={120} mulai={pagi} warna={KAPUR.gold} tebal={7} />
        <Ikon nama="moon-stars" cx={880} cy={540} size={120} mulai={sore} warna={KAPUR.es} tebal={7} />
      </Kanvas>
      <Label teks="pagi" x={200} y={640} at={pagi} size={48} lebar={200} />
      <Label teks="sore" x={880} y={640} at={sore} size={48} lebar={200} warna={KAPUR.orange} />
    </>
  );
};
