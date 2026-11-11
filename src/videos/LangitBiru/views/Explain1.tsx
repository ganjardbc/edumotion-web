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
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
  const cahaya = at("Cahaya Matahari");
  const biru = at("Cahaya biru");
  const beam = interpolate(frame, [cahaya, cahaya + 16], [0, 1], clamp);
  const rainbow = interpolate(frame, [at("campuran"), at("pelangi")], [0, 1], clamp);
  const one = interpolate(frame, [biru - 6, biru], [1, 0], clamp);
  const two = interpolate(frame, [biru, biru + 8], [0, 1], clamp);
  const title = { position: "absolute", left: 0, width: 1080, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 56, color: t.colors.ink } as const;
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <div style={{ opacity: one }}>
        <div style={{ ...title, top: 260, fontSize: 50 }}>Cahaya putih = campuran warna</div>
        <CastCharacter id="matahari" x={250} y={820} size={340} expression="happy" animation="idle" />
        <svg width={1080} height={1920} viewBox="0 0 1080 1920" style={{ position: "absolute", inset: 0 }}>
          <line x1={360} y1={720} x2={360 + 170 * beam} y2={720 + 40 * beam} stroke={t.colors.ink} strokeWidth={44} strokeLinecap="round" />
          <line x1={360} y1={720} x2={360 + 170 * beam} y2={720 + 40 * beam} stroke={t.colors.surface} strokeWidth={28} strokeLinecap="round" />
        </svg>
        <Pelangi x={745} y={760} size={520} topic="cuaca" progress={rainbow} />
      </div>
      <div style={{ opacity: two }}>
        <div style={{ ...title, top: 300, fontSize: 60 }}>Biru: gelombang pendek</div>
        <GelombangCahaya x={540} y={520} size={600} topic="planet" wavelength={90} progress={frame / 45} />
        <div style={{ ...title, top: 760, fontSize: 60 }}>Merah: gelombang panjang</div>
        <GelombangCahaya x={540} y={980} size={600} topic="tubuh" wavelength={230} progress={frame / 90} />
      </div>
    </AbsoluteFill>
  );
};
