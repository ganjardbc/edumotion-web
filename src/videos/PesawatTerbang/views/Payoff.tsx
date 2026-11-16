import type React from "react";
import { Panah, Penampang, Pesawat } from "../../../dark-chalk/objek/Terbang";
import { KAPUR } from "../../../dark-chalk/palette";
import { Langkah } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Payoff: sayap miring -> udara ke bawah -> pesawat naik (urutan sebab ke akibat, gambar sama dengan Explain).
export const Payoff: React.FC<SceneProps> = ({ at }) => {
  const sayap = at("sayapnya");
  const bawah = at("bawah");
  const atas = at("mendorongnya");
  return (
    <Langkah
      judul="Udara ke bawah, pesawat ke atas"
      sorotJudul="atas"
      butir={[
        { teks: "sayap miring", at: sayap, gambar: ({ x, y }) => <Penampang cx={x} cy={y} size={190} mulai={sayap + 8} /> },
        {
          teks: "udara ke bawah",
          at: bawah,
          gambar: ({ x, y }) => (
            <>
              <Penampang cx={x} cy={y - 30} size={170} mulai={bawah + 6} />
              <Panah cx={x} cy={y + 45} size={80} arah="bawah" mulai={bawah + 14} warna={KAPUR.es} tebal={9} />
            </>
          ),
        },
        {
          teks: "pesawat naik",
          at: atas,
          gambar: ({ x, y }) => (
            <>
              <Pesawat cx={x} cy={y + 30} size={190} mulai={atas + 4} miring={-10} />
              <Panah cx={x + 10} cy={y - 50} size={80} arah="atas" mulai={atas + 10} tebal={9} />
            </>
          ),
        },
      ]}
    />
  );
};
