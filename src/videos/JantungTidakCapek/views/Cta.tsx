import type React from "react";
import { EduBackdrop } from "../../../assets/backdrops";
import { AbsoluteFill } from "remotion";
import { TakoCharacter } from "../../../characters/tako";
import { EDU_FEET_Y, HookText } from "../../../explainers";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Cta: narator bertanya, Tako berpikir; mengundang komentar.
export const Cta: React.FC<SceneProps> = () => (
  <AbsoluteFill>
    <EduBackdrop topic={META.topic} />
    <HookText text="Bagian tubuh mana lagi?" highlight="mana" size={96} />
    <TakoCharacter x={540} y={EDU_FEET_Y} size={680} expression="curious" animation="thinking" />
  </AbsoluteFill>
);
