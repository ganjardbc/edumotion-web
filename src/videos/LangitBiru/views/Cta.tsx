import type React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { Pembawa } from "../../../characters/ganjar";
import { EDU_FEET_Y, HookText } from "../../../explainers";
import { QuestionMark } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Cta: Tako menunjuk laut, tanda tanya, mengundang komentar.
export const Cta: React.FC<SceneProps> = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - 10, fps, config: { damping: 10, stiffness: 140 } });
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <HookText text="Kenapa laut biru?" highlight="laut" size={104} />
      <QuestionMark x={720} y={820} size={280} topic="air" pop={pop} />
      <Pembawa x={440} y={EDU_FEET_Y} tinggi={608} ekspresi="mikir" gestur="mikir" />
    </AbsoluteFill>
  );
};
