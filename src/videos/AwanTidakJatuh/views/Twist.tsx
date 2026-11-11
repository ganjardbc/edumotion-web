import type React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { Pembawa } from "../../../characters/ganjar";
import { CorrectionCard, EDU_FEET_Y, LabelPill } from "../../../explainers";
import { Timbangan } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Twist: tebakan "ringan seperti kapas" dicoret, jawaban muncul, timbangan menunjuk berat awan. Tako kaget.
export const Twist: React.FC<SceneProps> = ({ frames, at }) => {
  const frame = useCurrentFrame();
  const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
  const zoom = interpolate(frame, [0, frames], [1, 1.05], clamp);
  const berat = at("berat");
  const level = interpolate(frame, [berat, berat + 46], [0, 0.9], clamp);
  return (
    <AbsoluteFill style={{ transform: `scale(${zoom})`, transformOrigin: "50% 70%" }}>
      <EduBackdrop topic={META.topic} />
      <CorrectionCard top={250} guess="Ringan seperti kapas" answer="Berat ±500 ton" topic="air" crossAt={at("keliru")} answerAt={berat} />
      <Timbangan x={760} y={1010} size={380} level={level} />
      <LabelPill x={760} y={820} text="berat awan" topic={META.topic} at={berat + 16} size={34} />
      <Pembawa x={300} y={EDU_FEET_Y} tinggi={494} ekspresi="kaget" gestur="menyerah" />
    </AbsoluteFill>
  );
};
