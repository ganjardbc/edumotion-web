import type React from "react";
import { Highlight, RimBody, stickArm, stickLeg } from "../shapes";
import type { CastDefinition } from "../types";

const C = { body: "#9CCC3B", rim: "#7BA82A", shine: "#D7EC8F", cap: "#B0BEC5", bolt: "#FFD84D", limb: "#4F6B1B", ink: "#27360E", blush: "#F4A9B8", tongue: "#FF8FA3" };

const CELL = "M330 222 L470 222 Q520 222 520 272 L520 570 Q520 620 470 620 L330 620 Q280 620 280 570 L280 272 Q280 222 330 222 Z";

const Body: React.FC = () => (
  <g>
    <RimBody id="body" d={CELL} rim={C.rim} main={C.body} cx={400} top={222} scale={0.95} />
    <path d="M412 478 L368 546 L398 546 L388 602 L434 530 L404 530 Z" fill={C.bolt} stroke={C.bolt} strokeWidth={6} strokeLinejoin="round" />
    <Highlight d="M300 262 L300 330" color={C.shine} width={14} />
  </g>
);

// Kutub atas baterai.
const Cap: React.FC = () => (
  <g id="topper">
    <rect x={358} y={186} width={84} height={44} rx={12} fill={C.cap} />
  </g>
);

export const BATERAI: CastDefinition = {
  id: "baterai",
  name: "Baterai",
  topic: "teknologi (energi)",
  brief: "Baterai hijau-limau dengan kutub abu di atas dan petir kuning di perut, lengan dan kaki tipis.",
  colors: C,
  face: {
    cx: 400,
    eyeY: 345,
    eyeGap: 52,
    eyeRx: 19,
    eyeRy: 27,
    style: "dot",
    mouthY: 410,
    mouthScale: 0.78,
    ball: C.ink,
    pupil: C.ink,
    lid: C.body,
    ink: C.ink,
    accent: C.tongue,
    blush: { color: C.blush, gap: 88, y: 412, rx: 22, ry: 14 },
  },
  legs: {
    left: { part: stickLeg("leg_left", 352, 610, 338, C.limb), pivot: [352, 610] },
    right: { part: stickLeg("leg_right", 448, 610, 462, C.limb), pivot: [448, 610] },
  },
  body: Body,
  topper: { part: Cap, pivot: [400, 226], swing: 0.3 },
  arms: {
    left: { part: stickArm("arm_left", 282, 440, -1, C.limb), pivot: [282, 440] },
    right: { part: stickArm("arm_right", 518, 440, 1, C.limb), pivot: [518, 440] },
  },
  marks: { x: 440, y: 330, scale: 0.9 },
  deviations: [],
};
