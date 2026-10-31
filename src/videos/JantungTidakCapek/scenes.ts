import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "JantungTidakCapek",
  title: "Kok jantung nggak capek?",
  topic: "tubuh",
  cast: ["jantung"],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("tako" untuk Tako).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "tako", text: "Jantungmu berdetak seratus ribu kali sehari. Kok nggak capek?", dur: 3.8 }], sfx: [{ sfx: "pop", at: 0, volume: 0.4 }, { sfx: "rise", at: 0, volume: 0.25 }, { sfx: "heartbeat", at: 0, every: 25 / 30, times: 6, volume: 0.55 }] },
  { id: "Setup", segment: "setup", lines: [{ who: "tako", text: "Aku tahu! Soalnya jantung itu super kuat, dan nggak pernah istirahat. Kayak mesin yang nyala terus!", dur: 7 }], sfx: [{ sfx: "whoosh", at: 0, volume: 0.25 }, { sfx: "hmm", at: 0.3, volume: 0.4 }] },
  { id: "Twist", segment: "twist", lines: [{ who: "tako", text: "Hah? Salah?!", dur: 1.6 }], sfx: [{ sfx: "boing", at: 0, volume: 0.5 }, { sfx: "wrong", at: 0.1, volume: 0.4 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "tako", text: "Satu detak cuma sekitar satu detik. Kerjanya sebentar, istirahatnya malah lebih lama.", dur: 5.5 }], sfx: [{ sfx: "whoosh", at: 0, volume: 0.25 }, { sfx: "heartbeat", at: 0, every: 1, times: 8, volume: 0.4 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "tako", text: "Dan otot jantung punya banyak mitokondria, pabrik energi kecil. Sepertiga isi selnya! Otot lengan jauh lebih sedikit.", dur: 8.5 }], sfx: [{ sfx: "whoosh", at: 0, volume: 0.25 }, { sfx: "blip", at: 1, every: 0.25, times: 12, volume: 0.3 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "tako", text: "Dia juga punya jalur darah sendiri, jadi bahan bakarnya nggak pernah habis.", dur: 5 }], sfx: [{ sfx: "whoosh", at: 0, volume: 0.25 }, { sfx: "heartbeat", at: 0.3, every: 25 / 30, times: 8, volume: 0.35 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "tako", text: "Jadi jantung nggak capek bukan karena nggak pernah istirahat, tapi karena jago istirahat di sela tiap detak!", dur: 7 }], sfx: [{ sfx: "pop", at: 0, volume: 0.4 }, { sfx: "tada", at: 0.1, volume: 0.45 }, { sfx: "heartbeat", at: 0.9, every: 25 / 30, times: 8, volume: 0.3 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "tako", text: "Bagian tubuh mana lagi yang menurutmu nggak pernah capek?", dur: 4 }], sfx: [{ sfx: "pop", at: 0, volume: 0.4 }, { sfx: "ding", at: 0.3, volume: 0.35 }] },
];
