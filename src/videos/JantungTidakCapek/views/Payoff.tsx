import type React from "react";
import { EduBackdrop } from "../../../assets/backdrops";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CastCharacter } from "../../../characters/cast";
import { TakoCharacter } from "../../../characters/tako";
import { beat, EDU_FEET_Y, HookText } from "../../../explainers";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Payoff: jawaban satu kalimat, Tako dan Jantung berdampingan.
export const Payoff: React.FC<SceneProps> = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <EduBackdrop kind="polos" topic={META.topic} />
      <HookText text="Jantung jago istirahat" highlight="istirahat" size={104} />
      <TakoCharacter x={320} y={EDU_FEET_Y} size={540} expression="laughing" animation="excitement" />
      <CastCharacter id="jantung" x={760} y={EDU_FEET_Y} size={500 * (1 + 0.04 * beat(frame))} facing={-1} expression="happy" />
    </AbsoluteFill>
  );
};
