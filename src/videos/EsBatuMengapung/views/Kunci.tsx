import type React from "react";
import { useCurrentFrame } from "remotion";
import { Garis } from "../../../dark-chalk/Garis";
import { GelasAir, permukaanAir } from "../../../dark-chalk/objek/Gelas";
import { KubusEs } from "../../../dark-chalk/objek/KubusEs";
import { KAPUR } from "../../../dark-chalk/palette";
import { Kunci as KunciPola } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Kunci (layar penuh, tanpa karakter): gelas besar dengan kubus es mengapung dan naik turun pelan.
export const Kunci: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const ALAS = 1150;
  const TINGGI = 560;
  const muka = permukaanAir(ALAS, TINGGI, 0.7);
  const ringan = at("ringan");
  return (
    <KunciPola
      judul="Es lebih renggang"
      sorotJudul="renggang"
      keterangan="lebih ringan dari air"
      keteranganAt={ringan - 6}
      gambar={
        <GelasAir x={540} y={ALAS} lebar={500} tinggi={TINGGI} isi={0.7} mulai={4}>
          <KubusEs cx={540} cy={muka + 62 + Math.sin(frame / 16) * 8} size={200} tilt={Math.sin(frame / 20) * 5} mulai={14} />
          <Garis d={`M300 ${muka - 30} L250 ${muka - 70} M780 ${muka - 30} L830 ${muka - 70} M540 ${muka - 120} L540 ${muka - 170}`} mulai={ringan} lama={10} warna={KAPUR.gold} tebal={8} />
        </GelasAir>
      }
    />
  );
};
