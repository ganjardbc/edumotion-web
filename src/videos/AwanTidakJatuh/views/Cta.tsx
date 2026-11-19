import type React from "react";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Cta: awan putih muncul saat "putih"; awan gelap saat "gelap"; tanda tanya emas di antaranya.
export const Cta: React.FC<SceneProps> = ({ at }) => {
  const putih = at("putih");
  const gelap = at("gelap");
  const kenapa = at("kenapa");
  return (
    <>
      <Teks text="Awan putih atau gelap?" sorot="gelap" size={90} top={250} />
      <Kanvas>
        <Ikon nama="cloud" cx={290} cy={830} size={340} mulai={putih} warna={KAPUR.chalk} tebal={8} />
        <Ikon nama="cloud-storm" cx={790} cy={830} size={340} mulai={gelap} warna={KAPUR.abu} tebal={8} />
      </Kanvas>
      <Label teks="putih" x={290} y={1060} at={putih + 8} size={56} lebar={320} />
      <Label teks="gelap" x={790} y={1060} at={gelap + 8} size={56} warna={KAPUR.abu} lebar={320} />
      <Label teks="?" x={540} y={830} at={kenapa} size={200} warna={KAPUR.gold} lebar={200} />
    </>
  );
};
