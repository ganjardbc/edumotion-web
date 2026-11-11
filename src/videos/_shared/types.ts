import type React from "react";
import type { SfxName } from "../../assets/sfx";
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

// Efek suara yang berbunyi di dalam scene. Waktu dalam detik dari awal scene (bukan dari awal video), jadi tetap
// sejajar dengan visual saat durasi scene berubah mengikuti audio VO. Dengan `every` dan `times`, bunyinya diulang;
// pengulangan yang melewati akhir scene terpotong sendiri.
export type SfxCue = {
  readonly sfx: SfxName;
  readonly at: number;
  readonly every?: number;
  readonly times?: number;
  // 0..1, bawaan 0,5 (VO sudah diratakan -16 LUFS; SFX harus jelas tapi di bawah suara).
  readonly volume?: number;
};

export type Scene = {
  // PascalCase, unik di dalam video; sama dengan nama berkas di views/<Id>.tsx.
  readonly id: string;
  readonly segment: Segment;
  readonly lines: ReadonlyArray<Line>;
  // Detik hening setelah kalimat terakhir (default 0,3).
  readonly pad?: number;
  // Efek suara scene ini (opsional).
  readonly sfx?: ReadonlyArray<SfxCue>;
  // Sisipan layar penuh untuk satu poin penting (tanpa karakter). Muncul saat narator mengucapkan `at` dan bertahan
  // sampai kata `sampai` (atau sampai kalimat itu selesai). `judul` paling banyak 6 kata; paling banyak 2 per video.
  readonly cutaway?: { readonly at: string; readonly sampai?: string; readonly judul: string; readonly sorot?: string; readonly sub?: string };
  // Transisi masuk ke scene ini (opsional), berpusat di batas dengan scene sebelumnya. Pakai saat latar berganti jauh.
  readonly enter?: "swipe" | "iris" | "bars";
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
  // Frame (dari awal scene) saat narator mulai mengucapkan `kata` (boleh beberapa kata, tanpa peka huruf besar
  // dan tanda baca). `nth` memilih kemunculan ke-n (mulai 0). Dari stempel waktu audio bila ada, selain itu
  // diperkirakan dari porsi huruf. Melempar galat bila kata tidak ada di narasi scene, supaya salah ketik ketahuan.
  readonly at: (kata: string, nth?: number) => number;
};

export type SceneRenderers = Readonly<Record<string, React.ComponentType<SceneProps>>>;
