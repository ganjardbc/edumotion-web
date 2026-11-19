import type React from "react";
import { BlokBatu, Tumpukan } from "../../../dark-chalk/objek/Borobudur";
import { Langkah } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain2: tiga butir: batu mentah dipahat (dipahat), balok rapi (disusun), tumpukan naik (naik).
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const pahat = at("dipahat");
  const susun = at("disusun");
  const naik = at("naik");
  return (
    <Langkah
      judul="Dipahat, lalu disusun"
      sorotJudul="disusun"
      butir={[
        { teks: "dipahat", at: pahat, gambar: ({ x, y }) => <BlokBatu cx={x} cy={y} size={130} jenis="kasar" mulai={pahat + 8} /> },
        { teks: "disusun", at: susun, gambar: ({ x, y }) => <BlokBatu cx={x} cy={y} size={130} jenis="rapi" mulai={susun + 8} /> },
        { teks: "naik", at: naik, gambar: ({ x, y }) => <Tumpukan cx={x} cy={y} size={150} mulai={naik + 8} /> },
      ]}
    />
  );
};
