import type React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../themes";
import { HIGHLIGHT, TOPIC_COLORS } from "../themes/topics";
import type { VideoTopic } from "../videos/_shared/types";

// Kartu penutup (scene Cta): judul, ajakan, dan handle akun. `children` = karakter (mis. Tako) yang digambar di tengah kartu.
// Seluruh isi berada di dalam safe zone (atas 220, bawah 480, kiri 64, kanan 160).
export const EndCard: React.FC<{ readonly title?: string; readonly actions?: ReadonlyArray<string>; readonly topic?: VideoTopic; readonly children?: React.ReactNode }> = ({
  title = "Sampai jumpa!",
  actions = ["Ikuti", "Simpan"],
  topic = "alam",
  children,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = useTheme();
  const c = TOPIC_COLORS[topic];
  const pop = (delay: number): number => spring({ frame: frame - delay, fps, config: { damping: 12, stiffness: 150 } });
  const head = pop(0);
  return (
    <AbsoluteFill style={{ backgroundColor: c.shine }}>
      <div style={{ position: "absolute", left: 64, right: 160, top: 220, bottom: 480, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40 }}>
        <div style={{ fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 104, lineHeight: 1.1, textAlign: "center", color: c.ink, transform: `scale(${0.7 + 0.3 * head})`, opacity: Math.min(1, head * 1.5) }}>{title}</div>
        <div style={{ position: "relative", width: 480, height: 480 }}>{children}</div>
        <div style={{ display: "flex", gap: 28 }}>
          {actions.map((a, i) => {
            const p = pop(14 + i * 8);
            return (
              <div key={a} style={{ fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 56, color: i === 0 ? c.ink : t.colors.surface, backgroundColor: i === 0 ? HIGHLIGHT : c.main, border: `8px solid ${c.ink}`, borderRadius: 48, padding: "10px 44px", boxShadow: t.shadows.md, transform: `scale(${0.6 + 0.4 * p})`, opacity: Math.min(1, p * 1.5) }}>
                {a}
              </div>
            );
          })}
        </div>
        <div style={{ fontFamily: t.fonts.heading, fontWeight: 700, fontSize: 48, color: c.ink, opacity: Math.min(1, pop(30) * 1.5) }}>{t.handle}</div>
      </div>
    </AbsoluteFill>
  );
};
