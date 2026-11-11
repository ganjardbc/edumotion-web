import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "BateraiCepatHabis",
  title: "Kenapa baterai HP cepat habis?",
  topic: "teknologi",
  cast: ["baterai", "hape"],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tokoh di layar tidak berbicara; semua kalimat dibawakan narator.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "", dur: 3 }] },
  { id: "Setup", segment: "setup", lines: [{ who: "narator", text: "", dur: 3 }] },
  { id: "Twist", segment: "twist", lines: [{ who: "narator", text: "", dur: 3 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "", dur: 3 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "", dur: 3 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "narator", text: "", dur: 3 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "", dur: 3 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "", dur: 3 }] },
];
