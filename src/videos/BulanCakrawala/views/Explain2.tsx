import type React from "react";
import { useCurrentFrame } from "remotion";
import { Garis } from "../../../dark-chalk/Garis";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Silang } from "../../../dark-chalk/objek/LubangHitam";
import { BulanKapur } from "../../../dark-chalk/objek/Bulan";
import { Panah } from "../../../dark-chalk/objek/Terbang";
import { KAPUR } from "../../../dark-chalk/palette";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { Judul, SebabAkibat } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain2: dua fase. (1) Bandingkan: jarak ke Bulan di cakrawala sedikit lebih panjang (garis putus emas lebih panjang).
// (2) SebabAkibat: atmosfer tidak memperbesar Bulan (panah membesar dicoret).
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const bulan = at("Bulan");
  const jauh = at("lebih jauh");
  const atmosfer = at("Atmosfer");
  const besar = at("memperbesarnya");
  if (frame < atmosfer - 6) {
    // Fase 1: pengamat di kiri bawah. Bulan tinggi di atasnya, Bulan cakrawala di kanan; ruas emas = tambahan jarak.
    return (
      <>
        <Judul teks="Cakrawala sedikit lebih jauh" sorot="jauh" at={bulan} />
        <Kanvas>
          <Garis kasar={1} d="M180 1100 L1000 1100" mulai={bulan} lama={14} warna={KAPUR.abu} tebal={7} />
          <circle cx={300} cy={1085} r={16} fill={KAPUR.chalk} />
          <BulanKapur cx={300} cy={640} size={140} mulai={bulan + 4} />
          <Garis kasar={1} d="M300 1040 L300 730" mulai={bulan + 10} lama={14} warna={KAPUR.chalk} tebal={7} />
          <Garis kasar={1} d="M330 1085 L640 1085" mulai={jauh - 6} lama={14} warna={KAPUR.chalk} tebal={7} />
          <Garis kasar={1} d="M640 1085 L790 1085" mulai={jauh - 4} lama={10} warna={KAPUR.gold} tebal={11} />
          <BulanKapur cx={860} cy={1020} size={140} mulai={jauh - 10} />
        </Kanvas>
        <Label teks="kamu" x={300} y={1170} at={bulan} size={48} lebar={200} />
        <Label teks="langit tinggi" x={300} y={520} at={bulan + 6} size={50} lebar={340} />
        <Label teks="cakrawala" x={860} y={1170} at={jauh} size={50} lebar={300} />
        <Label teks="lebih jauh" x={620} y={1010} at={jauh} size={48} warna={KAPUR.gold} lebar={240} />
      </>
    );
  }
  return (
    <SebabAkibat
      renggang
      judul="Udara tidak membesarkan"
      sorotJudul="tidak"
      sebab={{ teks: "atmosfer", at: atmosfer - 6, gambar: ({ x, y }) => <Ikon nama="cloud" cx={x} cy={y} size={170} mulai={atmosfer - 6} warna={KAPUR.es} tebal={8} /> }}
      akibat={{
        teks: "Bulan tidak membesar",
        at: besar - 6,
        gambar: ({ x, y }) => (
          <>
            <BulanKapur cx={x - 70} cy={y} size={130} mulai={besar - 6} />
            <Panah cx={x + 90} cy={y} size={110} arah="atas" mulai={besar} warna={KAPUR.abu} tebal={9} />
            <Silang cx={x + 90} cy={y} size={90} mulai={besar + 8} />
          </>
        ),
      }}
    />
  );
};
