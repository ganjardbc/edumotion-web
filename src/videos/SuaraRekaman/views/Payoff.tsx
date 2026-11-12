import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas, Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { Judul } from "../../../dark-chalk/pola";
import { KAPUR } from "../../../dark-chalk/palette";
import type { SceneProps } from "../../_shared/types";
import { Gelombang, Kepala, MULAI_VISUAL, Perekam } from "../assets/Ilustrasi";

export const Payoff: React.FC<SceneProps> = () => {
  return (
    <>
      <Judul teks="Kenapa rekaman terasa asing?" sorot="asing?" />
      <Kanvas>
        <Pop at={MULAI_VISUAL} durasi={3}>
          <Kepala x={260} y={820} s={0.66} mulai={MULAI_VISUAL} />
          <Garis d="M340 795 L450 795" mulai={MULAI_VISUAL} lama={5} warna={KAPUR.gold} tebal={8} />
          <Garis d="M340 870 L450 870" mulai={MULAI_VISUAL} lama={5} warna={KAPUR.chalk} tebal={8} />
          <Label teks="udara" x={385} y={745} at={MULAI_VISUAL} size={45} warna={KAPUR.gold} lebar={180} durasi={3} />
          <Label teks="getaran tulang" x={405} y={920} at={MULAI_VISUAL} size={42} lebar={260} durasi={3} />
        </Pop>
        <Pop at={MULAI_VISUAL} durasi={3}>
          <Garis d="M445 795 L610 795" mulai={MULAI_VISUAL} lama={5} warna={KAPUR.gold} tebal={8} />
          <Garis d="M445 870 L555 870" mulai={MULAI_VISUAL} lama={5} warna={KAPUR.chalk} tebal={8} />
          <Garis d="M555 850 L585 890 M585 850 L555 890" mulai={MULAI_VISUAL} lama={5} warna={KAPUR.orange} tebal={9} />
        </Pop>
        <Pop at={MULAI_VISUAL} durasi={3}>
          <Perekam x={760} y={835} s={0.82} mulai={MULAI_VISUAL} />
          <Gelombang x={615} y={795} s={0.42} mulai={MULAI_VISUAL} warna={KAPUR.gold} />
        </Pop>
      </Kanvas>
      <Label teks="yang biasa kamu dengar" x={540} y={1170} at={MULAI_VISUAL} size={52} warna={KAPUR.gold} lebar={720} durasi={3} />
    </>
  );
};
