import type React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { TakoCharacter } from "../../../characters/tako";
import { BarCompare, EDU_FEET_Y } from "../../../explainers";
import { useTheme } from "../../../themes";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

const ROWS = 3;
const COLS = 3;

// Explain1: dua fase di papan diagram. (1) tetes awan jauh lebih tipis dari rambut, (2) jutaan tetes berkumpul jadi berat.
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = useTheme();
  const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
  const switchAt = at("Tapi jumlahnya");
  const phase2 = interpolate(frame, [switchAt, switchAt + 14], [0, 1], clamp);
  const title = { position: "absolute", left: 64, right: 160, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 56, color: t.colors.ink } as const;
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />

      <div style={{ opacity: 1 - phase2 }}>
        <div style={{ ...title, top: 250 }}>Lebar (diameter)</div>
        <BarCompare top={350} topic={META.topic} left={64} width={856} items={[{ label: "Rambut", value: 70 }, { label: "Tetes awan", value: 10, highlight: true }]} unit="mikron (kira-kira)" frames={36} stagger={24} />
        <CastCharacter id="tetes" x={540} y={1000} size={260} expression="happy" animation="idle" />
      </div>

      <div style={{ opacity: phase2 }}>
        <div style={{ ...title, top: 250 }}>Jutaan tetes = berat</div>
        {Array.from({ length: ROWS * COLS }, (_, i) => {
          const col = i % COLS;
          const row = Math.floor(i / COLS);
          const pop = spring({ frame: frame - (switchAt + 10 + i * 4), fps, config: { damping: 12, stiffness: 150 } });
          const bob = Math.sin((frame + i * 9) / 14) * 6;
          return <CastCharacter key={i} id="tetes" x={260 + col * 280} y={560 + row * 220 + bob} size={190 * Math.max(0, pop)} expression="happy" />;
        })}
      </div>

      <TakoCharacter x={900} y={EDU_FEET_Y} size={220} facing={-1} expression="curious" animation="thinking" />
    </AbsoluteFill>
  );
};
