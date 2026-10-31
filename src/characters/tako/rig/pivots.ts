// Pivot dan geometri rig dalam koordinat viewBox 800x800.
// Badan diukur dari tampak "Depan" di design-references/tako_character_sheet.png; wajah dipusatkan di x = 400.
export const VIEWBOX_SIZE = 800;

export type Point = readonly [number, number];

export const PIVOTS = {
  antenna: [355, 195],
  armLeft: [305, 535],
  armRight: [496, 535],
  legLeft: [342, 640],
  legRight: [458, 640],
} as const satisfies Record<string, Point>;

// Titik tumpu seluruh tubuh: tengah dasar kaki. Squash/stretch dan kemiringan berporos di sini; ini juga titik jangkar posisi karakter.
export const GROUND: Point = [400, 730];

export type EyeGeometry = {
  readonly cx: number;
  readonly cy: number;
  readonly rx: number;
  readonly ry: number;
  // Pupil dan kilau, posisi awal: tepat di tengah bola mata. Kedua mata simetris terhadap x = 400 (wajah menghadap depan).
  readonly pupil: { readonly cx: number; readonly cy: number; readonly rx: number; readonly ry: number };
  readonly glint: { readonly cx: number; readonly cy: number; readonly r: number };
};

export const EYES: { readonly left: EyeGeometry; readonly right: EyeGeometry } = {
  left: {
    cx: 300,
    cy: 362,
    rx: 76,
    ry: 90,
    pupil: { cx: 300, cy: 362, rx: 38, ry: 50 },
    glint: { cx: 273, cy: 332, r: 8 },
  },
  right: {
    cx: 500,
    cy: 362,
    rx: 76,
    ry: 90,
    pupil: { cx: 500, cy: 362, rx: 38, ry: 50 },
    glint: { cx: 473, cy: 332, r: 8 },
  },
};

// Jarak geser pupil maksimum (satuan viewBox) untuk gaze = 1.
export const GAZE_RANGE = { x: 20, y: 16 } as const;

// Alis: pusat putar dan path tiap bentuk.
export const BROWS = {
  left: { center: [297, 234], arch: "M272 246 Q292 224 322 224", flat: "M272 238 Q297 230 322 234" },
  right: { center: [503, 234], arch: "M528 246 Q508 224 478 224", flat: "M528 238 Q503 230 478 234" },
} as const;

// Mulut: titik atas bibir tempat skala tinggi mulut berporos.
export const MOUTH_ANCHOR: Point = [400, 430];
