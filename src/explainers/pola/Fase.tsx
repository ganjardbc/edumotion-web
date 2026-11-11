import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { CLAMP } from "./tata";

// Satu fase dalam scene: tampil mulai `dari` sampai `sampai` (frame scene), berganti dengan pudar singkat.
// Pakai saat satu scene punya dua gagasan berurutan; tiap fase berisi satu pola.
export const Fase: React.FC<{ readonly dari?: number; readonly sampai?: number; readonly children: React.ReactNode }> = ({ dari = 0, sampai = Infinity, children }) => {
  const frame = useCurrentFrame();
  const masuk = dari <= 0 ? 1 : interpolate(frame, [dari, dari + 8], [0, 1], CLAMP);
  const keluar = Number.isFinite(sampai) ? interpolate(frame, [sampai - 8, sampai], [1, 0], CLAMP) : 1;
  const o = Math.min(masuk, keluar);
  if (o <= 0) return null;
  return <div style={{ position: "absolute", inset: 0, opacity: o, transform: `translateY(${(1 - masuk) * 30}px)` }}>{children}</div>;
};
