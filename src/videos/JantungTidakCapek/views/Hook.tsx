import type React from "react";
import { EduBackdrop } from "../../../assets/backdrops";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CastCharacter } from "../../../characters/cast";
import { TakoCharacter } from "../../../characters/tako";
import { beat, Counter, EDU_FEET_Y, HookText } from "../../../explainers";
import { useTheme } from "../../../themes";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Hook: angka 100.000 naik, jantung berdetak, Tako heran.
export const Hook: React.FC<SceneProps> = () => {
  const frame = useCurrentFrame();
  const t = useTheme();
  return (
    <AbsoluteFill>
      <EduBackdrop kind="dalamTubuh" topic={META.topic} />
      <HookText text="Kok jantung nggak capek?" highlight="capek" size={104} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 560 }}>
        <Counter to={100000} frames={60} size={160} />
        <div style={{ textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 700, fontSize: 44, color: t.colors.muted }}>detak per hari</div>
      </div>
      <CastCharacter id="jantung" x={340} y={EDU_FEET_Y} size={500 * (1 + 0.05 * beat(frame))} expression="happy" />
      <TakoCharacter x={760} y={EDU_FEET_Y} size={400} facing={-1} expression="curious" animation="thinking" />
    </AbsoluteFill>
  );
};
