import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "BadakKrakatau",
  title: "Bagaimana nasib badak jawa saat Krakatau meletus?",
  topic: "alam",
  cast: [],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tokoh di layar tidak berbicara; semua kalimat dibawakan narator.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Bagaimana nasib badak jawa saat Krakatau meletus?", dur: 4 }], sfx: [{ sfx: "pop", at: 0.1, volume: 0.45 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Pada 27 Agustus 1883, Gunung Krakatau meletus. Ujung Kulon berada di selatan Krakatau, seberang Selat Sunda.", tts: "Pada dua puluh tujuh Agustus seribu delapan ratus delapan puluh tiga, Gunung Krakatau meletus. Ujung Kulon berada di selatan Krakatau, seberang Selat Sunda.", dur: 8 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Gelombang besar menerjang pantai Ujung Kulon. Satu penelitian tahun 2006 menduga seluruh badak di sana ikut musnah.", tts: "Gelombang besar menerjang pantai Ujung Kulon. Satu penelitian tahun dua ribu enam menduga seluruh badak di sana ikut musnah.", dur: 8 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "narator", text: "Dua peneliti lain memeriksa catatan sejarah dari tahun 1857 sampai 1949.", tts: "Dua peneliti lain memeriksa catatan sejarah dari tahun seribu delapan ratus lima puluh tujuh sampai seribu sembilan ratus empat puluh sembilan.", dur: 7 }] },
  { id: "Kunci", segment: "explain", lines: [{ who: "narator", text: "Hasilnya, tidak ada petunjuk bahwa badak di sana musnah. Setelah letusan, badak masih sesekali dilaporkan.", dur: 8 }] },
  { id: "Explain4", segment: "explain", lines: [{ who: "narator", text: "Ujung Kulon dilindungi sejak 1921. Sampai 1949, jumlah badak diperkirakan paling banyak sekitar empat puluh sampai lima puluh ekor.", tts: "Ujung Kulon dilindungi sejak seribu sembilan ratus dua puluh satu. Sampai seribu sembilan ratus empat puluh sembilan, jumlah badak diperkirakan paling banyak sekitar empat puluh sampai lima puluh ekor.", dur: 10 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi menurut penelitian itu, letusan 1883 tidak memusnahkan badak jawa.", tts: "Jadi menurut penelitian itu, letusan seribu delapan ratus delapan puluh tiga tidak memusnahkan badak jawa.", dur: 6 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Menurutmu, hewan apa lagi yang pernah bertahan dari bencana besar? Tulis di komentar. Follow, kita cari tahu bareng.", dur: 8 }] },
];
