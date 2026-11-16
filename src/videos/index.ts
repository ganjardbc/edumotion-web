// Daftar video edumotion. Diisi oleh `node scripts/new-short.mjs`; jangan menambah komposisi video langsung di Root.tsx.
import { VIDEO as JantungTidakCapek } from "./JantungTidakCapek";
import { VIDEO as LangitBiru } from "./LangitBiru";
import { VIDEO as BumiPunyaLaut } from "./BumiPunyaLaut";
import { VIDEO as AwanTidakJatuh } from "./AwanTidakJatuh";
import { VIDEO as BateraiCepatHabis } from "./BateraiCepatHabis";
import { VIDEO as BulanCakrawala } from "./BulanCakrawala";
import { VIDEO as EsBatuMengapung } from "./EsBatuMengapung";
import { VIDEO as DinosaurusPunah } from "./DinosaurusPunah";
import { VIDEO as SuaraRekaman } from "./SuaraRekaman";
import { VIDEO as NabiAdamTinggi } from "./NabiAdamTinggi";
import { VIDEO as PenemuNol } from "./PenemuNol";
import { VIDEO as PesawatTerbang } from "./PesawatTerbang";
import { VIDEO as LubangHitam } from "./LubangHitam";
// @videos:imports

import type { VideoEntry } from "./_shared/video";

export const VIDEOS: ReadonlyArray<VideoEntry> = [
  JantungTidakCapek,
  LangitBiru,
  BumiPunyaLaut,
  AwanTidakJatuh,
  BateraiCepatHabis,
  BulanCakrawala,
  EsBatuMengapung,
  DinosaurusPunah,
  SuaraRekaman,
  NabiAdamTinggi,
  PenemuNol,
  PesawatTerbang,
  LubangHitam,
  // @videos:list
];
