import type React from "react";
import { Highlight, RimBody, stickArm, stickLeg } from "../shapes";
import type { CastDefinition } from "../types";

const C = { body: "#FF7043", rim: "#E64A19", shine: "#FFAB91", belly: "#FFD54F", limb: "#BF360C", ink: "#4A1A0A", blush: "#FFB199", tongue: "#FF8A80" };

const FLAME =
  "M400 110 C430 210 560 280 570 440 C578 560 500 650 400 650 C300 650 222 560 230 440 C238 350 300 320 330 250 C350 290 370 300 380 290 C380 220 380 160 400 110 Z";
const BELLY = "M400 380 C470 440 530 500 520 570 C510 625 460 650 400 650 C340 650 290 625 280 570 C270 500 330 440 400 380 Z";

const Body: React.FC = () => (
  <g>
    <RimBody id="body" d={FLAME} rim={C.rim} main={C.body} cx={400} top={110} scale={0.96} />
    <path d={BELLY} fill={C.belly} />
    <Highlight d="M268 430 C272 396 288 372 312 354" color={C.shine} />
  </g>
);

export const API: CastDefinition = {
  id: "api",
  name: "Api",
  topic: "sains dasar",
  brief: "Nyala api oranye dengan perut kuning terang, mata titik, lengan dan kaki tipis.",
  colors: C,
  face: {
    cx: 400,
    eyeY: 470,
    eyeGap: 54,
    eyeRx: 19,
    eyeRy: 26,
    style: "dot",
    mouthY: 535,
    mouthScale: 0.75,
    ball: C.ink,
    pupil: C.ink,
    lid: C.belly,
    ink: C.ink,
    accent: C.tongue,
  },
  legs: {
    left: { part: stickLeg("leg_left", 365, 630, 348, C.limb), pivot: [365, 630] },
    right: { part: stickLeg("leg_right", 435, 630, 452, C.limb), pivot: [435, 630] },
  },
  body: Body,
  arms: {
    left: { part: stickArm("arm_left", 236, 490, -1, C.limb), pivot: [236, 490] },
    right: { part: stickArm("arm_right", 564, 490, 1, C.limb), pivot: [564, 490] },
  },
  marks: { x: 440, y: 420, scale: 0.9 },
  deviations: [],
};
