import type React from "react";
import { Joint } from "../tako/components/Joint";
import { Marks } from "../tako/components/Marks";
import { EXPRESSIONS } from "../tako/expressions/index";
import { type ExpressionName, type Pose } from "../tako/types";
import { CastFace } from "./CastFace";
import type { CastDefinition } from "./types";

// Susunan lapisan satu karakter pada satu pose. Tanpa hook Remotion, jadi dipakai juga oleh pengekspor paket SVG.
export const CastRig: React.FC<{ readonly def: CastDefinition; readonly pose: Pose; readonly expression: ExpressionName; readonly clipBase: string; readonly float: number }> = ({
  def,
  pose,
  expression,
  clipBase,
  float,
}) => {
  const { legs, back, body: Body, topper, arms, extras: Extras, marks } = def;
  const marksName = EXPRESSIONS[expression].marks;
  return (
    <>
      <Joint pivot={legs.left.pivot} angle={pose.legLeft}>
        <legs.left.part />
      </Joint>
      <Joint pivot={legs.right.pivot} angle={pose.legRight}>
        <legs.right.part />
      </Joint>
      {back ? (
        <Joint pivot={back.pivot} angle={pose.antennaRotate * back.swing}>
          <back.part />
        </Joint>
      ) : null}
      <Body />
      {topper ? (
        <Joint pivot={topper.pivot} angle={pose.antennaRotate * topper.swing}>
          <topper.part />
        </Joint>
      ) : null}
      <Joint pivot={arms.left.pivot} angle={pose.armLeft}>
        <arms.left.part />
      </Joint>
      <Joint pivot={arms.right.pivot} angle={pose.armRight}>
        <arms.right.part />
      </Joint>
      <CastFace face={def.face} expression={expression} pose={pose} clipBase={clipBase} />
      {Extras ? (
        <g transform={`translate(0 ${float * 8})`}>
          <Extras />
        </g>
      ) : null}
      {marksName ? (
        <g transform={`translate(${marks.x} ${marks.y}) scale(${marks.scale}) translate(-400 -300)`}>
          <Marks name={marksName} float={float} tears={false} />
        </g>
      ) : null}
    </>
  );
};
