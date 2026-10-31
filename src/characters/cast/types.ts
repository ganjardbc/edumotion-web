import type React from "react";
import type { Point } from "../tako/rig/pivots";

export type CastId = "awan" | "bumi" | "jantung" | "raka" | "buku" | "robo" | "tetes" | "claude" | "ganjar" | "hape" | "komputer" | "otak" | "matahari" | "baterai" | "bulan" | "atom" | "petir" | "api";

export type JointPart = { readonly part: React.FC; readonly pivot: Point };

// Bagian yang ikut goyang antena; `swing` = pengali pose.antennaRotate.
export type SwingPart = JointPart & { readonly swing: number };

// Wajah selalu simetris terhadap `cx` dan menghadap depan, seperti Tako. Semua geometri wajah diturunkan dari sini (face.ts).
export type FaceSpec = {
  readonly cx: number;
  readonly eyeY: number;
  // Jarak pusat mata ke `cx`.
  readonly eyeGap: number;
  readonly eyeRx: number;
  readonly eyeRy: number;
  // "dot" = mata titik tanpa putih mata; "sclera" = bola mata dengan pupil.
  readonly style: "dot" | "sclera";
  readonly mouthY: number;
  // Skala mulut ekspresi Tako.
  readonly mouthScale: number;
  readonly ball: string;
  readonly pupil: string;
  // Warna kelopak: warna badan di sekitar mata.
  readonly lid: string;
  // Warna alis, garis mulut, dan mata melengkung.
  readonly ink: string;
  readonly accent: string;
  readonly blush?: { readonly color: string; readonly gap: number; readonly y: number; readonly rx: number; readonly ry: number };
};

export type CastDefinition = {
  readonly id: CastId;
  readonly name: string;
  readonly topic: string;
  readonly brief: string;
  readonly colors: Readonly<Record<string, string>>;
  readonly face: FaceSpec;
  // Urutan gambar, belakang ke depan: legs, back, body, topper, arms, face, extras, marks.
  readonly legs: { readonly left: JointPart; readonly right: JointPart };
  readonly back?: SwingPart;
  readonly body: React.FC;
  readonly topper?: SwingPart;
  readonly arms: { readonly left: JointPart; readonly right: JointPart };
  // Hiasan yang mengapung naik-turun.
  readonly extras?: React.FC;
  // Posisi tanda ekspresi (Zz, ?, garis kaget): titik yang menggantikan (400,300) milik Tako, dan skalanya.
  readonly marks: { readonly x: number; readonly y: number; readonly scale: number };
  // Catatan beda dari lembar referensi.
  readonly deviations: ReadonlyArray<string>;
};
