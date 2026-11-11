import type React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { Bandingkan } from "../../../explainers/pola";
import { LayarHp } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Explain1 (pola Bandingkan, baris): layar redup lebih hemat, layar terang lebih boros.
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const terang = at("terang");
  const nyala = interpolate(frame, [terang, terang + 20], [0.15, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <Bandingkan
        judul="Layar terang paling boros"
        sorotJudul="boros"
        topic="teknologi"
        pemenang="b"
        sorotAt={at("terkuras")}
        a={{ label: "Redup", nilai: "hemat", at: at("paling"), gambar: (k) => <LayarHp {...k} terang={0.1} /> }}
        b={{ label: "Terang", nilai: "boros", at: terang, gambar: (k) => <LayarHp {...k} terang={nyala} /> }}
      />
    </AbsoluteFill>
  );
};
