import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "NabiAdamTinggi",
  title: "Berapa Tinggi Nabi Adam?",
  topic: "sejarah",
  cast: [],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` perkiraan detik sebelum audio dibuat.
// Semua baris dibawakan narator; visual kapur tidak menggambarkan Nabi Adam.
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Enam puluh hasta. Setinggi apa itu?", dur: 3 }], sfx: [{ sfx: "pop", at: 0, volume: 0.4 }] },
  { id: "Setup", segment: "setup", lines: [{ who: "narator", text: "Banyak orang langsung mengubahnya menjadi angka meter.", dur: 4 }] },
  { id: "Twist", segment: "twist", lines: [{ who: "narator", text: "Tapi hadisnya menyebut hasta, bukan meter.", dur: 4 }], sfx: [{ sfx: "wrong", at: 0.3, volume: 0.4 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Dalam Sahih al-Bukhari, tinggi Adam disebut enam puluh hasta. Sahih Muslim juga menyebut ukuran yang sama.", dur: 7 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Hasta adalah ukuran panjang dari siku sampai ujung jari. Panjangnya bisa berbeda menurut ukuran yang dipakai.", dur: 7 }] },
  { id: "Kunci", segment: "explain", lines: [{ who: "narator", text: "Jadi, angka paling langsung dari hadis adalah enam puluh hasta.", dur: 5 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Kalau dikira-kira menjadi meter, hasilnya sekitar tiga puluh meter—bergantung ukuran hasta.", dur: 6 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.4 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Menurutmu, benda apa yang tingginya mendekati itu?", dur: 4 }] },
];
