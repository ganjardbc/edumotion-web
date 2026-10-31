import type React from "react";
import { clamp } from "../tako/animations/util";
import { Brow } from "../tako/components/Brow";
import { Eye } from "../tako/components/Eye";
import { Tear } from "../tako/components/Marks";
import { Mouth } from "../tako/components/Mouth";
import { EXPRESSIONS, MOUTHS } from "../tako/expressions/index";
import type { ExpressionName, Pose, Side } from "../tako/types";
import { faceGeometry } from "./face";
import type { FaceSpec } from "./types";

type FacePose = Pick<Pose, "faceX" | "faceY" | "gazeX" | "gazeY" | "blink" | "mouthOpen" | "browLift">;

// Wajah karakter pendukung: spesifikasi ekspresi dan komponen sama dengan Tako, geometri dari FaceSpec.
export const CastFace: React.FC<{ readonly face: FaceSpec; readonly expression: ExpressionName; readonly pose: FacePose; readonly clipBase: string }> = ({
  face,
  expression,
  pose,
  clipBase,
}) => {
  const g = faceGeometry(face);
  const spec = EXPRESSIONS[expression];
  const colors = { ball: face.ball, pupil: face.pupil, lid: face.lid, ink: face.ink };

  const eye = (side: Side) => {
    const e = spec.eye[side];
    return (
      <Eye
        side={side}
        clipId={`${clipBase}-${side}`}
        gazeX={clamp(pose.gazeX + (e.gazeX ?? 0), -1, 1)}
        gazeY={clamp(pose.gazeY + (e.gazeY ?? 0), -1, 1)}
        blink={clamp(pose.blink, 0, 1)}
        lid={e.lid}
        lidTilt={e.lidTilt}
        pupilScale={e.pupilScale}
        arc={e.arc ?? false}
        geometry={g.eyes[side]}
        colors={colors}
        dot={face.style === "dot"}
        arcSpan={g.arcSpan}
        arcWidth={g.arcWidth}
      />
    );
  };
  const brow = (side: Side) => {
    const b = spec.brow[side];
    return <Brow side={side} shape={b.shape} lift={(b.lift + pose.browLift) * g.k} tilt={b.tilt} geometry={g.brows[side]} color={face.ink} width={g.browWidth} />;
  };

  return (
    <g id="face" transform={`translate(${pose.faceX} ${pose.faceY})`}>
      {face.blush ? (
        <g id="blush" fill={face.blush.color}>
          <ellipse cx={face.cx - face.blush.gap} cy={face.blush.y} rx={face.blush.rx} ry={face.blush.ry} />
          <ellipse cx={face.cx + face.blush.gap} cy={face.blush.y} rx={face.blush.rx} ry={face.blush.ry} />
        </g>
      ) : null}
      {eye("left")}
      {eye("right")}
      {brow("left")}
      {brow("right")}
      {spec.marks === "fear"
        ? ([-1, 1] as const).map((s) => (
            <Tear key={s} x={face.cx + s * (face.eyeGap + face.eyeRx * 0.85)} y={face.eyeY + face.eyeRy * 0.55} />
          ))
        : null}
      <g transform={`translate(${face.cx} ${face.mouthY}) scale(${face.mouthScale}) translate(-400 -450)`}>
        <Mouth variant={MOUTHS[expression]} open={pose.mouthOpen} ink={face.ink} accent={face.accent} />
      </g>
    </g>
  );
};
