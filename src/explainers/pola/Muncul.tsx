import type React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

// Membungkus isi supaya muncul (pop kecil) mulai frame `at`. Sebelum itu tidak tampil sama sekali.
export const Muncul: React.FC<{ readonly at: number; readonly children: React.ReactNode; readonly style?: React.CSSProperties }> = ({ at, children, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  if (frame < at) return null;
  const pop = spring({ frame: frame - at, fps, config: { damping: 14, stiffness: 170 } });
  return <div style={{ position: "absolute", inset: 0, opacity: Math.min(1, pop * 1.6), transform: `scale(${0.92 + 0.08 * pop})`, transformOrigin: "50% 50%", ...style }}>{children}</div>;
};
