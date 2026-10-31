import type { Animation } from "../types";
import { TAU } from "./util";

const STEP_PERIOD = 0.8; // detik per siklus langkah penuh

export const walk: Animation = (frame, fps) => {
  const t = frame / fps;
  const p = (t * TAU) / STEP_PERIOD;
  const s = Math.sin(p);
  return {
    pose: {
      legLeft: s * 30,
      legRight: -s * 30,
      // Lengan berlawanan dengan kaki sisi yang sama.
      armLeft: -s * 28,
      armRight: s * 28,
      bodyY: -Math.abs(s) * 9,
      bodyRotate: s * 2,
      antennaRotate: -Math.cos(p - 0.6) * 6,
      faceX: 4,
    },
  };
};
