import { Easing } from "remotion";
import type { Animation } from "../types";
import { track } from "./util";

const CYCLE = 1.5; // detik per lompatan; berulang
const HEIGHT = 230; // satuan viewBox
const TAKEOFF = 0.35;
const LANDING = 0.95;

const ease = Easing.inOut(Easing.quad);

export const jump: Animation = (frame, fps) => {
  const cycleFrames = Math.round(CYCLE * fps);
  const t = (frame % cycleFrames) / fps;

  // Parabola di udara; di darat nol.
  const u = (t - TAKEOFF) / (LANDING - TAKEOFF);
  const air = u > 0 && u < 1 ? 1 - (2 * u - 1) ** 2 : 0;

  const squashY = track(
    t,
    [
      [0, 0],
      [0.25, -0.2], // jongkok
      [TAKEOFF, 0.16], // meluncur, memanjang
      [0.65, 0.02],
      [LANDING, 0.1],
      [1.1, -0.22], // benturan mendarat
      [1.2, 0.06],
      [1.3, -0.03],
      [CYCLE, 0],
    ],
    ease,
  );
  const squashX = track(
    t,
    [
      [0, 0],
      [0.25, 0.14],
      [TAKEOFF, -0.1],
      [LANDING, -0.06],
      [1.1, 0.16],
      [1.2, -0.04],
      [CYCLE, 0],
    ],
    ease,
  );
  const armsUp = track(t, [[0, 0], [0.25, -20], [TAKEOFF, 110], [LANDING, 100], [1.1, 10], [CYCLE, 0]], ease);
  const legTuck = track(t, [[0, 0], [TAKEOFF, 0], [0.5, 22], [LANDING, 10], [1.05, 0], [CYCLE, 0]], ease);
  const antenna = track(t, [[0, 0], [0.25, 10], [0.4, -28], [0.65, -5], [LANDING, 22], [1.1, -14], [1.3, 5], [CYCLE, 0]], ease);

  return {
    pose: {
      bodyY: -air * HEIGHT,
      squashY,
      squashX,
      armLeft: armsUp,
      armRight: -armsUp,
      legLeft: legTuck,
      legRight: -legTuck,
      antennaRotate: antenna,
      browLift: air * 5,
    },
  };
};

// Tinggi lompat (satuan viewBox, positif = di atas tanah) untuk bayangan dan kamera.
export const jumpHeight = (frame: number, fps: number): number => -(jump(frame, fps).pose.bodyY ?? 0);
