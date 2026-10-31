// Daftar video edumotion. Diisi oleh `node scripts/new-short.mjs`; jangan menambah komposisi video langsung di Root.tsx.
import { VIDEO as JantungTidakCapek } from "./JantungTidakCapek";
// @videos:imports

import type { VideoEntry } from "./_shared/video";

export const VIDEOS: ReadonlyArray<VideoEntry> = [
  JantungTidakCapek,
  // @videos:list
];
