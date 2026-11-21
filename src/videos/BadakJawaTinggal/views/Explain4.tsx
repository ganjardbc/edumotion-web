import type React from "react";
import { FotoPin } from "../../../dark-chalk/FotoPin";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { AngkaTeks } from "../../../dark-chalk/objek/Angka";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain4: papan angka; "87–100" tergambar saat "delapan"; "kurang dari 100" disorot saat "kurang".
export const Explain4: React.FC<SceneProps> = ({ at }) => {
  const kurang = at("kurang");
  const tahun = at("2025:");
  const angka = at("delapan");
  return (
    <>
      <Judul teks="Kurang dari 100 ekor" sorot="100" />
      <FotoPin berkas="badak/5.jpg" cx={540} cy={610} lebar={440} rasio={361 / 554} miring={2.5} mulai={4} />
      <Kanvas>
                <Garis kasar={1} d="M200 810 L880 810" mulai={kurang} lama={14} warna={KAPUR.gold} tebal={9} />
        <AngkaTeks cx={540} cy={950} teks="87–100" size={230} warna={KAPUR.gold} />
      </Kanvas>
      <Label teks="Perkiraan 2025" x={540} y={1090} at={tahun} size={56} lebar={560} />
      <Label teks="ekor badak jawa" x={540} y={1180} at={angka} size={52} warna={KAPUR.abu} lebar={560} />
    </>
  );
};
