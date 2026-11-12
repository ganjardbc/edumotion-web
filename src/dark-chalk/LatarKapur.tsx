import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { Kapur } from "./Kapur";
import { PapanBackdrop } from "./PapanBackdrop";
import { KAPUR } from "./palette";
import type { VarianPapan } from "./TeksturPapan";

// Latar tema Dark Chalk Storytelling: papan navy + gambar garis kapur tipis (acuan: "Backgrounds & Atmosphere" di sheet).
// Gambar dibuat redup dan menjauhi kolom tengah (x 360–720) supaya pembawa dan teks tetap jadi fokus.
// Zona caption (di bawah garis tanah y 1215) dibiarkan polos. Hanya bintang yang bergerak (berkelip pelan, dari frame).
export const LATAR_KAPUR = ["polos", "langit", "malam", "hutan", "kota"] as const;
export type JenisLatar = (typeof LATAR_KAPUR)[number];

const TANAH = 1215;

const garis = { fill: "none", stroke: KAPUR.chalk, strokeWidth: 5, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const emas = { ...garis, stroke: KAPUR.gold } as const;

const awan = (x: number, y: number, s: number) =>
  `M${x - 120 * s} ${y} C${x - 160 * s} ${y} ${x - 160 * s} ${y - 50 * s} ${x - 110 * s} ${y - 52 * s} C${x - 100 * s} ${y - 100 * s} ${x - 30 * s} ${y - 110 * s} ${x} ${y - 70 * s} C${x + 30 * s} ${y - 120 * s} ${x + 110 * s} ${y - 100 * s} ${x + 110 * s} ${y - 50 * s} C${x + 160 * s} ${y - 50 * s} ${x + 160 * s} ${y} ${x + 120 * s} ${y} Z`;

// Cemara tiga susun: tinggi h, lebar w, alas di y.
const cemara = (x: number, y: number, h: number, w: number) => {
  const t = (top: number, bot: number, half: number) => `M${x} ${top} L${x - half} ${bot} L${x + half} ${bot} Z`;
  return [t(y - h, y - h * 0.55, w * 0.32), t(y - h * 0.75, y - h * 0.3, w * 0.42), t(y - h * 0.5, y - h * 0.1, w * 0.5), `M${x} ${y - h * 0.1} L${x} ${y}`].join(" ");
};

const BINTANG: ReadonlyArray<readonly [number, number, number]> = [
  [110, 420, 1], [260, 560, 0.7], [420, 400, 0.8], [700, 380, 0.7], [960, 420, 1], [140, 760, 0.8], [330, 880, 0.6],
  [930, 760, 0.7], [800, 640, 0.6], [620, 520, 0.6], [90, 1010, 0.6], [990, 980, 0.8],
];

const Bintang: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <>
      {BINTANG.map(([x, y, s], i) => {
        const o = 0.45 + 0.4 * (0.5 + 0.5 * Math.sin(frame / 18 + i * 1.7));
        const r = 14 * s;
        return <path key={`${x}-${y}`} d={`M${x} ${y - r} L${x} ${y + r} M${x - r} ${y} L${x + r} ${y}`} {...garis} strokeWidth={4} opacity={o} />;
      })}
    </>
  );
};

// Bulan sabit emas: lingkaran emas dikurangi lingkaran yang bergeser (mask), jadi tidak bergantung warna latar.
const Bulan: React.FC<{ readonly x: number; readonly y: number; readonly r?: number }> = ({ x, y, r = 46 }) => {
  const id = `bulan-${x}-${y}`;
  return (
    <>
      <mask id={id}>
        <circle cx={x} cy={y} r={r} fill="white" />
        <circle cx={x + r * 0.45} cy={y - r * 0.25} r={r * 0.82} fill="black" />
      </mask>
      <circle cx={x} cy={y} r={r} fill={KAPUR.gold} mask={`url(#${id})`} />
    </>
  );
};

const Tanah: React.FC = () => <path d={`M40 ${TANAH} L1040 ${TANAH}`} {...garis} opacity={0.45} />;

const Isi: React.FC<{ readonly jenis: JenisLatar }> = ({ jenis }) => {
  switch (jenis) {
    case "langit":
      return (
        <>
          <g opacity={0.55}>
            <path d={awan(190, 560, 1)} {...garis} />
            <path d={awan(880, 470, 0.8)} {...garis} />
            <path d={awan(900, 900, 0.55)} {...garis} />
            <path d="M200 760 q16 -14 30 0 q14 -14 30 0 M300 700 q12 -10 24 0 q12 -10 24 0" {...garis} strokeWidth={4} />
          </g>
          <circle cx={150} cy={1120} r={56} fill={KAPUR.gold} />
          <path d={`M60 1150 L250 1150 M100 1182 L210 1182`} {...emas} strokeWidth={4} opacity={0.7} />
          <Tanah />
        </>
      );
    case "malam":
      return (
        <>
          <Bintang />
          <Bulan x={860} y={560} />
          <g opacity={0.4}>
            <path d={awan(220, 640, 0.7)} {...garis} />
            <path d={awan(860, 1000, 0.5)} {...garis} />
          </g>
          <Tanah />
        </>
      );
    case "hutan":
      return (
        <>
          <g opacity={0.3}>
            <path d={`M40 ${TANAH - 260} L210 ${TANAH - 560} L330 ${TANAH - 380} L420 ${TANAH - 470} L540 ${TANAH - 300} M600 ${TANAH - 320} L760 ${TANAH - 600} L880 ${TANAH - 420} L1040 ${TANAH - 520}`} {...garis} />
            <path d={`M170 ${TANAH - 490} L210 ${TANAH - 560} L248 ${TANAH - 500} M720 ${TANAH - 530} L760 ${TANAH - 600} L796 ${TANAH - 540}`} {...garis} />
          </g>
          <circle cx={250} cy={520} r={40} fill={KAPUR.gold} opacity={0.9} />
          <g opacity={0.6}>
            <path d={cemara(110, TANAH, 420, 170)} {...garis} />
            <path d={cemara(250, TANAH, 300, 130)} {...garis} />
            <path d={cemara(830, TANAH, 340, 140)} {...garis} />
            <path d={cemara(970, TANAH, 460, 180)} {...garis} />
          </g>
          <Tanah />
        </>
      );
    case "kota": {
      const gedung: ReadonlyArray<readonly [number, number, number]> = [
        [50, 120, 420], [180, 110, 560], [300, 80, 330], [700, 90, 380], [800, 120, 620], [930, 110, 450],
      ];
      return (
        <>
          <Bintang />
          <Bulan x={300} y={520} r={38} />
          <g opacity={0.55}>
            {gedung.map(([x, w, h]) => (
              <rect key={x} x={x} y={TANAH - h} width={w} height={h} {...garis} />
            ))}
            {gedung.flatMap(([x, w, h]) =>
              Array.from({ length: Math.floor((h - 60) / 70) }, (_, r) => [0, 1].map((c) => <rect key={`${x}-${r}-${c}`} x={x + 18 + c * (w / 2)} y={TANAH - h + 30 + r * 70} width={w / 2 - 36} height={28} {...garis} strokeWidth={3} />)),
            )}
          </g>
          {[[198, TANAH - 500], [818, TANAH - 420], [948, TANAH - 250], [318, TANAH - 230]].map(([x, y]) => (
            <rect key={`${x}-${y}`} x={x} y={y} width={19} height={28} fill={KAPUR.gold} opacity={0.85} />
          ))}
          <Tanah />
        </>
      );
    }
    case "polos":
      return null;
  }
};

export const LatarKapur: React.FC<{ readonly jenis?: JenisLatar; readonly varian?: VarianPapan }> = ({ jenis = "malam", varian = "navy" }) => (
  <AbsoluteFill>
    <PapanBackdrop varian={varian} />
    <Kapur>
      <svg width={1080} height={1920} viewBox="0 0 1080 1920" style={{ position: "absolute", inset: 0 }}>
        <Isi jenis={jenis} />
      </svg>
    </Kapur>
  </AbsoluteFill>
);
