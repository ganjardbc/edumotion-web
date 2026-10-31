export const EXPRESSION_NAMES = [
  "happy",
  "curious",
  "surprised",
  "angry",
  "sad",
  "sleepy",
  "confused",
  "scared",
  "laughing",
  "thinking",
] as const;
export type ExpressionName = (typeof EXPRESSION_NAMES)[number];

export const ANIMATION_NAMES = ["idle", "walk", "jump", "talk", "wave", "surprise", "confusion", "excitement", "thinking"] as const;
export type AnimationName = (typeof ANIMATION_NAMES)[number];

export type Side = "left" | "right";

// Pose bersifat aditif: semua nilai 0 = pose diam. Sudut dalam derajat, searah jarum jam positif (sumbu SVG).
// Jarak dalam satuan viewBox 800x800, bukan piksel.
export type Pose = {
  // Seluruh tubuh: geser, miring (porosnya garis kaki), dan squash/stretch (selisih dari skala 1).
  readonly bodyX: number;
  readonly bodyY: number;
  readonly bodyRotate: number;
  readonly squashX: number;
  readonly squashY: number;
  // Anggota badan. Untuk kedua lengan, sudut positif mengayun ke kiri layar (ke dalam untuk lengan kanan, keluar untuk lengan kiri).
  readonly antennaRotate: number;
  readonly armLeft: number;
  readonly armRight: number;
  readonly legLeft: number;
  readonly legRight: number;
  // Wajah (mata, alis, mulut) bergeser sedikit dari badan agar terasa menoleh.
  readonly faceX: number;
  readonly faceY: number;
  // Arah pandang -1..1 (kanan/bawah positif).
  readonly gazeX: number;
  readonly gazeY: number;
  // Kedip 0..1 (1 = tertutup), selisih mulut terbuka (skala Y mulut = 1 + mouthOpen), alis naik (satuan viewBox).
  readonly blink: number;
  readonly mouthOpen: number;
  readonly browLift: number;
};

export const NEUTRAL_POSE: Pose = {
  bodyX: 0,
  bodyY: 0,
  bodyRotate: 0,
  squashX: 0,
  squashY: 0,
  antennaRotate: 0,
  armLeft: 0,
  armRight: 0,
  legLeft: 0,
  legRight: 0,
  faceX: 0,
  faceY: 0,
  gazeX: 0,
  gazeY: 0,
  blink: 0,
  mouthOpen: 0,
  browLift: 0,
};

export type PartialPose = Partial<Pose>;

// Hasil satu preset animasi pada satu frame: delta pose, dan (opsional) ekspresi yang disarankan preset itu.
export type AnimationFrame = {
  readonly pose: PartialPose;
  readonly expression?: ExpressionName;
};

// Preset animasi murni: sama frame, sama hasil.
export type Animation = (frame: number, fps: number) => AnimationFrame;
