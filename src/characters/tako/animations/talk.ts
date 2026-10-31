import type { Animation, ExpressionName } from "../types";
import { clamp, TAU } from "./util";

const SYLLABLES_PER_SECOND = 4.5;
const PHRASE_PERIOD = 1.9; // detik antar jeda napas
const MOOD_STEP = 0.9; // detik per ekspresi
// Hanya ekspresi bermulut isi, agar gerak mulut terlihat.
const MOODS: ReadonlyArray<ExpressionName> = ["happy", "curious", "happy", "surprised", "happy", "thinking"];

export const talk: Animation = (frame, fps) => {
  const t = frame / fps;
  // Mulut membuka-menutup per suku kata, menutup saat jeda antar frasa.
  const gate = clamp((Math.sin((t * TAU) / PHRASE_PERIOD) + 0.55) * 4, 0, 1);
  const syllable = Math.abs(Math.sin(Math.PI * t * SYLLABLES_PER_SECOND + 0.7 * Math.sin((t * TAU) / 1.3)));
  return {
    pose: {
      mouthOpen: -0.55 + gate * syllable * 0.95,
      bodyRotate: Math.sin((t * TAU) / 1.4) * 1.8,
      bodyY: -syllable * gate * 4,
      antennaRotate: Math.sin((t * TAU) / 0.9) * 6,
      armRight: -gate * (14 + Math.sin((t * TAU) / 0.7) * 10),
      browLift: gate * syllable * 3,
      faceX: Math.sin((t * TAU) / 2.2) * 5,
    },
    expression: MOODS[Math.floor(t / MOOD_STEP) % MOODS.length],
  };
};
