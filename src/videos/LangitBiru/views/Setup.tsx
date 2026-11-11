import type React from "react";
import { AbsoluteFill } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { SebabAkibat } from "../../../explainers/pola";
import { GelombangCahaya, QuestionMark } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Setup (pola Sebab→Akibat): tebakan umum yang keliru, "laut biru → langit ikut biru?".
export const Setup: React.FC<SceneProps> = ({ at }) => (
  <AbsoluteFill>
    <EduBackdrop topic={META.topic} />
    <SebabAkibat
      judul="Langit memantulkan laut?"
      sorotJudul="laut"
      topic="planet"
      sebab={{ teks: "Laut berwarna biru", at: at("Banyak"), gambar: (k) => <GelombangCahaya {...k} topic="air" wavelength={200} progress={0.2} /> }}
      akibat={{ teks: "Langit ikut biru?", at: at("memantulkan"), gambar: (k) => <QuestionMark {...k} topic="planet" pop={1} /> }}
    />
  </AbsoluteFill>
);
