import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { KAPUR } from "../../../dark-chalk/palette";
import { Bandingkan } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

const TANAH = 1000;
const ATAS_UDARA = 900;

// Satu panel: tanah, lapisan udara (kotak berisi arsir ringan), sinar dari Matahari ke pengamat (titik emas).
const Panel: React.FC<{ readonly x: number; readonly senja: boolean; readonly mulai: number }> = ({ x, senja, mulai }) => (
  <>
    <Garis d={`M${x - 170} ${TANAH} L${x + 170} ${TANAH}`} mulai={mulai} lama={10} tebal={7} />
    <Garis d={`M${x - 170} ${ATAS_UDARA} L${x + 170} ${ATAS_UDARA}`} mulai={mulai} lama={10} tebal={5} warna={KAPUR.es} isi={KAPUR.airIsi} />
    {senja ? (
      <>
        <Ikon nama="sun" cx={x - 130} cy={800} size={90} mulai={mulai} warna={KAPUR.gold} tebal={6} />
        <Garis d={`M${x - 95} ${835} L${x + 120} ${TANAH}`} mulai={mulai + 10} lama={30} tebal={9} warna={KAPUR.orange} />
      </>
    ) : (
      <>
        <Ikon nama="sun" cx={x} cy={640} size={90} mulai={mulai} warna={KAPUR.gold} tebal={6} />
        <Garis d={`M${x} ${700} L${x} ${TANAH}`} mulai={mulai + 10} lama={20} tebal={9} warna={KAPUR.es} />
      </>
    )}
    <circle cx={senja ? x + 120 : x} cy={TANAH - 10} r={11} fill={KAPUR.gold} />
  </>
);

// Explain4 (pola Bandingkan, kolom): jalur cahaya siang (pendek) vs senja (panjang) menembus lapisan udara.
export const Explain4: React.FC<SceneProps> = ({ at }) => {
  const senja = at("melewati");
  return (
    <Bandingkan
      judul="Saat senja, jalurnya panjang"
      sorotJudul="panjang"
      kiri={{ teks: "siang: pendek", at: Math.max(8, at("Saat")), gambar: ({ x }) => <Panel x={x} senja={false} mulai={Math.max(8, at("Saat"))} /> }}
      kanan={{ teks: "senja: panjang", at: senja, gambar: ({ x }) => <Panel x={x} senja mulai={senja} /> }}
    />
  );
};
