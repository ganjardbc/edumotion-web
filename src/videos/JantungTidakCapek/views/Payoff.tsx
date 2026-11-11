import type React from "react";
import { EduBackdrop } from "../../../assets/backdrops";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CastCharacter } from "../../../characters/cast";
import { Pembawa } from "../../../characters/ganjar";
import { beat, EDU_FEET_Y, HookText } from "../../../explainers";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Payoff: jawaban satu kalimat, Tako dan Jantung berdampingan.
export const Payoff: React.FC<SceneProps> = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <HookText text="Jantung jago istirahat" highlight="istirahat" size={104} />
      <Pembawa x={320} y={EDU_FEET_Y} tinggi={513} ekspresi="tertawa" gestur="sorak" />
      <CastCharacter id="jantung" x={760} y={EDU_FEET_Y} size={500 * (1 + 0.04 * beat(frame))} facing={-1} expression="happy" />
    </AbsoluteFill>
  );
};
