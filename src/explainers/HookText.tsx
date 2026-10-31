import type React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../themes";
import { HIGHLIGHT } from "../themes/topics";

// Teks pembuka besar, maksimal 6 kata, di bawah batas atas safe zone (220 px), rata tengah kanvas (margin kiri-kanan 160).
export const HookText: React.FC<{ readonly text: string; readonly highlight?: string; readonly top?: number; readonly size?: number }> = ({ text, highlight, top = 240, size = 112 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = useTheme();
  const pop = spring({ frame, fps, config: { damping: 12, stiffness: 140 } });
  const words = text.split(" ");
  return (
    <div style={{ position: "absolute", left: 160, right: 160, top, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: size, lineHeight: 1.2, color: t.colors.ink, transform: `scale(${0.7 + 0.3 * pop})`, opacity: Math.min(1, pop * 1.5), textWrap: "balance" }}>
      {words.map((w, i) => {
        const on = highlight !== undefined && w.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase() === highlight.toLowerCase();
        return (
          <span key={i}>
            {i > 0 ? " " : null}
            <span style={on ? { backgroundColor: HIGHLIGHT, borderRadius: 20, padding: "0 16px" } : undefined}>{w}</span>
          </span>
        );
      })}
    </div>
  );
};
