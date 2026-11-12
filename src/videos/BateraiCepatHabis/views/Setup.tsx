import type React from "react";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Hape } from "../../../dark-chalk/objek/Gawai";
import { KAPUR } from "../../../dark-chalk/palette";
import { SebabAkibat } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Setup: tebakan keliru. Banyak aplikasi terbuka (sebab) → ditutup semua dengan penghapus (akibat).
export const Setup: React.FC<SceneProps> = ({ at }) => (
  <SebabAkibat
    judul="Gara-gara aplikasi terbuka?"
    sorotJudul="aplikasi"
    sebab={{ teks: "banyak aplikasi", at: Math.max(8, at("aplikasi")), gambar: (k) => <Hape cx={k.x} cy={k.y} tinggi={k.size * 1.05} aplikasi terang={0.35} mulai={8} /> }}
    akibat={{ teks: "tutup semua?", at: at("ditutup"), gambar: (k) => <Ikon nama="eraser" cx={k.x} cy={k.y} size={k.size * 0.8} mulai={at("ditutup")} warna={KAPUR.orange} tebal={7} /> }}
  />
);
