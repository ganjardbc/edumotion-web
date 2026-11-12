import type React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { Sorot } from "../../../explainers/pola";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";
import { RulerComparison } from "../assets/Visuals";

export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const mulai = at("Foto");
  const selesai = at("ukuran Bulan");
  const progress = interpolate(frame, [mulai, selesai], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <Sorot
        judul="Ukuran Bulan hampir sama"
        sorotJudul="sama"
        judulAt={mulai}
        gambarAt={mulai}
        topic={META.topic}
        gambar={(k) => <RulerComparison x={k.x} y={k.y} size={k.size * 1.25} progress={progress} />}
      />
    </AbsoluteFill>
  );
};
