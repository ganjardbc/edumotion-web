import type React from "react";
import { Highlight, RimBody, stickArm, stickLeg } from "../shapes";
import type { CastDefinition } from "../types";

const C = { body: "#2EC4B6", rim: "#1F9E92", shine: "#8FE8DF", screen: "#F4FBFF", limb: "#17796F", ink: "#12324A", blush: "#FFB3C1", tongue: "#FF8FA3" };

const CASE = "M310 190 L490 190 Q550 190 550 250 L550 560 Q550 620 490 620 L310 620 Q250 620 250 560 L250 250 Q250 190 310 190 Z";
const SCREEN = "M318 236 L482 236 Q512 236 512 266 L512 544 Q512 574 482 574 L318 574 Q288 574 288 544 L288 266 Q288 236 318 236 Z";

const Body: React.FC = () => (
  <g>
    <RimBody id="body" d={CASE} rim={C.rim} main={C.body} cx={400} top={190} scale={0.97} />
    <path d={SCREEN} fill={C.screen} />
    <rect x={372} y={248} width={56} height={14} rx={7} fill={C.ink} opacity={0.85} />
    <rect x={364} y={552} width={72} height={8} rx={4} fill={C.ink} opacity={0.25} />
    <Highlight d="M268 262 L268 330" color={C.shine} width={12} />
    <rect x={546} y={300} width={10} height={64} rx={5} fill={C.rim} />
  </g>
);

export const HAPE: CastDefinition = {
  id: "hape",
  name: "Hape",
  topic: "teknologi (gawai)",
  brief: "Smartphone tosca bergerak: layar terang jadi wajah, kamera depan di atas, lengan dan kaki tipis.",
  colors: C,
  face: {
    cx: 400,
    eyeY: 370,
    eyeGap: 56,
    eyeRx: 20,
    eyeRy: 27,
    style: "dot",
    mouthY: 440,
    mouthScale: 0.8,
    ball: C.ink,
    pupil: C.ink,
    lid: C.screen,
    ink: C.ink,
    accent: C.tongue,
    blush: { color: C.blush, gap: 92, y: 440, rx: 24, ry: 15 },
  },
  legs: {
    left: { part: stickLeg("leg_left", 350, 610, 335, C.limb), pivot: [350, 610] },
    right: { part: stickLeg("leg_right", 450, 610, 465, C.limb), pivot: [450, 610] },
  },
  body: Body,
  arms: {
    left: { part: stickArm("arm_left", 252, 430, -1, C.limb), pivot: [252, 430] },
    right: { part: stickArm("arm_right", 548, 430, 1, C.limb), pivot: [548, 430] },
  },
  marks: { x: 440, y: 340, scale: 0.9 },
  deviations: ["Wajah digambar di layar yang selalu menyala; tidak ada konten aplikasi agar tetap sederhana."],
};
