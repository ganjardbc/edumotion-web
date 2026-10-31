import type React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { Mata } from "../../../props";
import { useTheme } from "../../../themes";
import { HIGHLIGHT, TOPIC_COLORS } from "../../../themes/topics";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

const VIOLET = TOPIC_COLORS.ilmu;
const BLUE = TOPIC_COLORS.planet;
const BAR_X = 120;
const BAR_W = 640;

// Explain3, tiga tahap bergantian (satu fokus per waktu): (1) ungu terhambur lebih kuat, (2) sinar ungu yang datang tipis,
// (3) mata kurang peka pada ungu. Panjang batang hanya ilustrasi kualitatif.
export const Explain3: React.FC<SceneProps> = ({ frames }) => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
  const at = (a: number, b: number): number => interpolate(frame, [frames * a, frames * b], [0, 1], clamp);
  const phase = (inA: number, inB: number, outA: number, outB: number): number => Math.min(at(inA, inB), 1 - at(outA, outB));
  const p1 = phase(0.02, 0.08, 0.34, 0.4);
  const p2 = phase(0.4, 0.46, 0.62, 0.68);
  const p3 = phase(0.68, 0.76, 1.1, 1.2);
  const g1 = at(0.06, 0.24);
  const g2 = at(0.44, 0.58);
  const hl = at(0.8, 0.86);
  const title = { position: "absolute", left: 64, width: 856, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 60, color: t.colors.ink } as const;
  const bar = (top: number, name: string, color: typeof VIOLET, value: number, progress: number) => (
    <div style={{ position: "absolute", left: BAR_X, top, height: 90, display: "flex", alignItems: "center", gap: 24 }}>
      <div style={{ width: 150, fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 48, color: color.ink }}>{name}</div>
      <div style={{ width: BAR_W * value * progress, height: 90, backgroundColor: color.main, border: `8px solid ${color.ink}`, borderRadius: 45, boxSizing: "border-box" }} />
    </div>
  );
  return (
    <AbsoluteFill>
      <EduBackdrop kind="papanDiagram" topic={META.topic} />
      <div style={{ opacity: p1 }}>
        <div style={{ ...title, top: 300 }}>Dihamburkan udara</div>
        {bar(480, "Ungu", VIOLET, 1, g1)}
        {bar(620, "Biru", BLUE, 0.7, g1)}
      </div>
      <div style={{ opacity: p2 }}>
        <div style={{ ...title, top: 300 }}>Sinar Matahari yang datang</div>
        {bar(480, "Ungu", VIOLET, 0.25, g2)}
        {bar(620, "Biru", BLUE, 0.85, g2)}
      </div>
      <div style={{ opacity: p3 }}>
        <Mata x={540} y={600} size={520} topic="tubuh" />
        <div style={{ ...title, top: 900, fontSize: 64 }}>
          Mata kita <span style={{ backgroundColor: hl > 0.5 ? HIGHLIGHT : "transparent", borderRadius: 16, padding: "0 14px" }}>kurang peka</span>
        </div>
        <div style={{ ...title, top: 990, fontSize: 64 }}>pada ungu</div>
      </div>
    </AbsoluteFill>
  );
};
