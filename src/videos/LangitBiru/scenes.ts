import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "LangitBiru",
  title: "Kenapa langit biru, bukan ungu?",
  topic: "cuaca",
  cast: [],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tema Dark Chalk, tanpa tokoh di layar: semua visual berupa gambar kapur beranimasi.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Kenapa langit biru, bukan ungu?", dur: 2.5 }], sfx: [{ sfx: "pop", at: 0, volume: 0.4 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Cahaya Matahari terlihat putih. Padahal isinya campuran semua warna, seperti pelangi. Cahaya biru gelombangnya pendek. Cahaya merah gelombangnya panjang.", dur: 10.5 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Udara berisi partikel yang sangat kecil. Partikel ini menyebarkan cahaya biru ke segala arah. Cahaya merah lewat lurus saja. Itu sebabnya langit terlihat biru.", dur: 10 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "narator", text: "Cahaya ungu sebenarnya tersebar lebih kuat lagi. Tapi cahaya ungu dari Matahari lebih sedikit, dan mata kita kurang peka pada warna ungu.", dur: 8.5 }] },
  { id: "Explain4", segment: "explain", lines: [{ who: "narator", text: "Saat senja, cahaya Matahari harus melewati udara lebih jauh. Cahaya birunya sudah tersebar di jalan. Yang sampai ke mata kita tinggal kuning, jingga, dan merah.", dur: 10 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi langit biru dan senja merah punya sebab yang sama: cahaya biru yang tersebar oleh udara.", dur: 6.5 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Lalu, kenapa laut berwarna biru? Tulis tebakanmu di komentar!", dur: 4 }] },
];
