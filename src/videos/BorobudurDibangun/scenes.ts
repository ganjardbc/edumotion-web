import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "BorobudurDibangun",
  title: "Bagaimana Borobudur bisa dibangun?",
  topic: "sejarah",
  cast: [],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tokoh di layar tidak berbicara; semua kalimat dibawakan narator.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Candi sebesar Borobudur dibangun seribu dua ratus tahun lalu. Bagaimana caranya?", dur: 5 }], sfx: [{ sfx: "pop", at: 0.1, volume: 0.45 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Pekerja mengambil batu andesit, yaitu batu gunung berapi. Jumlahnya sekitar dua juta blok.", dur: 8 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Tiap batu dipahat satu per satu. Lalu disusun lapis demi lapis, naik ke atas.", dur: 8 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "narator", text: "Tidak ada semen di sini. Batunya punya sambungan yang saling mengunci, seperti mainan susun.", dur: 9 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi Borobudur dibangun dari jutaan batu yang dipahat, lalu disusun saling mengunci.", dur: 6 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Menurutmu, bagaimana dulu batu seberat itu diangkat ke atas? Tulis di komentar.", dur: 6 }] },
];
