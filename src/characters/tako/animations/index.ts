import type { Animation, AnimationFrame, AnimationName, ExpressionName, Pose } from "../types";
import { idle } from "./idle";
import { jump, jumpHeight } from "./jump";
import { confusion, excitement, surprise, thinking, wave } from "./reactions";
import { talk } from "./talk";
import { sumPoses } from "./util";
import { walk } from "./walk";

export { blinkAt } from "./idle";
export { jumpHeight };
export { sumPoses } from "./util";

export const ANIMATIONS: Record<AnimationName, Animation> = {
  idle,
  walk,
  jump,
  talk,
  wave,
  surprise,
  confusion,
  excitement,
  thinking,
};

export type SampledAnimation = { readonly pose: Pose; readonly expression?: ExpressionName };

// Pose akhir satu frame: lapisan idle (napas, kedip) + preset yang dipilih (kecuali preset itu idle).
export const sampleAnimation = (name: AnimationName, frame: number, fps: number, withIdle = true): SampledAnimation => {
  const layers: AnimationFrame[] = [];
  if (withIdle) layers.push(idle(frame, fps));
  if (name !== "idle") layers.push(ANIMATIONS[name](frame, fps));
  const expression = [...layers].reverse().find((l) => l.expression !== undefined)?.expression;
  return { pose: sumPoses(layers.map((l) => l.pose)), expression };
};
