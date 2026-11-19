import type React from "react";
import { BintangRuntuh, LubangHitam } from "../../../dark-chalk/objek/LubangHitam";
import { SebabAkibat } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain1: sebab = bintang besar yang mengerut saat "runtuh"; akibat = lubang hitam kecil muncul saat "terpampat".
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const bintang = at("bintang");
  const runtuh = at("runtuh");
  const terpampat = at("terpampat");
  return (
    <SebabAkibat
      renggang
      judul="Bintang runtuh"
      sorotJudul="runtuh"
      sebab={{ teks: "bintang besar", at: bintang, gambar: ({ x, y }) => <BintangRuntuh cx={x} cy={y} size={260} mulai={bintang} kerut={runtuh} /> }}
      akibat={{ teks: "lubang hitam", at: terpampat, gambar: ({ x, y }) => <LubangHitam cx={x} cy={y} size={400} mulai={terpampat} /> }}
    />
  );
};
