import type React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { Pembawa } from "../../../characters/ganjar";
import { EDU_FEET_Y, HookText } from "../../../explainers";
import { QuestionMark } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Cta (karakter): pembawa berpikir, Baterai menunggu jawaban, tanda tanya muncul.
export const Cta: React.FC<SceneProps> = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - 12, fps, config: { damping: 10, stiffness: 140 } });
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <HookText text="Isi semalaman, bahaya?" highlight="bahaya" size={96} />
      <QuestionMark x={540} y={760} size={240} topic="teknologi" pop={pop} />
      <Pembawa x={320} y={EDU_FEET_Y} tinggi={540} ekspresi="mikir" gestur="mikir" />
      <CastCharacter id="baterai" x={780} y={EDU_FEET_Y} size={420} facing={-1} expression="curious" animation="thinking" />
    </AbsoluteFill>
  );
};
