import type React from "react";
import { AbsoluteFill, interpolate, Sequence, useCurrentFrame } from "remotion";
import { useTheme } from "../themes";
import { GanjarGaris } from "./GanjarGaris";
import { Garis } from "./Garis";
import { Kapur, KapurFilter } from "./Kapur";
import { LatarKapur } from "./LatarKapur";
import { KAPUR } from "./palette";
import { Teks } from "./Teks";

// Demo tema Dark Chalk Storytelling (acuan: sheet "Billy's Curious Quest") memakai naskah AwanTidakJatuh.
// Belum pakai ShortEdu, audio, atau aturan lint video; hanya untuk menilai tampilan.
export const PAPAN_AWAN = { id: "DarkChalk-Awan", width: 1080, height: 1920, fps: 30, durationInFrames: 390 } as const;

const FEET_Y = 1215;

// Warna papan demo ini. Isi awan dan tetes ikut papan: sedikit lebih gelap dari papan supaya bentuknya terbaca.
const PAPAN = "hijau" as const;
const ISI = PAPAN === "hijau" ? KAPUR.hijauTua : KAPUR.teal;

const AWAN = "M170 800 C70 800 60 660 180 650 C190 540 340 510 410 590 C470 490 650 520 660 650 C790 650 800 800 670 800 Z";

const Awan: React.FC<{ readonly dx?: number; readonly dy?: number; readonly mulai?: number; readonly wajah?: boolean }> = ({ dx = 0, dy = 0, mulai = 0, wajah = true }) => (
  <g transform={`translate(${dx} ${dy})`}>
    <Garis d={AWAN} mulai={mulai} lama={34} isi={ISI} />
    {wajah && (
      <>
        <Garis d="M300 700 L300 716" mulai={mulai + 30} lama={6} tebal={16} />
        <Garis d="M480 700 L480 716" mulai={mulai + 30} lama={6} tebal={16} />
        <Garis d="M345 745 Q390 785 435 745" mulai={mulai + 34} lama={12} tebal={8} />
      </>
    )}
  </g>
);

const Tetes: React.FC<{ readonly x: number; readonly y: number; readonly s?: number; readonly mulai: number; readonly warna?: string }> = ({ x, y, s = 1, mulai, warna = KAPUR.chalk }) => {
  const frame = useCurrentFrame();
  const bob = Math.sin((frame + x) / 16) * 12;
  return (
    <g transform={`translate(${x} ${y + bob}) scale(${s})`}>
      <Garis d="M0 -50 C34 -6 40 30 0 46 C-40 30 -34 -6 0 -50 Z" mulai={mulai} lama={18} warna={warna} isi={ISI} tebal={8 / s} />
    </g>
  );
};

const Panah: React.FC<{ readonly x: number; readonly mulai: number }> = ({ x, mulai }) => (
  <>
    <Garis d={`M${x} 1130 L${x} 990`} mulai={mulai} lama={14} warna={KAPUR.gold} tebal={10} />
    <Garis d={`M${x - 28} 1022 L${x} 984 L${x + 28} 1022`} mulai={mulai + 12} lama={8} warna={KAPUR.gold} tebal={10} />
  </>
);

const Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const n = Math.round(interpolate(frame, [20, 80], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));
  return (
    <AbsoluteFill>
      <Kapur>
        <svg width={1080} height={1920} viewBox="0 0 1080 1920" style={{ position: "absolute", inset: 0 }}>
          <Awan dx={-30} dy={-10} mulai={4} />
        </svg>
        <Teks text="Awan seberat 100 gajah?" sorot="gajah" size={104} top={250} />
        <div style={{ position: "absolute", left: 60, width: 640, top: 930, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 150, color: KAPUR.gold }}>
          {n}
          <span style={{ fontSize: 60, color: KAPUR.chalk }}> gajah</span>
        </div>
        <GanjarGaris x={850} y={FEET_Y} tinggi={470} ekspresi="mikir" gestur="mikir" papan={PAPAN} />
      </Kapur>
    </AbsoluteFill>
  );
};

const Twist: React.FC = () => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const kapas = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill>
      <Kapur>
        <Teks text="Ternyata keliru!" size={110} top={250} warna={KAPUR.orange} />
        <div style={{ position: "absolute", left: 100, right: 160, top: 500, textAlign: "center", whiteSpace: "nowrap", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 72, color: KAPUR.chalk, opacity: kapas }}>Ringan seperti kapas</div>
        <svg width={1080} height={1920} viewBox="0 0 1080 1920" style={{ position: "absolute", inset: 0 }}>
          <Garis d="M150 560 Q540 545 900 575" mulai={20} lama={14} warna={KAPUR.orange} tebal={14} />
        </svg>
        <Teks text="Berat ±500 ton" sorot="±500" size={104} top={660} mulai={42} warna={KAPUR.gold} />
        <GanjarGaris x={540} y={FEET_Y} tinggi={420} ekspresi="kaget" gestur="menyerah" papan={PAPAN} />
      </Kapur>
    </AbsoluteFill>
  );
};

const Explain: React.FC = () => {
  const t = useTheme();
  const label = (text: string, x: number, y: number, warna: string) => (
    <div style={{ position: "absolute", left: x - 240, width: 480, top: y, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 58, color: warna }}>{text}</div>
  );
  return (
    <AbsoluteFill>
      <Kapur>
        <Teks text="Tetes kecil, tapi melayang" sorot="melayang" size={96} top={250} />
        <svg width={1080} height={1920} viewBox="0 0 1080 1920" style={{ position: "absolute", inset: 0 }}>
          <g transform="translate(250 150) scale(0.7)">
            <Awan mulai={6} wajah={false} />
          </g>
          <Tetes x={250} y={885} mulai={26} />
          <Tetes x={400} y={930} mulai={32} s={0.9} />
          <Tetes x={560} y={875} mulai={38} />
          <Tetes x={720} y={940} mulai={44} s={0.9} />
          <Tetes x={860} y={885} mulai={50} />
          <Panah x={300} mulai={58} />
          <Panah x={540} mulai={63} />
          <Panah x={780} mulai={68} />
        </svg>
        {label("tetes air", 540, 740, KAPUR.chalk)}
        {label("udara hangat", 540, 1160, KAPUR.gold)}
      </Kapur>
    </AbsoluteFill>
  );
};

const NARASI = [
  "Satu awan beratnya seperti seratus gajah. Kok tidak jatuh?",
  "Ternyata keliru. Awan itu berat sekali!",
  "Udara hangat dari bawah terus mendorong tetes itu ke atas.",
];

const Caption: React.FC<{ readonly text: string }> = ({ text }) => {
  const t = useTheme();
  return (
    <div style={{ position: "absolute", left: 64, right: 160, top: 1400, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 700, fontSize: 52, lineHeight: 1.25, color: KAPUR.chalk }}>{text}</div>
  );
};

export const PapanAwan: React.FC = () => (
  <AbsoluteFill>
    <KapurFilter />
    <LatarKapur jenis="polos" varian={PAPAN} />
    <Sequence durationInFrames={120}>
      <Hook />
    </Sequence>
    <Sequence from={120} durationInFrames={120}>
      <Twist />
    </Sequence>
    <Sequence from={240} durationInFrames={150}>
      <Explain />
    </Sequence>
    {NARASI.map((n, i) => (
      <Sequence key={n} from={i * 120} durationInFrames={i === 2 ? 150 : 120}>
        <Caption text={n} />
      </Sequence>
    ))}
  </AbsoluteFill>
);
