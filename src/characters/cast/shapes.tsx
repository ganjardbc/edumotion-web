import type React from "react";

// Badan dua lapis: warna rim, lalu warna utama sedikit mengecil dengan puncak tetap, sehingga bayangan datar tampak di sisi dan bawah.
export const RimBody: React.FC<{ readonly id: string; readonly d: string; readonly rim: string; readonly main: string; readonly cx: number; readonly top: number; readonly scale?: number }> = ({
  id,
  d,
  rim,
  main,
  cx,
  top,
  scale = 0.96,
}) => (
  <g id={id}>
    <path d={d} fill={rim} />
    <path d={d} fill={main} transform={`translate(${cx} ${top}) scale(${scale}) translate(${-cx} ${-top})`} />
  </g>
);

export const Highlight: React.FC<{ readonly d: string; readonly color: string; readonly width?: number }> = ({ d, color, width = 16 }) => (
  <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" />
);

// Mencerminkan terhadap x = 400 untuk bagian sisi kanan.
export const Mirror: React.FC<{ readonly children: React.ReactNode }> = ({ children }) => <g transform="translate(800 0) scale(-1 1)">{children}</g>;

// Kaki tipis dengan telapak kecil; dasar telapak di y = 730.
export const stickLeg = (id: string, hipX: number, hipY: number, footX: number, color: string, width = 20): React.FC => {
  const StickLeg: React.FC = () => (
    <g id={id}>
      <path d={`M${hipX} ${hipY} Q${(hipX + footX) / 2 + 6} ${(hipY + 716) / 2} ${footX} 716`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" />
      <ellipse cx={footX + (footX < 400 ? -8 : 8)} cy={719} rx={28} ry={11} fill={color} />
    </g>
  );
  return StickLeg;
};

// Lengan tipis menggantung dengan tangan bulat. `dir` -1 = sisi kiri layar, 1 = sisi kanan.
export const stickArm = (id: string, x: number, y: number, dir: -1 | 1, color: string, reach = 86, hand = 17): React.FC => {
  const hx = x + dir * reach * 0.45;
  const hy = y + reach;
  const StickArm: React.FC = () => (
    <g id={id}>
      <path d={`M${x} ${y} Q${x + dir * reach * 0.42} ${y + reach * 0.4} ${hx} ${hy}`} fill="none" stroke={color} strokeWidth={18} strokeLinecap="round" />
      <circle cx={hx} cy={hy} r={hand} fill={color} />
    </g>
  );
  return StickArm;
};
