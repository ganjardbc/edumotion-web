import type React from "react";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { BulanKapur, Cakrawala } from "../../../dark-chalk/objek/Bulan";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Cta: Bulan besar rendah di atas cakrawala; tanda tanya emas saat "pernah".
export const Cta: React.FC<SceneProps> = ({ at }) => {
  const pernah = at("pernah");
  const sebesar = at("sebesar");
  return (
    <>
      <Teks text="Pernah melihatnya?" sorot="Pernah" size={92} top={250} />
      <Kanvas>
        <Cakrawala y={1100} mulai={4} />
        <BulanKapur cx={560} cy={850} size={460} mulai={6} />
      </Kanvas>
      <Label teks="?" x={900} y={640} at={pernah} size={170} warna={KAPUR.gold} lebar={170} />
      <Label teks="sebesar itu" x={540} y={1190} at={sebesar} size={56} lebar={560} />
    </>
  );
};
