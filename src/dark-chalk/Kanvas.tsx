import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";

// Kanvas SVG penuh (1080x1920) untuk gambar kapur di dalam scene. Isi berupa elemen SVG berkoordinat kanvas.
export const Kanvas: React.FC<{ readonly children: React.ReactNode }> = ({ children }) => (
  <svg width={1080} height={1920} viewBox="0 0 1080 1920" style={{ position: "absolute", inset: 0 }}>
    {children}
  </svg>
);

const CLAMP = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

// Muncul (pudar masuk 10 frame) mulai frame `at`; sebelum itu tidak tampil. Untuk elemen SVG di dalam <Kanvas>.
export const Pop: React.FC<{ readonly at: number; readonly children: React.ReactNode }> = ({ at, children }) => {
  const frame = useCurrentFrame();
  if (frame < at) return null;
  return <g opacity={interpolate(frame, [at, at + 10], [0, 1], CLAMP)}>{children}</g>;
};

// Nilai 0..1 yang naik linear dari frame `dari` selama `lama` frame.
export const maju = (frame: number, dari: number, lama: number): number => interpolate(frame, [dari, dari + lama], [0, 1], CLAMP);
