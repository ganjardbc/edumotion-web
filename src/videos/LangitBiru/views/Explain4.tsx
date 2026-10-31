import type React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EduBackdrop, mixHex } from "../../../assets/backdrops";
import { LapisanAtmosfer } from "../../../props";
import { useTheme } from "../../../themes";
import { HIGHLIGHT, TOPIC_COLORS } from "../../../themes/topics";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Explain4: Bumi dengan lapisan udara. Sinar siang pendek, sinar senja panjang; panel langit berganti dari biru ke jingga-merah.
export const Explain4: React.FC<SceneProps> = ({ frames }) => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
  const rays = interpolate(frame, [frames * 0.08, frames * 0.5], [0, 1], clamp);
  const dusk = interpolate(frame, [frames * 0.5, frames * 0.85], [0, 1], clamp);
  const sky = dusk < 0.5 ? mixHex(TOPIC_COLORS.planet.main, HIGHLIGHT, dusk * 2) : mixHex(HIGHLIGHT, TOPIC_COLORS.tubuh.main, (dusk - 0.5) * 2);
  const label = { position: "absolute", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 40, color: t.colors.ink } as const;
  const pill = { ...label, backgroundColor: t.colors.surface, border: `6px solid ${t.colors.ink}`, borderRadius: 24, padding: "4px 24px" } as const;
  return (
    <AbsoluteFill>
      <EduBackdrop kind="papanDiagram" topic={META.topic} />
      <div style={{ position: "absolute", left: 120, top: 240, width: 840, height: 190, borderRadius: t.radius.card, backgroundColor: sky, border: `8px solid ${t.colors.ink}`, boxSizing: "border-box" }} />
      <div style={{ ...label, left: 0, top: 320, width: 1080, textAlign: "center" }}>Langit {dusk > 0.5 ? "senja" : "siang"}</div>
      <div style={{ position: "absolute", left: 0, top: 440, width: 1080, height: 860, overflow: "hidden" }}>
        <LapisanAtmosfer x={540} y={310} size={760} topic="planet" progress={rays} />
        <div style={{ ...pill, left: 590, top: 230, opacity: rays > 0.9 ? 1 : 0 }}>Siang: pendek</div>
        <div style={{ ...pill, left: 235, top: 520, opacity: rays > 0.9 ? 1 : 0 }}>Senja: panjang</div>
      </div>
    </AbsoluteFill>
  );
};
