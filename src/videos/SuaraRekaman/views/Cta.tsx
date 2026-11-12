import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas, Pop } from "../../../dark-chalk/Kanvas";
import { Teks } from "../../../dark-chalk/Teks";
import { KAPUR } from "../../../dark-chalk/palette";
import type { SceneProps } from "../../_shared/types";
import { Gelombang, MULAI_VISUAL, Perekam, TandaTanya } from "../assets/Ilustrasi";

export const Cta: React.FC<SceneProps> = () => (
    <>
      <Teks text="Bagian mana terasa berbeda?" sorot="berbeda?" size={100} top={250} />
      <Kanvas>
        <Pop at={MULAI_VISUAL} durasi={3}>
          <Gelombang x={350} y={810} s={0.68} mulai={MULAI_VISUAL} />
          <Perekam x={700} y={810} s={0.7} mulai={MULAI_VISUAL} />
          <Garis d="M470 810 L560 810" mulai={MULAI_VISUAL} lama={5} warna={KAPUR.chalk} tebal={7} />
        </Pop>
        <Pop at={MULAI_VISUAL} durasi={3}>
          <TandaTanya x={810} y={630} s={1.3} mulai={MULAI_VISUAL} />
        </Pop>
      </Kanvas>
    </>
);
