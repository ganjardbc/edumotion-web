import type React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { TakoCharacter } from "../../../characters/tako";
import { EDU_FEET_Y } from "../../../explainers";
import { CurvedArrow } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Setup: Tako menebak keliru (langit mantulin laut). Panah melengkung dari laut ke langit, Awan menggeleng menjelang akhir.
export const Setup: React.FC<SceneProps> = ({ frames }) => {
  const frame = useCurrentFrame();
  const arrow = interpolate(frame, [frames * 0.3, frames * 0.65], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const shake = frame > frames * 0.7;
  return (
    <AbsoluteFill>
      <EduBackdrop kind="laut" topic={META.topic} time="siang" />
      <CurvedArrow x={560} y={560} size={620} topic="planet" progress={arrow} />
      <TakoCharacter x={330} y={EDU_FEET_Y} size={560} expression="happy" animation="talk" />
      <CastCharacter id="awan" x={800} y={420} size={340} facing={-1} expression={shake ? "confused" : "happy"} animation={shake ? "confusion" : "idle"} />
    </AbsoluteFill>
  );
};
