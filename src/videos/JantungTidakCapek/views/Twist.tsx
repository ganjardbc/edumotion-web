import type React from "react";
import { EduBackdrop } from "../../../assets/backdrops";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { CastCharacter } from "../../../characters/cast";
import { TakoCharacter } from "../../../characters/tako";
import { EDU_FEET_Y } from "../../../explainers";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Twist: Tako kaget, kamera mendekat sedikit.
export const Twist: React.FC<SceneProps> = ({ frames }) => {
  const frame = useCurrentFrame();
  const zoom = interpolate(frame, [0, frames], [1, 1.06], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ transform: `scale(${zoom})`, transformOrigin: "50% 70%" }}>
      <EduBackdrop kind="polos" topic={META.topic} />
      <TakoCharacter x={350} y={EDU_FEET_Y} size={600} expression="surprised" animation="surprise" />
      <CastCharacter id="jantung" x={800} y={EDU_FEET_Y} size={440} facing={-1} expression="happy" animation="wave" />
    </AbsoluteFill>
  );
};
