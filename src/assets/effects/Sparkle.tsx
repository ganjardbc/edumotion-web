import type React from "react";
import { useCurrentFrame } from "remotion";
import { HIGHLIGHT } from "../../themes/topics";

// Kilau empat sudut yang berkedip di (x, y). `phase` menggeser kedipnya; `period` dalam frame.
export const Sparkle: React.FC<{ readonly x: number; readonly y: number; readonly size?: number; readonly phase?: number; readonly period?: number; readonly color?: string }> = ({ x, y, size = 80, phase = 0, period = 40, color = HIGHLIGHT }) => {
  const frame = useCurrentFrame();
  const t = (((frame + phase) % period) + period) % period / period;
  const k = Math.sin(t * Math.PI);
  return (
    <svg width={size} height={size} viewBox="-50 -50 100 100" style={{ position: "absolute", left: x - size / 2, top: y - size / 2, transform: `scale(${k}) rotate(${t * 90}deg)`, opacity: k, overflow: "visible", pointerEvents: "none" }}>
      <path d="M0 -48 C4 -14 14 -4 48 0 C14 4 4 14 0 48 C-4 14 -14 4 -48 0 C-14 -4 -4 -14 0 -48 Z" fill={color} />
    </svg>
  );
};
