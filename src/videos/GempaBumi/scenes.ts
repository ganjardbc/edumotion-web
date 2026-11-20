import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "GempaBumi",
  title: "Bagaimana proses terjadinya gempa bumi?",
  topic: "alam",
  cast: [],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tokoh di layar tidak berbicara; semua kalimat dibawakan narator.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Tanah yang kamu injak sebenarnya bergerak. Bagaimana gempa bumi terjadi?", dur: 5 }], sfx: [{ sfx: "pop", at: 0.1, volume: 0.45 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Kulit bumi terpecah menjadi potongan besar, yaitu lempeng. Lempeng bergerak sangat pelan, hanya beberapa sentimeter tiap tahun.", dur: 9 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Di pertemuan lempeng, batu saling menekan dan tersangkut. Tenaganya menumpuk, seperti penggaris yang terus dibengkokkan.", dur: 9 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "narator", text: "Saat tekanan terlalu besar, batu patah dan bergeser tiba-tiba. Tenaga lepas sebagai getaran yang merambat lewat tanah.", dur: 9 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi gempa terjadi saat batu di antara lempeng patah, lalu getarannya sampai ke permukaan.", dur: 6 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Menurutmu, kenapa Indonesia sering sekali diguncang gempa? Tulis di komentar.", dur: 5 }] },
];
