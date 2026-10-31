import blip from "./blip.mp3";
import boing from "./boing.mp3";
import ding from "./ding.mp3";
import heartbeat from "./heartbeat.mp3";
import hmm from "./hmm.mp3";
import pop from "./pop.mp3";
import rise from "./rise.mp3";
import tada from "./tada.mp3";
import whoosh from "./whoosh.mp3";
import wrong from "./wrong.mp3";

// Pustaka SFX bersama. Dibuat oleh scripts/sfx-generate.py (sintetis, tanpa kredit); nama berkas = kunci di sini.
// heartbeat: lub-dub (0,7 dtk) | pop: muncul teks/objek | blip: butir kecil muncul | whoosh: pindah scene
// rise: angka naik (2 dtk) | hmm: Tako menebak | boing: kaget | wrong: tebakan salah | tada: payoff | ding: notifikasi
export const SFX = { blip, boing, ding, heartbeat, hmm, pop, rise, tada, whoosh, wrong } as const;

export type SfxName = keyof typeof SFX;
