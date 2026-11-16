import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "LubangHitam",
  title: "Apa yang terjadi di lubang hitam?",
  topic: "planet",
  cast: [],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tokoh di layar tidak berbicara; semua kalimat dibawakan narator.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Cahaya pun tidak bisa kabur dari lubang hitam. Apa yang terjadi di dalamnya?", dur: 5 }], sfx: [{ sfx: "pop", at: 0.1, volume: 0.45 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Bintang yang sangat besar bisa runtuh di akhir hidupnya. Semua isinya terpampat ke ruang yang sangat kecil.", dur: 9 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Gravitasi di sana sangat kuat. Ada batas yang disebut cakrawala peristiwa, yaitu batas tanpa jalan kembali.", dur: 9 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "narator", text: "Benda yang jatuh ke dalam ditarik makin kuat. Bagian yang lebih dekat tertarik lebih keras, jadi benda terulur panjang seperti mi.", dur: 10 }] },
  { id: "Kunci", segment: "explain", lines: [{ who: "narator", text: "Di dalam batas itu, cahaya pun tidak bisa keluar.", dur: 4 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi di dalam lubang hitam, tidak ada yang bisa keluar. Apa yang ada di pusatnya, ilmuwan belum tahu pasti.", dur: 8 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Menurutmu, bagaimana kita bisa melihat lubang hitam kalau cahayanya tidak keluar? Tulis jawabanmu di komentar.", dur: 7 }] },
];
