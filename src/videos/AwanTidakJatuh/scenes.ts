import type { Scene, VideoMeta } from "../_shared/types";

export const META: VideoMeta = {
  id: "AwanTidakJatuh",
  title: "Awan kok nggak jatuh?",
  topic: "cuaca",
  cast: ["awan", "tetes"],
  fps: 30,
};

// Urutan scene = urutan tayang. `dur` adalah perkiraan detik dari naskah sampai audio asli dibuat.
// who: kunci suara di voiceover.ts ("tako" untuk Tako).
export const BASE_SCENES: ReadonlyArray<Scene> = [
  { id: "Hook", segment: "hook", lines: [{ who: "tako", text: "Awan beratnya seratus gajah. Kok nggak jatuh?", dur: 3.8 }], sfx: [{ sfx: "pop", at: 0, volume: 0.4 }, { sfx: "rise", at: 0, volume: 0.25 }] },
  { id: "Setup", segment: "setup", lines: [{ who: "tako", text: "Aku tahu! Awan itu ringan, kayak kapas. Makanya dia ngambang di langit!", dur: 6.5 }], sfx: [{ sfx: "whoosh", at: 0, volume: 0.25 }, { sfx: "hmm", at: 0.3, volume: 0.4 }, { sfx: "blip", at: 4.2, volume: 0.3 }], enter: "iris" },
  { id: "Twist", segment: "twist", lines: [{ who: "tako", text: "Hah? Salah?! Awan itu berat banget?!", dur: 3.2 }], sfx: [{ sfx: "boing", at: 0, volume: 0.5 }, { sfx: "wrong", at: 0.1, volume: 0.4 }, { sfx: "ding", at: 1.4, volume: 0.35 }] },
  { id: "Explain1", segment: "explain", lines: [{ who: "tako", text: "Awan itu kumpulan tetes air kecil sekali. Satu tetesnya jauh lebih tipis dari rambut. Jumlahnya jutaan, jadi totalnya berat.", dur: 9 }], sfx: [{ sfx: "whoosh", at: 0, volume: 0.25 }, { sfx: "blip", at: 1, every: 0.3, times: 12, volume: 0.25 }] },
  { id: "Explain2", segment: "explain", lines: [{ who: "tako", text: "Tetes sekecil itu jatuhnya pelan sekali. Udara hangat dari tanah terus mendorongnya naik. Jadi dia melayang.", dur: 8 }], sfx: [{ sfx: "whoosh", at: 0, volume: 0.25 }, { sfx: "rise", at: 3.5, volume: 0.2 }] },
  { id: "Explain3", segment: "explain", lines: [{ who: "tako", text: "Kalau tetesnya saling nempel dan jadi besar, dorongan udara nggak sanggup lagi. Barulah dia jatuh sebagai hujan.", dur: 8.5 }], sfx: [{ sfx: "whoosh", at: 0, volume: 0.25 }, { sfx: "pop", at: 2.5, volume: 0.35 }, { sfx: "blip", at: 5.5, every: 0.25, times: 8, volume: 0.25 }] },
  { id: "Payoff", segment: "payoff", lines: [{ who: "tako", text: "Jadi awan nggak ringan. Dia berat, tapi tetesnya terlalu kecil untuk jatuh!", dur: 6 }], sfx: [{ sfx: "pop", at: 0, volume: 0.4 }, { sfx: "tada", at: 0.1, volume: 0.45 }] },
  { id: "Cta", segment: "cta", lines: [{ who: "tako", text: "Menurutmu, kenapa awan ada yang putih dan ada yang gelap?", dur: 4.2 }], sfx: [{ sfx: "pop", at: 0, volume: 0.4 }, { sfx: "ding", at: 0.3, volume: 0.35 }] },
];
