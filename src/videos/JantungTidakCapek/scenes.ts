import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "JantungTidakCapek",
  title: "Kok jantung tidak capek?",
  topic: "tubuh",
  cast: ["jantung"],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tokoh di layar tidak berbicara; semua kalimat dibawakan narator.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Jantungmu berdetak seratus ribu kali sehari. Kok tidak capek?", dur: 3.8 }], sfx: [{ sfx: "heartbeat", at: 0, every: 25 / 30, times: 4, volume: 0.5 }] },
  { id: "Setup", segment: "setup", lines: [{ who: "narator", text: "Banyak orang mengira jantung itu sangat kuat dan tidak pernah istirahat. Seperti mesin yang menyala terus.", dur: 7 }] },
  { id: "Twist", segment: "twist", lines: [{ who: "narator", text: "Ternyata itu keliru!", dur: 1.6 }], sfx: [{ sfx: "wrong", at: 0.1, volume: 0.4 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Satu detak lamanya sekitar satu detik. Jantung bekerja sebentar, lalu istirahat lebih lama.", dur: 5.5 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Otot jantung juga punya banyak mitokondria, yaitu pabrik energi kecil di dalam sel. Jumlahnya jauh lebih banyak daripada di otot lengan.", dur: 8.5 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "narator", text: "Jantung juga punya pembuluh darah sendiri. Jadi makanan dan oksigennya terus dikirim.", dur: 5 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi jantung tidak capek karena pintar istirahat. Ia beristirahat sebentar di antara tiap detak.", dur: 7 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Menurutmu, bagian tubuh mana lagi yang tidak pernah capek?", dur: 4 }] },
];
