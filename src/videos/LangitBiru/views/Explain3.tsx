import type React from "react";
import { useCurrentFrame } from "remotion";
import { Garis } from "../../../dark-chalk/Garis";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { KAPUR } from "../../../dark-chalk/palette";
import { Bandingkan, Langkah } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";
import { UNGU, gelombang } from "./gambar";

// Explain3, dua fase: (1) Bandingkan: ungu tersebar lebih kuat (gelombang lebih rapat, lebih tinggi) daripada biru;
// (2) Langkah: dua alasan langit tetap biru.
export const Explain3: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const tapi = at("Tapi");
  if (frame < tapi - 6) {
    const kuat = at("lebih kuat");
    return (
      <Bandingkan
        judul="Ungu tersebar lebih kuat"
        sorotJudul="Ungu"
        kiri={{ teks: "ungu: lebih kuat", at: Math.max(8, at("ungu")), gambar: ({ x, y }) => <Garis d={gelombang(x - 150, y, 300, 56, 50)} mulai={Math.max(8, at("ungu"))} lama={30} tebal={8} warna={UNGU} kasar={0.5} /> }}
        kanan={{ teks: "biru: kuat", at: kuat, gambar: ({ x, y }) => <Garis d={gelombang(x - 150, y, 300, 34, 60)} mulai={kuat} lama={30} tebal={8} warna={KAPUR.es} kasar={0.5} /> }}
      />
    );
  }
  return (
    <Langkah
      judul="Tapi langit tetap biru"
      sorotJudul="biru"
      butir={[
        { teks: "ungu dari Matahari sedikit", at: at("cahaya ungu", 1), gambar: ({ x, y, size }) => <Ikon nama="sun" cx={x} cy={y} size={size * 0.9} mulai={at("cahaya ungu", 1)} warna={KAPUR.gold} tebal={7} /> },
        { teks: "mata kurang peka", at: at("mata kita"), gambar: ({ x, y, size }) => <Ikon nama="eye" cx={x} cy={y} size={size * 0.9} mulai={at("mata kita")} warna={KAPUR.chalk} tebal={7} /> },
      ]}
    />
  );
};
