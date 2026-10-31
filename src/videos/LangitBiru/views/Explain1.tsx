import type React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { GelombangCahaya, Pelangi } from "../../../props";
import { useTheme } from "../../../themes";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Explain1, dua tahap bergantian (satu fokus per waktu): (1) sinar putih Matahari terurai jadi pelangi,
// (2) dua gelombang: biru rapat (pendek), merah renggang (panjang).
export const Explain1: React.FC<SceneProps> = ({ frames }) => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
  const beam = interpolate(frame, [frames * 0.04, frames * 0.2], [0, 1], clamp);
  const rainbow = interpolate(frame, [frames * 0.2, frames * 0.36], [0, 1], clamp);
  const one = interpolate(frame, [frames * 0.44, frames * 0.5], [1, 0], clamp);
  const two = interpolate(frame, [frames * 0.5, frames * 0.58], [0, 1], clamp);
  const title = { position: "absolute", left: 64, width: 856, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 56, color: t.colors.ink } as const;
  return (
    <AbsoluteFill>
      <EduBackdrop kind="papanDiagram" topic={META.topic} />
      <div style={{ opacity: one }}>
        <div style={{ ...title, top: 260, fontSize: 50 }}>Cahaya putih = campuran warna</div>
        <CastCharacter id="matahari" x={200} y={820} size={340} expression="happy" animation="idle" />
        <svg width={1080} height={1920} viewBox="0 0 1080 1920" style={{ position: "absolute", inset: 0 }}>
          <line x1={340} y1={720} x2={340 + 170 * beam} y2={720 + 40 * beam} stroke={t.colors.ink} strokeWidth={44} strokeLinecap="round" />
          <line x1={340} y1={720} x2={340 + 170 * beam} y2={720 + 40 * beam} stroke={t.colors.surface} strokeWidth={28} strokeLinecap="round" />
        </svg>
        <Pelangi x={700} y={760} size={520} topic="cuaca" progress={rainbow} />
      </div>
      <div style={{ opacity: two }}>
        <div style={{ ...title, top: 300, fontSize: 60 }}>Biru: gelombang pendek</div>
        <GelombangCahaya x={490} y={520} size={600} topic="planet" wavelength={90} progress={frame / 45} />
        <div style={{ ...title, top: 760, fontSize: 60 }}>Merah: gelombang panjang</div>
        <GelombangCahaya x={490} y={980} size={600} topic="tubuh" wavelength={230} progress={frame / 90} />
      </div>
    </AbsoluteFill>
  );
};
