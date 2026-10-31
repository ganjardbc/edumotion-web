import type React from "react";
import { useCurrentFrame } from "remotion";
import { blendTimes, mixHex, Sky, type SkyPalette, type TimeOfDay } from "../shared";

export const SKY_TIMES: Record<TimeOfDay, SkyPalette> = {
  siang: { sky: "#6EC1F2", skyLow: "#D8F1FD", cloud: "#FFFFFF", cloudOpacity: 0.95, celestial: "#FFE27A", celestialX: 0.78, celestialY: 0.14, celestialSize: 0.2, stars: 0 },
  sore: { sky: "#F59E7B", skyLow: "#FFD8A8", cloud: "#FFE3D0", cloudOpacity: 0.9, celestial: "#FFB45E", celestialX: 0.78, celestialY: 0.22, celestialSize: 0.24, stars: 0 },
  malam: { sky: "#1E2350", skyLow: "#3C4A8C", cloud: "#6A74B8", cloudOpacity: 0.5, celestial: "#F4F1D8", celestialX: 0.78, celestialY: 0.14, celestialSize: 0.17, stars: 1 },
};

const TIME_VALUE: Record<TimeOfDay, number> = { siang: 0, sore: 0.5, malam: 1 };

// Waktu hari menjadi angka 0..1 (siang 0, sore 0.5, malam 1).
export const timeValue = (time: TimeOfDay | number): number => (typeof time === "string" ? TIME_VALUE[time] : Math.max(0, Math.min(1, time)));

// Menyesuaikan warna benda darat (bukit, jalan, bangunan) dengan waktu: hangat di sore, gelap di malam.
export const gradeGround = (hex: string, time: TimeOfDay | number): string => {
  const t = timeValue(time);
  const sore = 1 - Math.abs(2 * t - 1);
  const night = Math.max(0, (t - 0.5) * 2);
  return mixHex(mixHex(hex, "#FFB07A", sore * 0.2), "#14152A", night * 0.55);
};

// Awan: [x, y, lebar, fase]. Tiap awan dibuat dari dua bulatan dan alas.
const CLOUDS: ReadonlyArray<readonly [number, number, number, number]> = [
  [140, 330, 360, 0],
  [640, 520, 300, 2.2],
  [260, 760, 260, 4.1],
  [760, 980, 320, 1.3],
];

const Cloud: React.FC<{ readonly x: number; readonly y: number; readonly w: number; readonly color: string; readonly opacity: number }> = ({ x, y, w, color, opacity }) => (
  <div style={{ position: "absolute", left: x, top: y, width: w, height: w * 0.45, opacity }}>
    <div style={{ position: "absolute", left: 0, bottom: 0, width: w, height: w * 0.26, borderRadius: w * 0.13, backgroundColor: color }} />
    <div style={{ position: "absolute", left: w * 0.14, bottom: w * 0.12, width: w * 0.34, height: w * 0.34, borderRadius: "50%", backgroundColor: color }} />
    <div style={{ position: "absolute", left: w * 0.38, bottom: w * 0.12, width: w * 0.44, height: w * 0.44, borderRadius: "50%", backgroundColor: color }} />
  </div>
);

// Langit penuh kanvas (1080x1920) dengan benda langit, bintang (malam), dan awan yang melayang pelan.
export const SkyLayer: React.FC<{ readonly time: TimeOfDay | number; readonly clouds?: boolean }> = ({ time, clouds = true }) => {
  const frame = useCurrentFrame();
  const p = blendTimes(SKY_TIMES, time);
  return (
    <>
      <div style={{ position: "absolute", left: 0, top: 0, width: 1080, height: 1920 }}>
        <Sky p={p} width={1080} cloudScale={0} />
      </div>
      {clouds
        ? CLOUDS.map(([x, y, w, phase]) => <Cloud key={y} x={x + 40 * Math.sin(frame / 120 + phase)} y={y + 10 * Math.sin(frame / 80 + phase)} w={w} color={p.cloud} opacity={p.cloudOpacity} />)
        : null}
    </>
  );
};
