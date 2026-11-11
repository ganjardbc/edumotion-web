import type React from "react";
import { EduBackdrop } from "../../../assets/backdrops";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CastCharacter } from "../../../characters/cast";
import { Pembawa } from "../../../characters/ganjar";
import { EDU_FEET_Y } from "../../../explainers";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Setup: narator menyebut tebakan umum yang keliru, Tako ikut berpikir, Jantung menggeleng pelan menjelang akhir.
export const Setup: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const shake = frame > at("Seperti mesin");
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <Pembawa x={350} y={EDU_FEET_Y} tinggi={570} ekspresi="mikir" gestur="mikir" />
      <CastCharacter id="jantung" x={800} y={EDU_FEET_Y} size={440} facing={-1} expression={shake ? "confused" : "happy"} animation={shake ? "confusion" : "idle"} />
    </AbsoluteFill>
  );
};
