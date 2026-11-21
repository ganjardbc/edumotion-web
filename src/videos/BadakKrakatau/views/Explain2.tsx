import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { BadakKapur } from "../../../dark-chalk/objek/Badak";
import { Ombak } from "../../../dark-chalk/objek/Tsunami";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

const Pudar: React.FC<{ readonly at: number; readonly children: React.ReactNode }> = ({ at, children }) => {
  const frame = useCurrentFrame();
  return <g opacity={1 - interpolate(frame, [at, at + 20], [0, 0.85], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}>{children}</g>;
};

// Explain2: tanda tanya emas saat "menduga"; ombak menjulang saat "menerjang"; badak kapur (di pantai) memudar saat ombak tiba; label dugaan penelitian 2006.
export const Explain2: React.FC<SceneProps> = ({ at }) => (
  <>
    <Judul teks="Gelombang menerjang pantai" sorot="menerjang" />
    <Kanvas>
      <Ombak cx={540} cy={800} size={640} mulai={4} menjulang={at("menerjang")} />
      <Pudar at={at("menerjang") + 30}>
        <BadakKapur cx={700} cy={775} size={220} mulai={10} />
      </Pudar>
    </Kanvas>
    <Label teks="?" x={860} y={600} at={at("menduga")} size={240} warna={KAPUR.gold} lebar={260} />
    <Label teks="Penelitian 2006" x={540} y={1130} at={at("penelitian")} size={58} warna={KAPUR.gold} lebar={640} />
    <Label teks="Dugaan: badak musnah" x={540} y={1215} at={at("musnah")} size={54} warna={KAPUR.orange} lebar={700} />
  </>
);
