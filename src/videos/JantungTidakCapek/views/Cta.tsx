import type React from "react";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Cta: tiga bagian tubuh muncul bergantian, lalu tanda tanya emas saat "capek".
export const Cta: React.FC<SceneProps> = ({ at }) => {
  const mulai = Math.max(8, at("bagian"));
  return (
    <>
      <Teks text="Bagian tubuh mana lagi?" sorot="lagi" size={96} top={250} />
      <Kanvas>
        <Ikon nama="brain" cx={250} cy={780} size={220} mulai={mulai} warna={KAPUR.chalk} tebal={7} />
        <Ikon nama="eye" cx={540} cy={780} size={220} mulai={mulai + 14} warna={KAPUR.es} tebal={7} />
        <Ikon nama="bone" cx={830} cy={780} size={220} mulai={mulai + 28} warna={KAPUR.abu} tebal={7} />
      </Kanvas>
      <Label teks="?" x={540} y={1120} at={at("capek")} size={260} warna={KAPUR.gold} lebar={300} />
    </>
  );
};
