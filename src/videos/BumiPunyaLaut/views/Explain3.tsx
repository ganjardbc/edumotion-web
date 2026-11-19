import type React from "react";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { KAPUR } from "../../../dark-chalk/palette";
import { Langkah } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain3: tiga langkah bernomor, masing-masing muncul saat kata kuncinya: uap, awan, hujan.
export const Explain3: React.FC<SceneProps> = ({ at }) => {
  const uap = at("uap");
  const awan = at("awan");
  const hujan = at("hujan");
  return (
    <Langkah
      judul="Dari gunung jadi laut"
      sorotJudul="laut"
      butir={[
        { teks: "uap keluar", at: uap, gambar: ({ x, y, size }) => <Ikon nama="volcano" cx={x} cy={y} size={size} mulai={uap} warna={KAPUR.orange} tebal={7} /> },
        { teks: "jadi awan", at: awan, gambar: ({ x, y, size }) => <Ikon nama="cloud" cx={x} cy={y} size={size} mulai={awan} warna={KAPUR.abu} tebal={7} /> },
        { teks: "hujan jadi laut", at: hujan, gambar: ({ x, y, size }) => <Ikon nama="cloud-rain" cx={x} cy={y} size={size} mulai={hujan} warna={KAPUR.es} tebal={7} /> },
      ]}
    />
  );
};
