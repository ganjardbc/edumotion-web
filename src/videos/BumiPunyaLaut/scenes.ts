import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "BumiPunyaLaut",
  title: "Kenapa Bumi punya laut?",
  topic: "planet",
  cast: ["bumi"],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tokoh di layar tidak berbicara; semua kalimat dibawakan narator.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Laut menutupi tujuh puluh satu persen permukaan Bumi. Dari mana semua air itu?", dur: 4.8 }], sfx: [{ sfx: "pop", at: 0, volume: 0.4 }] },
  { id: "Setup", segment: "setup", lines: [{ who: "narator", text: "Dulu, Bumi sangat panas dan penuh lava. Tidak ada air setetes pun.", dur: 5 }] },
  { id: "Twist", segment: "twist", lines: [{ who: "narator", text: "Banyak yang mengira air Bumi muncul sendiri.", dur: 2.8 }, { who: "narator", text: "Ternyata, sebagian datang dari luar angkasa!", dur: 3 }], sfx: [{ sfx: "wrong", at: 0.8, volume: 0.4 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Miliaran tahun lalu, banyak asteroid dan meteor jatuh ke Bumi. Sebagian membawa air.", dur: 6 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Air itu tersimpan di dalam batunya. Saat batu itu menabrak Bumi, airnya keluar.", dur: 6 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "narator", text: "Gunung berapi juga mengeluarkan uap air dari dalam Bumi. Uap itu menjadi awan, lalu turun sebagai hujan. Air hujan terkumpul dan menjadi laut.", dur: 9.5 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi air laut punya dua asal: dari luar angkasa, dan dari dalam Bumi sendiri.", dur: 5.5 }], sfx: [{ sfx: "tada", at: 0.2, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Menurutmu, apakah planet lain juga punya laut? Tulis di komentar!", dur: 3.8 }] },
];
