import type React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { useTheme } from "../themes";

// Angka besar yang naik dari 0 ke `to`, diformat Indonesia (titik ribuan).
export const Counter: React.FC<{ readonly to: number; readonly frames?: number; readonly size?: number; readonly color?: string }> = ({ to, frames = 45, size = 200, color }) => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const v = Math.round(interpolate(frame, [0, frames], [0, to], { extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }));
  return (
    <div style={{ fontFamily: t.fonts.heading, fontWeight: 800, fontSize: size, lineHeight: 1, textAlign: "center", color: color ?? t.colors.ink, fontVariantNumeric: "tabular-nums" }}>
      {v.toLocaleString("id-ID")}
    </div>
  );
};
