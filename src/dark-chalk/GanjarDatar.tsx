import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { KAPUR } from "./palette";

// Ganjar gaya Dark Chalk Storytelling: kepala bulat putih dengan mata titik, rambut tiga helai, kaos polos biru lengan
// pendek, celana pendek abu. Hanya tampak depan. Akting lewat pose (siku dan tangan), bentuk mata, kemiringan kepala,
// dan tanda kecil (garis kejut, tanda tanya, keringat). Pose antar-pose diinterpolasi; semua gerak dari frame.
type Titik = readonly [number, number];
export type PoseGanjar = {
  readonly kiri: readonly [Titik, Titik];
  readonly kanan: readonly [Titik, Titik];
  readonly miring: number;
  readonly naik: number;
};

export const POSE_GANJAR = {
  berdiri: { kiri: [[128, 310], [122, 395]], kanan: [[272, 310], [278, 395]], miring: 0, naik: 0 },
  tunjuk: { kiri: [[128, 310], [122, 395]], kanan: [[318, 215], [372, 150]], miring: 5, naik: 0 },
  mikir: { kiri: [[128, 310], [122, 395]], kanan: [[292, 312], [226, 214]], miring: -7, naik: 0 },
  kaget: { kiri: [[96, 235], [112, 142]], kanan: [[304, 235], [288, 142]], miring: 0, naik: -10 },
  sorak: { kiri: [[96, 190], [74, 112]], kanan: [[304, 190], [326, 112]], miring: -5, naik: -8 },
  menyerah: { kiri: [[112, 318], [92, 398]], kanan: [[288, 318], [308, 398]], miring: 8, naik: 8 },
} satisfies Record<string, PoseGanjar>;
export type NamaPose = keyof typeof POSE_GANJAR;

// Tanda kecil pelengkap pose (pengganti ekspresi wajah).
const TANDA: Partial<Record<NamaPose, "kaget" | "mikir" | "sorak" | "menyerah">> = { kaget: "kaget", mikir: "mikir", sorak: "sorak", menyerah: "menyerah" };

const BAHU_KIRI: Titik = [152, 228];
const BAHU_KANAN: Titik = [248, 228];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerpT = (a: Titik, b: Titik, t: number): Titik => [lerp(a[0], b[0], t), lerp(a[1], b[1], t)];

export const campur = (a: PoseGanjar, b: PoseGanjar, t: number): PoseGanjar => ({
  kiri: [lerpT(a.kiri[0], b.kiri[0], t), lerpT(a.kiri[1], b.kiri[1], t)],
  kanan: [lerpT(a.kanan[0], b.kanan[0], t), lerpT(a.kanan[1], b.kanan[1], t)],
  miring: lerp(a.miring, b.miring, t),
  naik: lerp(a.naik, b.naik, t),
});

// Lengan kaos pendek: seluruh lengan putih kapur, lalu lengan baju biru menutupi 45% pertama dari bahu ke siku.
const Lengan: React.FC<{ readonly bahu: Titik; readonly siku: Titik; readonly tangan: Titik }> = ({ bahu, siku, tangan }) => {
  const d = `M${bahu[0]} ${bahu[1]} L${siku[0]} ${siku[1]} L${tangan[0]} ${tangan[1]}`;
  const ujung = lerpT(bahu, siku, 0.45);
  return (
    <>
      <path d={d} fill="none" stroke={KAPUR.chalk} strokeWidth={24} strokeLinecap="round" strokeLinejoin="round" />
      <path d={`M${bahu[0]} ${bahu[1]} L${ujung[0]} ${ujung[1]}`} fill="none" stroke={KAPUR.biruTerang} strokeWidth={42} strokeLinecap="round" />
      <path d={`M${bahu[0]} ${bahu[1]} L${ujung[0]} ${ujung[1]}`} fill="none" stroke={KAPUR.biru} strokeWidth={36} strokeLinecap="round" />
    </>
  );
};

// Mata titik; bentuknya mengikuti tanda pose supaya ada ekspresi.
const Mata: React.FC<{ readonly jenis?: "kaget" | "mikir" | "sorak" | "menyerah" }> = ({ jenis }) => {
  const garis = { stroke: KAPUR.navy, strokeWidth: 8, strokeLinecap: "round", fill: "none" } as const;
  if (jenis === "sorak")
    return (
      <g {...garis}>
        <path d="M150 146 Q166 124 182 146 M218 146 Q234 124 250 146" />
      </g>
    );
  if (jenis === "menyerah")
    return (
      <g {...garis}>
        <path d="M150 146 L184 154 M250 146 L216 154" />
      </g>
    );
  const kaget = jenis === "kaget";
  const geser = jenis === "mikir" ? { x: 8, y: -8 } : { x: 0, y: 0 };
  const rx = kaget ? 12 : 9;
  const ry = kaget ? 19 : 14;
  return (
    <g fill={KAPUR.navy}>
      <ellipse cx={168 + geser.x} cy={142 + geser.y} rx={rx} ry={ry} />
      <ellipse cx={232 + geser.x} cy={142 + geser.y} rx={rx} ry={ry} />
      {jenis === "mikir" && <path d="M150 112 L186 106" stroke={KAPUR.navy} strokeWidth={7} strokeLinecap="round" />}
    </g>
  );
};

const Tanda: React.FC<{ readonly jenis: "kaget" | "mikir" | "sorak" | "menyerah" }> = ({ jenis }) => {
  const garis = { stroke: KAPUR.gold, strokeWidth: 9, strokeLinecap: "round", fill: "none" } as const;
  if (jenis === "kaget")
    return (
      <g {...garis}>
        <path d="M84 60 L104 80 M72 112 L58 112 M316 60 L296 80 M328 112 L342 112" />
      </g>
    );
  if (jenis === "sorak")
    return (
      <g {...garis}>
        <path d="M200 8 L200 -18 M150 24 L132 4 M250 24 L268 4" />
      </g>
    );
  if (jenis === "menyerah") return <path d="M296 70 C312 94 316 108 296 118 C276 108 280 94 296 70 Z" fill={KAPUR.biruTerang} stroke={KAPUR.chalk} strokeWidth={4} />;
  return (
    <text x={290} y={86} fontSize={78} fontWeight={800} fill={KAPUR.gold} fontFamily="Nunito, sans-serif">
      ?
    </text>
  );
};

// viewBox 400x620, telapak kaki di y 596. `tinggi` dalam px; (x, y) = tengah telapak kaki. `hadap` -1 = dicerminkan.
export const GanjarDatar: React.FC<{
  readonly pose: PoseGanjar;
  readonly x: number;
  readonly y: number;
  readonly tinggi?: number;
  readonly tanda?: "kaget" | "mikir" | "sorak" | "menyerah";
  readonly hadap?: 1 | -1;
}> = ({ pose, x, y, tinggi = 620, tanda, hadap = 1 }) => {
  const frame = useCurrentFrame();
  const napas = Math.sin(frame / 14) * 3;
  const w = (tinggi * 400) / 620;
  const s = tinggi / 620;
  const naik = pose.naik + napas * 0.5;
  return (
    <svg width={w} height={tinggi} viewBox="0 0 400 620" style={{ position: "absolute", left: x - w / 2, top: y - 596 * s, overflow: "visible", transform: hadap === -1 ? "scaleX(-1)" : undefined }}>
      {/* kaki: batang chalk + telapak */}
      <path d="M172 470 L172 586 M228 470 L228 586" stroke={KAPUR.chalk} strokeWidth={20} strokeLinecap="round" />
      <ellipse cx={164} cy={594} rx={28} ry={12} fill={KAPUR.chalk} />
      <ellipse cx={236} cy={594} rx={28} ry={12} fill={KAPUR.chalk} />
      <g transform={`translate(0 ${naik * 0.4})`}>
        {/* celana pendek */}
        <path d="M142 396 L258 396 L268 486 L208 486 L200 458 L192 486 L132 486 Z" fill={KAPUR.abu} stroke={KAPUR.chalk} strokeWidth={4} strokeLinejoin="round" />
        {/* kaos polos */}
        <path d="M148 222 Q200 206 252 222 C264 280 270 350 262 412 Q200 428 138 412 C130 350 136 280 148 222 Z" fill={KAPUR.biru} stroke={KAPUR.biruTerang} strokeWidth={4} strokeLinejoin="round" />
        <path d="M176 224 Q200 246 224 224" fill="none" stroke={KAPUR.biruTerang} strokeWidth={4} strokeLinecap="round" />
        <Lengan bahu={BAHU_KIRI} siku={pose.kiri[0]} tangan={pose.kiri[1]} />
        <Lengan bahu={BAHU_KANAN} siku={pose.kanan[0]} tangan={pose.kanan[1]} />
        <circle cx={pose.kiri[1][0]} cy={pose.kiri[1][1]} r={18} fill={KAPUR.chalk} />
        <circle cx={pose.kanan[1][0]} cy={pose.kanan[1][1]} r={18} fill={KAPUR.chalk} />
        {/* kepala + rambut tiga helai, miring dari pangkal leher */}
        <g transform={`translate(0 ${naik}) rotate(${pose.miring} 200 215)`}>
          <circle cx={200} cy={134} r={88} fill={KAPUR.chalk} />
          <Mata jenis={tanda} />
          <path d="M168 58 Q160 34 174 18 M194 50 Q192 24 210 10 M222 52 Q228 32 248 26" fill="none" stroke={KAPUR.chalk} strokeWidth={10} strokeLinecap="round" />
        </g>
        {tanda && <Tanda jenis={tanda} />}
      </g>
    </svg>
  );
};

// Pose berdasar daftar [namaPose, frameMulai]; pindah halus dalam `lama` frame. `tanda` mengikuti pose yang sedang tampil.
export const poseDariFrame = (frame: number, urutan: ReadonlyArray<readonly [NamaPose, number]>, lama = 12): { readonly pose: PoseGanjar; readonly tanda?: "kaget" | "mikir" | "sorak" | "menyerah" } => {
  let sekarang = POSE_GANJAR[urutan[0][0]] as PoseGanjar;
  let aktif = urutan[0][0];
  for (let i = 1; i < urutan.length; i += 1) {
    const [nama, mulai] = urutan[i];
    const t = interpolate(frame, [mulai, mulai + lama], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    sekarang = campur(sekarang, POSE_GANJAR[nama], t);
    if (frame >= mulai) aktif = nama;
  }
  return { pose: sekarang, tanda: TANDA[aktif] };
};
