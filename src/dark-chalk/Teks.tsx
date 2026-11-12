import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { useTheme } from "../themes";
import { KAPUR } from "./palette";

// Teks kapur: muncul dengan naik tipis + memudar masuk. Kata `sorot` berwarna emas.
export const Teks: React.FC<{
  readonly text: string;
  readonly sorot?: string;
  readonly size?: number;
  readonly top: number;
  readonly mulai?: number;
  readonly warna?: string;
}> = ({ text, sorot, size = 104, top, mulai = 0, warna = KAPUR.chalk }) => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const p = interpolate(frame, [mulai, mulai + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const kata = text.split(" ");
  return (
    <div style={{ position: "absolute", left: 100, right: 160, top: top + (1 - p) * 20, opacity: p, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: size, lineHeight: 1.12, color: warna }}>
      {kata.map((k, i) => (
        <span key={`${k}-${i}`} style={{ color: sorot && k.replace(/[?!.,]/g, "") === sorot ? KAPUR.gold : warna }}>
          {k}{" "}
        </span>
      ))}
    </div>
  );
};
