import type React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { Bandingkan } from "../../../explainers/pola";
import { JalurCahaya } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Explain4 (pola Bandingkan, kolom): jalur cahaya siang (pendek) vs senja (panjang) menembus lapisan udara.
export const Explain4: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
  const senja = at("melewati");
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <Bandingkan
        judul="Saat senja, jalurnya panjang"
        sorotJudul="panjang"
        arah="kolom"
        topic="cuaca"
        pemenang="b"
        sorotAt={at("Cahaya birunya")}
        a={{ label: "Siang", nilai: "jalur pendek", gambar: (k) => <JalurCahaya {...k} waktu="siang" progress={interpolate(frame, [0, 20], [0, 1], clamp)} /> }}
        b={{ label: "Senja", nilai: "jalur panjang", at: senja, gambar: (k) => <JalurCahaya {...k} waktu="senja" progress={interpolate(frame, [senja, senja + 30], [0, 1], clamp)} /> }}
      />
    </AbsoluteFill>
  );
};
