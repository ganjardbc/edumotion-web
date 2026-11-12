import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { SebabAkibat } from "../../../dark-chalk/pola";
import { KAPUR } from "../../../dark-chalk/palette";
import type { SceneProps } from "../../_shared/types";
import { Gelombang, Kepala, MULAI_VISUAL } from "../assets/Ilustrasi";

export const Explain2: React.FC<SceneProps> = () => (
  <SebabAkibat
    judul="Getaran tulang ikut mewarnai suara"
    sorotJudul="mewarnai"
    cepat
    sebab={{
      teks: "getaran tulang",
      at: MULAI_VISUAL,
      gambar: ({ x, y }) => (
        <g>
          <Kepala x={x} y={y + 35} s={0.42} mulai={MULAI_VISUAL} />
          <Garis d={`M${x - 35} ${y + 18} Q${x - 5} ${y - 12} ${x + 25} ${y + 18}`} mulai={MULAI_VISUAL} lama={4} warna={KAPUR.gold} tebal={8} />
        </g>
      ),
    }}
    akibat={{
      teks: "suara dari dalam",
      at: MULAI_VISUAL,
      gambar: ({ x, y }) => <Gelombang x={x} y={y} s={0.8} mulai={MULAI_VISUAL} warna={KAPUR.gold} />,
    }}
  />
);
