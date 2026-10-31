import type { BrowGeometry } from "../tako/components/Brow";
import type { EyeGeometry } from "../tako/rig/pivots";
import type { Side } from "../tako/types";
import type { FaceSpec } from "./types";

export type FaceGeometry = {
  // Skala terhadap wajah Tako (tinggi mata 90), dipakai untuk angka ekspresi.
  readonly k: number;
  readonly eyes: Readonly<Record<Side, EyeGeometry>>;
  readonly brows: Readonly<Record<Side, BrowGeometry>>;
  readonly browWidth: number;
  readonly arcSpan: number;
  readonly arcWidth: number;
};

const eye = (f: FaceSpec, cx: number): EyeGeometry => {
  const ratio = f.style === "dot" ? 1 : 0.56;
  const prx = f.eyeRx * ratio;
  const pry = f.eyeRy * ratio;
  return {
    cx,
    cy: f.eyeY,
    rx: f.eyeRx,
    ry: f.eyeRy,
    pupil: { cx, cy: f.eyeY, rx: prx, ry: pry },
    glint: { cx: cx - prx * 0.4, cy: f.eyeY - pry * 0.45, r: Math.max(5, prx * 0.24) },
  };
};

const brow = (f: FaceSpec, side: Side, top: number, half: number): BrowGeometry => {
  const s = side === "left" ? -1 : 1;
  const cx = f.cx + s * f.eyeGap;
  const outer = cx + s * half;
  const inner = cx - s * half;
  return {
    center: [cx, top],
    arch: `M${outer} ${top + 10} Q${cx + s * half * 0.2} ${top - 12} ${inner} ${top - 8}`,
    flat: `M${outer} ${top + 3} Q${cx} ${top - 4} ${inner} ${top}`,
  };
};

export const faceGeometry = (f: FaceSpec): FaceGeometry => {
  const k = f.eyeRy / 90;
  const top = f.eyeY - f.eyeRy - (f.style === "dot" ? 24 : 26);
  const half = Math.max(26, f.eyeRx * 0.8);
  return {
    k,
    eyes: { left: eye(f, f.cx - f.eyeGap), right: eye(f, f.cx + f.eyeGap) },
    brows: { left: brow(f, "left", top, half), right: brow(f, "right", top, half) },
    browWidth: Math.max(9, 13 * k + 3),
    arcSpan: f.style === "dot" ? f.eyeRx * 1.25 : f.eyeRx * 0.8,
    arcWidth: Math.max(9, 15 * k + 3),
  };
};
