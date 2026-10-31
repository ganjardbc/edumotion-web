import type React from "react";
import { Highlight, stickArm, stickLeg } from "../shapes";
import type { CastDefinition } from "../types";

const C = { ocean: "#4FA8E0", rim: "#3B8FCC", land: "#5FB07A", landDark: "#4A9A66", limb: "#1F5A78", ink: "#0F3350", blush: "#F08DA0", shine: "#BFE4FA", tongue: "#FF6B7D" };

const CX = 400;
const CY = 375;
const R = 245;

const Body: React.FC = () => (
  <g id="body">
    <clipPath id="bumi-globe">
      <circle cx={CX} cy={CY} r={R} />
    </clipPath>
    <circle cx={CX} cy={CY} r={R} fill={C.rim} />
    <circle cx={CX - 6} cy={CY - 8} r={R - 10} fill={C.ocean} />
    <g clipPath="url(#bumi-globe)">
      <path d="M170 300 C190 210 280 140 370 130 C390 170 350 190 330 235 C300 245 300 290 262 300 C235 335 200 345 170 300 Z" fill={C.land} />
      <path d="M470 150 C550 150 640 240 660 330 C640 390 600 360 580 310 C540 300 490 290 480 240 C450 210 450 170 470 150 Z" fill={C.land} />
      <path d="M300 560 C350 540 430 560 470 590 C450 640 340 650 290 620 C280 600 285 575 300 560 Z" fill={C.landDark} />
      <path d="M600 470 C640 450 670 470 660 510 C630 560 590 590 560 590 C560 550 570 500 600 470 Z" fill={C.landDark} />
    </g>
    <Highlight d="M225 235 C245 205 275 182 305 170" color={C.shine} width={13} />
  </g>
);

export const BUMI: CastDefinition = {
  id: "bumi",
  name: "Bumi",
  topic: "planet & tata surya",
  brief: "Planet biru dengan benua hijau, kaki tipis.",
  colors: C,
  face: {
    cx: CX,
    eyeY: 370,
    eyeGap: 74,
    eyeRx: 26,
    eyeRy: 33,
    style: "dot",
    mouthY: 430,
    mouthScale: 0.84,
    ball: C.ink,
    pupil: C.ink,
    lid: C.ocean,
    ink: C.ink,
    accent: C.tongue,
    blush: { color: C.blush, gap: 128, y: 442, rx: 36, ry: 22 },
  },
  legs: {
    left: { part: stickLeg("leg_left", 345, 610, 325, C.limb), pivot: [345, 610] },
    right: { part: stickLeg("leg_right", 455, 610, 475, C.limb), pivot: [455, 610] },
  },
  body: Body,
  arms: {
    left: { part: stickArm("arm_left", 168, 455, -1, C.limb), pivot: [168, 455] },
    right: { part: stickArm("arm_right", 632, 455, 1, C.limb), pivot: [632, 455] },
  },
  marks: { x: 470, y: 300, scale: 1.05 },
  deviations: ["Lengan tipis ditambahkan (referensi tanpa lengan).", "Cincin dan antena referensi dihilangkan atas permintaan.", "Benua tidak mengisi area wajah; garis pantai referensi disederhanakan."],
};
