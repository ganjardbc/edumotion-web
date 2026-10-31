import type React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { TakoCharacter } from "../../../characters/tako";
import { EDU_FEET_Y, HookText } from "../../../explainers";
import { QuestionMark } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Hook: langit siang, Tako menengadah dengan tanda tanya.
export const Hook: React.FC<SceneProps> = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - 14, fps, config: { damping: 10, stiffness: 140 } });
  return (
    <AbsoluteFill>
      <EduBackdrop kind="langit" topic={META.topic} time="siang" />
      <HookText text="Kenapa langit biru, bukan ungu?" highlight="ungu" size={100} />
      <QuestionMark x={720} y={880} size={300} topic="ilmu" pop={pop} />
      <TakoCharacter x={440} y={EDU_FEET_Y} size={620} expression="curious" animation="thinking" />
    </AbsoluteFill>
  );
};
