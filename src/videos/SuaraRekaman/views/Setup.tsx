import type React from "react";
import { Sorot } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";
import { Mikrofon, MULAI_VISUAL } from "../assets/Ilustrasi";

export const Setup: React.FC<SceneProps> = () => (
  <Sorot
    judul="Salahkan mikrofon?"
    sorotJudul="mikrofon?"
    cepat
    gambar={({ x, y }) => <Mikrofon x={x} y={y} s={1.35} mulai={MULAI_VISUAL} />}
    lensaAt={MULAI_VISUAL}
    penanda={{ teks: "mikrofon", dari: { x: 540, y: 1200 }, ke: { x: 565, y: 890 }, at: MULAI_VISUAL }}
  />
);
