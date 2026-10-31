import type React from "react";
import { AbsoluteFill } from "remotion";
import { TOPIC_COLORS } from "../../../themes/topics";
import type { VideoTopic } from "../../../videos/_shared/types";
import { mixHex, type TimeOfDay } from "../shared";
import { OUTDOOR_BUILDINGS } from "../outdoor/OutdoorBack";
import { FloorSpot } from "./Floor";
import { gradeGround, SkyLayer, timeValue } from "./SkyLayer";

// Jendela menyala: pola tetap dari indeks, hanya terlihat saat malam.
const lit = (bi: number, r: number, c: number): boolean => (bi * 7 + r * 5 + c * 3) % 4 !== 0;

// Latar kota: langit, dua lapis gedung berwarna topik (jendela menyala di malam), jalan dengan marka putus-putus.
export const Kota: React.FC<{ readonly topic: VideoTopic; readonly floorY: number; readonly time: TimeOfDay | number }> = ({ topic, floorY, time }) => {
  const c = TOPIC_COLORS[topic];
  const night = Math.max(0, (timeValue(time) - 0.5) * 2);
  const g = (hex: string): string => gradeGround(hex, time);
  const far = g(mixHex(c.shine, "#DDE4EF", 0.6));
  const near = g(mixHex(c.rim, "#C9CFDD", 0.7));
  const road = g(mixHex(c.ink, "#7A7F8C", 0.7));
  const row = (offset: number, scale: number, color: string, windows: boolean): readonly React.ReactNode[] => {
    let x = 0;
    return OUTDOOR_BUILDINGS.map(([w, h], i) => {
      const bx = x + offset;
      x += w;
      const bh = h * scale * 1.4;
      const cols = Math.max(1, Math.floor((w - 12) / 22));
      const rows = Math.max(1, Math.floor((bh - 12) / 30));
      return (
        <div key={i} style={{ position: "absolute", left: bx, top: floorY - bh, width: w, height: bh, backgroundColor: color }}>
          {windows && night > 0.05
            ? Array.from({ length: rows }).flatMap((_, r) =>
                Array.from({ length: cols }).map((__, cIdx) =>
                  lit(i, r, cIdx) ? <div key={`${r}-${cIdx}`} style={{ position: "absolute", left: 12 + cIdx * 22, top: 12 + r * 30, width: 12, height: 16, backgroundColor: "#FFE9A8", opacity: night }} /> : null,
                ),
              )
            : null}
        </div>
      );
    });
  };
  return (
    <AbsoluteFill>
      <SkyLayer time={time} clouds={false} />
      <div style={{ position: "absolute", left: 0, top: 0, width: 1080, height: floorY, overflow: "hidden" }}>{row(-60, 1.25, far, false)}</div>
      <div style={{ position: "absolute", left: 0, top: 0, width: 1080, height: floorY, overflow: "hidden" }}>{row(0, 1, near, true)}</div>
      <div style={{ position: "absolute", left: 0, right: 0, top: floorY, height: 22, backgroundColor: g(mixHex(c.shine, "#B8BBC6", 0.6)) }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: floorY + 22, bottom: 0, backgroundColor: road }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: floorY + 330, height: 10, backgroundImage: "repeating-linear-gradient(90deg, #F1EFE8 0 90px, transparent 90px 170px)", opacity: 0.8 }} />
      <FloorSpot floorY={floorY} opacity={0.2 * (1 - night)} />
    </AbsoluteFill>
  );
};
