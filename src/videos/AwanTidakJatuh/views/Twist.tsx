import type React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { TakoCharacter } from "../../../characters/tako";
import { CorrectionCard, EDU_FEET_Y, LabelPill } from "../../../explainers";
import { Timbangan } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Twist: tebakan "ringan seperti kapas" dicoret, jawaban muncul, timbangan menunjuk berat awan. Tako kaget.
export const Twist: React.FC<SceneProps> = ({ frames }) => {
  const frame = useCurrentFrame();
  const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
  const zoom = interpolate(frame, [0, frames], [1, 1.05], clamp);
  const level = interpolate(frame, [34, 80], [0, 0.9], clamp);
  return (
    <AbsoluteFill style={{ transform: `scale(${zoom})`, transformOrigin: "50% 70%" }}>
      <EduBackdrop kind="langit" topic={META.topic} />
      <CorrectionCard top={250} guess="Ringan seperti kapas" answer="Berat ±500 ton" topic="air" crossAt={14} answerAt={34} />
      <Timbangan x={760} y={1010} size={380} level={level} />
      <LabelPill x={760} y={820} text="berat awan" topic={META.topic} at={50} size={34} />
      <TakoCharacter x={300} y={EDU_FEET_Y} size={520} expression="surprised" animation="surprise" />
    </AbsoluteFill>
  );
};
