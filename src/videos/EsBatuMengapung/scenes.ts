import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "EsBatuMengapung",
  title: "Kenapa es batu mengapung?",
  topic: "air",
  cast: [],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tema Dark Chalk, tanpa tokoh di layar: semua visual berupa gambar kapur beranimasi.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Zat padat biasanya tenggelam di cairannya sendiri. Tapi es mengapung. Kok bisa?", dur: 4.5 }], sfx: [{ sfx: "pop", at: 0, volume: 0.4 }] },
  { id: "Setup", segment: "setup", lines: [{ who: "narator", text: "Banyak orang mengira es mengapung karena ada gelembung udara di dalamnya.", dur: 4.5 }] },
  { id: "Twist", segment: "twist", lines: [{ who: "narator", text: "Ternyata bukan. Es bening tanpa gelembung pun tetap mengapung.", dur: 4 }], sfx: [{ sfx: "wrong", at: 0.3, volume: 0.4 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Air terbuat dari molekul, yaitu butiran yang sangat kecil. Di air cair, molekul-molekul itu berdesakan dan terus bergeser.", dur: 8 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Saat air membeku, molekul itu mengunci diri dalam susunan teratur. Susunan ini berongga, jadi molekulnya lebih renggang.", dur: 8 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "narator", text: "Karena lebih renggang, air yang membeku memuai sekitar sembilan persen. Jumlah molekulnya sama, tapi tempatnya lebih luas.", dur: 8 }] },
  { id: "Kunci", segment: "explain", lines: [{ who: "narator", text: "Es lebih renggang, jadi lebih ringan daripada air.", dur: 3 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi es mengapung karena saat membeku, air menjadi lebih renggang dan lebih ringan.", dur: 6 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Menurutmu, apa jadinya kalau es tenggelam di danau?", dur: 4 }] },
];
