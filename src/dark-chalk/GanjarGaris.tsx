import type React from "react";
import { GanjarStickman, type GanjarStickmanExpression, type Gesture } from "../characters/ganjar";
import { VIEWBOX } from "../characters/ganjar/GanjarStickman";
import { KAPUR } from "./palette";
import type { VarianPapan } from "./TeksturPapan";

const FOOT_Y = 380;

// Ganjar stickman penuh untuk Dark Chalk: hanya garis kapur (tanpa baju), kepala oval, badan buah pir, tangan berujung loop,
// kaki berujung oval; ekspresi dan gestur lengkap dari GanjarStickman. Pasang di dalam <Kapur> supaya garisnya bergaya kapur.
export const GanjarGaris: React.FC<{
  readonly x: number;
  readonly y: number;
  readonly tinggi?: number;
  readonly ekspresi?: GanjarStickmanExpression;
  readonly gestur?: Gesture;
  readonly hadap?: 1 | -1;
  readonly topi?: "newsboy" | "detektif";
  // Warna papan di belakangnya: isi kepala dan badan disamakan supaya hanya garis yang terlihat.
  readonly papan?: VarianPapan;
}> = ({ x, y, tinggi = 700, ekspresi = "senyum", gestur = "netral", hadap = 1, topi = "detektif", papan = "navy" }) => {
  const w = (tinggi * VIEWBOX.w) / VIEWBOX.h;
  const top = y - (tinggi * FOOT_Y) / VIEWBOX.h;
  return (
    <div style={{ position: "absolute", left: x - w / 2, top, width: w, height: tinggi, transform: hadap === -1 ? "scaleX(-1)" : undefined }}>
      <GanjarStickman height={tinggi} expression={ekspresi} gesture={gestur} outfit={false} strokeWidth={7} color={KAPUR.chalk} fill={papan === "navy" ? KAPUR.navy : KAPUR.hijau} hairColor={KAPUR.chalk} topi={topi === "detektif" ? KAPUR.coklat : KAPUR.gold} topiGaya={topi} mantel={topi === "detektif" ? { badan: KAPUR.coklatTua, jubah: KAPUR.coklat } : undefined} />
    </div>
  );
};
