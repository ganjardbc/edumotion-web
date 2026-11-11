import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { Pembawa } from "../../../characters/ganjar";
import { EDU_FEET_Y, HookText } from "../../../explainers";
import { Muncul } from "../../../explainers/pola";
import { LayarHp, SinyalBar, Termometer } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Payoff (karakter): tiga penyebab muncul saat disebut (layar, sinyal, panas); pembawa menunjuk lalu bersorak.
export const Payoff: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const panas = at("kepanasan");
  const akhir = frame >= panas;
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <HookText text="Layar, sinyal, panas" highlight="panas" size={96} />
      <Muncul at={at("layar terang")}>
        <LayarHp x={270} y={640} size={250} terang={1} />
      </Muncul>
      <Muncul at={at("sinyal lemah")}>
        <SinyalBar x={540} y={640} size={250} level={1} />
      </Muncul>
      <Muncul at={panas}>
        <Termometer x={810} y={640} size={250} topic="tubuh" level={0.9} />
      </Muncul>
      <Pembawa x={540} y={EDU_FEET_Y} tinggi={440} ekspresi={akhir ? "tertawa" : "senang"} gestur={akhir ? "sorak" : "tunjuk"} />
    </AbsoluteFill>
  );
};
