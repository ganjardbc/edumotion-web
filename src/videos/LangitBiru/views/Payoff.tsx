import type React from "react";
import { AbsoluteFill } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { Pembawa } from "../../../characters/ganjar";
import { EDU_FEET_Y, HookText } from "../../../explainers";
import { Muncul } from "../../../explainers/pola";
import { JalurCahaya } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Payoff: satu sebab untuk dua hal. Dua panel kecil (siang, senja) di atas Tako. Sorotan: "tersebar".
export const Payoff: React.FC<SceneProps> = ({ at }) => (
  <AbsoluteFill>
    <EduBackdrop topic={META.topic} />
    <HookText text="Cahaya biru tersebar" highlight="tersebar" size={96} />
    <Muncul at={at("langit biru")}>
      <JalurCahaya x={350} y={640} size={300} waktu="siang" />
    </Muncul>
    <Muncul at={at("senja merah")}>
      <JalurCahaya x={730} y={640} size={300} waktu="senja" />
    </Muncul>
    <Pembawa x={540} y={EDU_FEET_Y} tinggi={418} ekspresi="tertawa" gestur="sorak" />
  </AbsoluteFill>
);
