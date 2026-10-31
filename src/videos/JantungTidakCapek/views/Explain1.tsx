import type React from "react";
import { EduBackdrop } from "../../../assets/backdrops";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CastCharacter } from "../../../characters/cast";
import { EDU_FEET_Y, PhaseBar } from "../../../explainers";
import { EkgLine, Stopwatch } from "../../../props";
import { useTheme } from "../../../themes";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Explain1: satu detak = kerja sebentar, istirahat lebih lama. Siklus 30 frame (1 detik).
export const Explain1: React.FC<SceneProps> = () => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const cycle = (frame % 30) / 30;
  const resting = cycle > 0.35;
  return (
    <AbsoluteFill>
      <EduBackdrop kind="papanDiagram" topic={META.topic} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 250, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 64, color: t.colors.ink }}>Satu detak = 1 detik</div>
      <PhaseBar top={380} left={160} width={760} progress={cycle} split={0.35} labels={["Kerja", "Istirahat"]} />
      <Stopwatch x={300} y={760} size={320} progress={cycle} />
      <EkgLine x={680} y={760} size={440} progress={Math.min(1, (frame % 60) / 50)} />
      <CastCharacter id="jantung" x={540} y={EDU_FEET_Y} size={420} expression={resting ? "sleepy" : "surprised"} animation="idle" />
    </AbsoluteFill>
  );
};
