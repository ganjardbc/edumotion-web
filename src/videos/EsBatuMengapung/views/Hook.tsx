import type React from "react";
import { Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Kanvas, Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { Batu } from "../../../dark-chalk/objek/Batu";
import { GelasAir, permukaanAir } from "../../../dark-chalk/objek/Gelas";
import { KubusEs } from "../../../dark-chalk/objek/KubusEs";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Hook: dua gelas berdampingan. Batu dijatuhkan ke gelas kiri dan tenggelam; kubus es dijatuhkan ke gelas kanan dan mengapung.
const ALAS = 1080;
const TINGGI = 360;
const ISI = 0.7;
export const Hook: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const muka = permukaanAir(ALAS, TINGGI, ISI);
  const tenggelam = at("tenggelam");
  const apung = at("mengapung");
  const batuY = interpolate(frame, [tenggelam, tenggelam + 26], [610, ALAS - 52], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.in(Easing.quad) });
  const jatuh = spring({ frame: frame - apung, fps, config: { damping: 8, stiffness: 90 } });
  const esY = frame < apung ? 610 : 610 + (muka + 46 - 610) * jatuh + Math.sin(frame / 12) * 3;
  return (
    <>
      <Teks text="Es kok mengapung?" sorot="mengapung" size={96} top={250} />
      <Kanvas>
        <GelasAir x={320} y={ALAS} lebar={290} tinggi={TINGGI} isi={ISI} mulai={4} />
        <GelasAir x={760} y={ALAS} lebar={290} tinggi={TINGGI} isi={ISI} mulai={10} />
        <Pop at={Math.max(14, tenggelam - 12)}>
          <Batu cx={320} cy={batuY} size={104} mulai={Math.max(14, tenggelam - 12)} />
        </Pop>
        <Pop at={Math.max(14, apung - 12)}>
          <KubusEs cx={760} cy={esY} size={116} tilt={Math.sin(frame / 14) * 4} mulai={Math.max(14, apung - 12)} />
        </Pop>
      </Kanvas>
      <Label teks="batu" x={320} y={1160} at={tenggelam} size={56} />
      <Label teks="es" x={760} y={1160} at={apung} size={56} warna={KAPUR.gold} />
    </>
  );
};
