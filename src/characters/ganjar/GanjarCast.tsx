import type React from "react";
import { GROUND } from "../tako/rig/pivots";
import { CharacterStage, type CharacterMotionProps, type CharacterStageProps, useCharacterPose } from "../tako/rig/stage";
import type { AnimationName, ExpressionName } from "../tako/types";
import type { Gesture } from "./gestures";
import { GanjarStickman, type GanjarStickmanExpression, VIEWBOX } from "./GanjarStickman";

// Ekspresi cast (sama dengan Tako) → ekspresi stickman.
export const GANJAR_EXPRESSION: Readonly<Record<ExpressionName, GanjarStickmanExpression>> = {
  happy: "senyum",
  curious: "mikir",
  surprised: "kaget",
  angry: "marah",
  sad: "sedih",
  sleepy: "mataTertutup",
  confused: "bingung",
  scared: "kaget",
  laughing: "tertawa",
  thinking: "mikir",
};

// Preset animasi cast → gerak stickman. Ekspresi bawaan mengikuti preset bila `expression` tidak diisi.
const ANIMATION: Readonly<Record<AnimationName, { readonly gesture: Gesture; readonly walk?: boolean; readonly talking?: boolean; readonly expression?: GanjarStickmanExpression }>> = {
  idle: { gesture: "netral" },
  walk: { gesture: "netral", walk: true },
  jump: { gesture: "sorak", expression: "senang" },
  talk: { gesture: "netral", talking: true },
  wave: { gesture: "lambai", expression: "senang" },
  surprise: { gesture: "menyerah", expression: "kaget" },
  confusion: { gesture: "garukKepala", expression: "bingung" },
  excitement: { gesture: "sorak", expression: "tertawa" },
  thinking: { gesture: "mikir", expression: "mikir" },
};

// Tinggi stickman di dalam kotak 800x800 milik cast, dan letak telapak kaki di viewBox stickman (400x410).
const HEIGHT = 560;
const FOOT_Y = 372;

// Ganjar sebagai karakter cast: digambar dengan stickman, tetapi dipakai lewat <CastCharacter id="ganjar" /> dengan
// props yang sama seperti cast lain (x, y = titik kaki, size = kotak 800, expression, animation).
export const GanjarCast: React.FC<CharacterStageProps & CharacterMotionProps> = ({ x, y, size, facing, opacity, expression, animation = "idle", ...motion }) => {
  // Pose cast hanya dipakai untuk gerak badan (lompat, squash); lengan dan wajah diurus stickman.
  const { pose } = useCharacterPose({ ...motion, animation: animation === "walk" || animation === "talk" ? "idle" : animation });
  const a = ANIMATION[animation];
  const face = expression ? GANJAR_EXPRESSION[expression] : (a.expression ?? "senyum");
  const w = (HEIGHT * VIEWBOX.w) / VIEWBOX.h;
  return (
    <CharacterStage x={x} y={y} size={size} facing={facing} opacity={opacity} pose={pose}>
      <g transform={`translate(${GROUND[0] - w / 2} ${GROUND[1] - (HEIGHT * FOOT_Y) / VIEWBOX.h})`}>
        <GanjarStickman height={HEIGHT} expression={face} gesture={a.gesture} walk={a.walk} talking={a.talking} />
      </g>
    </CharacterStage>
  );
};
