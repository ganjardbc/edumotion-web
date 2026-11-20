import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "TsunamiTerjadi",
  title: "Bagaimana tsunami terjadi?",
  topic: "alam",
  cast: [],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tokoh di layar tidak berbicara; semua kalimat dibawakan narator.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Bagaimana tsunami terjadi? Biasanya semuanya dimulai jauh di dasar laut.", dur: 5 }], sfx: [{ sfx: "pop", at: 0.1, volume: 0.45 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Di dasar laut, dua lempeng bumi saling menekan. Suatu saat, salah satunya terlepas dan terangkat. Itulah gempa.", dur: 9 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Dasar laut yang naik menyentak seluruh air di atasnya. Sentakan itu menyebar ke segala arah sebagai gelombang.", dur: 9 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "narator", text: "Di laut dalam, gelombangnya rendah tapi sangat cepat, secepat pesawat jet. Dekat pantai, laut jadi dangkal dan gelombang melambat.", dur: 10 }] },
  { id: "Kunci", segment: "explain", lines: [{ who: "narator", text: "Gelombang yang melambat menumpuk, lalu menjulang tinggi.", dur: 4 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi tsunami terjadi karena gempa di dasar laut menyentak air, dan sentakannya menjadi gelombang besar di pantai.", dur: 8 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Menurutmu, tanda apa di pantai yang harus kita waspadai? Tulis jawabanmu di komentar.", dur: 6 }] },
];
