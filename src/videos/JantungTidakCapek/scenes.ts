import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "JantungTidakCapek",
  title: "Kenapa jantung tidak pernah capek?",
  topic: "tubuh",
  cast: [],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tema Dark Chalk, tanpa tokoh di layar: semua visual berupa gambar kapur beranimasi.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Kenapa jantungmu tidak pernah capek?", dur: 3 }], sfx: [{ sfx: "heartbeat", at: 0, every: 25 / 30, times: 4, volume: 0.5 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Jantung bekerja sebentar, lalu langsung istirahat. Satu detak lamanya sekitar satu detik, dan istirahatnya lebih lama.", dur: 8 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Otot jantung juga punya banyak mitokondria, yaitu pabrik energi kecil di dalam sel. Jumlahnya jauh lebih banyak daripada di otot lengan.", dur: 9 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "narator", text: "Jantung punya pembuluh darah sendiri. Jadi makanan dan oksigennya terus dikirim.", dur: 5.5 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi jantung tidak capek karena pintar istirahat. Ia beristirahat sebentar di antara tiap detak.", dur: 6.5 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Menurutmu, bagian tubuh mana lagi yang tidak pernah capek?", dur: 4 }] },
];
