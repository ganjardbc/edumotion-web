import type React from "react";
import { Kanvas, Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { BadakKapur, Semenanjung } from "../../../dark-chalk/objek/Badak";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain3: semenanjung besar; tiga badak kecil muncul saat "populasi"; garis emas mengurung semenanjung saat "satu"; label "Satu taman nasional" saat "taman".
export const Explain3: React.FC<SceneProps> = ({ at }) => (
  <>
    <Judul teks="Ruang hidup terbatas" sorot="terbatas" />
    <Kanvas>
      <Semenanjung cx={540} cy={800} size={640} mulai={4} batas={at("satu")} />
      {[[350, 800], [480, 775], [425, 880]].map(([x, y], i) => (
        <Pop key={i} at={at("populasi") + i * 10}>
          <BadakKapur cx={x} cy={y} size={130} mulai={at("populasi") + i * 10} />
        </Pop>
      ))}
    </Kanvas>
    <Label teks="Satu taman nasional" x={540} y={1130} at={at("taman")} size={58} warna={KAPUR.gold} lebar={680} />
  </>
);
