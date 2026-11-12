import type React from "react";
import { useCurrentFrame } from "remotion";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas, maju } from "../../../dark-chalk/Kanvas";
import { Baterai } from "../../../dark-chalk/objek/Gawai";
import { KAPUR } from "../../../dark-chalk/palette";
import { Termometer } from "../../../dark-chalk/objek/Purba";
import { Kunci as KunciPola } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Kunci (layar penuh, tanpa tokoh): termometer naik, api muncul, kapasitas baterai menyusut selamanya.
export const Kunci: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const naik = 0.3 + 0.65 * maju(frame, at("tiga"), Math.max(20, at("derajat") + 10 - at("tiga")));
  const rusak = maju(frame, at("selamanya"), 40);
  return (
    <KunciPola
      judul="Panas merusak baterai selamanya"
      sorotJudul="Panas"
      keterangan="di atas 35°C"
      keteranganAt={at("derajat")}
      gambar={
        <Kanvas>
          <Termometer cx={330} cy={850} tinggi={480} level={naik} warna={KAPUR.orange} mulai={14} />
          <Ikon nama="flame" cx={730} cy={640} size={150} mulai={at("derajat")} warna={KAPUR.orange} tebal={7} />
          <Baterai cx={730} cy={880} lebar={340} level={1} kapasitas={1 - 0.55 * rusak} mulai={18} />
        </Kanvas>
      }
    />
  );
};
