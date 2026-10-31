import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "LangitBiru",
  title: "Kenapa langit biru, bukan ungu?",
  topic: "cuaca",
  cast: ["awan", "matahari", "bumi"],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("tako" untuk Tako).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "tako", text: "Kenapa langit biru, bukan ungu?", dur: 1.85 }], sfx: [{ sfx: "pop", at: 0.0, volume: 0.4 }, { sfx: "rise", at: 0.0, volume: 0.25 }, { sfx: "hmm", at: 0.6, volume: 0.35 }] },
  { id: "Setup", segment: "setup", lines: [{ who: "tako", text: "Aku tahu! Laut kan biru dan luas banget. Jadi langit tinggal mantulin warna laut!", dur: 4.89 }], sfx: [{ sfx: "whoosh", at: 0.0, volume: 0.25 }, { sfx: "blip", at: 1.1, volume: 0.3 }, { sfx: "whoosh", at: 2.9, volume: 0.25 }] },
  {
    id: "Twist",
    segment: "twist",
    lines: [
      { who: "tako", text: "Hah? Salah?!", dur: 1.21 },
      { who: "tako", text: "Kalau lautnya hilang pun, langit tetap biru. Warnanya datang dari udara!", dur: 4.2 },
    ],
    sfx: [{ sfx: "boing", at: 0, volume: 0.5 }, { sfx: "wrong", at: 0.1, volume: 0.4 }, { sfx: "whoosh", at: 1.4, volume: 0.25 }, { sfx: "ding", at: 4.4, volume: 0.3 }],
  },
  { id: "Explain1", segment: "explain", lines: [{ who: "tako", text: "Cahaya Matahari kelihatan putih. Padahal isinya campuran semua warna, kayak pelangi. Tiap warna punya panjang gelombang beda. Biru pendek, merah panjang.", dur: 10.89 }], sfx: [{ sfx: "whoosh", at: 0.0, volume: 0.25 }, { sfx: "tada", at: 3.7, volume: 0.3 }, { sfx: "blip", at: 7.2, volume: 0.3 }, { sfx: "blip", at: 9.3, volume: 0.3 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "tako", text: "Udara penuh molekul mungil. Mereka membelokkan cahaya biru jauh lebih kuat daripada merah, ke segala arah. Jadi biru kelihatan dari mana-mana!", dur: 9.59 }], sfx: [{ sfx: "whoosh", at: 0.0, volume: 0.25 }, { sfx: "pop", at: 4.1, volume: 0.4 }, { sfx: "blip", at: 4.6, every: 0.13, times: 5, volume: 0.25 }, { sfx: "whoosh", at: 7.6, volume: 0.25 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "tako", text: "Ungu sebenarnya dihamburkan lebih kuat lagi. Tapi Matahari memancarkan ungu lebih sedikit, dan mata kita kurang peka pada ungu.", dur: 8 }], sfx: [{ sfx: "whoosh", at: 0.0, volume: 0.25 }, { sfx: "blip", at: 0.4, volume: 0.3 }, { sfx: "blip", at: 2.9, volume: 0.3 }, { sfx: "pop", at: 4.8, volume: 0.4 }, { sfx: "ding", at: 5.9, volume: 0.35 }] },
  { id: "Explain4", segment: "explain", lines: [{ who: "tako", text: "Pas senja, cahaya menempuh jalur udara yang jauh lebih panjang. Birunya sudah terhambur duluan, tersisa kuning, jingga, dan merah.", dur: 8.35 }], sfx: [{ sfx: "whoosh", at: 0.0, volume: 0.25 }, { sfx: "rise", at: 3.3, volume: 0.3 }, { sfx: "ding", at: 6.1, volume: 0.3 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "tako", text: "Jadi langit biru dan senja merah itu satu sebab yang sama: cahaya biru yang terhambur!", dur: 6 }], sfx: [{ sfx: "pop", at: 0.0, volume: 0.4 }, { sfx: "tada", at: 3.2, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "tako", text: "Lalu kenapa laut biru? Tebak di komentar!", dur: 2.23 }], sfx: [{ sfx: "pop", at: 0.0, volume: 0.4 }, { sfx: "ding", at: 1.0, volume: 0.35 }] },
];
