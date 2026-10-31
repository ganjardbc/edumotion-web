import type React from "react";
import { Highlight, Mirror, RimBody } from "../shapes";
import type { CastDefinition } from "../types";

const C = { body: "#D97757", rim: "#B85C41", shine: "#E8937A", limb: "#C96A4B", ink: "#1B1715", tongue: "#E8937A" };

// Balok 18:12 seperti logo Claude Code, skala 24 px per unit grid.
const BLOCK = "M184 330 L616 330 L616 620 L184 620 Z";

const Body: React.FC = () => (
  <g>
    <RimBody id="body" d={BLOCK} rim={C.rim} main={C.body} cx={400} top={330} scale={0.95} />
    <Highlight d="M214 366 L214 420" color={C.shine} />
  </g>
);

// Lengan: balok kecil menempel di sisi badan.
const Arm: React.FC = () => <rect x={112} y={473} width={80} height={74} rx={4} fill={C.limb} />;

// Dua kaki per sisi, seperti empat kaki pada logo.
const Legs: React.FC = () => (
  <>
    <rect x={220} y={610} width={36} height={120} fill={C.limb} />
    <rect x={292} y={610} width={36} height={120} fill={C.limb} />
  </>
);

const part = (id: string, Shape: React.FC, mirror: boolean): React.FC => {
  const Part: React.FC = () => <g id={id}>{mirror ? <Mirror><Shape /></Mirror> : <Shape />}</g>;
  return Part;
};

export const CLAUDE: CastDefinition = {
  id: "claude",
  name: "Claude",
  topic: "teknologi (AI)",
  brief: "Balok oranye bermata persegi panjang gelap, dua lengan balok kecil, empat kaki tipis; mengikuti maskot Claude Code.",
  colors: C,
  face: {
    cx: 400,
    eyeY: 440,
    eyeGap: 126,
    eyeRx: 20,
    eyeRy: 38,
    style: "dot",
    mouthY: 520,
    mouthScale: 0.8,
    ball: C.ink,
    pupil: C.ink,
    lid: C.body,
    ink: C.ink,
    accent: C.tongue,
  },
  legs: {
    left: { part: part("leg_left", Legs, false), pivot: [274, 612] },
    right: { part: part("leg_right", Legs, true), pivot: [526, 612] },
  },
  body: Body,
  arms: {
    left: { part: part("arm_left", Arm, false), pivot: [190, 510] },
    right: { part: part("arm_right", Arm, true), pivot: [610, 510] },
  },
  marks: { x: 440, y: 400, scale: 1 },
  deviations: ["Mata berupa titik lonjong agar ekspresi Tako bisa dipakai; di logo berbentuk persegi panjang.", "Kaki dipasang berpasangan per sisi supaya bisa berjalan dengan rig bersama."],
};
