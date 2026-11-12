import type React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { GANJAR_STICKMAN_PALETTE as P } from "./palette";
import { GESTURES, gestureArms, type ArmPose, type Gesture } from "./gestures";

export { GESTURES, type ArmPose, type Gesture };

// Diambil dari remotion-web (src/assets/characters/ganjar/stickman/GanjarStickman.tsx); warna dipindah ke palette.ts.
// GanjarStickman gaya gambar tangan (acuan: remotion-web/design-references/stickman/hand-drawn-stick-man.jpg):
// tampak depan, kepala oval besar, badan seperti buah pir, garis tipis,
// tangan berujung loop dan kaki berujung oval. Rambut tiga helai, hoodie, dan celana pendek abu jadi ciri khas supaya tidak
// sekadar meniru referensi. Semua gerak dari frame.

export type GanjarStickmanExpression =
  | "senyum"
  | "senyumSantai"
  | "senang"
  | "tertawa"
  | "kaget"
  | "netral"
  | "serius"
  | "bingung"
  | "mikir"
  | "malu"
  | "sedih"
  | "kesal"
  | "marah"
  | "mataTertutup";

export const GANJAR_STICKMAN_EXPRESSIONS: readonly GanjarStickmanExpression[] = [
  "senyum",
  "senyumSantai",
  "senang",
  "tertawa",
  "kaget",
  "netral",
  "serius",
  "bingung",
  "mikir",
  "malu",
  "sedih",
  "kesal",
  "marah",
  "mataTertutup",
];

export const VIEWBOX = { w: 400, h: 410 } as const;

const HEAD = { x: 200, y: 112, rx: 74, ry: 62 } as const;
export const NECK = { x: 200, y: 168 } as const;
export const HIP_Y = 284;
export const SHOULDER = { dx: 24, y: 182 } as const;
export const BONE = { upperArm: 46, foreArm: 44, leg: 80 } as const;
export const HAND = { rx: 7, ry: 12 } as const;

const DARK = P.dark;

// Headphone: pita melengkung di atas kepala dan dua cup di sisi telinga.
// Rambut sederhana: tiga helai garis hitam melengkung di atas kepala.
const HAIR = "M176 53 Q172 38 180 26 M190 50 Q188 34 202 24 M204 49 Q206 36 222 30";
const BAND = "M127 108 C120 10 280 10 273 108";
const CUP = { dx: 77, y: 116, rx: 14, ry: 25 } as const;
const ACCENT = P.accent;

export type Pt = { readonly x: number; readonly y: number };

// Sudut dari arah lurus ke bawah; positif = menjauh dari badan. `side` -1 kiri layar, 1 kanan layar.
export const reach = (from: Pt, len: number, deg: number, side: 1 | -1): Pt => {
  const a = (deg * Math.PI) / 180;
  return { x: from.x + side * len * Math.sin(a), y: from.y + len * Math.cos(a) };
};

export type LegPose = { readonly out: number; readonly lift: number };

type Pose = {
  readonly bobY: number;
  readonly sway: number;
  readonly headTilt: number;
  // indeks 0 = kiri layar, 1 = kanan layar
  readonly arms: readonly [ArmPose, ArmPose];
  readonly legs: readonly [LegPose, LegPose];
};

export const poseAt = (t: number, walk: boolean, wave: boolean, gesture?: Gesture, robot = false): Pose => {
  const idle = Math.sin(t * 1.6);
  const p = t * Math.PI * 2 * 1.2;
  const step = (phase: number): LegPose => {
    const up = Math.max(0, Math.sin(phase));
    return { out: 3 + 20 * up, lift: 11 * up };
  };
  const rest = (): ArmPose => ({ shoulder: 24 + idle * 2, elbow: -8 });
  const swing = (phase: number): ArmPose => ({ shoulder: 26 + 14 * Math.sin(phase), elbow: -8 });
  // `wave` = singkatan gesture "lambai"; `gesture` menang kalau keduanya diisi.
  const g = gesture ?? (wave ? "lambai" : "netral");
  const base: readonly [ArmPose, ArmPose] = walk ? [swing(p + Math.PI), swing(p)] : [rest(), rest()];
  const over = gestureArms(g, t, robot);
  return {
    bobY: walk ? -Math.abs(Math.sin(p)) * 5 : idle * 1.5,
    sway: walk ? Math.sin(p) * 2.5 : idle * 0.6,
    headTilt: Math.sin(t * 0.9) * (walk ? 2 : 3.5),
    arms: [over[0] ?? base[0], over[1] ?? base[1]],
    legs: walk ? [step(p), step(p + Math.PI)] : [{ out: 3, lift: 0 }, { out: 3, lift: 0 }],
  };
};

// Lebar mulut saat bicara per ekspresi (unit viewBox).
const TALK_WIDTH: Partial<Record<GanjarStickmanExpression, number>> = { kaget: 6, marah: 9, kesal: 9, serius: 9, senang: 14, tertawa: 15, malu: 7 };

// Bukaan mulut bicara 0..1 dari frame: dua gelombang supaya tidak terasa seperti metronom.
export const talkAmount = (t: number): number => Math.min(1, 0.12 + Math.abs(Math.sin(t * 11) * 0.7 + Math.sin(t * 7.3) * 0.3));

const Face: React.FC<{ readonly e: GanjarStickmanExpression; readonly ink: string; readonly w: number; readonly talk?: number }> = ({ e, ink, w, talk }) => {
  const { x, y } = HEAD;
  const mouthY = y + 30;
  const line = (d: string) => <path d={d} fill="none" stroke={ink} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />;
  const eye = (dx: number, rx = 4, ry = 6.5, ox = 0, oy = 0) => <ellipse key={dx} cx={x + dx + ox} cy={y + 6 + oy} rx={rx} ry={ry} fill={ink} />;
  const eyes = (rx = 4, ry = 6.5, ox = 0, oy = 0) => (
    <>
      {eye(-27, rx, ry, ox, oy)}
      {eye(27, rx, ry, ox, oy)}
    </>
  );
  // Mata melengkung ke atas (senang) atau ke bawah (tertutup).
  const arcEyes = (up: boolean) => (
    <>
      {line(`M${x - 35} ${y + 10} Q${x - 27} ${y + (up ? -2 : 18)} ${x - 19} ${y + 10}`)}
      {line(`M${x + 19} ${y + 10} Q${x + 27} ${y + (up ? -2 : 18)} ${x + 35} ${y + 10}`)}
    </>
  );
  const blush = (
    <>
      <ellipse cx={x - 46} cy={y + 24} rx={11} ry={6} fill={P.blush} opacity={0.75} />
      <ellipse cx={x + 46} cy={y + 24} rx={11} ry={6} fill={P.blush} opacity={0.75} />
    </>
  );
  // Mulut terbuka lebar (senang, tertawa): setengah lingkaran isi dengan lidah.
  const openMouth = (wide: number, deep: number) => (
    <>
      <path d={`M${x - wide} ${mouthY - 5} L${x + wide} ${mouthY - 5} Q${x + wide - 2} ${mouthY + deep} ${x} ${mouthY + deep} Q${x - wide + 2} ${mouthY + deep} ${x - wide} ${mouthY - 5} Z`} fill={ink} stroke={ink} strokeWidth={w * 0.5} strokeLinejoin="round" />
      <ellipse cx={x} cy={mouthY + deep - 4} rx={wide * 0.45} ry={4} fill={P.tongue} />
    </>
  );
  // Saat bicara, mulut apa pun diganti elips yang membuka dan menutup.
  const talking = (): React.ReactNode => {
    const o = talk ?? 0;
    const rx = TALK_WIDTH[e] ?? 11;
    const ry = 2.5 + 9 * o;
    return <ellipse cx={x} cy={mouthY + ry * 0.3} rx={rx} ry={ry} fill={ink} />;
  };
  const mouth = (shape: React.ReactNode): React.ReactNode => (talk === undefined ? shape : talking());
  const smile = line(`M${x - 13} ${mouthY - 3} Q${x} ${mouthY + 9} ${x + 13} ${mouthY - 3}`);
  const flat = line(`M${x - 11} ${mouthY} L${x + 11} ${mouthY}`);

  switch (e) {
    case "senyumSantai":
      return (
        <>
          {eyes(4, 3.5, 0, 2)}
          {line(`M${x - 35} ${y + 1} L${x - 19} ${y + 1}`)}
          {line(`M${x + 19} ${y + 1} L${x + 35} ${y + 1}`)}
          {mouth(line(`M${x - 15} ${mouthY - 2} Q${x} ${mouthY + 7} ${x + 15} ${mouthY - 2}`))}
        </>
      );
    case "senang":
      return (
        <>
          {arcEyes(true)}
          {mouth(openMouth(17, 16))}
        </>
      );
    case "tertawa":
      return (
        <>
          {line(`M${x - 37} ${y - 1} L${x - 20} ${y + 7} L${x - 37} ${y + 15}`)}
          {line(`M${x + 37} ${y - 1} L${x + 20} ${y + 7} L${x + 37} ${y + 15}`)}
          {mouth(openMouth(22, 24))}
        </>
      );
    case "kaget":
      return (
        <>
          {eyes()}
          {mouth(<ellipse cx={x} cy={mouthY + 2} rx={4.5} ry={7} fill={ink} />)}
        </>
      );
    case "netral":
      return (
        <>
          {eyes()}
          {mouth(flat)}
        </>
      );
    case "serius":
      return (
        <>
          {eyes(4, 5.5)}
          {line(`M${x - 38} ${y - 12} L${x - 16} ${y - 12}`)}
          {line(`M${x + 16} ${y - 12} L${x + 38} ${y - 12}`)}
          {mouth(flat)}
        </>
      );
    case "bingung":
      return (
        <>
          {eye(-27, 4, 6.5)}
          {eye(27, 3.2, 4.5, 0, 1)}
          {line(`M${x - 38} ${y - 17} L${x - 18} ${y - 25}`)}
          {line(`M${x + 18} ${y - 12} L${x + 38} ${y - 15}`)}
          {mouth(line(`M${x - 14} ${mouthY + 2} Q${x - 7} ${mouthY - 5} ${x} ${mouthY + 2} T${x + 14} ${mouthY + 2}`))}
        </>
      );
    case "mikir":
      return (
        <>
          {eyes(4, 6.5, 7, -5)}
          {line(`M${x + 16} ${y - 17} L${x + 38} ${y - 25}`)}
          {mouth(line(`M${x - 4} ${mouthY + 3} L${x + 14} ${mouthY - 2}`))}
        </>
      );
    case "malu":
      return (
        <>
          {eyes(3.5, 5, 0, 5)}
          {blush}
          {mouth(line(`M${x - 8} ${mouthY + 2} Q${x - 3} ${mouthY - 3} ${x} ${mouthY + 2} T${x + 8} ${mouthY + 2}`))}
        </>
      );
    case "sedih":
      return (
        <>
          {eyes()}
          {mouth(line(`M${x - 13} ${mouthY + 5} Q${x} ${mouthY - 7} ${x + 13} ${mouthY + 5}`))}
          {line(`M${x - 36} ${y - 14} L${x - 20} ${y - 20}`)}
          {line(`M${x + 20} ${y - 20} L${x + 36} ${y - 14}`)}
        </>
      );
    case "kesal":
      return (
        <>
          {eyes(4, 4.5, 0, 2)}
          {line(`M${x - 36} ${y - 16} L${x - 18} ${y - 8}`)}
          {line(`M${x + 18} ${y - 8} L${x + 36} ${y - 16}`)}
          {mouth(line(`M${x - 12} ${mouthY + 5} Q${x} ${mouthY - 5} ${x + 12} ${mouthY + 5}`))}
        </>
      );
    case "marah":
      return (
        <>
          {eyes()}
          {line(`M${x - 38} ${y - 22} L${x - 18} ${y - 12}`)}
          {line(`M${x + 18} ${y - 12} L${x + 38} ${y - 22}`)}
          {mouth(line(`M${x - 11} ${mouthY + 2} L${x + 11} ${mouthY + 2}`))}
        </>
      );
    case "mataTertutup":
      return (
        <>
          {arcEyes(false)}
          {mouth(smile)}
        </>
      );
    default:
      return (
        <>
          {eyes()}
          {mouth(smile)}
        </>
      );
  }
};

// Ekspresi berwaktu: `at` dalam detik, urut naik.
export type FaceKey = { readonly at: number; readonly expression: GanjarStickmanExpression };

const expressionAt = (keys: readonly FaceKey[] | undefined, fallback: GanjarStickmanExpression, frame: number, fps: number): GanjarStickmanExpression => {
  let current = fallback;
  for (const k of keys ?? []) if (Math.round(k.at * fps) <= frame) current = k.expression;
  return current;
};

export type GanjarStickmanProps = {
  // Tinggi karakter dalam px.
  readonly height?: number;
  readonly expression?: GanjarStickmanExpression;
  // Ganti ekspresi pada waktu tertentu (detik); menimpa `expression` setelah entri pertama.
  readonly face?: readonly FaceKey[];
  readonly walk?: boolean;
  readonly wave?: boolean;
  // Gerak tangan; menimpa `wave`.
  readonly gesture?: Gesture;
  readonly style?: React.CSSProperties;
  // Mulut membuka dan menutup (bicara), menimpa bentuk mulut ekspresi.
  readonly talking?: boolean;
  // Pakai headphone atau tidak. Bawaan false: ciri khas Ganjar di edumotion adalah rambut tiga garis.
  readonly headphones?: boolean;
  // Hoodie dan celana pendek. `false` = stickman polos, hanya garis.
  readonly outfit?: boolean;
  // Rambut: tiga helai garis hitam di atas kepala.
  readonly hair?: boolean;
  // Warna (hex) hoodie, celana pendek, dan tali/kantong hoodie; bawaan gelap dan abu-abu. Pembawa mengisinya dari warna topik video.
  readonly aksen?: { readonly hoodie: string; readonly celana: string; readonly tali: string };
  readonly color?: string;
  // Isi kepala dan badan polos (bawaan putih). Tema Dark Chalk memakai warna latar supaya hanya garis yang terlihat.
  readonly fill?: string;
  // Topi newsboy cap dengan warna isi ini (hex); rambut disembunyikan bila topi dipakai.
  readonly topi?: string;
  // Mantel detektif (Inverness ala Sherlock Holmes) dipakai di atas stickman polos (`outfit` false):
  // `badan` = mantel panjang dan lengan, `jubah` = jubah pendek di bahu.
  readonly mantel?: { readonly badan: string; readonly jubah: string };
  // Gaya topi: "newsboy" (bawaan) atau "detektif" (deerstalker ala Sherlock Holmes: kubah tinggi, pita di puncak, lipatan penutup telinga).
  readonly topiGaya?: "newsboy" | "detektif";
  // Warna rambut (bawaan hitam).
  readonly hairColor?: string;
  // Tebal garis dalam unit viewBox (400 lebar).
  readonly strokeWidth?: number;
};

export const ganjarStickmanSize = (height: number): { width: number; height: number } => ({
  width: (height * VIEWBOX.w) / VIEWBOX.h,
  height,
});

// Badan buah pir: sempit di bahu, melebar ke pinggul, dasar membulat.
const HOODIE = P.hoodie;
const SHORTS = { fill: P.shorts, top: 34, bottom: 37, len: 0.42 } as const;
const TRIM = P.trim;
const SLEEVE_W = 13;
const POCKET = "M171 232 L229 232 L238 266 Q200 276 162 266 Z";
// Mantel detektif: badan memanjang dan melebar sampai lutut; jubah pendek menutupi bahu.
const COAT = "M174 158 C168 200 152 250 150 324 Q200 334 250 324 C248 250 232 200 226 158 Z";
const CAPE = "M170 160 C146 172 130 204 132 232 Q166 246 200 240 Q234 246 268 232 C270 204 254 172 230 160 Z";
export const TORSO =
  "M174 158 C169 195 153 235 159 262 C163 280 180 284 200 284 C220 284 237 280 241 262 C247 235 231 195 226 158";

export const GanjarStickman: React.FC<GanjarStickmanProps> = ({
  height = 640,
  expression: expressionProp = "senyum",
  face,
  walk = false,
  wave = false,
  gesture,
  talking = false,
  headphones = false,
  outfit = true,
  hair = true,
  aksen,
  color = P.ink,
  fill = P.white,
  topi,
  mantel,
  topiGaya = "newsboy",
  hairColor = DARK,
  strokeWidth = 5,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const expression = expressionAt(face, expressionProp, frame, fps);
  const pose = poseAt(frame / fps, walk, wave, gesture);
  const stroke = { fill, stroke: color, strokeWidth, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  const open = { ...stroke, fill: "none" } as const;

  const arm = (side: 1 | -1, a: ArmPose, front: boolean): React.ReactNode => {
    if (Boolean(a.front) !== front) return null;
    const from = { x: 200 + side * SHOULDER.dx, y: SHOULDER.y };
    const elbow = reach(from, BONE.upperArm, a.shoulder, side);
    const dir = a.shoulder + a.elbow;
    const hand = reach(elbow, BONE.foreArm, dir, side);
    const rad = (dir * Math.PI) / 180;
    const c = { x: hand.x + side * Math.sin(rad) * HAND.ry, y: hand.y + Math.cos(rad) * HAND.ry };
    return (
      <g key={side}>
        {/* tangan digambar lebih dulu: masuk ke lengan hoodie, hanya separuh bawah telapak yang tampak */}
        {outfit && <ellipse cx={c.x} cy={c.y} rx={HAND.rx} ry={HAND.ry} transform={`rotate(${-side * dir} ${c.x} ${c.y})`} {...stroke} />}
        <path d={`M${from.x} ${from.y} Q${elbow.x} ${elbow.y} ${hand.x} ${hand.y}`} {...open} strokeWidth={outfit ? SLEEVE_W + strokeWidth * 2 : strokeWidth} />
        {outfit && <path d={`M${from.x} ${from.y} Q${elbow.x} ${elbow.y} ${hand.x} ${hand.y}`} fill="none" stroke={hoodie} strokeWidth={SLEEVE_W} strokeLinecap="round" />}
        {/* mantel: lengan tebal warna mantel, berhenti sebelum tangan */}
        {!outfit && mantel && <path d={`M${from.x} ${from.y} Q${elbow.x} ${elbow.y} ${lerpPt(elbow, hand, 0.7).x} ${lerpPt(elbow, hand, 0.7).y}`} fill="none" stroke={color} strokeWidth={SLEEVE_W + strokeWidth * 2} strokeLinecap="round" />}
        {!outfit && mantel && <path d={`M${from.x} ${from.y} Q${elbow.x} ${elbow.y} ${lerpPt(elbow, hand, 0.7).x} ${lerpPt(elbow, hand, 0.7).y}`} fill="none" stroke={mantel.badan} strokeWidth={SLEEVE_W} strokeLinecap="round" />}
        {/* polos: loop tangan utuh di ujung garis lengan */}
        {!outfit && <ellipse cx={c.x} cy={c.y} rx={HAND.rx} ry={HAND.ry} transform={`rotate(${-side * dir} ${c.x} ${c.y})`} {...stroke} />}
      </g>
    );
  };

  const lerpPt = (a: Pt, b: Pt, t: number): Pt => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });
  const shortsFill = aksen?.celana ?? SHORTS.fill;
  const trim = aksen?.tali ?? TRIM;
  const hoodie = aksen?.hoodie ?? HOODIE;
  const shorts = (hip: Pt, foot: Pt): string => {
    const dx = foot.x - hip.x;
    const dy = foot.y - hip.y;
    const n = Math.hypot(dx, dy);
    const d = { x: dx / n, y: dy / n };
    const p = { x: -d.y, y: d.x };
    // mulai sedikit di atas pinggul supaya tidak ada celah di bawah badan
    const a = { x: hip.x - d.x * 5, y: hip.y - d.y * 5 };
    const b = { x: hip.x + d.x * n * SHORTS.len, y: hip.y + d.y * n * SHORTS.len };
    const c = (o: Pt, w: number, k: 1 | -1): string => `${(o.x + p.x * (w / 2) * k).toFixed(1)} ${(o.y + p.y * (w / 2) * k).toFixed(1)}`;
    return `M${c(a, SHORTS.top, -1)} L${c(a, SHORTS.top, 1)} L${c(b, SHORTS.bottom, 1)} L${c(b, SHORTS.bottom, -1)} Z`;
  };

  const leg = (side: 1 | -1, l: LegPose): React.ReactNode => {
    const hip = { x: 200 + side * 19, y: HIP_Y + 1 };
    const len = BONE.leg - l.lift;
    const knee = reach(hip, len * 0.5, l.out * 0.4, side);
    const foot = reach(hip, len, l.out, side);
    return (
      <g key={side}>
        <path d={`M${hip.x} ${hip.y} Q${knee.x} ${knee.y} ${foot.x} ${foot.y}`} {...open} />
        {/* celana pendek kotak: trapesium dengan ujung rata tegak lurus kaki */}
        {outfit && <path d={shorts(hip, foot)} {...stroke} fill={shortsFill} strokeLinejoin="miter" />}
        <ellipse cx={foot.x + side * 11} cy={foot.y + 1} rx={17} ry={6.5} transform={`rotate(${side * -6} ${foot.x} ${foot.y})`} {...stroke} />
      </g>
    );
  };

  return (
    <svg
      width={ganjarStickmanSize(height).width}
      height={height}
      viewBox={`0 0 ${VIEWBOX.w} ${VIEWBOX.h}`}
      style={{ overflow: "visible", display: "block", ...style }}
    >
      <g transform={`translate(0 ${pose.bobY})`}>
        {leg(-1, pose.legs[0])}
        {leg(1, pose.legs[1])}
        <g transform={`rotate(${pose.sway} 200 ${HIP_Y})`}>
          {/* lengan di belakang badan: pangkalnya tertutup isi putih badan */}
          {arm(-1, pose.arms[0], false)}
          {arm(1, pose.arms[1], false)}
          {!outfit && mantel ? (
            <>
              {/* mantel panjang sampai lutut, belahan depan dan kancing */}
              <path d={COAT} {...stroke} fill={mantel.badan} />
              <path d="M200 192 L200 326" fill="none" stroke={color} strokeWidth={strokeWidth * 0.5} strokeLinecap="round" />
              <path d="M172 214 L228 214 M168 262 L232 262 M162 300 L238 300" fill="none" stroke={color} strokeWidth={strokeWidth * 0.3} opacity={0.6} />
              {[214, 240, 266].map((cy) => <circle key={cy} cx={208} cy={cy} r={3.2} fill={color} />)}
              {/* jubah pendek Inverness di bahu */}
              <path d={CAPE} {...stroke} fill={mantel.jubah} />
              <path d="M184 164 L200 194 L216 164" fill="none" stroke={color} strokeWidth={strokeWidth * 0.7} strokeLinecap="round" strokeLinejoin="round" />
            </>
          ) : (
            <path d={TORSO} {...stroke} fill={outfit ? hoodie : fill} />
          )}
          {outfit && (
            <>
              {/* kantong kanguru dan tali hoodie */}
              <path d={POCKET} fill="none" stroke={trim} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M189 180 L187 208 M211 180 L213 208" fill="none" stroke={trim} strokeWidth={3.5} strokeLinecap="round" />
              {/* tudung menumpuk di leher, sebagian tertutup kepala */}
              <ellipse cx={NECK.x} cy={NECK.y + 4} rx={52} ry={17} {...stroke} fill={hoodie} />
            </>
          )}
          <g transform={`rotate(${pose.headTilt} ${NECK.x} ${NECK.y})`}>
            <ellipse cx={HEAD.x} cy={HEAD.y} rx={HEAD.rx} ry={HEAD.ry} {...stroke} />
            <Face e={expression} ink={color} w={strokeWidth * 0.8} talk={talking ? talkAmount(frame / fps) : undefined} />
            {topi && topiGaya === "newsboy" && (
              <g fill={topi} stroke={color} strokeWidth={strokeWidth * 0.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M138 88 C132 44 170 30 200 34 C230 30 268 44 262 88 C236 78 164 78 138 88 Z" />
                <path d="M146 86 Q200 108 254 86 Q248 98 200 100 Q152 98 146 86 Z" />
                <path d="M200 36 L200 80 M170 40 Q162 62 158 82 M230 40 Q238 62 242 82" fill="none" strokeWidth={strokeWidth * 0.45} />
                <circle cx={200} cy={33} r={5} />
              </g>
            )}
            {topi && topiGaya === "detektif" && (
              // skala 0.9 berporos di tengah bawah pet supaya topi tetap duduk di kepala
              <g transform="translate(200 100) scale(0.9) translate(-200 -100)" fill={topi} stroke={color} strokeWidth={strokeWidth * 0.8} strokeLinecap="round" strokeLinejoin="round">
                {/* kubah: duduk di atas kepala (alas y 82), tidak turun ke wajah */}
                <path d="M132 82 C124 30 164 14 200 14 C236 14 276 30 268 82 Q200 94 132 82 Z" />
                {/* motif kotak tweed dan lipatan penutup telinga yang diikat di atas */}
                <path d="M200 16 L200 74 M136 50 Q200 34 264 50 M150 30 Q138 56 140 78 M250 30 Q262 56 260 78" fill="none" strokeWidth={strokeWidth * 0.4} />
                {/* bibir depan: bulan sabit tebal di tengah, menipis ke samping, sedikit lebih gelap supaya terbaca sebagai pet */}
                <path d="M134 82 Q200 94 266 82 Q262 102 200 107 Q138 102 134 82 Z" />
                <path d="M134 82 Q200 94 266 82 Q262 102 200 107 Q138 102 134 82 Z" fill={DARK} stroke="none" opacity={0.28} />
                {/* pita pengikat di puncak */}
                <path d="M200 16 C180 -6 156 4 182 20 Z M200 16 C220 -6 244 4 218 20 Z" />
                <circle cx={200} cy={16} r={6} />
              </g>
            )}
            {headphones && (
              <>
                <path d={BAND} fill="none" stroke={DARK} strokeWidth={9} strokeLinecap="round" />
                {([-1, 1] as const).map((side) => (
                  <g key={side}>
                    <ellipse cx={HEAD.x + side * CUP.dx} cy={CUP.y} rx={CUP.rx} ry={CUP.ry} fill={DARK} stroke={color} strokeWidth={strokeWidth * 0.6} />
                    <ellipse cx={HEAD.x + side * (CUP.dx + side * 3)} cy={CUP.y} rx={6} ry={14} fill={ACCENT} />
                  </g>
                ))}
              </>
            )}
            {/* rambut di atas pita headphone supaya helainya tidak terpotong */}
            {hair && !topi && <path d={HAIR} fill="none" stroke={hairColor} strokeWidth={strokeWidth * 0.9} strokeLinecap="round" />}
          </g>
          {/* lengan yang melintas di depan kepala atau badan (facepalm, mikir, tepuk, ...) */}
          {arm(-1, pose.arms[0], true)}
          {arm(1, pose.arms[1], true)}
        </g>
      </g>
    </svg>
  );
};
