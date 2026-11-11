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
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Pagi penuh, sore sudah merah. Kenapa baterai HP cepat habis?", dur: 4.5 }], sfx: [{ sfx: "pop", at: 0, volume: 0.4 }] },
  { id: "Setup", segment: "setup", lines: [{ who: "narator", text: "Banyak orang mengira penyebabnya aplikasi yang terbuka. Jadi semua aplikasi ditutup terus.", dur: 5.5 }] },
  {
    id: "Twist",
    segment: "twist",
    lines: [
      { who: "narator", text: "Ternyata itu bukan penyebab utamanya.", dur: 2.5 },
      { who: "narator", text: "Apple sendiri menyarankan menutup aplikasi hanya kalau aplikasinya macet.", dur: 4.5 },
    ],
    sfx: [{ sfx: "wrong", at: 0.1, volume: 0.4 }],
  },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Salah satu yang paling boros adalah layar. Makin terang layarnya, makin cepat baterai terkuras.", dur: 6.5 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Sinyal lemah juga boros. HP terus mencari sinyal yang lebih kuat, dan itu butuh tenaga. Wi-Fi lebih hemat daripada data seluler.", dur: 9 }] },
  {
    id: "Explain3",
    segment: "explain",
    lines: [{ who: "narator", text: "Baterai juga menua. Makin tua, makin sedikit isi yang bisa disimpan. Panas di atas tiga puluh lima derajat bisa merusaknya selamanya.", dur: 9.5 }],
    cutaway: { at: "Panas", judul: "Panas merusak baterai selamanya", sorot: "Panas", sub: "Jauhkan HP dari suhu di atas 35°C" },
  },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi yang membuat boros bukan aplikasi terbuka. Tapi layar terang, sinyal lemah, dan baterai yang kepanasan.", dur: 7 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Menurutmu, mengisi baterai semalaman itu bahaya atau tidak? Tulis di komentar!", dur: 4 }] },
];
