import type React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { mixHex } from "../../assets/backdrops";
import { useTheme } from "../../themes";
import { HIGHLIGHT, TOPIC_COLORS } from "../../themes/topics";
import type { VideoTopic } from "../../videos/_shared/types";
import { AREA, CLAMP, TEKS } from "./tata";

// CUTAWAY: sisipan layar penuh untuk satu poin penting. Menutup seluruh scene (tanpa karakter, tanpa latar dunia):
// warna gelap topik, satu kalimat kunci besar (paling banyak 6 kata) dengan satu kata disorot, dan keterangan pendek.
// Tampil dari frame `dari` sampai `sampai` (frame scene). Biasanya dipasang lewat `cutaway` di scenes.ts, bukan manual.
export const Cutaway: React.FC<{ readonly dari: number; readonly sampai: number; readonly judul: string; readonly sorot?: string; readonly sub?: string; readonly topic: VideoTopic; readonly children?: React.ReactNode }> = ({ dari, sampai, judul, sorot, sub, topic, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = useTheme();
  if (frame < dari || frame > sampai) return null;
  const c = TOPIC_COLORS[topic];
  const buka = interpolate(frame, [dari, dari + 8], [0, 1], CLAMP);
  const tutup = interpolate(frame, [sampai - 6, sampai], [1, 0], CLAMP);
  const pop = spring({ frame: frame - dari - 4, fps, config: { damping: 13, stiffness: 150 } });
  const key = sorot?.toLowerCase();
  return (
    <div style={{ position: "absolute", inset: 0, opacity: tutup, clipPath: `inset(${(1 - buka) * 100}% 0 0 0)`, background: `linear-gradient(180deg, ${c.ink} 0%, ${mixHex(c.ink, c.rim, 0.35)} 100%)` }}>
      <div style={{ position: "absolute", left: AREA.left, width: AREA.width, top: 300, textAlign: "center" }}>
        <span style={{ fontFamily: t.fonts.heading, fontWeight: 800, fontSize: TEKS.kecil, letterSpacing: 4, color: c.ink, backgroundColor: HIGHLIGHT, borderRadius: 40, padding: "8px 28px" }}>KUNCINYA</span>
      </div>
      <div style={{ position: "absolute", left: AREA.left, width: AREA.width, top: 440, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: TEKS.besar, lineHeight: 1.12, color: "#FFFFFF", textWrap: "balance", opacity: Math.min(1, pop * 1.5), transform: `scale(${0.88 + 0.12 * pop})` }}>
        {judul.split(" ").map((w, i) => {
          const on = key !== undefined && w.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase() === key;
          return (
            <span key={i}>
              {i > 0 ? " " : null}
              <span style={on ? { backgroundColor: HIGHLIGHT, color: c.ink, borderRadius: 20, padding: "0 16px" } : undefined}>{w}</span>
            </span>
          );
        })}
      </div>
      {sub ? <div style={{ position: "absolute", left: AREA.left, width: AREA.width, top: 900, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 700, fontSize: TEKS.label, lineHeight: 1.2, color: mixHex(c.shine, "#FFFFFF", 0.4), opacity: Math.min(1, pop * 1.5) }}>{sub}</div> : null}
      {children}
    </div>
  );
};
