import type React from "react";
import { AbsoluteFill } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { TakoCharacter } from "../../../characters/tako";
import { EDU_FEET_Y, HookText } from "../../../explainers";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Cta: Tako bertanya, mengundang komentar.
export const Cta: React.FC<SceneProps> = () => (
  <AbsoluteFill>
    <EduBackdrop kind="warna" topic={META.topic} />
    <HookText text="Awan putih atau gelap?" highlight="gelap" size={96} />
    <TakoCharacter x={540} y={EDU_FEET_Y} size={680} expression="curious" animation="thinking" />
  </AbsoluteFill>
);
