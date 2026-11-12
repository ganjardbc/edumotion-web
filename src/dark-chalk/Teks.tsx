import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { FONT_KAPUR, SKALA_FONT, tataTeks, useFontKapur } from "./font";
import { KAPUR } from "./palette";

// Teks kapur: muncul dengan naik tipis + memudar masuk. Kata `sorot` berwarna emas.
// Baris diatur otomatis (1–2 baris seimbang) dan ukuran huruf dikecilkan bila perlu supaya muat di lebar 760 (margin 160 kiri-kanan).
const LEBAR = 760;
export const Teks: React.FC<{
  readonly text: string;
  readonly sorot?: string;
  readonly size?: number;
  readonly top: number;
  readonly mulai?: number;
  readonly warna?: string;
}> = ({ text, sorot, size = 104, top, mulai = 0, warna = KAPUR.chalk }) => {
  const frame = useCurrentFrame();
  const siap = useFontKapur();
  const p = interpolate(frame, [mulai, mulai + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  if (!siap) return null;
  const tata = tataTeks(text.split(" "), LEBAR, size * SKALA_FONT);
  return (
    <div style={{ position: "absolute", left: 160, right: 160, top: top + (1 - p) * 20, opacity: p, textAlign: "center", fontFamily: FONT_KAPUR, fontWeight: 400, fontSize: tata.size, lineHeight: 1.12, color: warna }}>
      {tata.baris.map((baris, b) => (
        <div key={b} style={{ whiteSpace: "nowrap" }}>
          {baris.map((k, i) => (
            <span key={`${k}-${i}`} style={{ color: sorot && k.replace(/[?!.,]/g, "") === sorot ? KAPUR.gold : warna }}>
              {k}
              {i < baris.length - 1 ? " " : ""}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
