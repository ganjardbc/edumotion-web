import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "BumiPunyaLaut",
  title: "Kenapa bumi punya laut?",
  topic: "planet",
  cast: ["bumi"],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("bumi" = Bumi bercerita dengan "aku" kepada penonton).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  {
    id: "Hook",
    segment: "hook",
    lines: [{ who: "bumi", text: "Laut menutupi tujuh puluh satu persen tubuhku. Kenapa bisa?", dur: 4.0 }],
    sfx: [
      { sfx: "pop", at: 0, volume: 0.4 },
      { sfx: "rise", at: 0, volume: 0.25 },
      { sfx: "hmm", at: 2.6, volume: 0.35 },
    ],
  },
  {
    id: "Setup",
    segment: "setup",
    lines: [{ who: "bumi", text: "Dulu aku panas membara, penuh lava. Tidak ada setetes air pun.", dur: 5.0 }],
    sfx: [
      { sfx: "whoosh", at: 0, volume: 0.25 },
      { sfx: "hmm", at: 2.4, volume: 0.35 },
    ],
  },
  {
    id: "Twist",
    segment: "twist",
    lines: [
      { who: "bumi", text: "Kamu kira airku muncul sendiri?", dur: 2.0 },
      { who: "bumi", text: "Ternyata sebagian datang dari luar angkasa!", dur: 3.0 },
    ],
    sfx: [
      { sfx: "boing", at: 0, volume: 0.5 },
      { sfx: "wrong", at: 1.4, volume: 0.4 },
      { sfx: "whoosh", at: 2.1, volume: 0.3 },
      { sfx: "ding", at: 3.2, volume: 0.3 },
    ],
  },
  {
    id: "Explain1",
    segment: "explain",
    enter: "iris",
    lines: [{ who: "bumi", text: "Miliaran tahun lalu, asteroid dan meteor menghujaniku. Banyak yang membawa air.", dur: 6.0 }],
    sfx: [
      { sfx: "whoosh", at: 0, volume: 0.25 },
      { sfx: "pop", at: 1.2, volume: 0.35 },
      { sfx: "boing", at: 3.5, volume: 0.3 },
      { sfx: "boing", at: 4.8, volume: 0.3 },
    ],
  },
  {
    id: "Explain2",
    segment: "explain",
    lines: [{ who: "bumi", text: "Batu-batu itu menyimpan air di dalam mineralnya. Saat menabrakku, airnya terlepas.", dur: 6.5 }],
    sfx: [
      { sfx: "whoosh", at: 0, volume: 0.25 },
      { sfx: "blip", at: 1.5, every: 0.3, times: 5, volume: 0.25 },
      { sfx: "pop", at: 4.4, volume: 0.4 },
    ],
  },
  {
    id: "Explain3",
    segment: "explain",
    lines: [{ who: "bumi", text: "Dari dalam, gunung berapi menyemburkan uap. Uap jadi awan, turun sebagai hujan, lalu mengisi cekungan jadi laut.", dur: 8.5 }],
    sfx: [
      { sfx: "whoosh", at: 0, volume: 0.25 },
      { sfx: "rise", at: 1.5, volume: 0.3 },
      { sfx: "blip", at: 5.0, every: 0.35, times: 6, volume: 0.25 },
    ],
  },
  {
    id: "Payoff",
    segment: "payoff",
    enter: "swipe",
    lines: [{ who: "bumi", text: "Jadi lautku campuran: kiriman dari luar angkasa, dan uap dari dalam diriku!", dur: 5.5 }],
    sfx: [
      { sfx: "pop", at: 0, volume: 0.4 },
      { sfx: "tada", at: 0.2, volume: 0.45 },
    ],
  },
  {
    id: "Cta",
    segment: "cta",
    enter: "swipe",
    lines: [{ who: "bumi", text: "Menurutmu, planet lain punya laut juga? Tulis di komentar!", dur: 3.5 }],
    sfx: [
      { sfx: "pop", at: 0, volume: 0.4 },
      { sfx: "ding", at: 1.0, volume: 0.35 },
    ],
  },
];
