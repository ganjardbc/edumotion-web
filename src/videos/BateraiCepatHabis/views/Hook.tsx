import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { Pembawa } from "../../../characters/ganjar";
import { EDU_FEET_Y, HookText } from "../../../explainers";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Hook (karakter): pembawa kaget dan menggaruk kepala; Baterai senang di "Pagi", lalu sedih di "merah".
export const Hook: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const sore = frame >= at("merah");
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <HookText text="Kenapa baterai HP cepat habis?" highlight="habis" size={100} />
      <Pembawa x={330} y={EDU_FEET_Y} tinggi={560} ekspresi="kaget" gestur="garukKepala" />
      <CastCharacter id="baterai" x={770} y={EDU_FEET_Y} size={440} facing={-1} expression={sore ? "sad" : "happy"} animation="idle" />
    </AbsoluteFill>
  );
};
