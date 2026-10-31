import type React from "react";
import { TOPIC_COLORS } from "../../themes/topics";
import { PropFrame } from "../PropFrame";
import type { PropProps } from "../types";

// Molekul udara (dua bola menempel) dengan sinar merah yang lurus terus dan sinar biru yang pecah ke segala arah.
// `scatter` 0..1: 0 sampai 0,5 sinar datang dari kiri, 0,5 sampai 1 sinar biru terhambur dari molekul tengah.
const MOLECULES: ReadonlyArray<{ readonly x: number; readonly y: number; readonly a: number }> = [
  { x: 400, y: 400, a: -20 },
  { x: 560, y: 230, a: 30 },
  { x: 250, y: 560, a: 60 },
  { x: 620, y: 590, a: -45 },
  { x: 230, y: 220, a: 10 },
];
const SCATTER_ANGLES = [-150, -105, -50, 40, 95, 150];
const clamp01 = (v: number): number => Math.min(1, Math.max(0, v));

export const MolekulUdara: React.FC<PropProps & { readonly scatter?: number }> = ({ topic = "cuaca", scatter = 1, ...frame }) => {
  const c = TOPIC_COLORS[topic];
  const blue = TOPIC_COLORS.planet.main;
  const red = TOPIC_COLORS.tubuh.main;
  const incoming = clamp01(scatter / 0.5);
  const out = clamp01((scatter - 0.5) / 0.5);
  const ray = (color: string, x1: number, y1: number, x2: number, y2: number, w: number) => (
    <g stroke={color} strokeWidth={w} strokeLinecap="round">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
    </g>
  );
  return (
    <PropFrame {...frame}>
      {/* sinar merah: lurus terus, di bawah molekul tengah */}
      {ray(c.ink, 20, 470, 20 + 760 * incoming, 470, 36)}
      {ray(red, 20, 470, 20 + 760 * incoming, 470, 22)}
      {/* sinar biru datang sampai molekul tengah */}
      {ray(c.ink, 20, 400, 20 + 340 * incoming, 400, 36)}
      {ray(blue, 20, 400, 20 + 340 * incoming, 400, 22)}
      {/* sinar biru terhambur dari molekul tengah */}
      {SCATTER_ANGLES.map((deg) => {
        const r = (deg * Math.PI) / 180;
        const len = 220 * out;
        return <g key={deg}>{ray(c.ink, 400, 400, 400 + len * Math.cos(r), 400 + len * Math.sin(r), 30)}</g>;
      })}
      {SCATTER_ANGLES.map((deg) => {
        const r = (deg * Math.PI) / 180;
        const len = 220 * out;
        return <g key={`b${deg}`}>{ray(blue, 400, 400, 400 + len * Math.cos(r), 400 + len * Math.sin(r), 16)}</g>;
      })}
      {MOLECULES.map((m) => (
        <g key={`${m.x}-${m.y}`} transform={`translate(${m.x} ${m.y}) rotate(${m.a})`}>
          <circle cx={-26} cy={0} r={38} fill={c.main} stroke={c.ink} strokeWidth={8} />
          <circle cx={26} cy={0} r={38} fill={c.main} stroke={c.ink} strokeWidth={8} />
          <circle cx={-26} cy={0} r={26} fill={c.main} />
        </g>
      ))}
    </PropFrame>
  );
};
