import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../assets/backdrops";
import { useTheme } from "../../themes";
import type { SceneTiming } from "./timing";
import type { VideoTopic } from "./types";

const SEGMENT_LABEL = { hook: "HOOK", setup: "SETUP", twist: "TWIST", explain: "PENJELASAN", payoff: "PAYOFF", cta: "AJAKAN" } as const;

// Kartu animatik satu scene: bagian cerita, nomor scene, narasi kalimat yang sedang berjalan, dan bilah waktu.
// Latar polos netral supaya yang dinilai hanya tempo dan isi, bukan gambar.
export const Animatic: React.FC<{ readonly timing: SceneTiming; readonly index: number; readonly count: number; readonly topic?: VideoTopic }> = ({ timing, index, count, topic = "ilmu" }) => {
  const frame = useCurrentFrame();
  const t = useTheme();
  const { scene, frames, lineStarts } = timing;
  let li = 0;
  for (let i = 0; i < lineStarts.length; i++) if (frame >= lineStarts[i]) li = i;
  const seconds = (frames / 30).toFixed(1);
  const label = { fontFamily: t.fonts.heading, fontWeight: 800, color: t.colors.ink } as const;
  return (
    <AbsoluteFill>
      <EduBackdrop topic={topic} floorY={1920} />
      <div style={{ position: "absolute", left: 64, right: 160, top: 260, ...label, fontSize: 44, color: t.colors.muted }}>
        {index + 1}/{count} · {SEGMENT_LABEL[scene.segment]} · {scene.id} · {seconds} dtk
      </div>
      <div style={{ position: "absolute", left: 64, right: 160, top: 410, ...label, fontSize: 64, lineHeight: 1.25 }}>{scene.lines[li]?.text}</div>
      <div style={{ position: "absolute", left: 64, right: 160, top: 340, height: 24, borderRadius: 12, backgroundColor: t.colors.surface, border: `6px solid ${t.colors.ink}` }}>
        <div style={{ width: `${Math.min(100, (frame / frames) * 100)}%`, height: "100%", borderRadius: 12, backgroundColor: t.colors.accent }} />
      </div>
    </AbsoluteFill>
  );
};
