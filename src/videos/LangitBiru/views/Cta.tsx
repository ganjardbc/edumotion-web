import type React from "react";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Cta: ikon laut (riak air) dan tanda tanya emas saat "tebakanmu".
export const Cta: React.FC<SceneProps> = ({ at }) => (
  <>
    <Teks text="Kenapa laut biru?" sorot="laut" size={104} top={250} />
    <Kanvas>
      <Ikon nama="ripple" cx={540} cy={780} size={340} mulai={Math.max(8, at("laut"))} warna={KAPUR.es} tebal={9} />
    </Kanvas>
    <Label teks="?" x={540} y={1090} at={at("tebakanmu")} size={240} warna={KAPUR.gold} lebar={300} />
  </>
);
