import type React from "react";
import { AbsoluteFill } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { Sorot } from "../../../explainers/pola";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";
import { HorizonLandscape } from "../assets/Visuals";

export const Explain3: React.FC<SceneProps> = ({ at }) => (
  <AbsoluteFill>
    <EduBackdrop topic={META.topic} />
      <HorizonLandscape y={1115} />
    <Sorot
      judul="Latar mungkin berpengaruh"
      sorotJudul="mungkin"
      topic={META.topic}
      gambar={(k) => <CastCharacter id="bulan" x={k.x} y={k.y + k.size * 0.45} size={k.size} expression="thinking" animation="idle" />}
      titik={[
        { x: 0.18, y: 0.86, teks: "Gedung", sisi: "kiri", at: at("Pemandangan") },
        { x: 0.82, y: 0.86, teks: "Pepohonan", sisi: "kanan", at: at("sekitar") },
        { x: 0.5, y: 0.16, teks: "Mungkin", sisi: "kanan", at: at("mungkin") },
      ]}
    />
  </AbsoluteFill>
);
