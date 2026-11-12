import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { useTheme } from "../themes";
import { KAPUR } from "./palette";

// Label teks kapur (paling banyak 3 kata) berpusat di (x, y), muncul mulai frame `at`.
export const Label: React.FC<{
  readonly teks: string;
  readonly x: number;
  readonly y: number;
  readonly at?: number;
  readonly size?: number;
  readonly warna?: string;
  readonly lebar?: number;
}> = ({ teks, x, y, at = 0, size = 52, warna = KAPUR.chalk, lebar = 520 }) => {
  const frame = useCurrentFrame();
  const t = useTheme();
  if (frame < at) return null;
  const p = interpolate(frame, [at, at + 10], [0, 1], { extrapolateRight: "clamp" });
  return (
    <div style={{ position: "absolute", left: x - lebar / 2, width: lebar, top: y - size * 0.6 + (1 - p) * 14, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: size, lineHeight: 1.1, color: warna, opacity: p }}>
      {teks}
    </div>
  );
};
