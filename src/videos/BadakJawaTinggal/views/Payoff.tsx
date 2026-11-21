import type React from "react";
import { FotoPin } from "../../../dark-chalk/FotoPin";
import { Label } from "../../../dark-chalk/Label";
import { PulauJawa } from "../../../dark-chalk/objek/Badak";
import { KAPUR } from "../../../dark-chalk/palette";
import { Kunci as KunciPola } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Payoff (layar penuh): foto badak ditempel pin di atas ujung barat Pulau Jawa saat "hanya"; label "Hanya di sini".
export const Payoff: React.FC<SceneProps> = ({ at }) => {
  const hanya = at("hanya");
  const ujung = at("Ujung");
  return (
    <>
      <KunciPola
        judul="Hanya ada di sini"
        sorotJudul="Hanya"
        keterangan="Hanya di sini"
        keteranganAt={ujung}
        gambar={
          <PulauJawa cx={540} cy={1010} size={800} mulai={4} pin={4} />
        }
      />
      <FotoPin berkas="badak/4.webp" cx={640} cy={720} lebar={560} rasio={800 / 1200} miring={-3} mulai={hanya} />
      <Label teks="Ujung Kulon" x={290} y={1100} at={ujung} size={56} warna={KAPUR.orange} lebar={420} />
    </>
  );
};
