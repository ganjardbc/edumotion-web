import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "PenemuNol",
  title: "Siapa penemu angka nol?",
  topic: "sejarah",
  cast: [],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tokoh di layar tidak berbicara; semua kalimat dibawakan narator.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Tanpa angka nol, komputer tidak bisa bekerja. Lalu siapa yang menemukannya?", dur: 5 }], sfx: [{ sfx: "pop", at: 0, volume: 0.4 }] },
  { id: "Setup", segment: "setup", lines: [{ who: "narator", text: "Banyak orang mengira nol ditemukan orang Arab. Soalnya kita menyebutnya angka Arab.", dur: 6 }] },
  { id: "Twist", segment: "twist", lines: [{ who: "narator", text: "Ternyata keliru. Nol berkembang di India.", dur: 4 }], sfx: [{ sfx: "wrong", at: 0.3, volume: 0.4 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Sekitar seribu tujuh ratus tahun lalu, orang India menulis titik kecil. Titik itu menandai tempat kosong. Dengan titik, angka satu dan sepuluh jadi berbeda.", dur: 10 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Tahun enam ratus dua puluh delapan, Brahmagupta menulis aturan menghitung dengan nol. Brahmagupta adalah ahli matematika India. Sejak itu, nol menjadi angka sendiri.", dur: 10 }] },
  { id: "Kunci", segment: "explain", lines: [{ who: "narator", text: "Nol berubah dari tanda kosong menjadi angka.", dur: 4 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi nol berkembang di India. Lalu ilmuwan dan pedagang Arab membawanya sampai ke Eropa.", dur: 6 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Menurutmu, angka apa lagi yang lahir di India?", dur: 4 }] },
];
