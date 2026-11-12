import type React from "react";
import { AbsoluteFill } from "remotion";
import { KAPUR } from "./palette";

// Sumber tekstur papan tulis (procedural, deterministik). TIDAK dipakai langsung di video karena filter layar penuh berat;
// render sekali jadi PNG lalu PapanBackdrop menampilkan PNG itu:
//   npx remotion still src/index.ts DarkChalk-TeksturNavy src/dark-chalk/assets/papan-navy.png
//   npx remotion still src/index.ts DarkChalk-TeksturHijau src/dark-chalk/assets/papan-hijau.png
// Lapisan: warna dasar tidak rata, bekas hapusan kapur (sapuan memanjang dan miring), debu halus, sudut gelap.
export type VarianPapan = "navy" | "hijau";
export const TEKSTUR = { width: 1080, height: 1920 } as const;

export const TeksturPapan: React.FC<{ readonly varian: VarianPapan }> = ({ varian }) => {
  const dasar = varian === "navy" ? KAPUR.navy : KAPUR.hijau;
  const W = TEKSTUR.width;
  const H = TEKSTUR.height;
  return (
    <AbsoluteFill style={{ backgroundColor: dasar }}>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <defs>
          {/* warna dasar tidak rata: noda terang dan gelap berfrekuensi rendah */}
          <filter id="noda-terang" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.0022" numOctaves={3} seed={4} />
            <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  1.4 0 0 0 -0.6" />
          </filter>
          <filter id="noda-gelap" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.0018" numOctaves={3} seed={21} />
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1.6 0 0 0 -0.7" />
          </filter>
          {/* bekas hapusan: sapuan memanjang (frekuensi x kecil, y besar), hanya di beberapa petak */}
          <filter id="hapusan" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.0012 0.018" numOctaves={3} seed={7} result="sapu" />
            <feColorMatrix in="sapu" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  2.2 0 0 0 -0.95" result="garis" />
            <feTurbulence type="fractalNoise" baseFrequency="0.0022" numOctaves={2} seed={13} result="petak" />
            <feColorMatrix in="petak" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  3.2 0 0 0 -1.45" result="masker" />
            <feComposite in="garis" in2="masker" operator="in" />
            <feGaussianBlur stdDeviation="5" />
          </filter>
          {/* debu kapur halus */}
          <filter id="debu" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={1} seed={3} />
            <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  5 0 0 0 -2.75" />
          </filter>
          <filter id="usap" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="28" />
          </filter>
          <radialGradient id="sudut" cx="50%" cy="45%" r="75%">
            <stop offset="55%" stopColor="#000" stopOpacity={0} />
            <stop offset="100%" stopColor="#000" stopOpacity={0.45} />
          </radialGradient>
        </defs>
        <rect width={W} height={H} filter="url(#noda-terang)" opacity={0.1} />
        <rect width={W} height={H} filter="url(#noda-gelap)" opacity={0.22} />
        <g transform={`rotate(-17 ${W / 2} ${H / 2})`}>
          <rect x={-300} y={-300} width={W + 600} height={H + 600} filter="url(#hapusan)" opacity={0.2} />
        </g>
        {/* beberapa usapan tangan yang lebih jelas */}
        <g filter="url(#usap)" fill="#FFF">
          {[
            [260, 520, 300, 46, -16, 0.06],
            [780, 360, 260, 40, -20, 0.05],
            [700, 1040, 360, 54, -14, 0.06],
            [220, 1420, 300, 44, -18, 0.05],
            [860, 1660, 280, 42, -12, 0.04],
          ].map(([cx, cy, rx, ry, r, o]) => (
            <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx={rx} ry={ry} opacity={o} transform={`rotate(${r} ${cx} ${cy})`} />
          ))}
        </g>
        <rect width={W} height={H} filter="url(#debu)" opacity={0.18} />
        <rect width={W} height={H} fill="url(#sudut)" />
      </svg>
    </AbsoluteFill>
  );
};
