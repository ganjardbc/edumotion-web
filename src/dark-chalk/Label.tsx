import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { FONT_KAPUR, SKALA_FONT, ukuranMuat, useFontKapur } from "./font";
import { KAPUR } from "./palette";

// Label teks kapur (paling banyak 3 kata) berpusat di (x, y), muncul mulai frame `at`.
// Satu baris; ukuran huruf dikecilkan otomatis bila teks lebih lebar dari `lebar`.
export const Label: React.FC<{
  readonly teks: string;
  readonly x: number;
  readonly y: number;
  readonly at?: number;
  readonly size?: number;
  readonly warna?: string;
  readonly lebar?: number;
  readonly durasi?: number;
}> = ({ teks, x, y, at = 0, size = 52, warna = KAPUR.chalk, lebar = 520, durasi = 10 }) => {
  const frame = useCurrentFrame();
  const siap = useFontKapur();
  if (frame < at || !siap) return null;
  const p = interpolate(frame, [at, at + durasi], [0, 1], { extrapolateRight: "clamp" });
  const px = ukuranMuat(teks, lebar, size * SKALA_FONT);
  return (
    <div style={{ position: "absolute", left: x - lebar / 2, width: lebar, top: y - px * 0.6 + (1 - p) * 14, textAlign: "center", whiteSpace: "nowrap", fontFamily: FONT_KAPUR, fontWeight: 400, fontSize: px, lineHeight: 1.1, color: warna, opacity: p }}>
      {teks}
    </div>
  );
};
