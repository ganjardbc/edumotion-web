import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "BadakJawaLangka",
  title: "Kenapa badak jawa sangat langka?",
  topic: "alam",
  cast: [],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tokoh di layar tidak berbicara; semua kalimat dibawakan narator.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Kenapa badak jawa sangat langka?", dur: 3 }], sfx: [{ sfx: "pop", at: 0.1, volume: 0.45 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Ada tiga sebab. Pertama, mereka jarang beranak.", dur: 4 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Seekor induk melahirkan satu anak, setiap empat sampai lima tahun. Hamilnya sekitar enam belas bulan.", dur: 7 }] },
  { id: "Kunci", segment: "explain", lines: [{ who: "narator", text: "Kedua, mereka diburu. Menurut polisi, dua puluh enam badak dibunuh pemburu antara 2019 dan 2023.", tts: "Kedua, mereka diburu. Menurut polisi, dua puluh enam badak dibunuh pemburu antara dua ribu sembilan belas dan dua ribu dua puluh tiga.", dur: 7 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "narator", text: "Ketiga, ruang hidup mereka terbatas. Seluruh populasi hanya tinggal di satu taman nasional.", dur: 6 }] },
  { id: "Explain4", segment: "explain", lines: [{ who: "narator", text: "Di sana, palem invasif menutupi tanah dan menghalangi cahaya. Tanaman pakan badak pun sulit tumbuh.", dur: 7 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi badak jawa langka karena jarang beranak, mudah berkurang, dan ruangnya sempit.", dur: 6 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Menurutmu, dari tiga sebab itu, mana yang paling berat? Tulis di komentar.", dur: 5 }] },
];
