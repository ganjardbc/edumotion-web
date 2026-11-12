import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { Pembawa } from "../../../characters/ganjar";
import { EDU_FEET_Y } from "../../../explainers";
import { Koreksi, Muncul } from "../../../explainers/pola";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";
import { HorizonLandscape, MoonDisk } from "../assets/Visuals";

export const Twist: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const paham = frame >= at("lebih jauh");
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <HorizonLandscape y={1135} />
      <Koreksi tebakan="Bulan lebih dekat" jawaban="Sedikit lebih jauh" coretAt={at("Ternyata")} jawabAt={at("lebih jauh")} topic={META.topic} />
      <Muncul at={at("cakrawala")}><MoonDisk x={760} y={1020} size={330} /></Muncul>
      <Pembawa topic={META.topic} x={400} y={EDU_FEET_Y} tinggi={520} ekspresi={paham ? "senang" : "kaget"} gestur={paham ? "tunjuk" : "menyerah"} />
    </AbsoluteFill>
  );
};
