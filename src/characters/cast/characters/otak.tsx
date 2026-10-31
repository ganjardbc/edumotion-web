import type React from "react";
import { Highlight, RimBody, stickArm, stickLeg } from "../shapes";
import type { CastDefinition } from "../types";

const C = { body: "#F48FB1", rim: "#D96A92", shine: "#FFC7DA", limb: "#B24572", ink: "#4A1530", tongue: "#FFC1D5" };

const BRAIN =
  "M260 570 C190 550 160 480 190 420 C150 360 190 280 260 270 C270 220 340 190 400 210 C460 190 530 220 540 270 C610 280 650 360 610 420 C640 480 610 550 540 570 C500 610 440 610 400 595 C360 610 300 610 260 570 Z";

const Body: React.FC = () => (
  <g>
    <RimBody id="body" d={BRAIN} rim={C.rim} main={C.body} cx={400} top={190} scale={0.96} />
    <g fill="none" stroke={C.rim} strokeWidth={10} strokeLinecap="round">
      <path d="M400 214 C388 262 412 300 400 336" />
      <path d="M232 340 C262 330 280 346 290 372" />
      <path d="M568 340 C538 330 520 346 510 372" />
      <path d="M250 520 C280 530 300 520 312 500" />
      <path d="M550 520 C520 530 500 520 488 500" />
    </g>
    <Highlight d="M262 300 C278 280 300 268 326 262" color={C.shine} />
  </g>
);

export const OTAK: CastDefinition = {
  id: "otak",
  name: "Otak",
  topic: "tubuh manusia",
  brief: "Otak merah muda dengan lipatan, mata putih, lengan dan kaki tipis.",
  colors: C,
  face: {
    cx: 400,
    eyeY: 410,
    eyeGap: 74,
    eyeRx: 40,
    eyeRy: 48,
    style: "sclera",
    mouthY: 505,
    mouthScale: 0.9,
    ball: "#FFFFFF",
    pupil: C.ink,
    lid: C.body,
    ink: C.ink,
    accent: C.tongue,
  },
  legs: {
    left: { part: stickLeg("leg_left", 360, 590, 345, C.limb), pivot: [360, 590] },
    right: { part: stickLeg("leg_right", 440, 590, 455, C.limb), pivot: [440, 590] },
  },
  body: Body,
  arms: {
    left: { part: stickArm("arm_left", 176, 450, -1, C.limb), pivot: [176, 450] },
    right: { part: stickArm("arm_right", 624, 450, 1, C.limb), pivot: [624, 450] },
  },
  marks: { x: 450, y: 360, scale: 1 },
  deviations: [],
};
