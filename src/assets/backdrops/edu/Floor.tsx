import type React from "react";

// Kolam cahaya di lantai tempat karakter berdiri, dipakai semua latar edu.
export const FloorSpot: React.FC<{ readonly floorY: number; readonly spotX?: number; readonly opacity?: number }> = ({ floorY, spotX = 540, opacity = 0.5 }) => (
  <div
    style={{
      position: "absolute",
      left: spotX - 420,
      top: floorY - 90,
      width: 840,
      height: 240,
      borderRadius: "50%",
      background: "radial-gradient(closest-side, #FFFFFF, transparent)",
      opacity,
    }}
  />
);

export const FloorStrip: React.FC<{ readonly floorY: number; readonly color: string; readonly edge: string }> = ({ floorY, color, edge }) => (
  <div style={{ position: "absolute", left: 0, right: 0, top: floorY, bottom: 0, backgroundColor: color, borderTop: `6px solid ${edge}`, boxSizing: "border-box" }} />
);
