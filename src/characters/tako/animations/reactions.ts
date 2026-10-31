import { Easing } from "remotion";
import type { Animation } from "../types";
import { clamp, TAU, track } from "./util";

const ease = Easing.out(Easing.quad);

// Melambai: lengan kanan naik lalu bergoyang. Frame 0 = mulai naik.
export const wave: Animation = (frame, fps) => {
  const t = frame / fps;
  const raise = track(t, [[0, 0], [0.3, 1]], ease);
  return {
    pose: {
      armRight: -raise * (125 + Math.sin((t * TAU) / 0.5) * 22),
      bodyRotate: raise * Math.sin((t * TAU) / 1.2) * 1.5,
      antennaRotate: Math.sin((t * TAU) / 0.5 + 0.5) * 8,
    },
    expression: "happy",
  };
};

// Kaget: tersentak ke atas, lengan terangkat, antena menyentak lalu bergetar mereda.
export const surprise: Animation = (frame, fps) => {
  const t = frame / fps;
  const hop = track(t, [[0, 0], [0.12, 0], [0.25, 1], [0.45, 0], [1, 0]], Easing.inOut(Easing.quad));
  const squashY = track(t, [[0, 0], [0.08, -0.12], [0.2, 0.12], [0.45, -0.1], [0.6, 0.03], [0.8, 0]], Easing.inOut(Easing.quad));
  const arms = track(t, [[0, 0], [0.2, 75], [0.7, 60]], ease);
  return {
    pose: {
      bodyY: -hop * 70,
      squashY,
      squashX: -squashY * 0.7,
      armLeft: arms,
      armRight: -arms,
      antennaRotate: -30 * Math.exp(-t * 4) * Math.cos(t * TAU * 2.2),
      browLift: track(t, [[0, 0], [0.15, 1]]) * 5,
      legLeft: hop * 12,
      legRight: -hop * 12,
    },
    expression: "surprised",
  };
};

// Bingung: kepala miring bergoyang, mata celingak-celinguk, satu tangan menggaruk kepala.
export const confusion: Animation = (frame, fps) => {
  const t = frame / fps;
  const ramp = track(t, [[0, 0], [0.3, 1]], ease);
  return {
    pose: {
      bodyRotate: ramp * Math.sin((t * TAU) / 1.6) * 6,
      gazeX: ramp * Math.sin((t * TAU) / 1.2) * 0.8,
      antennaRotate: ramp * (10 + Math.sin((t * TAU) / 1.0) * 14),
      armLeft: ramp * (115 + Math.sin(t * TAU * 3) * 8),
      faceX: ramp * Math.sin((t * TAU) / 1.6) * 5,
    },
    expression: "confused",
  };
};

// Semangat: loncat-loncat kecil, kedua lengan mengepak, antena bergetar.
export const excitement: Animation = (frame, fps) => {
  const t = frame / fps;
  const phase = (t * TAU) / 0.5;
  const hop = Math.abs(Math.sin(phase / 2));
  const squashY = hop * 0.1 - 0.05;
  return {
    pose: {
      bodyY: -hop * 45,
      squashY,
      squashX: -squashY * 0.7,
      armLeft: 100 + Math.sin(phase) * 25,
      armRight: -(110 + Math.sin(phase + Math.PI) * 25),
      antennaRotate: Math.sin(phase + 1) * 15,
      legLeft: hop * 14,
      legRight: -hop * 14,
      gazeY: -0.4,
    },
    expression: "laughing",
  };
};

// Berpikir: miring, melirik ke atas, tangan ke dagu dan mengetuk.
export const thinking: Animation = (frame, fps) => {
  const t = frame / fps;
  const ramp = clamp(track(t, [[0, 0], [0.4, 1]], ease), 0, 1);
  return {
    pose: {
      bodyRotate: ramp * (4 + Math.sin((t * TAU) / 2.4) * 1.5),
      gazeX: -0.6 * ramp,
      gazeY: -0.7 * ramp,
      armRight: ramp * (135 + Math.sin(t * TAU * 2.5) * 3),
      antennaRotate: ramp * (6 + Math.sin((t * TAU) / 1.8) * 5),
      faceX: -3 * ramp,
    },
    expression: "thinking",
  };
};
