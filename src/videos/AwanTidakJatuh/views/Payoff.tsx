import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { TakoCharacter } from "../../../characters/tako";
import { beat, EDU_FEET_Y, HookText } from "../../../explainers";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Payoff: jawaban satu kalimat, Tako dan Awan berdampingan.
export const Payoff: React.FC<SceneProps> = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <EduBackdrop kind="langit" topic={META.topic} />
      <HookText text="Terlalu kecil untuk jatuh" highlight="kecil" size={104} />
      <TakoCharacter x={320} y={EDU_FEET_Y} size={540} expression="laughing" animation="excitement" />
      <CastCharacter id="awan" x={760} y={EDU_FEET_Y} size={480 * (1 + 0.04 * beat(frame, 30))} facing={-1} expression="happy" />
    </AbsoluteFill>
  );
};
