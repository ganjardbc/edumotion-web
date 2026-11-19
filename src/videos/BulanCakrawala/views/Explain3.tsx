import type React from "react";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { BulanKapur, Cakrawala } from "../../../dark-chalk/objek/Bulan";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain3: Bulan besar di atas cakrawala bersiluet. Saat "sekitar" gedung dan pohon diberi label; saat "mungkin" tanda tanya emas.
export const Explain3: React.FC<SceneProps> = ({ at }) => {
  const pemandangan = at("Pemandangan");
  const sekitar = at("sekitar");
  const mungkin = at("mungkin");
  return (
    <>
      <Judul teks="Latar mungkin berpengaruh" sorot="mungkin" at={pemandangan} />
      <Kanvas>
        <BulanKapur cx={540} cy={760} size={320} mulai={pemandangan + 4} />
        <Cakrawala y={1100} mulai={sekitar} />
      </Kanvas>
      <Label teks="gedung" x={150} y={1175} at={sekitar + 6} size={48} lebar={170} />
      <Label teks="pohon" x={330} y={1175} at={sekitar + 10} size={48} lebar={150} />
      <Label teks="gedung" x={905} y={1175} at={sekitar + 14} size={48} lebar={170} />
      <Label teks="?" x={820} y={640} at={mungkin + 6} size={170} warna={KAPUR.gold} lebar={170} />
    </>
  );
};
