import type React from "react";
import { PenampangLaut } from "../../../dark-chalk/objek/Tsunami";
import { SebabAkibat } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain2: sebab = dasar laut naik menyentak air; akibat = gelombang menyebar di permukaan.
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const sentak = at("menyentak");
  const sebar = at("menyebar");
  return (
    <SebabAkibat
      renggang
      judul="Air tersentak"
      sorotJudul="tersentak"
      sebab={{ teks: "dasar naik", at: sentak, gambar: ({ x, y }) => <PenampangLaut cx={x} cy={y - 20} size={360} mulai={sentak} naik={sentak + 10} /> }}
      akibat={{ teks: "gelombang menyebar", at: sebar, gambar: ({ x, y }) => <PenampangLaut cx={x} cy={y - 20} size={360} mulai={sebar} naik={0} sebar={sebar + 4} /> }}
    />
  );
};
