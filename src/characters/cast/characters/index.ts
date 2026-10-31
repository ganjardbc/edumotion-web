import type { CastDefinition, CastId } from "../types";
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
import { GANJAR } from "./ganjar";
import { HAPE } from "./hape";
import { JANTUNG } from "./jantung";
import { KOMPUTER } from "./komputer";
import { RAKA } from "./raka";
import { ROBO } from "./robo";
import { TETES } from "./tetes";

export const CAST: ReadonlyArray<CastDefinition> = [AWAN, BUMI, JANTUNG, RAKA, BUKU, ROBO, TETES, CLAUDE, GANJAR, HAPE, KOMPUTER, OTAK, MATAHARI, BATERAI, BULAN, ATOM, PETIR, API];

export const CAST_BY_ID: Readonly<Record<CastId, CastDefinition>> = {
  awan: AWAN,
  bumi: BUMI,
  jantung: JANTUNG,
  raka: RAKA,
  buku: BUKU,
  robo: ROBO,
  tetes: TETES,
  claude: CLAUDE,
  ganjar: GANJAR,
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
