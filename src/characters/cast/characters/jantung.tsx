import type React from "react";
import { Highlight, Mirror, RimBody, stickLeg } from "../shapes";
import type { CastDefinition } from "../types";

const C = { body: "#EF5350", rim: "#D63B3E", shine: "#FF9A92", limb: "#A82A2E", stem: "#5A2A2A", ink: "#3D1416", tongue: "#FFB3B8" };

const HEART =
  "M400 640 C300 560 130 470 130 320 C130 220 210 170 285 185 C340 195 380 230 400 270 C420 230 460 195 515 185 C590 170 670 220 670 320 C670 470 500 560 400 640 Z";

const Body: React.FC = () => (
  <g>
    <RimBody id="body" d={HEART} rim={C.rim} main={C.body} cx={400} top={178} scale={0.95} />
    <Highlight d="M520 215 C555 212 590 232 605 262" color={C.shine} />
  </g>
);

const Stem: React.FC = () => (
  <g id="topper">
    <path d="M400 285 C395 230 405 175 435 135" fill="none" stroke={C.stem} strokeWidth={17} strokeLinecap="round" />
  </g>
);

const Hand: React.FC = () => (
  <>
    <path d="M152 395 Q118 425 100 470" fill="none" stroke={C.limb} strokeWidth={20} strokeLinecap="round" />
    <circle cx={100} cy={478} r={27} fill={C.limb} />
  </>
);

const HandLeft: React.FC = () => (
  <g id="arm_left">
    <Hand />
  </g>
);

const HandRight: React.FC = () => (
  <g id="arm_right">
    <Mirror>
      <Hand />
    </Mirror>
  </g>
);

export const JANTUNG: CastDefinition = {
  id: "jantung",
  name: "Jantung",
  topic: "tubuh manusia",
  brief: "Hati merah dengan tangkai pembuluh, tangan bulat, mata putih, kaki tipis.",
  colors: C,
  face: {
    cx: 400,
    eyeY: 345,
    eyeGap: 80,
    eyeRx: 46,
    eyeRy: 54,
    style: "sclera",
    mouthY: 450,
    mouthScale: 0.92,
    ball: "#FFFFFF",
    pupil: C.ink,
    lid: C.body,
    ink: C.ink,
    accent: C.tongue,
  },
  legs: {
    left: { part: stickLeg("leg_left", 365, 610, 348, C.limb), pivot: [365, 610] },
    right: { part: stickLeg("leg_right", 435, 610, 452, C.limb), pivot: [435, 610] },
  },
  body: Body,
  topper: { part: Stem, pivot: [400, 280], swing: 0.6 },
  arms: {
    left: { part: HandLeft, pivot: [152, 395] },
    right: { part: HandRight, pivot: [648, 395] },
  },
  marks: { x: 440, y: 320, scale: 1 },
  deviations: ["Sarung tinju referensi diganti lengan tipis dengan telapak bulat, sepasang agar simetris."],
};
