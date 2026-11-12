import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas, Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Dinosaurus } from "../../../dark-chalk/objek/Purba";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Hook: siluet dinosaurus besar berdiri di tanah, lalu memudar dan diganti tanda tanya saat narator bilang "hilang".
export const Hook: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const kuasa = at("berkuasa");
  const hilang = at("hilang");
  const pudar = interpolate(frame, [hilang, hilang + 30], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <>
      <Teks text="Dinosaurus hilang?" sorot="hilang" size={96} top={250} />
      <Kanvas>
        <Garis kasar={1} d="M140 1030 Q540 1044 940 1028" mulai={4} lama={22} tebal={8} />
        <g opacity={pudar}>
          <Ikon nama="volcano" cx={190} cy={640} size={190} mulai={10} warna={KAPUR.orange} tebal={7} />
          <Ikon nama="cloud" cx={850} cy={545} size={120} mulai={16} warna={KAPUR.abu} tebal={7} />
          <Ikon nama="mountain" cx={915} cy={840} size={140} mulai={22} warna={KAPUR.es} tebal={7} />
          <Ikon nama="trees" cx={155} cy={955} size={140} mulai={28} warna={KAPUR.daun} tebal={7} />
          <Ikon nama="cloud" cx={420} cy={560} size={110} mulai={34} warna={KAPUR.abu} tebal={6} />
          <Pop at={Math.max(8, kuasa - 6)}>
            <Dinosaurus cx={540} cy={800} size={640} mulai={Math.max(8, kuasa - 6)} />
          </Pop>
        </g>
      </Kanvas>
      <Label teks="dinosaurus" x={540} y={1130} at={kuasa} size={56} lebar={600} />
      <Label teks="?" x={540} y={820} at={hilang + 10} size={300} warna={KAPUR.gold} lebar={300} />
    </>
  );
};
