import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { TakoCharacter } from "../../../characters/tako";
import { EDU_FEET_Y, LabelPill } from "../../../explainers";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Setup: Tako menebak keliru (awan ringan seperti kapas); Awan menggeleng pelan menjelang akhir.
export const Setup: React.FC<SceneProps> = ({ frames }) => {
  const frame = useCurrentFrame();
  const shake = frame > frames * 0.6;
  const squish = 1 + 0.04 * Math.sin(frame / 8);
  return (
    <AbsoluteFill>
      <EduBackdrop kind="langit" topic={META.topic} />
      <TakoCharacter x={350} y={EDU_FEET_Y} size={600} expression="happy" animation="talk" />
      <CastCharacter id="awan" x={790} y={EDU_FEET_Y} size={440 * squish} facing={-1} expression={shake ? "confused" : "happy"} animation={shake ? "confusion" : "idle"} />
      <LabelPill x={720} y={830} text="ringan kayak kapas?" topic={META.topic} at={24} size={36} />
    </AbsoluteFill>
  );
};
