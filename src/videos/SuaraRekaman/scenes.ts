import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "SuaraRekaman",
  title: "Kenapa suara rekaman terdengar beda?",
  topic: "ilmu",
  cast: [],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tokoh di layar tidak berbicara; semua kalimat dibawakan narator.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Pernah dengar suaramu sendiri di rekaman, lalu merasa aneh?", dur: 4 }] },
  { id: "Setup", segment: "setup", lines: [{ who: "narator", text: "Banyak orang mengira suara rekaman berubah karena mikrofon.", dur: 4 }] },
  { id: "Twist", segment: "twist", lines: [{ who: "narator", text: "Ternyata, penyebab utamanya adalah cara kamu mendengar suaramu sendiri.", dur: 5 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Saat bicara, suara sampai ke telingamu lewat udara dan getaran tulang.", dur: 6 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Getaran tulang ikut mewarnai suara yang kamu dengar dari dalam.", dur: 5 }] },
  { id: "Kunci", segment: "explain", lines: [{ who: "narator", text: "Rekaman hanya membawa suara yang merambat lewat udara.", dur: 4 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi, suara rekaman terasa asing karena jalur getaran tulang tidak ikut terdengar.", dur: 6 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Bagian mana dari suaramu yang paling terasa berbeda?", dur: 4 }] },
];
