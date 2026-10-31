import type React from "react";
import { Highlight, RimBody, stickArm, stickLeg } from "../shapes";
import type { CastDefinition } from "../types";

const C = { body: "#64B5F6", rim: "#3D97E3", shine: "#C6E7FF", limb: "#2A7BC8", ink: "#0F3D5E", blush: "#B9A6E8", tongue: "#FF8FA3" };

const DROP = "M400 90 C430 180 590 330 590 480 C590 590 505 660 400 660 C295 660 210 590 210 480 C210 330 370 180 400 90 Z";

const Body: React.FC = () => (
  <g>
    <RimBody id="body" d={DROP} rim={C.rim} main={C.body} cx={400} top={90} />
    <Highlight d="M478 248 C505 285 530 325 545 372" color={C.shine} />
    <Highlight d="M500 590 C520 575 535 556 544 536" color={C.shine} width={12} />
  </g>
);

const Bubbles: React.FC = () => (
  <g id="extras" fill="none" stroke={C.body} strokeWidth={7}>
    <ellipse cx={610} cy={150} rx={15} ry={20} />
    <circle cx={650} cy={215} r={12} />
    <circle cx={190} cy={235} r={8} />
  </g>
);

export const TETES: CastDefinition = {
  id: "tetes",
  name: "Tetes",
  topic: "air & lingkungan",
  brief: "Tetes air biru, mata titik, pipi merona, gelembung kecil, kaki tipis.",
  colors: C,
  face: {
    cx: 400,
    eyeY: 460,
    eyeGap: 74,
    eyeRx: 26,
    eyeRy: 33,
    style: "dot",
    mouthY: 520,
    mouthScale: 0.82,
    ball: C.ink,
    pupil: C.ink,
    lid: C.body,
    ink: C.ink,
    accent: C.tongue,
    blush: { color: C.blush, gap: 122, y: 528, rx: 32, ry: 20 },
  },
  legs: {
    left: { part: stickLeg("leg_left", 355, 640, 335, C.limb), pivot: [355, 640] },
    right: { part: stickLeg("leg_right", 445, 640, 465, C.limb), pivot: [445, 640] },
  },
  body: Body,
  arms: {
    left: { part: stickArm("arm_left", 216, 520, -1, C.limb), pivot: [216, 520] },
    right: { part: stickArm("arm_right", 584, 520, 1, C.limb), pivot: [584, 520] },
  },
  extras: Bubbles,
  marks: { x: 430, y: 420, scale: 0.95 },
  deviations: ["Lengan tipis ditambahkan (referensi tanpa lengan)."],
};
