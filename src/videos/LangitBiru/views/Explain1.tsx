import type React from "react";
import { useCurrentFrame } from "remotion";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Garis } from "../../../dark-chalk/Garis";
import { KAPUR } from "../../../dark-chalk/palette";
import { Bandingkan, SebabAkibat } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";
import { gelombang } from "./gambar";

// Explain1, dua fase: (1) Sebab→Akibat: cahaya putih Matahari = campuran warna (pelangi); (2) Bandingkan: biru gelombang pendek, merah panjang.
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const biru = at("Cahaya biru");
  if (frame < biru - 6) {
    return (
      <SebabAkibat
        judul="Cahaya putih itu campuran"
        sorotJudul="campuran"
        sebab={{ teks: "Cahaya Matahari: putih", at: Math.max(8, at("Cahaya Matahari")), gambar: ({ x, y, size }) => <Ikon nama="sun" cx={x} cy={y} size={size} mulai={Math.max(8, at("Cahaya Matahari"))} warna={KAPUR.gold} tebal={8} /> }}
        akibat={{ teks: "isinya semua warna", at: at("campuran"), gambar: ({ x, y, size }) => <Ikon nama="rainbow" cx={x} cy={y} size={size} mulai={at("campuran")} warna={KAPUR.orange} tebal={8} /> }}
      />
    );
  }
  const merah = at("Cahaya merah");
  return (
    <Bandingkan
      judul="Panjang gelombangnya beda"
      sorotJudul="gelombangnya"
      kiri={{ teks: "biru: pendek", at: biru, gambar: ({ x, y }) => <Garis d={gelombang(x - 150, y, 300, 40, 60)} mulai={biru} lama={30} tebal={8} warna={KAPUR.es} kasar={0.5} /> }}
      kanan={{ teks: "merah: panjang", at: merah, gambar: ({ x, y }) => <Garis d={gelombang(x - 150, y, 300, 40, 150)} mulai={merah} lama={30} tebal={8} warna={KAPUR.orange} kasar={0.5} /> }}
    />
  );
};
