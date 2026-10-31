import type React from "react";
import { Highlight, Mirror, RimBody } from "../shapes";
import type { CastDefinition } from "../types";

const C = {
  body: "#F2B98C",
  rim: "#DC9A6C",
  shine: "#FBD3B0",
  hair: "#2A1C16",
  shirt: "#2C2C32",
  shirtRim: "#1F1F25",
  pants: "#36363D",
  shoe: "#1F1F24",
  sole: "#FBFAF6",
  ink: "#111114",
  blush: "#E68A66",
  tongue: "#EE8A6A",
};

const HEAD = "M400 198 C490 198 556 250 556 330 C556 410 490 462 400 462 C310 462 244 410 244 330 C244 250 310 198 400 198 Z";
const TORSO = "M330 470 L470 470 Q500 470 500 500 L500 610 Q500 640 470 640 L330 640 Q300 640 300 610 L300 500 Q300 470 330 470 Z";

const Body: React.FC = () => (
  <g>
    <g id="ears">
      <ellipse cx={246} cy={345} rx={24} ry={30} fill={C.rim} />
      <ellipse cx={554} cy={345} rx={24} ry={30} fill={C.rim} />
    </g>
    <RimBody id="torso" d={TORSO} rim={C.shirtRim} main={C.shirt} cx={400} top={470} scale={0.96} />
    <ellipse cx={400} cy={476} rx={36} ry={16} fill={C.rim} />
    <RimBody id="head" d={HEAD} rim={C.rim} main={C.body} cx={400} top={198} scale={0.96} />
    <Highlight d="M268 300 C272 270 286 248 306 234" color={C.shine} width={12} />
  </g>
);

// Rambut pendek berantakan dengan poni miring dan jambul di atas.
const Hair: React.FC = () => (
  <g id="topper">
    <path d="M330 196 L322 140 L366 168 L388 118 L416 166 L462 128 L458 196 Z" fill={C.hair} strokeLinejoin="round" stroke={C.hair} strokeWidth={10} />
    <path
      d="M242 352 C222 250 290 166 400 166 C510 166 578 250 558 352 C550 318 542 294 526 278 C484 300 432 274 412 246 C394 282 340 300 274 282 C258 298 250 322 242 352 Z"
      fill={C.hair}
    />
  </g>
);

const SleeveArm: React.FC = () => (
  <>
    <path d="M296 520 Q284 570 284 612" fill="none" stroke={C.body} strokeWidth={24} strokeLinecap="round" />
    <circle cx={284} cy={618} r={19} fill={C.body} />
    <path d="M302 468 C272 470 256 494 260 532 L324 538 C332 506 332 482 318 470 Z" fill={C.shirt} />
  </>
);

const Leg: React.FC = () => (
  <>
    <rect x={318} y={608} width={72} height={96} rx={16} fill={C.pants} />
    <path d="M304 726 C304 706 322 698 346 698 L388 698 C398 698 400 712 396 722 C394 730 386 730 382 730 L316 730 C308 730 304 728 304 726 Z" fill={C.shoe} />
    <rect x={304} y={721} width={94} height={9} rx={4} fill={C.sole} />
  </>
);

const part = (id: string, Shape: React.FC, mirror: boolean): React.FC => {
  const Part: React.FC = () => <g id={id}>{mirror ? <Mirror><Shape /></Mirror> : <Shape />}</g>;
  return Part;
};

export const GANJAR: CastDefinition = {
  id: "ganjar",
  name: "Ganjar",
  topic: "pembuat (pemilik akun)",
  brief: "Cowok berambut hitam berantakan, kaos dan celana kargo hitam, sepatu hitam-putih; mengikuti karakter Ganjar di remotion-web.",
  colors: C,
  face: {
    cx: 400,
    eyeY: 335,
    eyeGap: 66,
    eyeRx: 20,
    eyeRy: 26,
    style: "dot",
    mouthY: 410,
    mouthScale: 0.8,
    ball: C.ink,
    pupil: C.ink,
    lid: C.body,
    ink: C.hair,
    accent: C.tongue,
    blush: { color: C.blush, gap: 106, y: 385, rx: 26, ry: 16 },
  },
  legs: {
    left: { part: part("leg_left", Leg, false), pivot: [353, 612] },
    right: { part: part("leg_right", Leg, true), pivot: [447, 612] },
  },
  body: Body,
  topper: { part: Hair, pivot: [400, 230], swing: 0.25 },
  arms: {
    left: { part: part("arm_left", SleeveArm, false), pivot: [304, 490] },
    right: { part: part("arm_right", SleeveArm, true), pivot: [496, 490] },
  },
  marks: { x: 450, y: 300, scale: 1 },
  deviations: ["Gaya realistis referensi disederhanakan ke 3 nada datar; kantong celana kargo dan lipatan baju dihilangkan.", "Kedua tangan menggantung (referensi: tangan di saku) agar bisa digerakkan rig bersama."],
};
