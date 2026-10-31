import type React from "react";
import { Highlight, RimBody, stickArm, stickLeg } from "../shapes";
import type { CastDefinition } from "../types";

const C = { body: "#FFB300", rim: "#F08A00", shine: "#FFE082", limb: "#C76A00", ray: "#FFC933", ink: "#4A2A00", blush: "#FF8A50", tongue: "#FF8A65" };

const DISC = "M400 215 C505 215 585 295 585 400 C585 505 505 585 400 585 C295 585 215 505 215 400 C215 295 295 215 400 215 Z";

// Dua belas sinar pendek mengelilingi piringan; digambar di belakang badan.
const Rays: React.FC = () => (
  <g id="back" stroke={C.ray} strokeWidth={30} strokeLinecap="round">
    {Array.from({ length: 12 }, (_, i) => {
      const a = (i * Math.PI) / 6;
      const x = (r: number): number => 400 + Math.cos(a) * r;
      const y = (r: number): number => 400 + Math.sin(a) * r;
      return <line key={i} x1={x(222)} y1={y(222)} x2={x(268)} y2={y(268)} />;
    })}
  </g>
);

const Body: React.FC = () => (
  <g>
    <RimBody id="body" d={DISC} rim={C.rim} main={C.body} cx={400} top={215} scale={0.95} />
    <Highlight d="M268 330 C282 292 312 262 350 246" color={C.shine} />
  </g>
);

export const MATAHARI: CastDefinition = {
  id: "matahari",
  name: "Matahari",
  topic: "bumi & antariksa",
  brief: "Bola kuning-oranye dengan dua belas sinar pendek, pipi merona, lengan dan kaki tipis.",
  colors: C,
  face: {
    cx: 400,
    eyeY: 385,
    eyeGap: 74,
    eyeRx: 24,
    eyeRy: 32,
    style: "dot",
    mouthY: 455,
    mouthScale: 0.9,
    ball: C.ink,
    pupil: C.ink,
    lid: C.body,
    ink: C.ink,
    accent: C.tongue,
    blush: { color: C.blush, gap: 128, y: 450, rx: 30, ry: 18 },
  },
  legs: {
    left: { part: stickLeg("leg_left", 365, 580, 348, C.limb), pivot: [365, 580] },
    right: { part: stickLeg("leg_right", 435, 580, 452, C.limb), pivot: [435, 580] },
  },
  back: { part: Rays, pivot: [400, 400], swing: 0.3 },
  body: Body,
  arms: {
    left: { part: stickArm("arm_left", 220, 440, -1, C.limb), pivot: [220, 440] },
    right: { part: stickArm("arm_right", 580, 440, 1, C.limb), pivot: [580, 440] },
  },
  marks: { x: 450, y: 340, scale: 1 },
  deviations: [],
};
