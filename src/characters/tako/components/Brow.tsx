import type React from "react";
import { TAKO_PALETTE as C } from "../assets/palette";
import { BROWS } from "../rig/pivots";
import type { Side } from "../types";

export type BrowShape = "arch" | "flat";

export type BrowGeometry = { readonly center: readonly [number, number]; readonly arch: string; readonly flat: string };

export type BrowProps = {
  readonly side: Side;
  readonly shape: BrowShape;
  // Naik (satuan viewBox, positif = ke atas).
  readonly lift: number;
  // Positif = sisi dalam alis lebih rendah (marah); negatif = sisi dalam naik (sedih).
  readonly tilt: number;
  // Untuk karakter lain; bawaan geometri dan warna Tako.
  readonly geometry?: BrowGeometry;
  readonly color?: string;
  readonly width?: number;
};

export const Brow: React.FC<BrowProps> = ({ side, shape, lift, tilt, geometry, color = C.dark, width = 13 }) => {
  const b = geometry ?? BROWS[side];
  const [cx, cy] = b.center;
  const angle = side === "left" ? tilt : -tilt;
  return (
    <g id={`brow_${side}`} transform={`translate(0 ${-lift}) rotate(${angle} ${cx} ${cy})`}>
      <path d={b[shape]} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" />
    </g>
  );
};
