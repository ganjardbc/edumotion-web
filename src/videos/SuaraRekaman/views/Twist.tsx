import type React from "react";
import { Koreksi } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";
import { Kepala, MULAI_VISUAL } from "../assets/Ilustrasi";

export const Twist: React.FC<SceneProps> = () => {
  const mulai = MULAI_VISUAL;
  return (
    <Koreksi
      judul="Ternyata dari telinga"
      cepat
      salahAt={MULAI_VISUAL}
      salah="karena mikrofon"
      coretAt={MULAI_VISUAL}
      benar={{
        teks: "cara kamu mendengar",
        at: mulai,
        gambar: ({ x, y, size }) => <Kepala x={x} y={y} s={size / 270} mulai={mulai} />,
      }}
    />
  );
};
