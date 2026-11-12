import type React from "react";
import { AbsoluteFill } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { Pembawa } from "../../../characters/ganjar";
import { EDU_FEET_Y, HookText } from "../../../explainers";
import { Muncul } from "../../../explainers/pola";
import { META } from "../scenes";
import { HorizonLandscape } from "../assets/Visuals";
import type { SceneProps } from "../../_shared/types";

export const Hook: React.FC<SceneProps> = ({ at }) => {
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <HorizonLandscape y={1120} />
      <HookText text="Bulan terlihat besar?" highlight="besar" size={104} />
      <Muncul at={at("Bulan")}><CastCharacter id="bulan" x={740} y={900} size={320} expression="surprised" animation="idle" /></Muncul>
      <Pembawa topic={META.topic} x={430} y={EDU_FEET_Y} tinggi={570} ekspresi="mikir" gestur="mikir" />
    </AbsoluteFill>
  );
};
