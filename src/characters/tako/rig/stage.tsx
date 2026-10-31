import type React from "react";
import { useId } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { sampleAnimation, sumPoses } from "../animations";
import { NEUTRAL_POSE, type AnimationName, type ExpressionName, type PartialPose, type Pose } from "../types";
import { GROUND, VIEWBOX_SIZE } from "./pivots";

// Dipakai bersama Tako dan karakter pendukung: pemilihan pose per frame dan kanvas SVG berjangkar di kaki.
export type CharacterMotionProps = {
  // Bila tidak diisi, memakai ekspresi yang disarankan preset (jika ada), lalu "happy".
  readonly expression?: ExpressionName;
  readonly animation?: AnimationName;
  // Lapisan idle (napas, kedip, antena) di bawah preset. Bawaan true.
  readonly idle?: boolean;
  // Frame yang ditambahkan ke useCurrentFrame() untuk memulai preset di titik lain.
  readonly frameOffset?: number;
  // Penimpaan pose aditif di atas animasi.
  readonly pose?: PartialPose;
};

export type CharacterStageProps = {
  // Titik tumpu (tengah dasar kaki) dalam piksel kanvas induk; induk harus position relatif/absolut atau AbsoluteFill.
  readonly x?: number;
  readonly y?: number;
  // Lebar kotak viewBox 800x800 dalam piksel.
  readonly size?: number;
  // 1 = menghadap kanan (asli), -1 = cermin.
  readonly facing?: 1 | -1;
  readonly opacity?: number;
};

export const useCharacterPose = ({ expression, animation = "idle", idle = true, frameOffset = 0, pose: override }: CharacterMotionProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const clipBase = useId().replace(/[^a-zA-Z0-9]/g, "");
  const sampled = sampleAnimation(animation, Math.max(0, frame + frameOffset), fps, idle);
  const pose = sumPoses([NEUTRAL_POSE, sampled.pose, override ?? {}]);
  const name: ExpressionName = expression ?? sampled.expression ?? "happy";
  return { frame, fps, pose, expression: name, clipBase };
};

const FOOT_ANCHOR_Y = GROUND[1] / VIEWBOX_SIZE;

export const CharacterStage: React.FC<CharacterStageProps & { readonly pose: Pose; readonly children: React.ReactNode }> = ({
  x = 540,
  y = 1400,
  size = 800,
  facing = 1,
  opacity = 1,
  pose,
  children,
}) => {
  const [gX, gY] = GROUND;
  const flip = facing === -1 ? `translate(${gX} 0) scale(-1 1) translate(${-gX} 0)` : "";
  const bodyTransform = [
    `translate(${pose.bodyX} ${pose.bodyY})`,
    `translate(${gX} ${gY}) rotate(${pose.bodyRotate}) scale(${1 + pose.squashX} ${1 + pose.squashY}) translate(${-gX} ${-gY})`,
  ].join(" ");
  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
      width={size}
      height={size}
      style={{ position: "absolute", left: x - size / 2, top: y - size * FOOT_ANCHOR_Y, overflow: "visible", opacity }}
    >
      <g transform={flip}>
        <g transform={bodyTransform}>{children}</g>
      </g>
    </svg>
  );
};
