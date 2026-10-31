import type { Scene } from "./types";
import type { Voiceover } from "./voiceover";

const FPS = 30;
const DEFAULT_PAD = 0.3;
// Jeda napas antar kalimat dalam satu scene (detik).
const LINE_GAP = 0.15;

export type SceneTiming = { readonly scene: Scene; readonly from: number; readonly frames: number; readonly lineStarts: ReadonlyArray<number>; readonly lineFrames: ReadonlyArray<number> };

// Durasi tiap scene mengikuti audio; sebelum audio ada, memakai `dur` dari naskah.
export const computeTimings = (scenes: ReadonlyArray<Scene>, vo: Voiceover): ReadonlyArray<SceneTiming> => {
  let from = 0;
  return scenes.map((scene) => {
    let t = 0;
    const lineStarts: number[] = [];
    const lineFrames: number[] = [];
    scene.lines.forEach((line, i) => {
      const audio = vo.audioFor(vo.lineId(scene.id, i));
      const frames = Math.ceil((audio ? audio.duration : line.dur) * FPS);
      lineStarts.push(t);
      lineFrames.push(frames);
      t += frames + Math.round(LINE_GAP * FPS);
    });
    const frames = Math.max(1, t + Math.round((scene.pad ?? DEFAULT_PAD) * FPS));
    const timing = { scene, from, frames, lineStarts, lineFrames };
    from += frames;
    return timing;
  });
};

export const totalFrames = (timings: ReadonlyArray<SceneTiming>): number => timings.reduce((n, t) => n + t.frames, 0);
