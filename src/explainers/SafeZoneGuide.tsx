import type React from "react";
import { AbsoluteFill } from "remotion";

// Panduan visual safe zone 9:16 untuk peninjauan di Studio (atas 220, bawah 480, kiri 64, kanan 160). Jangan dipakai saat render akhir.
export const SafeZoneGuide: React.FC = () => (
  <AbsoluteFill style={{ pointerEvents: "none" }}>
    <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 220, backgroundColor: "rgba(239, 83, 80, 0.18)" }} />
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 480, backgroundColor: "rgba(239, 83, 80, 0.18)" }} />
    <div style={{ position: "absolute", left: 0, top: 220, bottom: 480, width: 64, backgroundColor: "rgba(239, 83, 80, 0.18)" }} />
    <div style={{ position: "absolute", right: 0, top: 220, bottom: 480, width: 160, backgroundColor: "rgba(239, 83, 80, 0.18)" }} />
  </AbsoluteFill>
);
