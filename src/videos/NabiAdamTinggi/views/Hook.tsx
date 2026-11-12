import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

export const Hook: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const ukur = at("Enam puluh");
  const tinggi = at("setinggi");
  const panjang = interpolate(frame, [tinggi, tinggi + 24], [0, 470], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <>
    <Teks text="Enam puluh hasta" sorot="hasta" size={100} top={260} mulai={ukur} />
    <Kanvas>
      <Garis d={`M540 1120 L540 ${1120 - panjang}`} mulai={tinggi} lama={24} warna={KAPUR.gold} tebal={10} />
      {Array.from({ length: 7 }, (_, i) => <Garis key={i} d={`M${510 - (i % 2) * 18} ${1090 - i * 68} L540 ${1090 - i * 68}`} mulai={tinggi + 3 + i * 2} lama={8} tebal={7} />)}
      <Garis d="M460 1120 L620 1120 M470 1140 L610 1140" mulai={tinggi + 8} lama={14} tebal={8} />
    </Kanvas>
    <Label teks="satuan panjang" x={540} y={1200} at={tinggi + 16} size={52} lebar={600} />
  </>;
};
