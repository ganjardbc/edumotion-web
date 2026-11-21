import type React from "react";
import { FotoPin } from "../../../dark-chalk/FotoPin";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Cta: foto badak berpin dengan tanda tanya besar saat "kenapa"; ajakan "Follow" saat kata itu diucapkan.
export const Cta: React.FC<SceneProps> = ({ at }) => {
  const kenapa = at("kenapa");
  const follow = at("Follow");
  return (
    <>
      <Judul teks="Kenapa sesedikit itu?" sorot="sesedikit" />
      <FotoPin berkas="badak/5.jpg" cx={540} cy={900} lebar={640} rasio={361 / 554} miring={-2.5} mulai={4} />
      <Label teks="?" x={860} y={540} at={kenapa} size={260} warna={KAPUR.gold} lebar={260} />
      <Label teks="Follow" x={540} y={1230} at={follow} size={72} warna={KAPUR.gold} lebar={460} />
    </>
  );
};
