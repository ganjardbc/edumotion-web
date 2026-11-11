import type React from "react";
import { EduBackdrop } from "../../../assets/backdrops";
import { AbsoluteFill } from "remotion";
import { Pembawa } from "../../../characters/ganjar";
import { EDU_FEET_Y, HookText } from "../../../explainers";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Cta: narator bertanya, Tako berpikir; mengundang komentar.
export const Cta: React.FC<SceneProps> = () => (
  <AbsoluteFill>
    <EduBackdrop topic={META.topic} />
    <HookText text="Bagian tubuh mana lagi?" highlight="mana" size={96} />
    <Pembawa topic={META.topic} x={540} y={EDU_FEET_Y} tinggi={646} ekspresi="mikir" gestur="mikir" />
  </AbsoluteFill>
);
