import type React from "react";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Tetes } from "../../../dark-chalk/objek/Laut";
import { KAPUR } from "../../../dark-chalk/palette";
import { Langkah } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain3: tiga langkah bernomor: tetes bergabung, jadi besar dan berat, jatuh sebagai hujan.
export const Explain3: React.FC<SceneProps> = ({ at }) => {
  const gabung = at("bergabung");
  const besar = at("besar");
  const hujan = at("hujan");
  return (
    <Langkah
      judul="Dari melayang jadi hujan"
      sorotJudul="hujan"
      butir={[
        {
          teks: "tetes bergabung",
          at: gabung,
          gambar: ({ x, y }) => (
            <>
              <Tetes cx={x - 60} cy={y + 20} size={60} mulai={gabung} />
              <Tetes cx={x + 10} cy={y - 25} size={60} mulai={gabung + 4} />
              <Tetes cx={x + 70} cy={y + 25} size={60} mulai={gabung + 8} />
            </>
          ),
        },
        { teks: "jadi besar, berat", at: besar, gambar: ({ x, y }) => <Tetes cx={x} cy={y} size={150} mulai={besar} /> },
        { teks: "jatuh jadi hujan", at: hujan, gambar: ({ x, y, size }) => <Ikon nama="cloud-rain" cx={x} cy={y} size={size} mulai={hujan} warna={KAPUR.es} tebal={7} /> },
      ]}
    />
  );
};
