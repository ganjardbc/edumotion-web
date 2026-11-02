import type React from "react";
import { useTheme } from "../themes";

// Kartu tebakan Tako. `crossed` 0..1 menggambar coretan; setelah penuh muncul label "SALAH".
export const GuessCard: React.FC<{ readonly top: number; readonly text: string; readonly crossed?: number; readonly label?: string }> = ({ top, text, crossed = 0, label = "Tebakan Tako" }) => {
  const t = useTheme();
  return (
    <div style={{ position: "absolute", left: 64, right: 160, top, display: "flex", justifyContent: "center" }}>
      <div style={{ position: "relative", backgroundColor: "#FFFFFF", border: `8px solid ${t.colors.ink}`, borderRadius: t.radius.card, padding: "28px 40px", boxShadow: t.shadows.md, textAlign: "center" }}>
        <div style={{ fontFamily: t.fonts.heading, fontWeight: 700, fontSize: 40, color: t.colors.muted }}>{label}</div>
        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 66, lineHeight: 1.1, color: t.colors.ink }}>{text}</div>
          <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, overflow: "visible" }}>
            <line x1="2%" y1="88%" x2={`${2 + 96 * crossed}%`} y2={`${88 - 76 * crossed}%`} stroke={t.colors.danger ?? t.colors.accent} strokeWidth={16} strokeLinecap="round" />
          </svg>
        </div>
        {crossed >= 1 ? (
          <div style={{ position: "absolute", right: -18, top: -34, transform: "rotate(8deg)", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 60, color: "#FFFFFF", backgroundColor: t.colors.danger ?? t.colors.accent, borderRadius: 22, padding: "4px 28px" }}>SALAH</div>
        ) : null}
      </div>
    </div>
  );
};
