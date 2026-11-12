import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Bandingkan } from "../../../dark-chalk/pola";
import { KAPUR } from "../../../dark-chalk/palette";
import type { SceneProps } from "../../_shared/types";
import { Gelombang, Kepala, MULAI_VISUAL } from "../assets/Ilustrasi";

export const Explain1: React.FC<SceneProps> = () => (
  <Bandingkan
    judul="Dua jalur suara"
    sorotJudul="jalur"
    cepat
    kiri={{
      teks: "lewat udara",
      at: MULAI_VISUAL,
      gambar: ({ x, y }) => (
        <g>
          <Kepala x={x} y={y + 35} s={0.53} mulai={MULAI_VISUAL} />
          <Gelombang x={x - 65} y={y - 70} s={0.3} mulai={MULAI_VISUAL} />
          <Garis d={`M${x - 32} ${y - 24} L${x + 5} ${y + 10}`} mulai={MULAI_VISUAL} lama={4} warna={KAPUR.gold} tebal={7} />
        </g>
      ),
    }}
    kanan={{
      teks: "getaran tulang",
      at: MULAI_VISUAL,
      gambar: ({ x, y }) => (
        <g>
          <Kepala x={x} y={y + 35} s={0.53} mulai={MULAI_VISUAL} />
          <Garis d={`M${x - 40} ${y + 4} Q${x - 15} ${y - 25} ${x + 10} ${y + 4} T${x + 55} ${y + 4}`} mulai={MULAI_VISUAL} lama={4} warna={KAPUR.gold} tebal={8} />
          <Garis d={`M${x + 22} ${y + 28} L${x + 60} ${y + 28}`} mulai={MULAI_VISUAL + 1} lama={4} warna={KAPUR.chalk} tebal={7} />
        </g>
      ),
    }}
  />
);
