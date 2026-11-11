import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { Pembawa } from "../../../characters/ganjar";
import { EDU_FEET_Y, LabelPill } from "../../../explainers";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Setup: tebakan umum yang keliru (awan ringan seperti kapas), Tako ikut berpikir; Awan menggeleng pelan menjelang akhir.
export const Setup: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const shake = frame > at("Makanya");
  const squish = 1 + 0.04 * Math.sin(frame / 8);
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <Pembawa topic={META.topic} x={350} y={EDU_FEET_Y} tinggi={570} ekspresi="mikir" gestur="mikir" />
      <CastCharacter id="awan" x={790} y={EDU_FEET_Y} size={440 * squish} facing={-1} expression={shake ? "confused" : "happy"} animation={shake ? "confusion" : "idle"} />
      <LabelPill x={720} y={830} text="ringan seperti kapas?" topic={META.topic} at={at("ringan")} size={36} />
    </AbsoluteFill>
  );
};
