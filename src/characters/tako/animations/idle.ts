import type { Animation } from "../types";
import { TAU, track } from "./util";

// Kedip deterministik: waktu mulai (detik) dalam satu siklus; 6.1 dan 6.4 = kedip ganda.
const BLINK_STARTS = [2.3, 6.1, 6.4, 10.8] as const;
const BLINK_CYCLE = 13.5;
const BLINK_DURATION = 0.2;

export const blinkAt = (t: number): number => {
  const c = t % BLINK_CYCLE;
  for (const s of BLINK_STARTS) {
    if (c >= s && c < s + BLINK_DURATION) return Math.sin(((c - s) / BLINK_DURATION) * Math.PI);
  }
  return 0;
};

// Lapisan dasar yang selalu aktif: napas, antena, ayunan lengan, kedip, dan lirikan pelan.
export const idle: Animation = (frame, fps) => {
  const t = frame / fps;
  const breath = Math.sin((t * TAU) / 3.2);
  return {
    pose: {
      squashY: breath * 0.012,
      squashX: -breath * 0.008,
      antennaRotate: Math.sin((t * TAU) / 2.6) * 4 + Math.sin((t * TAU) / 1.1 + 1) * 1.5,
      armLeft: breath * 1.5,
      armRight: -breath * 1.5,
      blink: blinkAt(t),
      gazeX: Math.sin((t * TAU) / 5.3) * 0.35,
      gazeY: track(Math.sin((t * TAU) / 7.1), [[-1, -0.15], [1, 0.15]]),
    },
  };
};
