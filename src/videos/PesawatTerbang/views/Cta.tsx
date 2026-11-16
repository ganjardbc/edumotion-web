import type React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { Pesawat } from "../../../dark-chalk/objek/Terbang";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

const TANAH = 1000;

// Cta: landasan panjang bergaris putus; pesawat melaju dari ujung kiri saat "landasan" lalu lepas landas di ujung;
// garis jarak emas dan tanda tanya saat "panjang"; ajakan "tulis di komentar" saat "komentar".
export const Cta: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const landasan = at("landasan");
  const panjang = at("panjang");
  const komentar = at("komentar");
  const p = interpolate(frame, [landasan, panjang + 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.in(Easing.quad) });
  const x = 230 + p * 560;
  const angkat = interpolate(p, [0.75, 1], [0, -90], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const dongak = interpolate(p, [0.7, 1], [0, -12], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <>
      <Judul teks="Kenapa landasan panjang?" sorot="panjang" />
      <Kanvas>
        <Garis kasar={1} d={`M90 ${TANAH} Q540 ${TANAH + 10} 990 ${TANAH - 2}`} mulai={4} lama={24} tebal={9} />
        <Garis d={`M130 ${TANAH + 50} H210 M270 ${TANAH + 50} H350 M410 ${TANAH + 50} H490 M550 ${TANAH + 50} H630 M690 ${TANAH + 50} H770 M830 ${TANAH + 50} H910`} mulai={12} lama={26} tebal={7} warna={KAPUR.abu} />
        <Garis kasar={1} d={`M130 ${TANAH + 120} L950 ${TANAH + 120} M160 ${TANAH + 100} L130 ${TANAH + 120} L160 ${TANAH + 140} M920 ${TANAH + 100} L950 ${TANAH + 120} L920 ${TANAH + 140}`} mulai={panjang} lama={16} warna={KAPUR.gold} tebal={8} />
        <g transform={`translate(${x} ${angkat})`}>
          <Pesawat cx={0} cy={TANAH - 70} size={300} mulai={6} miring={dongak} />
        </g>
      </Kanvas>
      <Label teks="?" x={540} y={680} at={panjang + 6} size={260} warna={KAPUR.gold} lebar={260} />
      <Label teks="tulis di komentar" x={540} y={1220} at={komentar} size={60} warna={KAPUR.gold} lebar={760} />
    </>
  );
};
