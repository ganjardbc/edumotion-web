import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { TakoCharacter } from "../../../characters/tako";
import { EDU_FEET_Y } from "../../../explainers";
import { Koreksi } from "../../../explainers/pola";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Twist (pola Koreksi): tebakan dicoret di "bukan", jawaban muncul di "Warna birunya". Tako kaget lalu paham.
export const Twist: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const paham = frame > at("udara");
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <Koreksi tebakan="Langit memantulkan laut" jawaban="Warna dari udara" coretAt={at("bukan")} jawabAt={at("Warna birunya")} topic="planet" />
      <TakoCharacter x={540} y={EDU_FEET_Y} size={500} expression={paham ? "happy" : "surprised"} animation={paham ? "idle" : "surprise"} />
    </AbsoluteFill>
  );
};
