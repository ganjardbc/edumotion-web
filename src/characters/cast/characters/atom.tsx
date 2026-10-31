import type React from "react";
import { Highlight, RimBody, stickArm, stickLeg } from "../shapes";
import type { CastDefinition } from "../types";

const C = { body: "#26C6DA", rim: "#0097A7", shine: "#A6F0F7", orbit: "#7E57C2", electron: "#FFD84D", limb: "#0A7F8C", ink: "#07404A", blush: "#FFB3C1", tongue: "#FF8FA3" };

const NUCLEUS = "M400 270 C487 270 550 333 550 420 C550 507 487 570 400 570 C313 570 250 507 250 420 C250 333 313 270 400 270 Z";

// Tiga lintasan elektron di belakang inti; elektron ikut berputar bersama lintasan.
const Orbits: React.FC = () => (
  <g id="back" fill="none">
    {[0, 60, 120].map((deg) => (
      <g key={deg} transform={`rotate(${deg} 400 420)`}>
        <ellipse cx={400} cy={420} rx={290} ry={92} stroke={C.orbit} strokeWidth={10} />
        <circle cx={690} cy={420} r={20} fill={C.electron} stroke="none" />
      </g>
    ))}
  </g>
);

const Body: React.FC = () => (
  <g>
    <RimBody id="body" d={NUCLEUS} rim={C.rim} main={C.body} cx={400} top={270} scale={0.95} />
    <Highlight d="M280 380 C288 340 314 312 350 298" color={C.shine} />
  </g>
);

export const ATOM: CastDefinition = {
  id: "atom",
  name: "Atom",
  topic: "sains dasar",
  brief: "Inti tosca bermata bulat dikelilingi tiga lintasan ungu dengan elektron kuning, lengan dan kaki tipis.",
  colors: C,
  face: {
    cx: 400,
    eyeY: 410,
    eyeGap: 62,
    eyeRx: 22,
    eyeRy: 30,
    style: "dot",
    mouthY: 478,
    mouthScale: 0.85,
    ball: C.ink,
    pupil: C.ink,
    lid: C.body,
    ink: C.ink,
    accent: C.tongue,
    blush: { color: C.blush, gap: 106, y: 474, rx: 26, ry: 16 },
  },
  legs: {
    left: { part: stickLeg("leg_left", 365, 560, 348, C.limb), pivot: [365, 560] },
    right: { part: stickLeg("leg_right", 435, 560, 452, C.limb), pivot: [435, 560] },
  },
  back: { part: Orbits, pivot: [400, 420], swing: 0.5 },
  body: Body,
  arms: {
    left: { part: stickArm("arm_left", 254, 450, -1, C.limb), pivot: [254, 450] },
    right: { part: stickArm("arm_right", 546, 450, 1, C.limb), pivot: [546, 450] },
  },
  marks: { x: 450, y: 370, scale: 1 },
  deviations: ["Lintasan hanya tiga dan digambar di belakang inti agar wajah tetap terbaca."],
};
