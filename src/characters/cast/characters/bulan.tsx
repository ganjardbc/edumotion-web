import type React from "react";
import { Highlight, RimBody, stickArm, stickLeg } from "../shapes";
import type { CastDefinition } from "../types";

const C = { body: "#EDE7C9", rim: "#CFC7A2", shine: "#FFFFFF", crater: "#D9D2B0", cap: "#5C6BC0", capDark: "#3F4C9A", pom: "#FFFFFF", limb: "#8C86B0", ink: "#33305A", blush: "#F4B6C2", tongue: "#FF9FB0" };

const DISC = "M400 225 C502 225 585 308 585 410 C585 512 502 595 400 595 C298 595 215 512 215 410 C215 308 298 225 400 225 Z";

const Body: React.FC = () => (
  <g>
    <RimBody id="body" d={DISC} rim={C.rim} main={C.body} cx={400} top={225} scale={0.95} />
    <circle cx={292} cy={500} r={26} fill={C.crater} />
    <circle cx={520} cy={520} r={18} fill={C.crater} />
    <circle cx={540} cy={330} r={14} fill={C.crater} />
    <Highlight d="M262 360 C270 324 292 296 322 278" color={C.shine} />
  </g>
);

// Topi tidur biru dengan pompom.
const Cap: React.FC = () => (
  <g id="topper">
    <path d="M262 300 C282 196 360 140 470 130 C492 190 530 250 548 300 C480 276 330 276 262 300 Z" fill={C.cap} />
    <path d="M250 300 C330 268 480 268 560 300 C560 316 540 322 520 316 C470 298 340 298 290 316 C268 322 250 316 250 300 Z" fill={C.capDark} />
    <circle cx={474} cy={126} r={24} fill={C.pom} />
  </g>
);

export const BULAN: CastDefinition = {
  id: "bulan",
  name: "Bulan",
  topic: "bumi & antariksa",
  brief: "Bulan purnama krem dengan kawah, topi tidur biru berpompom, pipi merona, lengan dan kaki tipis.",
  colors: C,
  face: {
    cx: 400,
    eyeY: 395,
    eyeGap: 70,
    eyeRx: 22,
    eyeRy: 30,
    style: "dot",
    mouthY: 462,
    mouthScale: 0.85,
    ball: C.ink,
    pupil: C.ink,
    lid: C.body,
    ink: C.ink,
    accent: C.tongue,
    blush: { color: C.blush, gap: 122, y: 458, rx: 28, ry: 17 },
  },
  legs: {
    left: { part: stickLeg("leg_left", 365, 590, 348, C.limb), pivot: [365, 590] },
    right: { part: stickLeg("leg_right", 435, 590, 452, C.limb), pivot: [435, 590] },
  },
  body: Body,
  topper: { part: Cap, pivot: [400, 300], swing: 0.4 },
  arms: {
    left: { part: stickArm("arm_left", 220, 450, -1, C.limb), pivot: [220, 450] },
    right: { part: stickArm("arm_right", 580, 450, 1, C.limb), pivot: [580, 450] },
  },
  marks: { x: 450, y: 360, scale: 1 },
  deviations: ["Topi tidur ditambahkan agar mudah dibedakan dari Bumi dan Matahari."],
};
