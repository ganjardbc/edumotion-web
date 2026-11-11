import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "LangitBiru",
  title: "Kenapa langit biru, bukan ungu?",
  topic: "cuaca",
  cast: ["awan", "matahari", "bumi"],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tokoh di layar tidak berbicara; semua kalimat dibawakan narator.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Kenapa langit biru, bukan ungu?", dur: 1.85 }], sfx: [{ sfx: "pop", at: 0, volume: 0.4 }] },
  { id: "Setup", segment: "setup", lines: [{ who: "narator", text: "Banyak orang mengira langit biru karena memantulkan warna laut.", dur: 4.5 }] },
  { id: "Twist", segment: "twist", lines: [{ who: "narator", text: "Ternyata bukan!", dur: 1.2 }, { who: "narator", text: "Tanpa laut pun, langit tetap biru. Warna birunya berasal dari udara.", dur: 4.2 }], sfx: [{ sfx: "wrong", at: 0.1, volume: 0.4 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Cahaya Matahari terlihat putih. Padahal isinya campuran semua warna, seperti pelangi. Cahaya biru gelombangnya pendek. Cahaya merah gelombangnya panjang.", dur: 10.5 }] },
  {
    id: "Explain2",
    segment: "explain",
    lines: [{ who: "narator", text: "Udara berisi partikel yang sangat kecil. Partikel ini menyebarkan cahaya biru ke segala arah. Cahaya merah lewat lurus saja. Itu sebabnya langit terlihat biru.", dur: 10 }],
    cutaway: { at: "Itu sebabnya", judul: "Udara menyebarkan cahaya biru", sorot: "biru", sub: "Biru datang dari segala arah langit" },
  },
  { id: "Explain3", segment: "explain", lines: [{ who: "narator", text: "Cahaya ungu sebenarnya tersebar lebih kuat lagi. Tapi cahaya ungu dari Matahari lebih sedikit, dan mata kita kurang peka pada warna ungu.", dur: 8 }] },
  { id: "Explain4", segment: "explain", lines: [{ who: "narator", text: "Saat senja, cahaya Matahari harus melewati udara lebih jauh. Cahaya birunya sudah tersebar di jalan. Yang sampai ke mata kita tinggal kuning, jingga, dan merah.", dur: 9.5 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi langit biru dan senja merah punya sebab yang sama: cahaya biru yang tersebar oleh udara.", dur: 6 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Lalu, kenapa laut berwarna biru? Tulis tebakanmu di komentar!", dur: 3.5 }] },
];
