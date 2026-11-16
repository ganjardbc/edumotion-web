import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "PesawatTerbang",
  title: "Bagaimana pesawat bisa terbang?",
  topic: "ilmu",
  cast: [],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tokoh di layar tidak berbicara; semua kalimat dibawakan narator.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Pesawat besar beratnya ratusan ton. Bagaimana bisa melayang di udara?", dur: 5 }], sfx: [{ sfx: "pop", at: 0.1, volume: 0.45 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Mesin mendorong pesawat maju dengan cepat. Udara pun mengalir deras di sekitar sayap.", dur: 8 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Sayap pesawat miring sedikit dan bentuknya melengkung. Bentuk ini membelokkan udara ke bawah.", dur: 9 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "narator", text: "Udara yang terdorong ke bawah membalas dengan mendorong sayap ke atas. Dorongan ke atas ini disebut gaya angkat.", dur: 10 }] },
  { id: "Kunci", segment: "explain", lines: [{ who: "narator", text: "Gaya angkat lebih besar dari berat, jadi pesawat naik.", dur: 4 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi pesawat terbang karena sayapnya mendorong udara ke bawah, dan udara mendorongnya ke atas.", dur: 7 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Menurutmu, kenapa pesawat butuh landasan yang panjang? Tulis jawabanmu di komentar.", dur: 6 }] },
];
