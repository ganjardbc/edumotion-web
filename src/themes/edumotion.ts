import { loadFont as loadNunito } from "@remotion/google-fonts/Nunito";
import { TAKO_PALETTE } from "../characters/tako/assets/palette";
import type { Theme } from "./types";

const { fontFamily } = loadNunito("normal", { weights: ["700", "800"], subsets: ["latin"] });

// Sumber: design-system/edumotion-design-system (theme.json, tokens/*.css)
export const edumotion: Theme = {
  fonts: { heading: fontFamily, body: fontFamily, mono: '"SF Mono", ui-monospace, "Courier New", monospace' },
  colors: {
    canvas: "#F7FAF4",
    surface: "#FFFFFF",
    ink: TAKO_PALETTE.dark,
    muted: "rgba(15, 61, 46, 0.65)",
    border: "rgba(15, 61, 46, 0.14)",
    line: "rgba(15, 61, 46, 0.14)",
    primary: TAKO_PALETTE.primary,
    primaryDark: TAKO_PALETTE.limb,
    primaryDeep: TAKO_PALETTE.limbShadow,
    primaryTint: "#EAF6E3",
    primarySoft: TAKO_PALETTE.secondary,
    onPrimary: "#FFFFFF",
    accent: TAKO_PALETTE.accent,
    onAccent: "#FFFFFF",
    danger: "#EF5350",
    success: TAKO_PALETTE.primary,
    ground: TAKO_PALETTE.dark,
    groundText: "#FFFFFF",
    groundTextMuted: "rgba(255, 255, 255, 0.78)",
    groundEmphasis: TAKO_PALETTE.secondary,
    groundChipBg: "#FFFFFF",
    groundChipText: TAKO_PALETTE.dark,
  },
  code: {
    bg: TAKO_PALETTE.dark,
    raised: "#17513F",
    text: "#F7FAF4",
    muted: "rgba(247, 250, 244, 0.65)",
    line: "rgba(247, 250, 244, 0.14)",
  },
  shadows: {
    md: "0 12px 0 rgba(15, 61, 46, 0.10)",
    glow: "0 8px 24px rgba(76, 175, 80, 0.30)",
    lift: "0 20px 40px rgba(15, 61, 46, 0.18)",
  },
  radius: { card: 28, large: 44 },
  type: { headlineTransform: "none", headlineWeight: 800, scale: 1, tracking: -0.02 },
  motion: { enter: [0.4, 0, 0.2, 1], pop: [0.34, 1.3, 0.64, 1] },
  logo: { src: "", width: 0, height: 0, round: true },
  handle: "@dipapantulis",
};
