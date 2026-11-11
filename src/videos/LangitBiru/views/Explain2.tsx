import type React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { Sorot } from "../../../explainers/pola";
import { MolekulUdara } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Explain2 (pola Sorot): satu partikel udara besar; sinar biru menyebar ke segala arah, merah lurus.
// Poin intinya diulang di cutaway ("Itu sebabnya ...", lihat scenes.ts).
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const sebar = interpolate(frame, [at("partikel"), at("segala arah")], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <Sorot
        judul="Udara menyebarkan biru"
        sorotJudul="biru"
        topic="planet"
        gambar={(k) => <MolekulUdara {...k} topic="cuaca" scatter={sebar} />}
        titik={[
          { x: 0.5, y: 0.5, teks: "partikel udara", sisi: "kiri", at: at("partikel") },
          { x: 0.95, y: 0.59, teks: "merah: lurus", sisi: "kanan", at: at("Cahaya merah") },
        ]}
      />
    </AbsoluteFill>
  );
};
