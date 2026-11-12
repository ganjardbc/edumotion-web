import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

export const Cta: React.FC<SceneProps> = ({ at }) => <>
  <Teks text="Seberapa tinggi?" sorot="tinggi" size={100} top={270} mulai={at("tingginya")} />
  <Kanvas>
    <Garis d="M410 1080 L410 690 L690 690 L690 1080 Z M480 760 L525 760 L525 820 L480 820 Z M575 760 L620 760 L620 820 L575 820 Z M480 870 L525 870 L525 930 L480 930 Z M575 870 L620 870 L620 930 L575 930 Z" mulai={at("benda")} lama={32} tebal={8} />
    <Garis d="M350 1080 L750 1080" mulai={at("benda")} lama={15} warna={KAPUR.gold} tebal={8} />
    <Garis d="M540 1080 L540 600 M520 620 L540 600 L560 620" mulai={at("mendekati")} lama={18} warna={KAPUR.gold} tebal={8} />
  </Kanvas>
  <Label teks="benda apa yang mendekati?" x={540} y={1220} at={at("mendekati")} size={50} warna={KAPUR.gold} lebar={760} />
</>;
