import type React from "react";
import { EduBackdrop } from "../../../assets/backdrops";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { CastCharacter } from "../../../characters/cast";
import { Pembawa } from "../../../characters/ganjar";
import { EDU_FEET_Y } from "../../../explainers";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Twist: Tako kaget, kamera mendekat sedikit.
export const Twist: React.FC<SceneProps> = ({ frames }) => {
  const frame = useCurrentFrame();
  const zoom = interpolate(frame, [0, frames], [1, 1.06], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ transform: `scale(${zoom})`, transformOrigin: "50% 70%" }}>
      <EduBackdrop topic={META.topic} />
      <Pembawa x={350} y={EDU_FEET_Y} tinggi={570} ekspresi="kaget" gestur="menyerah" />
      <CastCharacter id="jantung" x={800} y={EDU_FEET_Y} size={440} facing={-1} expression="happy" animation="wave" />
    </AbsoluteFill>
  );
};
