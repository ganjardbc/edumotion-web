import type React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { BlokBatu } from "../../../dark-chalk/objek/Borobudur";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Cta: lereng miring; blok batu besar menunggu di kaki lereng, naik pelan saat "diangkat". Tanda tanya emas saat
// "seberat"; ajakan "tulis di komentar" saat "komentar".
const MULAI = { x: 150, y: 1130 };
const AKHIR = { x: 930, y: 790 };
const SUDUT = (Math.atan2(AKHIR.y - MULAI.y, AKHIR.x - MULAI.x) * 180) / Math.PI;

export const Cta: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const berat = at("seberat");
  const angkat = at("diangkat");
  const komentar = at("komentar");
  const p = interpolate(frame, [angkat, angkat + 70], [0.12, 0.8], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.quad) });
  const x = MULAI.x + (AKHIR.x - MULAI.x) * p;
  const y = MULAI.y + (AKHIR.y - MULAI.y) * p;
  return (
    <>
      <Judul teks="Batu berat, naik bagaimana?" sorot="bagaimana" />
      <Kanvas>
        <Garis kasar={1} d={`M${MULAI.x - 40} ${MULAI.y + 14} L${AKHIR.x + 30} ${AKHIR.y + 14}`} mulai={4} lama={26} tebal={9} />
        <g transform={`translate(${x} ${y}) rotate(${SUDUT})`}>
          <BlokBatu cx={0} cy={-62} size={250} mulai={8} />
        </g>
        <Garis kasar={1} d={`M${AKHIR.x - 60} ${AKHIR.y - 120} L${AKHIR.x + 20} ${AKHIR.y - 120} M${AKHIR.x - 20} ${AKHIR.y - 150} L${AKHIR.x + 20} ${AKHIR.y - 120} L${AKHIR.x - 20} ${AKHIR.y - 90}`} mulai={angkat + 20} lama={14} warna={KAPUR.gold} tebal={8} />
      </Kanvas>
      <Label teks="?" x={290} y={700} at={berat + 6} size={260} warna={KAPUR.gold} lebar={260} />
      <Label teks="tulis di komentar" x={540} y={1260} at={komentar} size={60} warna={KAPUR.gold} lebar={760} />
    </>
  );
};
