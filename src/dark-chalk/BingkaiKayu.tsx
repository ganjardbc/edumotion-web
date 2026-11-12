import type React from "react";
import { AbsoluteFill } from "remotion";
import { KAPUR } from "./palette";

// Sumber bingkai kayu papan tulis (procedural, deterministik): potongan kayu bersambung miring di sudut dengan urat kayu,
// simpul, kilap sisi luar, garis gelap sisi dalam, dan bayangan jatuh ke papan. Tebal sama di keempat sisi (40 px).
// Latar PNG transparan. TIDAK dipakai langsung di video; render sekali jadi PNG (lihat README):
//   npx remotion still src/index.ts DarkChalk-Bingkai src/dark-chalk/assets/bingkai.png
export const BINGKAI = { width: 1080, height: 1920, tebal: 40, rak: 40 } as const;

export const BingkaiKayu: React.FC = () => {
  const W = BINGKAI.width;
  const H = BINGKAI.height;
  const b = BINGKAI.tebal;
  const r = BINGKAI.rak;
  const potong = {
    atas: `M0 0 L${W} 0 L${W - b} ${b} L${b} ${b} Z`,
    kanan: `M${W} 0 L${W} ${H} L${W - b} ${H - r} L${W - b} ${b} Z`,
    bawah: `M0 ${H} L${W} ${H} L${W - b} ${H - r} L${b} ${H - r} Z`,
    kiri: `M0 0 L${b} ${b} L${b} ${H - r} L0 ${H} Z`,
  };
  const seeds = [3, 11, 17, 29];
  const dalamH = H - r - b;
  return (
    <AbsoluteFill>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <defs>
          {seeds.map((seed) => (
            <filter key={seed} id={`urat-${seed}`} x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.0035 0.085" numOctaves={4} seed={seed} result="n" />
              <feColorMatrix in="n" type="matrix" values="0 0 0 0 0.24  0 0 0 0 0.14  0 0 0 0 0.07  2.4 0 0 0 -0.85" result="gelap" />
              <feColorMatrix in="n" type="matrix" values="0 0 0 0 0.72  0 0 0 0 0.5  0 0 0 0 0.3  0 -2.2 0 0 1.05" result="terang" />
              <feMerge>
                <feMergeNode in="terang" />
                <feMergeNode in="gelap" />
              </feMerge>
            </filter>
          ))}
          {Object.entries(potong).map(([k, d]) => (
            <clipPath key={k} id={`potong-${k}`}>
              <path d={d} />
            </clipPath>
          ))}
          <clipPath id="dalam">
            <rect x={b} y={b} width={W - 2 * b} height={dalamH} />
          </clipPath>
          <filter id="bayangan" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>
        {/* bayangan bingkai jatuh ke papan */}
        <g clipPath="url(#dalam)">
          <rect x={b} y={b} width={W - 2 * b} height={dalamH} fill="none" stroke="#000" strokeWidth={40} opacity={0.5} filter="url(#bayangan)" />
        </g>
        {(Object.entries(potong) as Array<[keyof typeof potong, string]>).map(([k, d], i) => (
          <g key={k} clipPath={`url(#potong-${k})`}>
            <path d={d} fill={KAPUR.kayu} />
            <g filter={`url(#urat-${seeds[i]})`} transform={k === "kiri" || k === "kanan" ? `rotate(90 ${W / 2} ${H / 2})` : undefined}>
              <rect x={-H} y={-H} width={W + 2 * H} height={H * 3} fill="#000" />
            </g>
          </g>
        ))}
        {/* simpul kayu */}
        {[[210, 20, 18, 6], [760, 22, 14, 5], [980, H - 20, 18, 6], [20, 700, 6, 16], [1060, 1250, 6, 14], [20, 1500, 6, 14]].map(([x, y, rx, ry]) => (
          <g key={`${x}-${y}`}>
            <ellipse cx={x} cy={y} rx={rx} ry={ry} fill={KAPUR.kayuGelap} opacity={0.55} />
            <ellipse cx={x} cy={y} rx={rx * 0.55} ry={ry * 0.55} fill="none" stroke={KAPUR.kayuGelap} strokeWidth={2.5} opacity={0.7} />
          </g>
        ))}
        {/* sambungan miring di sudut */}
        <path d={`M0 0 L${b} ${b} M${W} 0 L${W - b} ${b} M0 ${H} L${b} ${H - r} M${W} ${H} L${W - b} ${H - r}`} stroke={KAPUR.kayuGelap} strokeWidth={3} opacity={0.8} />
        {/* kilap sisi luar (atas dan kiri terang), sisi bawah dan kanan gelap, tepi dalam gelap */}
        <path d={`M2 ${H - 2} L2 2 L${W - 2} 2`} fill="none" stroke={KAPUR.kayuTerang} strokeWidth={4} opacity={0.9} />
        <path d={`M${W - 2} 2 L${W - 2} ${H - 2} L2 ${H - 2}`} fill="none" stroke={KAPUR.kayuGelap} strokeWidth={4} opacity={0.8} />
        <rect x={b} y={b} width={W - 2 * b} height={dalamH} fill="none" stroke={KAPUR.kayuGelap} strokeWidth={5} />
        <path d={`M${b} ${H - r} L${b} ${b} L${W - b} ${b}`} fill="none" stroke="#000" strokeWidth={3} opacity={0.35} transform="translate(3 3)" />
        <path d={`M${b + 2} ${H - r - 2} L${W - b - 2} ${H - r - 2} L${W - b - 2} ${b + 2}`} fill="none" stroke={KAPUR.kayuTerang} strokeWidth={3} opacity={0.55} />
      </svg>
    </AbsoluteFill>
  );
};
