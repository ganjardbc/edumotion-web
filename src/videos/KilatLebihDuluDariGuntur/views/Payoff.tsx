import type React from "react";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kilat } from "../../../dark-chalk/objek/Petir";
import { KAPUR } from "../../../dark-chalk/palette";
import { Langkah } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Payoff: lihat kilat → suara menyusul → dengar guntur (urutan waktu).
export const Payoff: React.FC<SceneProps> = ({ at }) => {
  const lihat = at("melihat");
  const suara = at("suara");
  const dengar = at("terdengar");
  return (
    <Langkah
      judul="Cahaya duluan, suara menyusul"
      sorotJudul="menyusul"
      butir={[
        { teks: "lihat kilat", at: lihat, gambar: ({ x, y }) => <Kilat cx={x} cy={y} size={150} mulai={lihat + 8} /> },
        { teks: "suara menyusul", at: suara, gambar: ({ x, y }) => <Ikon nama="ripple" cx={x} cy={y} size={120} mulai={suara + 8} warna={KAPUR.es} tebal={7} /> },
        { teks: "dengar guntur", at: dengar, gambar: ({ x, y }) => <Ikon nama="cloud-storm" cx={x} cy={y} size={130} mulai={dengar + 8} warna={KAPUR.abu} tebal={7} /> },
      ]}
    />
  );
};
