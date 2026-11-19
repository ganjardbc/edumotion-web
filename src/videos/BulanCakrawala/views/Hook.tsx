import type React from "react";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { BulanKapur, Cakrawala } from "../../../dark-chalk/objek/Bulan";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Hook: cakrawala dengan siluet; Bulan besar muncul rendah saat "Bulan"; label "dekat cakrawala" saat "cakrawala";
// tanda tanya emas saat "besar".
export const Hook: React.FC<SceneProps> = ({ at }) => {
  const bulan = at("Bulan");
  const cakrawala = at("cakrawala");
  const besar = at("besar");
  return (
    <>
      <Teks text="Bulan terlihat besar?" sorot="besar" size={96} top={250} />
      <Kanvas>
        <Cakrawala y={1100} mulai={4} />
        <BulanKapur cx={580} cy={850} size={460} mulai={bulan - 6} />
      </Kanvas>
      <Label teks="dekat cakrawala" x={540} y={1190} at={cakrawala} size={56} lebar={640} />
      <Label teks="?" x={880} y={640} at={besar} size={170} warna={KAPUR.gold} lebar={170} />
    </>
  );
};
