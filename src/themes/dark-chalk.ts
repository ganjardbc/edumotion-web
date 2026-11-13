import { KAPUR } from "../dark-chalk/palette";
import { edumotion } from "./edumotion";
import type { Theme } from "./types";

// Tema Dark Chalk Storytelling: papan tulis hijau, tulisan kapur putih, sorotan emas. Turunan edumotion (font Nunito);
// hanya warna yang diganti. Caption memakai `ink` sebagai kontur dan `accent` sebagai kata yang sedang diucapkan.
export const darkChalk: Theme = {
  ...edumotion,
  colors: {
    ...edumotion.colors,
    canvas: KAPUR.hijau,
    surface: KAPUR.hijauTua,
    ink: KAPUR.hijauTua,
    muted: "rgba(242, 240, 232, 0.7)",
    border: "rgba(242, 240, 232, 0.25)",
    line: "rgba(242, 240, 232, 0.25)",
    primary: KAPUR.gold,
    onPrimary: KAPUR.hijauTua,
    accent: KAPUR.gold,
    onAccent: KAPUR.hijauTua,
    danger: KAPUR.orange,
    success: KAPUR.es,
    ground: KAPUR.hijauTua,
    groundText: KAPUR.chalk,
    groundTextMuted: "rgba(242, 240, 232, 0.75)",
    groundEmphasis: KAPUR.gold,
  },
  handle: "@dipapantulis",
};
