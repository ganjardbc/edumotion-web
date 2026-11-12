import type React from "react";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Teks } from "../../../dark-chalk/Teks";
import { KAPUR } from "../../../dark-chalk/palette";
import type { SceneProps } from "../../_shared/types";
import { Gelombang, Mikrofon, MULAI_VISUAL, TandaTanya } from "../assets/Ilustrasi";

export const Hook: React.FC<SceneProps> = () => (
  <>
    <Teks text="Kok suaramu terasa beda?" sorot="beda?" size={100} top={250} />
    <Kanvas>
      <Mikrofon x={540} y={815} s={1.1} mulai={MULAI_VISUAL} />
      <Gelombang x={355} y={780} s={0.65} mulai={MULAI_VISUAL} />
      <Gelombang x={715} y={780} s={0.65} mulai={MULAI_VISUAL} warna={KAPUR.chalk} />
      <TandaTanya x={810} y={610} s={1.35} mulai={MULAI_VISUAL} />
    </Kanvas>
  </>
);
