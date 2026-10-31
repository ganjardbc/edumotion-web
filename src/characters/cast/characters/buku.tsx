import type React from "react";
import { Highlight, stickArm, stickLeg } from "../shapes";
import type { CastDefinition } from "../types";

const C = { cover: "#8E5FC2", spine: "#6E43A3", rim: "#7A4FB0", pages: "#EFE6F8", shine: "#B493E0", limb: "#4A2C78", ink: "#2A1548", blush: "#E58FB0", tongue: "#FF6B7D" };

const FACE_X = 430;

const Body: React.FC = () => (
  <g id="body">
    <rect x={236} y={150} width={398} height={502} rx={24} fill={C.pages} />
    <rect x={170} y={140} width={456} height={504} rx={26} fill={C.rim} />
    <rect x={232} y={140} width={394} height={494} rx={22} fill={C.cover} />
    <rect x={170} y={140} width={74} height={504} rx={26} fill={C.spine} />
    {[210, 270, 330, 390, 450, 510, 570].map((y) => (
      <path key={y} d={`M197 ${y} L197 ${y + 28}`} stroke={C.cover} strokeWidth={8} strokeLinecap="round" />
    ))}
    <Highlight d="M580 180 L596 196" color={C.shine} width={10} />
    <Highlight d="M268 590 L300 590" color={C.shine} width={10} />
  </g>
);

export const BUKU: CastDefinition = {
  id: "buku",
  name: "Buku",
  topic: "ilmu & pengetahuan",
  brief: "Buku ungu tebal dengan punggung jahitan, mata putih, kaki tipis.",
  colors: C,
  face: {
    cx: FACE_X,
    eyeY: 345,
    eyeGap: 76,
    eyeRx: 44,
    eyeRy: 52,
    style: "sclera",
    mouthY: 450,
    mouthScale: 0.9,
    ball: "#FFFFFF",
    pupil: C.ink,
    lid: C.cover,
    ink: C.ink,
    accent: C.tongue,
    blush: { color: C.blush, gap: 122, y: 438, rx: 30, ry: 18 },
  },
  legs: {
    left: { part: stickLeg("leg_left", 320, 640, 305, C.limb), pivot: [320, 640] },
    right: { part: stickLeg("leg_right", 520, 640, 535, C.limb), pivot: [520, 640] },
  },
  body: Body,
  arms: {
    left: { part: stickArm("arm_left", 176, 425, -1, C.limb), pivot: [176, 425] },
    right: { part: stickArm("arm_right", 622, 425, 1, C.limb), pivot: [622, 425] },
  },
  marks: { x: 450, y: 320, scale: 1 },
  deviations: ["Referensi miring 3/4; dibuat lurus menghadap depan.", "Lengan tipis ditambahkan (referensi tanpa lengan)."],
};
