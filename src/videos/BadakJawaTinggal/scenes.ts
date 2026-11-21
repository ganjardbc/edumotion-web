import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "BadakJawaTinggal",
  title: "Di mana badak jawa tinggal?",
  topic: "alam",
  cast: [],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tokoh di layar tidak berbicara; semua kalimat dibawakan narator.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Di mana badak jawa tinggal?", dur: 3 }], sfx: [{ sfx: "pop", at: 0.1, volume: 0.45 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Dulu badak jawa hidup di banyak tempat. Dari India bagian timur laut sampai Asia Tenggara.", dur: 6 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Lalu jumlahnya terus menyusut. Badak terakhir di luar Ujung Kulon mati di Vietnam.", dur: 6 }] },
  { id: "Kunci", segment: "explain", lines: [{ who: "narator", text: "Sekarang rumah alami mereka tinggal satu. Taman Nasional Ujung Kulon, di ujung barat Pulau Jawa.", dur: 7 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "narator", text: "Semenanjung ini dilindungi sejak tahun 1921, khusus untuk badak jawa.", tts: "Semenanjung ini dilindungi sejak tahun seribu sembilan ratus dua puluh satu, khusus untuk badak jawa.", dur: 5 }] },
  { id: "Explain4", segment: "explain", lines: [{ who: "narator", text: "Jumlahnya diperkirakan kurang dari seratus ekor. Perkiraan pemerintah tahun 2025: antara delapan puluh tujuh sampai seratus.", tts: "Jumlahnya diperkirakan kurang dari seratus ekor. Perkiraan pemerintah tahun dua ribu dua puluh lima: antara delapan puluh tujuh sampai seratus.", dur: 9 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi, di seluruh dunia, badak jawa liar hanya ada di Ujung Kulon.", dur: 5 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Menurutmu, kenapa jumlahnya bisa sesedikit itu? Follow, kita cari tahu bareng.", dur: 6 }] },
];
