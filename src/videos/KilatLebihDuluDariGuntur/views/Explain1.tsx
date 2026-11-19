import type React from "react";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { GelombangSuara, Kilat } from "../../../dark-chalk/objek/Petir";
import { KAPUR } from "../../../dark-chalk/palette";
import { SebabAkibat } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain1: sebab (kilat + api = udara panas sekali) → akibat (udara memuai cepat, gelombang suara).
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const panas = at("panas");
  const memuai = at("memuai");
  return (
    <SebabAkibat
      judul="Kilat memanaskan udara"
      sorotJudul="memanaskan"
      sebab={{
        teks: "udara panas sekali",
        at: panas,
        gambar: ({ x, y }) => (
          <>
            <Kilat cx={x - 80} cy={y} size={190} mulai={panas} />
            <Ikon nama="flame" cx={x + 80} cy={y} size={150} mulai={panas + 6} warna={KAPUR.orange} tebal={7} />
          </>
        ),
      }}
      akibat={{
        teks: "udara memuai",
        at: memuai,
        gambar: ({ x, y }) => (
          <>
            <circle cx={x} cy={y} r={16} fill={KAPUR.gold} />
            <GelombangSuara cx={x} cy={y} mulai={memuai} laju={2.4} maxR={130} tebal={7} />
          </>
        ),
      }}
    />
  );
};
