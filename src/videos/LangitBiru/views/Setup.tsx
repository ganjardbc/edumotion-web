import type React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { TakoCharacter } from "../../../characters/tako";
import { EDU_FEET_Y, LabelPill } from "../../../explainers";
import { CurvedArrow } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Setup: tebakan umum yang keliru (langit memantulkan laut), Tako ikut berpikir. Panah melengkung dari laut ke langit, Awan menggeleng menjelang akhir.
export const Setup: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const arrow = interpolate(frame, [at("memantulkan"), at("laut")], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const shake = frame > at("laut") + 10;
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <LabelPill x={430} y={330} text="langit" topic="planet" at={at("langit")} size={40} />
      <LabelPill x={300} y={760} text="laut" topic="air" at={at("laut")} size={40} />
      <CurvedArrow x={540} y={500} size={560} topic="planet" progress={arrow} />
      <TakoCharacter x={540} y={EDU_FEET_Y} size={560} expression="curious" animation="thinking" />
      <CastCharacter id="awan" x={780} y={330} size={300} facing={-1} expression={shake ? "confused" : "happy"} animation={shake ? "confusion" : "idle"} />
    </AbsoluteFill>
  );
};
