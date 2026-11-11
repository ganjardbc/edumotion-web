import type React from "react";
import { AbsoluteFill } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Scene Setup (setup). Hanya bergantung pada useCurrentFrame(); warna dari tema atau TOPIC_COLORS.
// Latar kertas berpetak (bawaan EduBackdrop). Hook/Twist/Payoff/Cta: <Pembawa /> dari characters/ganjar.
// Setup/Explain: satu pola dari explainers/pola, tanpa pembawa.
// Picu gerak dengan at(kata) dari props (frame saat narator mengucapkan kata itu), bukan pecahan durasi.
export const Setup: React.FC<SceneProps> = () => (
  <AbsoluteFill>
    <EduBackdrop topic={META.topic} />
  </AbsoluteFill>
);
