import type React from "react";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { BumiLava } from "../../../dark-chalk/objek/Laut";
import { Silang } from "../../../dark-chalk/objek/LubangHitam";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain1: Bumi muda membara saat "panas"; tetes air dicoret saat "bertahan".
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const panas = at("panas");
  const lava = at("lava");
  const setetes = at("bertahan");
  return (
    <>
      <Judul teks="Dulu, Bumi membara" sorot="membara" />
      <Kanvas>
        <BumiLava cx={540} cy={800} r={230} mulai={panas - 4} />
        <Ikon nama="flame" cx={250} cy={1100} size={120} mulai={lava} warna={KAPUR.orange} tebal={7} />
        <Ikon nama="droplet" cx={830} cy={1100} size={130} mulai={setetes - 8} warna={KAPUR.es} tebal={7} />
        <Silang cx={830} cy={1100} size={120} mulai={setetes} />
      </Kanvas>
      <Label teks="panas membara" x={540} y={1090} at={panas + 6} size={52} warna={KAPUR.orange} lebar={440} />
      <Label teks="air sulit bertahan" x={800} y={1215} at={setetes} size={48} warna={KAPUR.gold} lebar={420} />
    </>
  );
};
