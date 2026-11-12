import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "DinosaurusPunah",
  title: "Kenapa dinosaurus punah?",
  topic: "alam",
  cast: [],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tema Dark Chalk, tanpa tokoh di layar: semua visual berupa gambar kapur beranimasi.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Dinosaurus berkuasa di Bumi selama jutaan tahun. Lalu hilang begitu saja. Kok bisa?", dur: 5 }], sfx: [{ sfx: "pop", at: 0, volume: 0.4 }] },
  { id: "Setup", segment: "setup", lines: [{ who: "narator", text: "Banyak orang mengira dinosaurus punah karena zaman es. Bumi jadi terlalu dingin.", dur: 5 }] },
  { id: "Twist", segment: "twist", lines: [{ who: "narator", text: "Ternyata bukan. Penyebabnya datang dari luar angkasa.", dur: 4 }], sfx: [{ sfx: "wrong", at: 0.3, volume: 0.4 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Enam puluh enam juta tahun lalu, sebuah asteroid menabrak Bumi. Asteroid adalah batu raksasa dari luar angkasa. Lebarnya sekitar sepuluh kilometer.", dur: 9 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Tabrakan itu melempar debu ke langit. Debunya menutupi sinar matahari selama berbulan-bulan. Tumbuhan pun mati.", dur: 9 }] },
  { id: "Kunci", segment: "explain", lines: [{ who: "narator", text: "Tumbuhan mati, jadi makanan habis.", dur: 3 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi dinosaurus punah karena asteroid menutup matahari dan makanan habis.", dur: 6 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Menurutmu, hewan apa yang masih selamat saat itu?", dur: 4 }] },
];
