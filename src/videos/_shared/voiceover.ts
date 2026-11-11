import { DEFAULT_MODEL, DEFAULT_SPEED, type Voice } from "./voices";
import type { Line } from "./types";

// Waktu satu kata dalam klip (detik dari awal klip yang sudah dipotong). Dari endpoint ElevenLabs `with-timestamps`.
export type WordTime = { readonly w: string; readonly s: number; readonly e: number };

export type VoManifest = { readonly lines: Readonly<Record<string, { readonly hash: string; readonly file: string; readonly duration: number; readonly words?: ReadonlyArray<WordTime> }>> };

type Options = {
  readonly manifest: VoManifest;
  // Dibuat otomatis oleh scripts/vo-process.py (voiceover-files.ts).
  readonly files: Readonly<Record<string, string>>;
  // Kunci `who` pada Line mengarah ke suara.
  readonly voices: Readonly<Record<string, Voice>>;
  readonly model?: string;
  readonly speed?: number;
};

// Tanpa impor remotion supaya bisa dipakai skrip Node (scripts/vo-lines.mjs).
export const createVoiceover = ({ manifest, files, voices, model = DEFAULT_MODEL, speed = DEFAULT_SPEED }: Options) => ({
  VO_VOICES: voices,
  VO_MODEL: model,
  VO_SPEED: speed,
  VO_MANIFEST: manifest.lines,
  lineId: (sceneId: string, index: number): string => `${sceneId}-${index + 1}`,
  ttsText: (line: Line): string => line.tts ?? line.text,
  // Audio asli bila sudah dibuat; null berarti pakai estimasi `dur` dari naskah.
  // `words` ada bila klip dibuat dengan stempel waktu; tanpa itu, waktu kata diperkirakan dari porsi huruf.
  audioFor: (id: string): { readonly src: string; readonly duration: number; readonly words: ReadonlyArray<WordTime> | null } | null => {
    const entry = manifest.lines[id];
    const src = files[id];
    return entry && src ? { src, duration: entry.duration, words: entry.words ?? null } : null;
  },
});

export type Voiceover = ReturnType<typeof createVoiceover>;
