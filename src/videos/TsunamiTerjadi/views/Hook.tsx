import type React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { Garis } from "../../../dark-chalk/Garis";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { Panah } from "../../../dark-chalk/objek/Terbang";
import { PenampangLaut } from "../../../dark-chalk/objek/Tsunami";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

const CLAMP = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const PERMUKAAN = 771; // garis air tenang (PenampangLaut cy 900, size 860)
const KANAN = 950;

// Hook: laut tenang dengan perahu dan matahari. Saat "dimulai", dasar laut naik, lalu permukaan menggelembung menjadi
// gelombang besar yang bergerak ke kanan (perahu ikut terangkat) dan tanda tanya menyala.
export const Hook: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const dasar = at("dasar");
  const mulai = at("dimulai"); // dasar naik dan gelombang dipicu lebih awal supaya sempat terlihat sebelum scene berakhir
  const mulaiGelombang = mulai + 8;
  const p = interpolate(frame, [mulaiGelombang, mulaiGelombang + 40], [0, 1], { ...CLAMP, easing: Easing.out(Easing.quad) });
  const pusat = 330 + 420 * p;
  const tinggi = 190 * Math.sin(Math.PI * Math.min(p, 1) * 0.75 + 0.01);
  const bump = (x: number) => tinggi * Math.exp(-(((x - pusat) / (x < pusat ? 120 : 55)) ** 2));
  const atas: string[] = [];
  for (let x = 100; x <= KANAN; x += 10) atas.push(`${x === 100 ? "M" : "L"}${x} ${(PERMUKAAN - bump(x)).toFixed(1)}`);
  const goyang = Math.sin(frame / 12) * 4;
  const perahuX = 300;
  const perahuY = PERMUKAAN - bump(perahuX) + goyang;
  return (
    <>
      <Teks text="Bagaimana tsunami terjadi?" sorot="tsunami" size={92} top={250} />
      <Kanvas>
        <Ikon nama="sun" cx={850} cy={590} size={130} mulai={8} warna={KAPUR.gold} tebal={6} />
        <Ikon nama="cloud" cx={190} cy={600} size={140} mulai={12} warna={KAPUR.abu} tebal={6} />
        <PenampangLaut cx={540} cy={900} size={860} mulai={4} naik={mulai + 8} />
        {p > 0 ? <Garis d={`${atas.join(" ")} L${KANAN} ${PERMUKAAN} L100 ${PERMUKAAN} Z`} mulai={0} lama={1} tebal={9} warna={KAPUR.es} isi={KAPUR.airIsi} /> : null}
        <g transform={`translate(${perahuX} ${perahuY}) rotate(${p * -10 + goyang})`}>
          <Garis kasar={0.7} d="M-48 -6 L48 -6 L30 24 L-30 24 Z" mulai={16} lama={14} tebal={7} warna={KAPUR.coklat} isi="rgba(185, 138, 90, 0.3)" />
          <Garis kasar={0.7} d="M0 -6 V-70 M0 -66 L40 -16 H0" mulai={24} lama={14} tebal={6} />
        </g>
        <Panah cx={250} cy={980} size={170} arah="bawah" mulai={dasar} />
      </Kanvas>
      <Label teks="dasar laut" x={540} y={1300} at={dasar} size={64} warna={KAPUR.gold} lebar={600} />
      <Label teks="?" x={560} y={600} at={dasar + 4} size={200} warna={KAPUR.gold} lebar={200} />
    </>
  );
};
