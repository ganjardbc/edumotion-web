import type React from "react";
import { clamp } from "./animations/util";
import { Antenna, ArmLeft, ArmRight, BodyHead, LegLeft, LegRight } from "./assets/parts";
import { Brow } from "./components/Brow";
import { Eye } from "./components/Eye";
import { Joint } from "./components/Joint";
import { Marks } from "./components/Marks";
import { Mouth } from "./components/Mouth";
import { EXPRESSIONS, MOUTHS } from "./expressions";
import { PIVOTS } from "./rig/pivots";
import { CharacterStage, type CharacterMotionProps, type CharacterStageProps, useCharacterPose } from "./rig/stage";

export type TakoCharacterProps = CharacterStageProps & CharacterMotionProps;

export const TakoCharacter: React.FC<TakoCharacterProps> = ({ x, y, size, expression, animation, idle, frameOffset, pose: poseOverride, facing, opacity }) => {
  const { frame, fps, pose, expression: expressionName, clipBase } = useCharacterPose({ expression, animation, idle, frameOffset, pose: poseOverride });
  const spec = EXPRESSIONS[expressionName];
  const mouth = MOUTHS[expressionName];

  const gx = (side: "left" | "right") => clamp(pose.gazeX + (spec.eye[side].gazeX ?? 0), -1, 1);
  const gy = (side: "left" | "right") => clamp(pose.gazeY + (spec.eye[side].gazeY ?? 0), -1, 1);
  const eye = (side: "left" | "right") => (
    <Eye
      side={side}
      clipId={`${clipBase}-${side}`}
      gazeX={gx(side)}
      gazeY={gy(side)}
      blink={Math.min(1, Math.max(0, pose.blink))}
      lid={spec.eye[side].lid}
      lidTilt={spec.eye[side].lidTilt}
      pupilScale={spec.eye[side].pupilScale}
      arc={spec.eye[side].arc ?? false}
    />
  );
  const brow = (side: "left" | "right") => (
    <Brow side={side} shape={spec.brow[side].shape} lift={spec.brow[side].lift + pose.browLift} tilt={spec.brow[side].tilt} />
  );

  return (
    <CharacterStage x={x} y={y} size={size} facing={facing} opacity={opacity} pose={pose}>
      {/* Urutan belakang ke depan sesuai rig_manifest.json */}
          <Joint pivot={PIVOTS.legLeft} angle={pose.legLeft}>
            <LegLeft />
          </Joint>
          <Joint pivot={PIVOTS.legRight} angle={pose.legRight}>
            <LegRight />
          </Joint>
          <BodyHead />
          <Joint pivot={PIVOTS.antenna} angle={pose.antennaRotate}>
            <Antenna />
          </Joint>
          <Joint pivot={PIVOTS.armLeft} angle={pose.armLeft}>
            <ArmLeft />
          </Joint>
          <Joint pivot={PIVOTS.armRight} angle={pose.armRight}>
            <ArmRight />
          </Joint>
          <g transform={`translate(${pose.faceX} ${pose.faceY})`}>
            {eye("left")}
            {eye("right")}
            {brow("left")}
            {brow("right")}
            <Mouth variant={mouth} open={pose.mouthOpen} />
          </g>
          {spec.marks ? <Marks name={spec.marks} float={Math.sin((frame / fps) * Math.PI * 2)} /> : null}
    </CharacterStage>
  );
};
