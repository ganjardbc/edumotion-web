import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Cta: di atas tanah ada tunas dan telur; saat "hewan" muncul jejak kaki, serangga, dan bulu (penyintas); tanda tanya emas saat "selamat".
const TANAH = 1100;
const Y = TANAH - 95;
export const Cta: React.FC<SceneProps> = ({ at }) => {
  const hewan = Math.max(18, at("hewan"));
  const selamat = at("selamat");
  return (
    <>
      <Judul teks="Siapa yang selamat?" sorot="selamat" />
      <Kanvas>
        <Garis kasar={1} d={`M140 ${TANAH} Q540 ${TANAH + 14} 940 ${TANAH - 2}`} mulai={4} lama={22} tebal={8} />
        <Ikon nama="plant" cx={200} cy={Y} size={150} mulai={10} warna={KAPUR.daun} tebal={7} />
        <Ikon nama="egg" cx={370} cy={Y} size={150} mulai={18} tebal={7} />
        <Ikon nama="bug" cx={540} cy={Y} size={150} mulai={hewan} warna={KAPUR.gold} tebal={7} />
        <Ikon nama="paw" cx={710} cy={Y} size={150} mulai={hewan + 10} warna={KAPUR.gold} tebal={7} />
        <Ikon nama="feather" cx={880} cy={Y} size={150} mulai={hewan + 20} warna={KAPUR.gold} tebal={7} />
      </Kanvas>
      <Label teks="?" x={540} y={760} at={selamat} size={280} warna={KAPUR.gold} lebar={300} />
    </>
  );
};
