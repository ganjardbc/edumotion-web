import type React from "react";
import type { CastId } from "../../characters/cast/types";

// Satu kalimat voice over. `who` menunjuk kunci di VO_VOICES milik video (mis. "tako", "narator").
export type Line = {
  readonly who: string;
  // Teks yang tampil sebagai caption.
  readonly text: string;
  // Teks khusus untuk TTS (ejaan angka, jeda); bila kosong memakai `text`.
  readonly tts?: string;
  // Perkiraan durasi (detik) dari naskah. Dipakai sampai audio asli ada.
  readonly dur: number;
};

// Bagian struktur cerita; urutan baku: hook, setup, twist, explain (boleh lebih dari satu), payoff, cta.
export type Segment = "hook" | "setup" | "twist" | "explain" | "payoff" | "cta";

export type Scene = {
  // PascalCase, unik di dalam video; sama dengan nama berkas di views/<Id>.tsx.
  readonly id: string;
  readonly segment: Segment;
  readonly lines: ReadonlyArray<Line>;
  // Detik hening setelah kalimat terakhir (default 0,3).
  readonly pad?: number;
};

export type VideoTopic = "tubuh" | "cuaca" | "ilmu" | "planet" | "sejarah" | "teknologi" | "air" | "alam" | "ai";

export type VideoMeta = {
  // Sama dengan nama folder dan id komposisi.
  readonly id: string;
  readonly title: string;
  readonly topic: VideoTopic;
  // Karakter cast yang tampil selain Tako.
  readonly cast: ReadonlyArray<CastId>;
  readonly fps: 30;
};

export type SceneProps = {
  readonly scene: Scene;
  // Durasi scene dalam frame (dari audio atau estimasi).
  readonly frames: number;
  // Frame awal tiap kalimat di dalam scene, panjangnya sama dengan scene.lines.
  readonly lineStarts: ReadonlyArray<number>;
};

export type SceneRenderers = Readonly<Record<string, React.ComponentType<SceneProps>>>;
