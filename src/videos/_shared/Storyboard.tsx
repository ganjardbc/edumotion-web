import type React from "react";
import { AbsoluteFill, Freeze } from "remotion";
import { useTheme } from "../../themes";
import { VIDEOS } from "../index";

// Lembar storyboard: semua scene satu video dalam satu gambar, tiap scene dibekukan di frame kuncinya
// (storyboardOf), lengkap dengan caption dan panduan safe zone. Untuk menilai visual penjelas sekaligus
// sebelum menonton videonya: render dengan `npx remotion still src/index.ts <Nama>-Storyboard out/<Nama>-storyboard.png`.
// Didaftarkan sebagai Composition sepanjang video (bukan Still), karena Sequence di dalam Freeze dipotong oleh
// durasi komposisi induk; frame mana pun yang dirender menghasilkan lembar yang sama.
export const STORYBOARD_COLS = 4;
const SCALE = 0.25;
const CELL_W = 1080 * SCALE;
const CELL_H = 1920 * SCALE;
const LABEL_H = 56;
const GAP = 16;

export const storyboardSize = (count: number) => {
  const rows = Math.ceil(count / STORYBOARD_COLS);
  return { width: STORYBOARD_COLS * CELL_W + (STORYBOARD_COLS + 1) * GAP, height: rows * (CELL_H + LABEL_H) + (rows + 1) * GAP };
};

export const Storyboard: React.FC<{ readonly videoId: string; readonly safeZone: boolean }> = ({ videoId, safeZone }) => {
  const t = useTheme();
  const video = VIDEOS.find((v) => v.id === videoId);
  if (!video) throw new Error(`Video ${videoId} tidak ada di src/videos/index.ts`);
  const Video = video.component;
  return (
    <AbsoluteFill style={{ backgroundColor: t.colors.ink }}>
      {video.storyboard.map((s, i) => {
        const col = i % STORYBOARD_COLS;
        const row = Math.floor(i / STORYBOARD_COLS);
        return (
          <div key={s.id} style={{ position: "absolute", left: GAP + col * (CELL_W + GAP), top: GAP + row * (CELL_H + LABEL_H + GAP), width: CELL_W }}>
            <div style={{ height: LABEL_H, fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 26, color: t.colors.surface }}>
              {i + 1}. {s.id} · {(s.frame / 30).toFixed(1)} dtk
            </div>
            <div style={{ position: "relative", width: CELL_W, height: CELL_H, overflow: "hidden", borderRadius: 12 }}>
              <div style={{ position: "absolute", width: 1080, height: 1920, transform: `scale(${SCALE})`, transformOrigin: "0 0" }}>
                <Freeze frame={s.frame}>
                  <Video safeZone={safeZone} animatic={false} />
                </Freeze>
              </div>
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
