import type { CastDefinition, CastId, RigCastId } from "../types";
import { GANJAR_META } from "../../ganjar";
import { OTAK } from "./otak";
import { MATAHARI } from "./matahari";
import { BATERAI } from "./baterai";
import { BULAN } from "./bulan";
import { ATOM } from "./atom";
import { PETIR } from "./petir";
import { API } from "./api";
import { AWAN } from "./awan";
import { BUKU } from "./buku";
import { BUMI } from "./bumi";
import { CLAUDE } from "./claude";
import { HAPE } from "./hape";
import { JANTUNG } from "./jantung";
import { KOMPUTER } from "./komputer";
import { RAKA } from "./raka";
import { ROBO } from "./robo";
import { TETES } from "./tetes";

export const CAST: ReadonlyArray<CastDefinition> = [AWAN, BUMI, JANTUNG, RAKA, BUKU, ROBO, TETES, CLAUDE, HAPE, KOMPUTER, OTAK, MATAHARI, BATERAI, BULAN, ATOM, PETIR, API];

export const CAST_BY_ID: Readonly<Record<RigCastId, CastDefinition>> = {
  awan: AWAN,
  bumi: BUMI,
  jantung: JANTUNG,
  raka: RAKA,
  buku: BUKU,
  robo: ROBO,
  tetes: TETES,
  claude: CLAUDE,
  hape: HAPE,
  komputer: KOMPUTER,
  otak: OTAK,
  matahari: MATAHARI,
  baterai: BATERAI,
  bulan: BULAN,
  atom: ATOM,
  petir: PETIR,
  api: API,
};

// Semua karakter cast untuk demo dan lembar ekspresi, termasuk Ganjar (stickman) setelah Claude.
export type CastMeta = { readonly id: CastId; readonly name: string; readonly topic: string };
export const CAST_META: ReadonlyArray<CastMeta> = CAST.flatMap((c): CastMeta[] => (c.id === "claude" ? [c, GANJAR_META] : [c]));
export const CAST_META_BY_ID = Object.fromEntries(CAST_META.map((c) => [c.id, c])) as Readonly<Record<CastId, CastMeta>>;
