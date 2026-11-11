import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "AwanTidakJatuh",
  title: "Kenapa awan tidak jatuh?",
  topic: "cuaca",
  cast: ["awan", "tetes"],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("narator"). Tokoh di layar tidak berbicara; semua kalimat dibawakan narator.
// SFX hemat: paling banyak satu cue per scene dan empat per video (dicek scripts/check-videos.mjs).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "narator", text: "Satu awan beratnya seperti seratus gajah. Kok tidak jatuh?", dur: 4 }], sfx: [{ sfx: "pop", at: 0, volume: 0.4 }] },
  { id: "Setup", segment: "setup", lines: [{ who: "narator", text: "Banyak orang mengira awan itu ringan seperti kapas. Makanya ia bisa melayang.", dur: 6 }] },
  { id: "Twist", segment: "twist", lines: [{ who: "narator", text: "Ternyata keliru. Awan itu berat sekali!", dur: 3.2 }], sfx: [{ sfx: "wrong", at: 0.4, volume: 0.4 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "narator", text: "Awan adalah kumpulan tetes air yang sangat kecil. Satu tetes jauh lebih tipis dari sehelai rambut. Tapi jumlahnya sangat banyak, jadi totalnya berat.", dur: 9 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "narator", text: "Tetes sekecil itu jatuhnya sangat pelan. Udara hangat dari bawah terus mendorongnya ke atas. Akibatnya, tetes itu melayang.", dur: 8 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "narator", text: "Kalau tetes-tetes itu bergabung, ukurannya jadi besar dan berat. Udara tidak kuat lagi menahannya. Tetes itu pun jatuh sebagai hujan.", dur: 8.5 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "narator", text: "Jadi awan itu berat. Ia tidak jatuh karena tetes airnya terlalu kecil.", dur: 6 }], sfx: [{ sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "narator", text: "Menurutmu, kenapa ada awan putih dan ada awan gelap?", dur: 4.2 }] },
];
