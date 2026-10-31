import type React from "react";
import { EduBackdrop } from "../../../assets/backdrops";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CastCharacter } from "../../../characters/cast";
import { TakoCharacter } from "../../../characters/tako";
import { EDU_FEET_Y } from "../../../explainers";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Setup: Tako menebak (keliru, lewat subtitle), Jantung menggeleng pelan menjelang akhir.
export const Setup: React.FC<SceneProps> = ({ frames }) => {
  const frame = useCurrentFrame();
  const shake = frame > frames * 0.55;
  return (
    <AbsoluteFill>
      <EduBackdrop kind="polos" topic={META.topic} />
      <TakoCharacter x={350} y={EDU_FEET_Y} size={600} expression="happy" animation="talk" />
      <CastCharacter id="jantung" x={800} y={EDU_FEET_Y} size={440} facing={-1} expression={shake ? "confused" : "happy"} animation={shake ? "confusion" : "idle"} />
    </AbsoluteFill>
  );
};
