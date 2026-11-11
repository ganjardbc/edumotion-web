import type React from "react";
import { AbsoluteFill } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { Pembawa } from "../../../characters/ganjar";
import { Counter, EDU_FEET_Y, HookText } from "../../../explainers";
import { useTheme } from "../../../themes";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Hook: angka 100 naik di atas dua tokoh yang berdiri di lantai. Awan di kiri, Tako di kanan menatap heran.
export const Hook: React.FC<SceneProps> = () => {
  const t = useTheme();
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <HookText text="Awan seberat 100 gajah?" highlight="gajah" size={104} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 600 }}>
        <Counter to={100} frames={60} size={170} />
        <div style={{ textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 700, fontSize: 44, color: t.colors.muted }}>gajah</div>
      </div>
      <CastCharacter id="awan" x={310} y={EDU_FEET_Y} size={520} expression="happy" animation="idle" />
      <Pembawa x={770} y={EDU_FEET_Y} tinggi={380} ekspresi="mikir" gestur="mikir" hadap={-1} />
    </AbsoluteFill>
  );
};
