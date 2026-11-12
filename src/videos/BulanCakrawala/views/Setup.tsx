import type React from "react";
import { AbsoluteFill } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { Sorot } from "../../../explainers/pola";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";
import { NearMoonGuess } from "../assets/Visuals";

export const Setup: React.FC<SceneProps> = ({ at }) => (
  <AbsoluteFill>
    <EduBackdrop topic={META.topic} />
    <Sorot
      judul="Bulan lebih dekat?"
      sorotJudul="dekat"
      judulAt={at("Bulan")}
      gambarAt={at("Bulan")}
      topic={META.topic}
      gambar={(k) => <NearMoonGuess x={k.x} y={k.y} size={k.size * 1.18} />}
    />
  </AbsoluteFill>
);
