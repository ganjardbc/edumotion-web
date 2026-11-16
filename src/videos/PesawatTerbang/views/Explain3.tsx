import type React from "react";
import { Panah, Penampang, Pesawat } from "../../../dark-chalk/objek/Terbang";
import { KAPUR } from "../../../dark-chalk/palette";
import { Langkah } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain3: tiga butir: sayap mendorong udara ke bawah, udara mendorong sayap ke atas, pesawat terangkat (gaya angkat).
export const Explain3: React.FC<SceneProps> = ({ at }) => {
  const dorong = at("terdorong");
  const balas = at("membalas");
  const angkat = at("dorongan");
  return (
    <Langkah
      judul="Udara mendorong balik"
      sorotJudul="balik"
      butir={[
        {
          teks: "udara ke bawah",
          at: dorong,
          gambar: ({ x, y }) => (
            <>
              <Penampang cx={x} cy={y - 30} size={170} mulai={dorong + 8} />
              <Panah cx={x} cy={y + 45} size={80} arah="bawah" mulai={dorong + 18} warna={KAPUR.es} tebal={9} />
            </>
          ),
        },
        {
          teks: "didorong balik",
          at: balas,
          gambar: ({ x, y }) => (
            <>
              <Penampang cx={x} cy={y + 35} size={170} mulai={balas + 8} />
              <Panah cx={x} cy={y - 40} size={80} arah="atas" mulai={balas + 18} tebal={9} />
            </>
          ),
        },
        {
          teks: "gaya angkat",
          at: angkat,
          gambar: ({ x, y }) => (
            <>
              <Pesawat cx={x} cy={y + 35} size={190} mulai={angkat + 4} />
              <Panah cx={x} cy={y - 45} size={80} arah="atas" mulai={angkat + 10} tebal={9} />
            </>
          ),
        },
      ]}
    />
  );
};
