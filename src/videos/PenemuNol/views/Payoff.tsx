import type React from "react";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Nol } from "../../../dark-chalk/objek/Angka";
import { KAPUR } from "../../../dark-chalk/palette";
import { Langkah } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Payoff: tiga langkah berurutan seperti narasi: lahir di India → dibawa Arab → dipakai Eropa.
export const Payoff: React.FC<SceneProps> = ({ at }) => (
  <Langkah
    judul="India, Arab, lalu Eropa"
    sorotJudul="India"
    butir={[
      { teks: "lahir di India", at: Math.max(8, at("India")), gambar: ({ x, y }) => <Nol cx={x} cy={y} tinggi={120} mulai={8} warna={KAPUR.gold} tebal={9} /> },
      { teks: "dibawa Arab", at: at("Arab"), gambar: ({ x, y }) => <Ikon nama="book" cx={x} cy={y} size={130} warna={KAPUR.coklat} mulai={at("Arab")} tebal={7} /> },
      { teks: "dipakai Eropa", at: at("sampai"), gambar: ({ x, y }) => <Ikon nama="globe" cx={x} cy={y} size={130} warna={KAPUR.es} mulai={at("sampai")} tebal={7} /> },
    ]}
  />
);
