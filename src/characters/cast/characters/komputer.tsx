import type React from "react";
import { Highlight, RimBody, stickArm, stickLeg } from "../shapes";
import type { CastDefinition } from "../types";

const C = { body: "#5B7CFA", rim: "#4261D6", shine: "#A9BBFF", screen: "#EAF1FF", base: "#3A52B8", limb: "#2A3D8C", ink: "#1B2A5E", blush: "#FFB3C1", tongue: "#FF8FA3" };

const LID = "M218 210 L582 210 Q612 210 612 240 L612 520 Q612 550 582 550 L218 550 Q188 550 188 520 L188 240 Q188 210 218 210 Z";
const SCREEN = "M234 236 L566 236 Q586 236 586 256 L586 508 Q586 528 566 528 L234 528 Q214 528 214 508 L214 256 Q214 236 234 236 Z";
const BASE = "M170 550 L630 550 Q650 550 650 566 Q650 592 624 592 L176 592 Q150 592 150 566 Q150 550 170 550 Z";

const Body: React.FC = () => (
  <g>
    <RimBody id="lid" d={LID} rim={C.rim} main={C.body} cx={400} top={210} scale={0.97} />
    <path d={SCREEN} fill={C.screen} />
    <circle cx={400} cy={222} r={5} fill={C.ink} opacity={0.6} />
    <Highlight d="M200 238 L200 300" color={C.shine} width={12} />
    <RimBody id="base" d={BASE} rim={C.limb} main={C.base} cx={400} top={550} scale={0.94} />
    <rect x={350} y={550} width={100} height={12} rx={6} fill={C.limb} />
  </g>
);

export const KOMPUTER: CastDefinition = {
  id: "komputer",
  name: "Komputer",
  topic: "teknologi (komputer)",
  brief: "Laptop biru terbuka: layar terang jadi wajah, kamera di tengah atas, alas lebar, lengan dan kaki tipis.",
  colors: C,
  face: {
    cx: 400,
    eyeY: 365,
    eyeGap: 74,
    eyeRx: 22,
    eyeRy: 30,
    style: "dot",
    mouthY: 445,
    mouthScale: 0.9,
    ball: C.ink,
    pupil: C.ink,
    lid: C.screen,
    ink: C.ink,
    accent: C.tongue,
    blush: { color: C.blush, gap: 124, y: 440, rx: 28, ry: 17 },
  },
  legs: {
    left: { part: stickLeg("leg_left", 290, 585, 275, C.limb), pivot: [290, 585] },
    right: { part: stickLeg("leg_right", 510, 585, 525, C.limb), pivot: [510, 585] },
  },
  body: Body,
  arms: {
    left: { part: stickArm("arm_left", 190, 430, -1, C.limb), pivot: [190, 430] },
    right: { part: stickArm("arm_right", 610, 430, 1, C.limb), pivot: [610, 430] },
  },
  marks: { x: 450, y: 340, scale: 1 },
  deviations: ["Papan ketik tidak digambar; alas dibuat polos agar tidak ramai."],
};
