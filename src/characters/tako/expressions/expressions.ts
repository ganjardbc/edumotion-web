import type { BrowShape } from "../components/Brow";
import type { MarkName } from "../components/Marks";
import type { ExpressionName } from "../types";

export type BrowSpec = { readonly shape: BrowShape; readonly lift: number; readonly tilt: number };

export type EyeSpec = {
  readonly lid: number;
  readonly lidTilt: number;
  readonly pupilScale: number;
  readonly arc?: boolean;
  // Arah pandang bawaan ekspresi, ditambahkan ke gaze animasi.
  readonly gazeX?: number;
  readonly gazeY?: number;
};

export type ExpressionSpec = {
  readonly eye: { readonly left: EyeSpec; readonly right: EyeSpec };
  readonly brow: { readonly left: BrowSpec; readonly right: BrowSpec };
  // Tanda di sekitar kepala (Zz, ?, garis kaget). Mulut ada di expressions/mouths.ts dengan kunci yang sama.
  readonly marks?: MarkName;
};

const both = <T>(v: T) => ({ left: v, right: v });
const eyes = (e: EyeSpec) => both(e);
const brows = (b: BrowSpec) => both(b);

const OPEN: EyeSpec = { lid: 0, lidTilt: 0, pupilScale: 1 };

// Setiap ekspresi independen: ubah satu entri tanpa memengaruhi yang lain.
export const EXPRESSIONS: Record<ExpressionName, ExpressionSpec> = {
  happy: { eye: eyes(OPEN), brow: brows({ shape: "arch", lift: 0, tilt: 0 }) },
  curious: {
    eye: eyes({ ...OPEN, pupilScale: 1.05 }),
    brow: { left: { shape: "arch", lift: 0, tilt: 0 }, right: { shape: "arch", lift: 8, tilt: -6 } },
    marks: "sparks",
  },
  surprised: {
    eye: eyes({ lid: 0, lidTilt: 0, pupilScale: 0.7 }),
    brow: brows({ shape: "arch", lift: 10, tilt: 0 }),
    marks: "sparks",
  },
  angry: {
    eye: eyes({ lid: 0.24, lidTilt: 18, pupilScale: 0.8 }),
    brow: brows({ shape: "flat", lift: -46, tilt: 24 }),
  },
  sad: {
    eye: eyes({ lid: 0.16, lidTilt: -14, pupilScale: 0.9, gazeY: 0.6 }),
    brow: brows({ shape: "arch", lift: -6, tilt: -16 }),
  },
  sleepy: {
    eye: eyes({ lid: 0.42, lidTilt: 0, pupilScale: 0.85, gazeY: 0.4 }),
    brow: brows({ shape: "flat", lift: -30, tilt: -4 }),
    marks: "zzz",
  },
  confused: {
    eye: { left: { ...OPEN, pupilScale: 0.75 }, right: { lid: 0.16, lidTilt: 8, pupilScale: 0.75 } },
    brow: { left: { shape: "arch", lift: 8, tilt: -8 }, right: { shape: "flat", lift: -12, tilt: 14 } },
    marks: "question",
  },
  scared: {
    eye: eyes({ lid: 0, lidTilt: 0, pupilScale: 0.65 }),
    brow: brows({ shape: "arch", lift: 6, tilt: -16 }),
    marks: "fear",
  },
  laughing: {
    eye: eyes({ lid: 0, lidTilt: 0, pupilScale: 1, arc: true }),
    brow: brows({ shape: "arch", lift: 6, tilt: 0 }),
  },
  thinking: {
    eye: eyes({ lid: 0.08, lidTilt: 0, pupilScale: 0.95, gazeX: -0.6, gazeY: -0.7 }),
    brow: { left: { shape: "arch", lift: 2, tilt: 0 }, right: { shape: "arch", lift: 8, tilt: -8 } },
  },
};
