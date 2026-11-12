import type React from "react";
import { Baterai } from "../../../dark-chalk/objek/Gawai";
import { Langkah } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain3: baterai menua (butir 1) → ruang isinya menyusut, bagian kosong putus-putus (butir 2).
export const Explain3: React.FC<SceneProps> = ({ at }) => (
  <Langkah
    judul="Baterai ikut menua"
    sorotJudul="menua"
    butir={[
      { teks: "baterai menua", at: Math.max(8, at("menua")), gambar: ({ x, y, size }) => <Baterai cx={x} cy={y} lebar={size * 1.1} level={1} mulai={at("menua")} /> },
      { teks: "isinya makin sedikit", at: at("makin sedikit"), gambar: ({ x, y, size }) => <Baterai cx={x} cy={y} lebar={size * 1.1} level={1} kapasitas={0.45} mulai={at("makin sedikit")} /> },
    ]}
  />
);
