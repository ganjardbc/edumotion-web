import type React from "react";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { GarisWaktu, xWaktu } from "../../../dark-chalk/objek/Krakatau";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain3: garis waktu terisi emas dari 1857 ke 1949 mengikuti ucapan "1857" sampai "1949"; tahun muncul sesuai posisi garis.
export const Explain3: React.FC<SceneProps> = ({ at }) => {
  const isi = at("1857");
  const lama = at("1949") - at("1857") + 20;
  const saat = (tahun: number) => isi + ((tahun - 1857) / (1949 - 1857)) * lama;
  return (
    <>
      <Judul teks="Catatan sejarah" sorot="sejarah" />
      <Kanvas>
        <GarisWaktu cx={540} cy={760} lebar={800} mulai={6} isi={isi} lamaIsi={lama} tanda={[{ tahun: 1857 }, { tahun: 1883, warna: KAPUR.orange }, { tahun: 1949 }]} />
      </Kanvas>
      <Label teks="1857" x={xWaktu(1857, 540, 800)} y={850} at={14} size={60} lebar={180} />
      <Label teks="1883" x={xWaktu(1883, 540, 800)} y={850} at={saat(1883)} size={60} warna={KAPUR.orange} lebar={180} />
      <Label teks="1949" x={xWaktu(1949, 540, 800)} y={850} at={14} size={60} lebar={180} />
      <Label teks="92 tahun catatan" x={540} y={1000} at={saat(1949)} size={64} warna={KAPUR.gold} lebar={640} />
      <Label teks="Dua peneliti memeriksa" x={540} y={1130} at={at("Dua")} size={54} lebar={700} />
    </>
  );
};
