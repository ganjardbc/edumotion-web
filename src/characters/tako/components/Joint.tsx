import type React from "react";
import type { Point } from "../rig/pivots";

// Memutar anak di sekitar pivot (koordinat viewBox).
export const Joint: React.FC<{ readonly pivot: Point; readonly angle: number; readonly children: React.ReactNode }> = ({ pivot, angle, children }) => (
  <g transform={`rotate(${angle} ${pivot[0]} ${pivot[1]})`}>{children}</g>
);
