import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { Kilat, Rumah } from "../../../dark-chalk/objek/Petir";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

const TANAH = 960;

// Cta: rumah di kanan, kilat jauh di kiri; garis jarak emas (3 km) saat "kilometer"; tanda tanya saat "detik";
// ajakan "tulis di komentar" saat "komentar".
export const Cta: React.FC<SceneProps> = ({ at }) => {
  const km = at("kilometer");
  const detik = at("detik");
  const komentar = at("komentar");
  return (
    <>
      <Judul teks="Berapa detik?" sorot="detik" />
      <Kanvas>
        <Garis kasar={1} d={`M90 ${TANAH} Q540 ${TANAH + 10} 990 ${TANAH - 2}`} mulai={4} lama={24} tebal={8} warna={KAPUR.abu} />
        <Kilat cx={220} cy={TANAH - 170} size={280} mulai={8} />
        <Rumah cx={830} cy={TANAH} size={240} mulai={14} />
        <Garis kasar={1} d={`M240 ${TANAH + 70} L810 ${TANAH + 70} M270 ${TANAH + 50} L240 ${TANAH + 70} L270 ${TANAH + 90} M780 ${TANAH + 50} L810 ${TANAH + 70} L780 ${TANAH + 90}`} mulai={km} lama={16} warna={KAPUR.gold} tebal={8} />
      </Kanvas>
      <Label teks="3 km" x={525} y={TANAH + 130} at={km + 8} size={64} warna={KAPUR.gold} lebar={300} />
      <Label teks="?" x={540} y={640} at={detik} size={260} warna={KAPUR.gold} lebar={260} />
      <Label teks="tulis di komentar" x={540} y={1235} at={komentar} size={60} warna={KAPUR.gold} lebar={760} />
    </>
  );
};
