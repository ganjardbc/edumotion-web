import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Kunci as KunciPola } from "../../../explainers/pola";
import { MolekulUdara } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Kunci (frame layar penuh, tanpa karakter): udara menyebarkan cahaya biru. Sinar biru menyebar saat gambar muncul.
export const Kunci: React.FC<SceneProps> = () => {
  const frame = useCurrentFrame();
  const sebar = interpolate(frame, [14, 64], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <KunciPola judul="Udara menyebarkan cahaya biru" sorot="biru" sub="Biru datang dari segala arah langit" topic={META.topic} gambar={(k) => <MolekulUdara {...k} topic="cuaca" scatter={sebar} />} />;
};
