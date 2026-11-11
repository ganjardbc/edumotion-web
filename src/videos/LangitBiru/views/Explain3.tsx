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
const BAR_W = 640;

// Explain3, tiga tahap bergantian (satu fokus per waktu): (1) ungu terhambur lebih kuat, (2) sinar ungu yang datang tipis,
// (3) mata kurang peka pada ungu. Panjang batang hanya ilustrasi kualitatif.
export const Explain3: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
  // Tiga tahap mengikuti kalimat narator: "tersebar lebih kuat" → "Tapi cahaya ungu ... sedikit" → "mata kita kurang peka".
  const ramp = (from: number, len: number): number => interpolate(frame, [from, from + len], [0, 1], clamp);
  const tapi = at("Tapi");
  const mata = at("mata kita");
  const p1 = Math.min(ramp(0, 6), 1 - ramp(tapi - 6, 6));
  const p2 = Math.min(ramp(tapi, 6), 1 - ramp(mata - 6, 6));
  const p3 = ramp(mata, 8);
  const g1 = ramp(at("tersebar"), 20);
  const g2 = ramp(at("lebih sedikit"), 15);
  const hl = ramp(at("kurang peka"), 6);
  const title = { position: "absolute", left: 0, width: 1080, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 60, color: t.colors.ink } as const;
  const bar = (top: number, name: string, color: typeof VIOLET, value: number, progress: number, widest: number) => (
    <div style={{ position: "absolute", left: (1080 - (174 + BAR_W * widest)) / 2, top, height: 90, display: "flex", alignItems: "center", gap: 24 }}>
      <div style={{ width: 150, fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 48, color: color.ink }}>{name}</div>
      <div style={{ width: BAR_W * value * progress, height: 90, backgroundColor: color.main, border: `8px solid ${color.ink}`, borderRadius: 45, boxSizing: "border-box" }} />
    </div>
  );
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <div style={{ opacity: p1 }}>
        <div style={{ ...title, top: 300 }}>Disebarkan udara</div>
        {bar(480, "Ungu", VIOLET, 1, g1, 1)}
        {bar(620, "Biru", BLUE, 0.7, g1, 1)}
      </div>
      <div style={{ opacity: p2 }}>
        <div style={{ ...title, top: 300 }}>Sinar Matahari yang datang</div>
        {bar(480, "Ungu", VIOLET, 0.25, g2, 0.85)}
        {bar(620, "Biru", BLUE, 0.85, g2, 0.85)}
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
