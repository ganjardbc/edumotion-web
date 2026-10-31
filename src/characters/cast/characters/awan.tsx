import type React from "react";
import { Highlight, RimBody, stickArm, stickLeg } from "../shapes";
import type { CastDefinition } from "../types";

const C = { body: "#BFE3FA", rim: "#93CBF2", shine: "#EAF7FF", limb: "#2F6E9E", ink: "#1B3A6B", blush: "#C9B8EC", tongue: "#FF8FA3" };

const CLOUD =
  "M210 560 C150 570 110 520 125 470 C95 430 125 365 190 370 C185 300 250 260 300 285 C320 205 450 190 490 270 C540 240 610 270 605 340 C670 340 700 420 655 470 C665 530 600 570 550 550 C510 590 420 590 385 560 C340 590 260 590 210 560 Z";

const Body: React.FC = () => (
  <g>
    <RimBody id="body" d={CLOUD} rim={C.rim} main={C.body} cx={400} top={225} />
    <Highlight d="M335 268 C355 240 395 232 425 240" color={C.shine} />
    <Highlight d="M205 370 C215 342 240 325 262 322" color={C.shine} width={13} />
  </g>
);

export const AWAN: CastDefinition = {
  id: "awan",
  name: "Awan",
  topic: "cuaca & atmosfer",
  brief: "Awan gembul biru muda, mata titik, pipi merona, kaki tipis.",
  colors: C,
  face: {
    cx: 400,
    eyeY: 405,
    eyeGap: 72,
    eyeRx: 25,
    eyeRy: 31,
    style: "dot",
    mouthY: 460,
    mouthScale: 0.82,
    ball: C.ink,
    pupil: C.ink,
    lid: C.body,
    ink: C.ink,
    accent: C.tongue,
    blush: { color: C.blush, gap: 138, y: 468, rx: 40, ry: 24 },
  },
  legs: {
    left: { part: stickLeg("leg_left", 325, 566, 305, C.limb), pivot: [325, 566] },
    right: { part: stickLeg("leg_right", 475, 566, 495, C.limb), pivot: [475, 566] },
  },
  body: Body,
  arms: {
    left: { part: stickArm("arm_left", 142, 478, -1, C.limb), pivot: [142, 478] },
    right: { part: stickArm("arm_right", 658, 478, 1, C.limb), pivot: [658, 478] },
  },
  marks: { x: 440, y: 395, scale: 1.1 },
  deviations: ["Lengan tipis ditambahkan (referensi tanpa lengan) agar preset melambai, berpikir, dan reaksi jalan."],
};
