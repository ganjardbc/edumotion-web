import { DEFAULT_MODEL, DEFAULT_SPEED, type Voice } from "./voices";
import type { Line } from "./types";

export type VoManifest = { readonly lines: Readonly<Record<string, { readonly hash: string; readonly file: string; readonly duration: number }>> };

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
  audioFor: (id: string): { readonly src: string; readonly duration: number } | null => {
    const entry = manifest.lines[id];
    const src = files[id];
    return entry && src ? { src, duration: entry.duration } : null;
  },
});

export type Voiceover = ReturnType<typeof createVoiceover>;
