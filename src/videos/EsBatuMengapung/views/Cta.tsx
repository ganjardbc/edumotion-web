import type React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas, maju, Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Cta: penampang danau. Lempeng es muncul di permukaan, lalu tenggelam ke dasar saat narator menyebut "tenggelam";
// ikan berenang di bawahnya.
const PERMUKAAN = 700;
const DASAR = 1120;
const Ikan: React.FC<{ readonly x: number; readonly y: number; readonly s?: number }> = ({ x, y, s = 1 }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} fill="none" stroke={KAPUR.gold} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M-46 0 C-30 -28 20 -28 40 0 C20 28 -30 28 -46 0 Z" />
    <path d="M40 0 L72 -22 L72 22 Z" />
    <circle cx={-22} cy={-6} r={3.5} fill={KAPUR.gold} stroke="none" />
  </g>
);
export const Cta: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const es = at("es");
  const tenggelam = at("tenggelam");
  const turun = interpolate(frame, [tenggelam, tenggelam + 44], [PERMUKAAN - 18, DASAR - 44], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.in(Easing.quad) });
  const ikanX = 540 + Math.sin(frame / 40) * 230;
  return (
    <>
      <Judul teks="Es tenggelam di danau?" sorot="tenggelam" />
      <Kanvas>
        <Garis d={`M110 ${PERMUKAAN} C100 ${DASAR} 200 ${DASAR + 40} 540 ${DASAR + 40} C880 ${DASAR + 40} 980 ${DASAR} 970 ${PERMUKAAN}`} mulai={4} lama={30} tebal={8} isi={KAPUR.airIsi} />
        <path d={`M120 ${PERMUKAAN} Q200 ${PERMUKAAN - 12} 280 ${PERMUKAAN} T440 ${PERMUKAAN} T600 ${PERMUKAAN} T760 ${PERMUKAAN} T920 ${PERMUKAAN} T980 ${PERMUKAAN}`} fill="none" stroke={KAPUR.es} strokeWidth={5} opacity={maju(frame, 20, 20)} />
        <Pop at={20}>
          <Ikan x={ikanX} y={960} />
        </Pop>
        <Pop at={es}>
          <rect x={360} y={turun - 22} width={360} height={44} rx={16} fill={KAPUR.esIsi} stroke={KAPUR.chalk} strokeWidth={7} />
        </Pop>
      </Kanvas>
      <Label teks="es" x={540} y={turun - 80} at={es} size={52} warna={KAPUR.es} lebar={160} />
      <Label teks="?" x={540} y={1190} at={tenggelam + 30} size={130} warna={KAPUR.gold} lebar={160} />
    </>
  );
};
