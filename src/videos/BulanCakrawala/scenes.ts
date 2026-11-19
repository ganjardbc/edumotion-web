import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "BulanCakrawala",
  title: "Kenapa Bulan terlihat besar?",
  topic: "planet",
  cast: [],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tokoh di layar tidak berbicara; semua kalimat dibawakan narator.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Kenapa Bulan dekat cakrawala terlihat besar?", dur: 3.5 }], sfx: [{ sfx: "pop", at: 0, volume: 0.4 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Foto dengan zoom sama menunjukkan ukuran Bulan yang hampir sama.", dur: 5.5 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Bulan dekat cakrawala justru sedikit lebih jauh. Atmosfer pun tidak memperbesarnya.", dur: 6 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "narator", text: "Pemandangan sekitar mungkin memengaruhi kesan ukuran Bulan.", dur: 5 }] },
  { id: "Kunci", segment: "explain", lines: [{ who: "narator", text: "Namun, penyebab pastinya belum diketahui.", dur: 4 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi, Bulan tidak benar-benar membesar dekat cakrawala. Penyebab ilusinya masih diteliti.", dur: 6.5 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Kamu pernah melihat Bulan tampak sebesar itu?", dur: 3.5 }] },
];
