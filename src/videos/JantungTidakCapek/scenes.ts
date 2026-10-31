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
  { id: "Hook", segment: "hook", lines: [{ who: "tako", text: "Jantungmu berdetak seratus ribu kali sehari. Kok nggak capek?", dur: 3.8 }] },
  { id: "Setup", segment: "setup", lines: [{ who: "tako", text: "Aku tahu! Soalnya jantung itu super kuat, dan nggak pernah istirahat. Kayak mesin yang nyala terus!", dur: 7 }] },
  { id: "Twist", segment: "twist", lines: [{ who: "tako", text: "Hah? Salah?!", dur: 1.6 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "tako", text: "Satu detak cuma sekitar satu detik. Kerjanya sebentar, istirahatnya malah lebih lama.", dur: 5.5 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "tako", text: "Dan otot jantung punya banyak mitokondria, pabrik energi kecil. Sepertiga isi selnya! Otot lengan jauh lebih sedikit.", dur: 8.5 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "tako", text: "Dia juga punya jalur darah sendiri, jadi bahan bakarnya nggak pernah habis.", dur: 5 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "tako", text: "Jadi jantung nggak capek bukan karena nggak pernah istirahat, tapi karena jago istirahat di sela tiap detak!", dur: 7 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "tako", text: "Bagian tubuh mana lagi yang menurutmu nggak pernah capek?", dur: 4 }] },
];
