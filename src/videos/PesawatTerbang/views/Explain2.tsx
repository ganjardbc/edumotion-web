import type React from "react";
import { SayapUdara } from "../../../dark-chalk/objek/Terbang";
import { SebabAkibat } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain2: sebab = penampang sayap miring (garis datar abu + busur sudut emas), akibat = aliran udara
// melewati sayap lalu dibelokkan ke bawah (panah emas turun).
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const miring = at("miring");
  const bawah = at("membelokkan");
  return (
    <SebabAkibat
      renggang
      judul="Sayap membelokkan udara"
      sorotJudul="membelokkan"
      sebab={{ teks: "sayap miring", at: miring, gambar: ({ x, y }) => <SayapUdara cx={x} cy={y + 10} size={440} mulai={miring} /> }}
      akibat={{ teks: "udara ke bawah", at: bawah, gambar: ({ x, y }) => <SayapUdara cx={x - 10} cy={y + 5} size={440} mulai={bawah} belok /> }}
    />
  );
};
