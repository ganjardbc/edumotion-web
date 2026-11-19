import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "KilatLebihDuluDariGuntur",
  title: "Kenapa kilat lebih dulu dari guntur?",
  topic: "cuaca",
  cast: [],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tokoh di layar tidak berbicara; semua kalimat dibawakan narator.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Kilat dan guntur muncul di saat yang sama. Kenapa kilat terlihat lebih dulu?", dur: 5 }], sfx: [{ sfx: "pop", at: 0.1, volume: 0.45 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Kilat membuat udara di sekitarnya panas sekali. Udara itu memuai dengan sangat cepat dan menghasilkan suara.", dur: 9 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Suara itulah yang kita sebut guntur. Cahaya kilat melesat sangat cepat, jadi hampir seketika sampai ke matamu.", dur: 9 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "narator", text: "Suara jauh lebih lambat dari cahaya. Dalam satu detik, suara hanya melewati sekitar tiga ratus empat puluh meter.", dur: 8 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi kamu melihat kilat dulu karena cahaya lebih cepat dari suara. Makin jauh kilatnya, makin lama gunturnya terdengar.", dur: 8 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Menurutmu, berapa detik guntur sampai kalau kilatnya tiga kilometer jauhnya? Tulis jawabanmu di komentar.", dur: 7 }] },
];
