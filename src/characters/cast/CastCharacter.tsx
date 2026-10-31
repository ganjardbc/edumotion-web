import type React from "react";
import { CharacterStage, type CharacterMotionProps, type CharacterStageProps, useCharacterPose } from "../tako/rig/stage";
import { CAST_BY_ID } from "./characters";
import { CastRig } from "./CastRig";
import type { CastId } from "./types";

export type CastCharacterProps = CharacterStageProps & CharacterMotionProps & { readonly id: CastId };

// Karakter pendukung; props dan preset animasi sama dengan TakoCharacter.
export const CastCharacter: React.FC<CastCharacterProps> = ({ id, x, y, size, facing, opacity, ...motion }) => {
  const { frame, fps, pose, expression, clipBase } = useCharacterPose(motion);
  return (
    <CharacterStage x={x} y={y} size={size} facing={facing} opacity={opacity} pose={pose}>
      <CastRig def={CAST_BY_ID[id]} pose={pose} expression={expression} clipBase={clipBase} float={Math.sin((frame / fps) * Math.PI * 2)} />
    </CharacterStage>
  );
};
