import type React from "react";
import { Highlight, Mirror, RimBody } from "../shapes";
import type { CastDefinition } from "../types";

const C = { body: "#F9C74F", rim: "#E8A93A", shine: "#FFE08A", limb: "#EFB23F", hat: "#C9973A", hatDark: "#8C5A1E", ink: "#3D2A10", tongue: "#FF6B7D" };

const EGG = "M400 225 C520 225 585 320 580 450 C576 560 540 668 470 672 L330 672 C260 668 224 560 220 450 C215 320 280 225 400 225 Z";

const Body: React.FC = () => (
  <g>
    <RimBody id="body" d={EGG} rim={C.rim} main={C.body} cx={400} top={225} />
    <Highlight d="M262 400 C268 350 285 322 312 300" color={C.shine} />
  </g>
);

const Hat: React.FC = () => (
  <g id="topper">
    <path d="M250 262 C250 130 330 95 400 95 C470 95 550 130 550 262 Z" fill={C.hat} />
    <path d="M300 130 C330 112 360 106 400 105 L400 262 L340 262 C330 210 312 165 300 130 Z" fill={C.hatDark} opacity={0.18} />
    <path d="M198 276 C260 240 540 240 602 276 C620 292 600 306 575 300 C500 278 300 278 225 300 C200 306 180 292 198 276 Z" fill={C.hatDark} />
    <circle cx={400} cy={82} r={24} fill={C.hatDark} />
  </g>
);

const Arm: React.FC = () => (
  <path d="M236 470 C205 500 180 545 180 570 C176 595 200 612 218 604 C224 612 240 610 246 598 C262 565 270 530 262 490 C258 472 246 464 236 470 Z" fill={C.limb} />
);

const Leg: React.FC = () => (
  <path d="M318 640 L318 705 C310 715 310 730 328 730 L380 730 C396 730 394 712 388 704 L388 640 Z" fill={C.limb} />
);

const part = (id: string, Shape: React.FC, mirror: boolean): React.FC => {
  const Part: React.FC = () => <g id={id}>{mirror ? <Mirror><Shape /></Mirror> : <Shape />}</g>;
  return Part;
};

export const RAKA: CastDefinition = {
  id: "raka",
  name: "Raka",
  topic: "sejarah",
  brief: "Penjelajah kuning bertopi lapangan, badan seperti Tako dengan lengan mitten dan kaki pendek.",
  colors: C,
  face: {
    cx: 400,
    eyeY: 395,
    eyeGap: 78,
    eyeRx: 44,
    eyeRy: 52,
    style: "sclera",
    mouthY: 495,
    mouthScale: 0.92,
    ball: "#FFFFFF",
    pupil: C.ink,
    lid: C.body,
    ink: C.ink,
    accent: C.tongue,
  },
  legs: {
    left: { part: part("leg_left", Leg, false), pivot: [353, 645] },
    right: { part: part("leg_right", Leg, true), pivot: [447, 645] },
  },
  body: Body,
  topper: { part: Hat, pivot: [400, 262], swing: 0.3 },
  arms: {
    left: { part: part("arm_left", Arm, false), pivot: [245, 490] },
    right: { part: part("arm_right", Arm, true), pivot: [555, 490] },
  },
  marks: { x: 440, y: 335, scale: 1 },
  deviations: ["Bintik gelap di tangan referensi dihilangkan (tidak jelas maknanya).", "Topi dibuat lurus, tidak miring, agar wajah frontal."],
};
