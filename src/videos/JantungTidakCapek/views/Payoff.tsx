import type React from "react";
import { useCurrentFrame } from "remotion";
import { Garis } from "../../../dark-chalk/Garis";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Kanvas, maju } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Dua detak dengan jeda datar panjang di antaranya.
const EKG = "M160 1000 L300 1000 L330 1000 L355 900 L390 1090 L415 980 L440 1000 L640 1000 L670 1000 L695 900 L730 1090 L755 980 L780 1000 L920 1000";
const DETAK = [0.2, 0.7] as const;

// Payoff: hati kecil berdenyut hanya saat garis EKG melewati lonjakan; jeda datar di antaranya disorot "istirahat".
export const Payoff: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const mulai = Math.max(10, at("istirahat"));
  const lama = 70;
  const p = maju(frame, mulai + 12, lama);
  const denyut = DETAK.reduce((m, f) => Math.max(m, Math.max(0, 1 - Math.abs(p - f) / 0.06)), 0);
  const s = 1 + 0.12 * denyut;
  return (
    <>
      <Teks text="Jago istirahat" sorot="istirahat" size={104} top={250} />
      <Kanvas>
        <g transform={`translate(540 690) scale(${s}) translate(-540 -690)`}>
          <Ikon nama="heart" cx={540} cy={690} size={260} mulai={6} warna={KAPUR.orange} tebal={8} isi="rgba(237, 120, 83, 0.22)" lama={22} />
        </g>
        <Garis d={EKG} mulai={mulai + 12} lama={lama} tebal={7} warna={KAPUR.gold} />
      </Kanvas>
      <Label teks="istirahat" x={540} y={1130} at={at("beristirahat")} size={64} warna={KAPUR.gold} lebar={420} />
    </>
  );
};
