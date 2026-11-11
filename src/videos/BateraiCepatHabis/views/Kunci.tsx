import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Kunci as KunciPola } from "../../../explainers/pola";
import { Termometer } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Kunci (frame layar penuh, tanpa karakter): panas merusak baterai selamanya. Termometer naik saat narator
// menyebut "tiga puluh lima derajat". Latar merah (keluarga warna tubuh) menandakan bahaya.
export const Kunci: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const naik = interpolate(frame, [at("tiga"), at("derajat") + 10], [0.3, 0.95], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <KunciPola judul="Panas merusak baterai selamanya" sorot="Panas" sub="Jauhkan HP dari suhu di atas 35°C" topic={META.topic} warna="tubuh" gambar={(k) => <Termometer {...k} topic="tubuh" level={naik} />} />;
};
