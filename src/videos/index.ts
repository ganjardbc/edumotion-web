// Daftar video edumotion. Diisi oleh `node scripts/new-short.mjs`; jangan menambah komposisi video langsung di Root.tsx.
import { VIDEO as JantungTidakCapek } from "./JantungTidakCapek";
import { VIDEO as LangitBiru } from "./LangitBiru";
import { VIDEO as BumiPunyaLaut } from "./BumiPunyaLaut";
import { VIDEO as AwanTidakJatuh } from "./AwanTidakJatuh";
// @videos:imports

import type { VideoEntry } from "./_shared/video";

export const VIDEOS: ReadonlyArray<VideoEntry> = [
  JantungTidakCapek,
  LangitBiru,
  BumiPunyaLaut,
  AwanTidakJatuh,
  // @videos:list
];
