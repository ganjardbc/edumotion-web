import type React from "react";
import { BlokLempeng, PenampangTanah } from "../../../dark-chalk/objek/Gempa";
import { SebabAkibat } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain1: sebab = dua lempeng saling menekan (panah emas), akibat = satu lempeng terlepas dan terangkat (gempa).
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const tekan = at("lempeng");
  const angkat = at("terangkat");
  return (
    <SebabAkibat
      renggang
      judul="Lempeng terlepas"
      sorotJudul="terlepas"
      sebab={{ teks: "lempeng menekan", at: tekan, gambar: ({ x, y }) => <BlokLempeng cx={x} cy={y} size={440} mulai={tekan} tekan={tekan + 6} /> }}
      akibat={{ teks: "gempa", at: angkat, gambar: ({ x, y }) => <PenampangTanah cx={x} cy={y} size={440} mulai={angkat} rumah={false} getar={angkat + 8} retak={angkat + 8} geserPx={26} /> }}
    />
  );
};
