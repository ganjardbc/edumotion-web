import type React from "react";
import type { VideoTopic } from "../../../videos/_shared/types";
import type { TimeOfDay } from "../shared";
import { PlainBack } from "../plain";
import { Alam } from "./Alam";
import { Antariksa } from "./Antariksa";
import { Dapur } from "./Dapur";
import { DalamTubuh } from "./DalamTubuh";
import { GedungSate } from "./GedungSate";
import { KamarTidur } from "./KamarTidur";
import { JalanRaya } from "./JalanRaya";
import { Kantor } from "./Kantor";
import { Monas } from "./Monas";
import { Pedesaan } from "./Pedesaan";
import { RuangKerja } from "./RuangKerja";
import { Kota } from "./Kota";
import { Laboratorium } from "./Laboratorium";
import { Langit } from "./Langit";
import { Laut } from "./Laut";
import { Museum } from "./Museum";
import { eduColors } from "./palette";
import { PapanDiagram } from "./PapanDiagram";
import { RuangKelas } from "./RuangKelas";

// Lantai tempat kaki karakter berdiri (di atas blok caption). EDU_FLOOR_Y di explainers memakai nilai ini.
export const EDU_BACKDROP_FLOOR_Y = 1180;

export const EDU_BACKDROP_KINDS = ["polos", "dalamTubuh", "papanDiagram", "langit", "antariksa", "ruangKelas", "laboratorium", "museum", "alam", "kota", "pedesaan", "kamarTidur", "kantor", "ruangKerja", "gedungSate", "monas", "laut", "dapur", "jalanRaya"] as const;
export type EduBackdropKind = (typeof EDU_BACKDROP_KINDS)[number];

export type EduBackdropProps = {
  readonly kind?: EduBackdropKind;
  // Pilar topik yang menentukan warna latar.
  readonly topic: VideoTopic;
  readonly floorY?: number;
  // Dipakai `langit`, `laut`, `jalanRaya`, `alam`, `kota`, `pedesaan`, `kamarTidur`, `kantor`, `gedungSate`, `monas`: siang, sore, malam, atau angka 0..1.
  readonly time?: TimeOfDay | number;
};

// Latar video edumotion. Warna selalu dari palet topik, jadi satu latar dipakai ulang di semua pilar.
export const EduBackdrop: React.FC<EduBackdropProps> = ({ kind = "polos", topic, floorY = EDU_BACKDROP_FLOOR_Y, time = "siang" }) => {
  switch (kind) {
    case "dalamTubuh":
      return <DalamTubuh topic={topic} floorY={floorY} />;
    case "papanDiagram":
      return <PapanDiagram topic={topic} floorY={floorY} />;
    case "langit":
      return <Langit topic={topic} floorY={floorY} time={time} />;
    case "antariksa":
      return <Antariksa topic={topic} floorY={floorY} />;
    case "ruangKelas":
      return <RuangKelas topic={topic} floorY={floorY} />;
    case "laboratorium":
      return <Laboratorium topic={topic} floorY={floorY} />;
    case "museum":
      return <Museum topic={topic} floorY={floorY} />;
    case "alam":
      return <Alam topic={topic} floorY={floorY} time={time} />;
    case "kota":
      return <Kota topic={topic} floorY={floorY} time={time} />;
    case "pedesaan":
      return <Pedesaan topic={topic} floorY={floorY} time={time} />;
    case "kamarTidur":
      return <KamarTidur topic={topic} floorY={floorY} time={time} />;
    case "kantor":
      return <Kantor topic={topic} floorY={floorY} time={time} />;
    case "ruangKerja":
      return <RuangKerja topic={topic} floorY={floorY} />;
    case "gedungSate":
      return <GedungSate topic={topic} floorY={floorY} time={time} />;
    case "monas":
      return <Monas topic={topic} floorY={floorY} time={time} />;
    case "laut":
      return <Laut topic={topic} floorY={floorY} time={time} />;
    case "dapur":
      return <Dapur topic={topic} floorY={floorY} />;
    case "jalanRaya":
      return <JalanRaya topic={topic} floorY={floorY} time={time} />;
    case "polos": {
      const e = eduColors(topic);
      return <PlainBack anchors={{ floorY, spotX: 540 }} palette={{ wallTop: e.wallTop, wallBottom: e.wallBottom, floor: e.floor, floorEdge: e.floorEdge, spot: "#FFFFFF", spotOpacity: 0.5, shadowOpacity: 0.2 }} />;
    }
  }
};
