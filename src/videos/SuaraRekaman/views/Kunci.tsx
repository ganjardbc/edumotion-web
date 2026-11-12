import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Kunci as KunciPola } from "../../../dark-chalk/pola";
import { KAPUR } from "../../../dark-chalk/palette";
import type { SceneProps } from "../../_shared/types";
import { Gelombang, Mikrofon, MULAI_VISUAL, Perekam } from "../assets/Ilustrasi";

export const Kunci: React.FC<SceneProps> = () => {
  return (
    <KunciPola
      judul="Rekaman lewat udara"
      sorotJudul="udara"
      cepat
      mulai={MULAI_VISUAL}
      keterangan="jalur getaran tulang tidak ikut"
      keteranganAt={MULAI_VISUAL}
      gambar={
        <>
          <Mikrofon x={310} y={850} s={0.8} mulai={MULAI_VISUAL} />
          <Gelombang x={510} y={850} s={0.48} mulai={MULAI_VISUAL} />
          <Perekam x={800} y={850} s={0.75} mulai={MULAI_VISUAL} />
          <Garis d="M400 850 L680 850" mulai={MULAI_VISUAL} lama={5} warna={KAPUR.gold} tebal={9} />
          <Garis d="M520 1180 Q475 1140 485 1080 Q495 1025 550 1045 Q605 1065 580 1115 Q555 1145 550 1170 M530 1120 Q535 1080 560 1085" mulai={MULAI_VISUAL} lama={5} warna={KAPUR.chalk} tebal={8} />
        </>
      }
    />
  );
};
