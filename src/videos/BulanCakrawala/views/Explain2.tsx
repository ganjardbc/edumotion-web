import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { SebabAkibat } from "../../../explainers/pola";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";
import { AtmosphereDiagram, MoonDisk } from "../assets/Visuals";

export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const pipih = frame >= at("memipihkan");
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <SebabAkibat
        judul="Atmosfer tidak membesarkan"
        sorotJudul="tidak"
        topic={META.topic}
        sebab={{ teks: "Cahaya melewati atmosfer", at: at("Atmosfer"), gambar: (k) => <AtmosphereDiagram x={k.x} y={k.y} size={k.size} /> }}
        akibat={{ teks: "Bulan sedikit pipih", at: at("memipihkan"), gambar: (k) => <MoonDisk x={k.x} y={k.y} size={k.size} pipih={pipih} /> }}
      />
    </AbsoluteFill>
  );
};
