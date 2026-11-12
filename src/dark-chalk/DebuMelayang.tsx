import type React from "react";
import { useCurrentFrame } from "remotion";
import { KAPUR } from "./palette";

// Butiran debu kapur yang melayang pelan ke atas di belakang gambar. Deterministik (LCG berbenih), hanya bergantung frame.
const JUMLAH = 22;
const lcg = (seed: number): (() => number) => {
  let x = seed >>> 0;
  return () => {
    x = (Math.imul(x, 1664525) + 1013904223) >>> 0;
    return x / 4294967296;
  };
};
const BUTIR = Array.from({ length: JUMLAH }, (_, i) => {
  const r = lcg(i * 7919 + 13);
  return { x: 90 + r() * 900, y0: r() * 1700, kecepatan: 0.25 + r() * 0.55, jari: 1.5 + r() * 2.5, goyang: 6 + r() * 10, fase: r() * 6.28, alfa: 0.12 + r() * 0.2 };
});

export const DebuMelayang: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <svg width={1080} height={1920} viewBox="0 0 1080 1920" style={{ position: "absolute", inset: 0 }} aria-hidden>
      {BUTIR.map((b, i) => {
        const y = 1780 - ((b.y0 + frame * b.kecepatan) % 1700);
        return <circle key={i} cx={b.x + Math.sin(frame / 40 + b.fase) * b.goyang} cy={y} r={b.jari} fill={KAPUR.chalk} opacity={b.alfa} />;
      })}
    </svg>
  );
};
