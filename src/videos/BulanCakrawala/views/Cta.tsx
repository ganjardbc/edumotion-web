import type React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { Pembawa } from "../../../characters/ganjar";
import { EDU_FEET_Y, HookText } from "../../../explainers";
import { QuestionMark } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";
import { HorizonLandscape } from "../assets/Visuals";

export const Cta: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: Math.max(0, frame - at("pernah")), fps, config: { damping: 10, stiffness: 140 } });
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <HorizonLandscape y={1130} />
      <HookText text="Pernah melihatnya?" highlight="Pernah" size={98} />
      <CastCharacter id="bulan" x={760} y={950} size={270} expression="curious" animation="idle" />
      <QuestionMark x={880} y={690} size={210} topic={META.topic} pop={pop} />
      <Pembawa topic={META.topic} x={430} y={EDU_FEET_Y} tinggi={590} ekspresi="bingung" gestur="tunjuk" />
    </AbsoluteFill>
  );
};
