import type React from "react";
import { Highlight, Mirror, RimBody } from "../shapes";
import type { CastDefinition } from "../types";

const C = { shell: "#D5DCE4", rim: "#AEB9C6", shine: "#F2F5F8", dark: "#6F7A87", screen: "#1E2F52", iris: "#2E86C1", glow: "#8FD8FF", core: "#E8F7FF", boot: "#C3CCD6" };

const Body: React.FC = () => (
  <g id="body">
    <rect x={352} y={392} width={96} height={40} rx={12} fill={C.screen} />
    <RimBody id="torso" d="M320 422 L480 422 Q508 422 508 450 L508 578 Q508 606 480 606 L320 606 Q292 606 292 578 L292 450 Q292 422 320 422 Z" rim={C.rim} main={C.shell} cx={400} top={422} />
    <circle cx={400} cy={512} r={46} fill={C.glow} />
    <circle cx={400} cy={512} r={32} fill={C.core} />
    <circle cx={400} cy={512} r={14} fill={C.glow} />
    <rect x={228} y={222} width={40} height={92} rx={18} fill={C.rim} />
    <rect x={532} y={222} width={40} height={92} rx={18} fill={C.rim} />
    <RimBody id="head" d="M290 120 L510 120 Q558 120 558 168 L558 354 Q558 402 510 402 L290 402 Q242 402 242 354 L242 168 Q242 120 290 120 Z" rim={C.rim} main={C.shell} cx={400} top={120} />
    <rect x={285} y={188} width={230} height={152} rx={36} fill={C.screen} />
    <Highlight d="M278 180 L278 168 Q278 148 298 146 L330 146" color={C.shine} width={12} />
  </g>
);

const Nub: React.FC = () => (
  <g id="topper">
    <rect x={376} y={100} width={48} height={26} rx={8} fill={C.dark} />
  </g>
);

const Arm: React.FC = () => (
  <>
    <circle cx={302} cy={455} r={24} fill={C.rim} />
    <path d="M296 462 Q262 500 246 540" fill="none" stroke={C.shell} strokeWidth={24} strokeLinecap="round" />
    <path d="M214 552 C218 524 262 518 276 546 C284 578 256 604 230 596 C206 590 204 568 214 552 Z" fill={C.dark} />
  </>
);

const Leg: React.FC = () => (
  <>
    <rect x={332} y={600} width={46} height={84} rx={18} fill={C.dark} />
    <path d="M308 696 C312 676 396 676 400 696 C404 716 398 730 382 730 L326 730 C310 730 304 716 308 696 Z" fill={C.boot} />
  </>
);

const part = (id: string, Shape: React.FC, mirror: boolean): React.FC => {
  const Part: React.FC = () => <g id={id}>{mirror ? <Mirror><Shape /></Mirror> : <Shape />}</g>;
  return Part;
};

export const ROBO: CastDefinition = {
  id: "robo",
  name: "Robo",
  topic: "teknologi",
  brief: "Robot perak berkepala dan berbadan kotak (sudut membulat) dengan layar wajah gelap, inti dada bercahaya, tangan abu-abu.",
  colors: C,
  face: {
    cx: 400,
    eyeY: 252,
    eyeGap: 60,
    eyeRx: 33,
    eyeRy: 40,
    style: "sclera",
    mouthY: 306,
    mouthScale: 0.64,
    ball: "#FFFFFF",
    pupil: C.iris,
    lid: C.screen,
    ink: C.glow,
    accent: C.iris,
  },
  legs: {
    left: { part: part("leg_left", Leg, false), pivot: [355, 610] },
    right: { part: part("leg_right", Leg, true), pivot: [445, 610] },
  },
  body: Body,
  topper: { part: Nub, pivot: [400, 124], swing: 0.5 },
  arms: {
    left: { part: part("arm_left", Arm, false), pivot: [302, 455] },
    right: { part: part("arm_right", Arm, true), pivot: [498, 455] },
  },
  marks: { x: 440, y: 235, scale: 1 },
  deviations: ["Alis ditambahkan (warna cahaya) karena ekspresi butuh alis; mulut juga berwarna cahaya agar terbaca di layar gelap.", "Kaki referensi satu tiang; dibuat dua agar bisa berjalan."],
};
