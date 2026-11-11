import type { Scene } from "./types";
import type { Voiceover, WordTime } from "./voiceover";

const FPS = 30;
const DEFAULT_PAD = 0.3;
// Jeda napas antar kalimat dalam satu scene (detik).
const LINE_GAP = 0.15;

// Waktu kata per kalimat dalam frame, relatif ke awal kalimat. `word` sudah dinormalkan (huruf kecil, tanpa tanda baca).
export type WordCue = { readonly word: string; readonly from: number; readonly to: number };

export type SceneTiming = {
  readonly scene: Scene;
  readonly from: number;
  readonly frames: number;
  readonly lineStarts: ReadonlyArray<number>;
  readonly lineFrames: ReadonlyArray<number>;
  readonly lineWords: ReadonlyArray<ReadonlyArray<WordCue>>;
  // Stempel waktu asli (detik) per kalimat untuk Caption; null bila memakai perkiraan.
  readonly lineAudioWords: ReadonlyArray<ReadonlyArray<WordTime> | null>;
};

export const normWord = (w: string): string => w.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "");
export const textWords = (text: string): ReadonlyArray<string> => text.split(/\s+/).filter((w) => normWord(w) !== "");

// Stempel waktu hanya dipakai bila jumlah katanya sama dengan teks caption (teks `tts` khusus bisa berbeda).
export const usableWords = (text: string, words: ReadonlyArray<WordTime> | null | undefined): ReadonlyArray<WordTime> | null =>
  words && words.length === textWords(text).length ? words : null;

// Perkiraan: kata dibagi rata menurut jumlah huruf, sama seperti Caption tanpa stempel waktu.
const estimateWords = (text: string, frames: number): ReadonlyArray<WordCue> => {
  const words = textWords(text);
  const total = words.reduce((n, w) => n + w.length + 1, 0) || 1;
  let acc = 0;
  return words.map((w) => {
    const from = (acc / total) * frames;
    acc += w.length + 1;
    return { word: normWord(w), from: Math.round(from), to: Math.round((acc / total) * frames) };
  });
};

// Durasi tiap scene mengikuti audio; sebelum audio ada, memakai `dur` dari naskah.
export const computeTimings = (scenes: ReadonlyArray<Scene>, vo: Voiceover): ReadonlyArray<SceneTiming> => {
  let from = 0;
  return scenes.map((scene) => {
    let t = 0;
    const lineStarts: number[] = [];
    const lineFrames: number[] = [];
    const lineWords: Array<ReadonlyArray<WordCue>> = [];
    const lineAudioWords: Array<ReadonlyArray<WordTime> | null> = [];
    scene.lines.forEach((line, i) => {
      const audio = vo.audioFor(vo.lineId(scene.id, i));
      const frames = Math.ceil((audio ? audio.duration : line.dur) * FPS);
      const real = usableWords(line.text, audio?.words);
      lineStarts.push(t);
      lineFrames.push(frames);
      lineAudioWords.push(real);
      lineWords.push(real ? real.map((w, k) => ({ word: normWord(textWords(line.text)[k]), from: Math.round(w.s * FPS), to: Math.round(w.e * FPS) })) : estimateWords(line.text, frames));
      t += frames + Math.round(LINE_GAP * FPS);
    });
    const frames = Math.max(1, t + Math.round((scene.pad ?? DEFAULT_PAD) * FPS));
    const timing = { scene, from, frames, lineStarts, lineFrames, lineWords, lineAudioWords };
    from += frames;
    return timing;
  });
};

// Frame (dari awal scene) saat `kata` mulai diucapkan. Lihat SceneProps.at.
export const cueAt = (timing: SceneTiming, kata: string, nth = 0): number => {
  const target = textWords(kata).map(normWord);
  if (!target.length) throw new Error(`at(): kata kosong di scene ${timing.scene.id}`);
  let seen = 0;
  for (let li = 0; li < timing.lineWords.length; li++) {
    const words = timing.lineWords[li];
    for (let i = 0; i + target.length <= words.length; i++) {
      if (target.every((w, k) => words[i + k].word === w)) {
        if (seen === nth) return timing.lineStarts[li] + words[i].from;
        seen++;
      }
    }
  }
  throw new Error(`at("${kata}"${nth ? `, ${nth}` : ""}) tidak ditemukan di narasi scene ${timing.scene.id}. Samakan dengan teks di scenes.ts.`);
};

export const totalFrames = (timings: ReadonlyArray<SceneTiming>): number => timings.reduce((n, t) => n + t.frames, 0);
