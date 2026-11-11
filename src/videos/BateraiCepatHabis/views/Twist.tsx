import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { Pembawa } from "../../../characters/ganjar";
import { EDU_FEET_Y } from "../../../explainers";
import { Koreksi } from "../../../explainers/pola";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Twist (pola Koreksi): tebakan dicoret di "bukan", jawaban muncul di "Apple". Pembawa kaget lalu paham di "macet".
export const Twist: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const paham = frame >= at("macet");
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <Koreksi tebakan="Aplikasi terbuka itu boros" jawaban="Bukan penyebab utama" coretAt={at("bukan")} jawabAt={at("Apple")} topic="teknologi" />
      <Pembawa topic={META.topic} x={540} y={EDU_FEET_Y} tinggi={480} ekspresi={paham ? "senang" : "kaget"} gestur={paham ? "tunjuk" : "menyerah"} />
    </AbsoluteFill>
  );
};
