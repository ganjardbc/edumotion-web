import type React from "react";
import { Highlight, RimBody, stickArm, stickLeg } from "../shapes";
import type { CastDefinition } from "../types";

const C = { body: "#FFD93B", rim: "#F2B01E", shine: "#FFF1A0", limb: "#C98A0C", ink: "#4A3200", blush: "#FF9A7A", tongue: "#FF8A65" };

const BOLT = "M430 140 L560 140 L470 330 L580 330 L330 670 L380 470 L240 470 Z";

const Body: React.FC = () => (
  <g>
    <RimBody id="body" d={BOLT} rim={C.rim} main={C.body} cx={410} top={140} scale={0.95} />
    <Highlight d="M436 176 L300 440" color={C.shine} width={14} />
  </g>
);

export const PETIR: CastDefinition = {
  id: "petir",
  name: "Petir",
  topic: "cuaca & air",
  brief: "Kilat kuning bergerigi dengan wajah di bagian tengah, pipi merona, lengan dan kaki tipis.",
  colors: C,
  face: {
    cx: 400,
    eyeY: 385,
    eyeGap: 50,
    eyeRx: 18,
    eyeRy: 26,
    style: "dot",
    mouthY: 440,
    mouthScale: 0.7,
    ball: C.ink,
    pupil: C.ink,
    lid: C.body,
    ink: C.ink,
    accent: C.tongue,
  },
  legs: {
    left: { part: stickLeg("leg_left", 350, 628, 325, C.limb), pivot: [350, 628] },
    right: { part: stickLeg("leg_right", 372, 628, 405, C.limb), pivot: [372, 628] },
  },
  body: Body,
  arms: {
    left: { part: stickArm("arm_left", 250, 440, -1, C.limb), pivot: [250, 440] },
    right: { part: stickArm("arm_right", 562, 350, 1, C.limb), pivot: [562, 350] },
  },
  marks: { x: 440, y: 340, scale: 0.9 },
  deviations: ["Wajah digeser sedikit ke kiri tengah mengikuti badan kilat yang miring."],
};
