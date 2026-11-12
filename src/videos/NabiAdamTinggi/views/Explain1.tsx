import type React from "react";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Bandingkan } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

export const Explain1: React.FC<SceneProps> = ({ at }) => <>
  <Bandingkan judul="Dua hadis, satu ukuran" sorotJudul="ukuran"
    kiri={{ teks: "Bukhari 3326", at: at("Sahih al-Bukhari"), gambar: ({ x, y }) => <Ikon nama="book" cx={x} cy={y} size={190} mulai={at("Sahih al-Bukhari")} tebal={8} /> }}
    kanan={{ teks: "Muslim 2841", at: at("Muslim"), gambar: ({ x, y }) => <Ikon nama="book" cx={x} cy={y} size={190} mulai={at("Muslim")} warna={KAPUR.gold} tebal={8} /> }} />
  <Label teks="60 hasta" x={340} y={1000} at={at("enam puluh")} size={48} warna={KAPUR.gold} lebar={320} />
  <Label teks="60 hasta" x={740} y={1000} at={at("ukuran")} size={48} warna={KAPUR.gold} lebar={320} />
</>;
