import type React from "react";
import { Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { KAPUR } from "./palette";

const CLAMP = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

// Foto yang ditempel di papan dengan satu pin: bingkai kertas krem, miring tipis, bayangan, pin merah di tengah atas.
// Berpusat di (cx, cy); `lebar` = lebar bingkai; `rasio` = tinggi foto / lebar foto. Jatuh masuk (turun + pudar) mulai frame `mulai`.
export const FotoPin: React.FC<{
  readonly berkas: string; // path di public/, mis. "badak/1.jpg"
  readonly cx: number;
  readonly cy: number;
  readonly lebar?: number;
  readonly rasio?: number;
  readonly miring?: number;
  readonly mulai?: number;
}> = ({ berkas, cx, cy, lebar = 700, rasio = 0.5625, miring = -3, mulai = 0 }) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [mulai, mulai + 12], [0, 1], CLAMP);
  if (frame < mulai) return null;
  const tepi = 18;
  const fotoW = lebar - tepi * 2;
  const tinggi = fotoW * rasio + tepi * 2 + 30; // 30 = pita bawah ala polaroid
  return (
    <div style={{ position: "absolute", left: cx - lebar / 2, top: cy - tinggi / 2 - (1 - p) * 60, width: lebar, height: tinggi, opacity: p, transform: `rotate(${miring}deg)`, background: "#EFE6D2", padding: tepi, paddingBottom: tepi + 30, boxSizing: "border-box", boxShadow: "10px 14px 22px rgba(0, 0, 0, 0.45)", borderRadius: 4 }}>
      <Img src={staticFile(berkas)} style={{ width: fotoW, height: fotoW * rasio, objectFit: "cover", display: "block", filter: "contrast(0.95) saturate(0.85)" }} />
      <div style={{ position: "absolute", left: lebar / 2 - 22, top: -20, width: 44, height: 44, borderRadius: 22, background: `radial-gradient(circle at 35% 30%, #F7A58C, ${KAPUR.orange} 55%, #8F3A22)`, boxShadow: "3px 6px 8px rgba(0, 0, 0, 0.5)" }} />
    </div>
  );
};
