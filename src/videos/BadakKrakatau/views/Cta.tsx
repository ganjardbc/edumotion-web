import type React from "react";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { BadakKapur } from "../../../dark-chalk/objek/Badak";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Cta: badak kapur kecil; tanda tanya emas besar saat "hewan"; label komentar saat "komentar".
export const Cta: React.FC<SceneProps> = ({ at }) => (
  <>
    <Judul teks="Hewan apa lagi bertahan?" sorot="bertahan" />
    <Kanvas>
      <BadakKapur cx={400} cy={860} size={300} mulai={6} />
    </Kanvas>
    <Label teks="?" x={760} y={740} at={at("hewan")} size={320} warna={KAPUR.gold} lebar={360} />
    <Label teks="Tulis di komentar" x={540} y={1090} at={at("komentar")} size={58} lebar={640} />
    <Label teks="Follow" x={540} y={1190} at={at("Follow")} size={80} warna={KAPUR.gold} lebar={460} />
  </>
);
