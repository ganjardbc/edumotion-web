import type React from "react";
import { useCurrentFrame } from "remotion";
import { interpolateColors } from "remotion";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas, maju, Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { GelasAir, permukaanAir } from "../../../dark-chalk/objek/Gelas";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain3: dua gelas sama, air yang sama. Gelas kanan membeku: permukaan naik sekitar 9% di atas garis awal (garis putus emas).
const ALAS = 1120;
const TINGGI = 400;
const ISI = 0.72;
export const Explain3: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const beku = at("membeku");
  const muai = at("memuai");
  const sembilan = at("sembilan persen");
  const sama = at("sama");
  const naik = maju(frame, muai, 40);
  const isi = ISI * (1 + 0.09 * naik);
  const warna = interpolateColors(naik, [0, 1], [KAPUR.airIsi, KAPUR.esBeku]);
  const garis = permukaanAir(ALAS, TINGGI, ISI);
  const atas = permukaanAir(ALAS, TINGGI, isi);
  return (
    <>
      <Judul teks="Membeku, air memuai" sorot="memuai" />
      <Kanvas>
        <GelasAir x={250} y={ALAS} lebar={280} tinggi={TINGGI} isi={ISI} mulai={4} />
        <Pop at={beku}>
          <GelasAir x={650} y={ALAS} lebar={280} tinggi={TINGGI} isi={isi} warnaAir={warna} mulai={beku} gelombang={naik < 0.5} />
        </Pop>
        <Garis d={`M90 ${garis} L830 ${garis}`} mulai={muai - 4} lama={14} warna={KAPUR.gold} tebal={5} />
        <Pop at={sembilan}>
          <path d={`M815 ${garis} L815 ${atas}`} stroke={KAPUR.gold} strokeWidth={8} strokeLinecap="round" />
        </Pop>
      </Kanvas>
      <Label teks="cair" x={250} y={660} at={4} size={52} />
      <Label teks="beku" x={650} y={660} at={beku} size={52} warna={KAPUR.gold} />
      <Label teks="+9%" x={868} y={garis - 20} at={sembilan} size={56} warna={KAPUR.gold} lebar={150} />
      <Label teks="=" x={450} y={ALAS - 230} at={sama} size={120} warna={KAPUR.gold} lebar={120} />
      <Label teks="molekul sama" x={450} y={1200} at={sama} size={50} lebar={560} />
    </>
  );
};
