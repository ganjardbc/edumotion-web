import type React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EduBackdrop, mixHex } from "../../../assets/backdrops";
import { TakoCharacter } from "../../../characters/tako";
import { EDU_FEET_Y, HookText } from "../../../explainers";
import { CurvedArrow } from "../../../props";
import { useTheme } from "../../../themes";
import { HIGHLIGHT, TOPIC_COLORS } from "../../../themes/topics";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Payoff: langit siang dan senja berdampingan, satu panah penghubung. Sorotan: "terhambur".
export const Payoff: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const arrow = interpolate(frame, [at("punya sebab"), at("punya sebab") + 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const panel = { position: "absolute", top: 490, width: 330, height: 250, borderRadius: t.radius.card, border: `8px solid ${t.colors.ink}`, boxSizing: "border-box", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 18, fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 44, color: t.colors.ink } as const;
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <HookText text="Cahaya biru tersebar" highlight="tersebar" size={96} />
      <div style={{ ...panel, left: 150, backgroundColor: TOPIC_COLORS.planet.main }}>Langit biru</div>
      <div style={{ ...panel, left: 600, backgroundImage: `linear-gradient(${HIGHLIGHT}, ${mixHex(HIGHLIGHT, TOPIC_COLORS.tubuh.main, 0.9)})` }}>Senja merah</div>
      <CurvedArrow x={540} y={600} size={200} topic="cuaca" progress={arrow} />
      <TakoCharacter x={540} y={EDU_FEET_Y} size={560} expression="laughing" animation="excitement" />
    </AbsoluteFill>
  );
};
