import type React from "react";
import { AngkaTeks } from "../../../dark-chalk/objek/Angka";
import { KAPUR } from "../../../dark-chalk/palette";
import { Bandingkan } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Setup: tebakan keliru. Kiri: "penemu Arab?" (tebakan); kanan: angka 1 2 3 yang disebut "angka Arab" (alasan tebakan).
export const Setup: React.FC<SceneProps> = ({ at }) => (
  <Bandingkan
    judul="Penemunya orang Arab?"
    sorotJudul="Arab"
    kiri={{ teks: "penemu Arab?", at: Math.max(8, at("mengira")), gambar: ({ x, y }) => <AngkaTeks cx={x} cy={y} teks="?" size={300} warna={KAPUR.gold} /> }}
    kanan={{ teks: "angka Arab", at: at("angka"), gambar: ({ x, y }) => <AngkaTeks cx={x} cy={y} teks="1 2 3" size={110} /> }}
  />
);
