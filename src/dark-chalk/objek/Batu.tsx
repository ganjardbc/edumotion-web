import type React from "react";
import { Garis } from "../Garis";
import { KAPUR } from "../palette";

// Batu kali datar abu-abu, berpusat di (cx, cy). Pembanding benda padat yang tenggelam.
export const Batu: React.FC<{ readonly cx: number; readonly cy: number; readonly size?: number; readonly mulai?: number }> = ({ cx, cy, size = 120, mulai = 0 }) => {
  const s = size / 110;
  const p = (a: number, b: number) => `${(cx + a * s).toFixed(1)} ${(cy + b * s).toFixed(1)}`;
  return <Garis d={`M${p(-52, 12)} L${p(-30, -28)} L${p(8, -40)} L${p(46, -22)} L${p(54, 16)} L${p(20, 38)} L${p(-30, 36)} Z`} mulai={mulai} lama={18} isi={KAPUR.abu} tebal={7} />;
};
