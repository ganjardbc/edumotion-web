import { type EasingFunction, interpolate } from "remotion";
import { NEUTRAL_POSE, type PartialPose, type Pose } from "../types";

export const TAU = Math.PI * 2;

export type Keyframe = readonly [time: number, value: number];

// Nilai di waktu t dari keyframe (waktu menaik); di luar rentang ditahan.
export const track = (t: number, points: ReadonlyArray<Keyframe>, easing?: EasingFunction): number =>
  interpolate(
    t,
    points.map((p) => p[0]),
    points.map((p) => p[1]),
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing },
  );

export const clamp = (v: number, lo: number, hi: number): number => Math.min(hi, Math.max(lo, v));

export const sumPoses = (poses: ReadonlyArray<PartialPose>): Pose => {
  const out: Record<keyof Pose, number> = { ...NEUTRAL_POSE };
  for (const pose of poses) {
    for (const key of Object.keys(pose) as Array<keyof Pose>) out[key] += pose[key] ?? 0;
  }
  return out;
};
