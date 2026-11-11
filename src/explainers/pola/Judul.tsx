import type React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../../themes";
import { HIGHLIGHT } from "../../themes/topics";
import { AREA, TEKS } from "./tata";

// Judul scene: satu kalimat kunci (paling banyak 6 kata), 2 baris maksimal, di zona judul. `sorot` = satu kata
// yang diberi stabilo (satu sorotan per scene). Muncul mulai frame `at`.
export const Judul: React.FC<{ readonly teks: string; readonly sorot?: string; readonly at?: number; readonly warna?: string }> = ({ teks, sorot, at = 0, warna }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = useTheme();
  if (frame < at) return null;
  const pop = spring({ frame: frame - at, fps, config: { damping: 14, stiffness: 160 } });
  const key = sorot?.toLowerCase();
  return (
    <div style={{ position: "absolute", left: AREA.left, width: AREA.width, top: AREA.judulTop, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: TEKS.judul, lineHeight: 1.15, color: warna ?? t.colors.ink, textWrap: "balance", opacity: Math.min(1, pop * 1.6), transform: `translateY(${(1 - pop) * 24}px)` }}>
      {teks.split(" ").map((w, i) => {
        const on = key !== undefined && w.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase() === key;
        return (
          <span key={i}>
            {i > 0 ? " " : null}
            <span style={on ? { backgroundColor: HIGHLIGHT, color: t.colors.ink, borderRadius: 18, padding: "0 14px" } : undefined}>{w}</span>
          </span>
        );
      })}
    </div>
  );
};
