import type React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { TOPIC_COLORS } from "../themes/topics";
import type { VideoTopic } from "../videos/_shared/types";

export type TransitionKind = "swipe" | "iris" | "bars";

// Selimut transisi antar scene dalam warna topik. Pasang di Sequence sepanjang transisi, berpusat di batas dua scene:
// layar tertutup penuh tepat di tengah Sequence, jadi pergantian scene terjadi tanpa terlihat.
export const Transition: React.FC<{ readonly kind?: TransitionKind; readonly topic?: VideoTopic }> = ({ kind = "swipe", topic = "alam" }) => {
  const frame = useCurrentFrame();
  const { durationInFrames, width, height } = useVideoConfig();
  const c = TOPIC_COLORS[topic];
  const p = interpolate(frame, [0, Math.max(1, durationInFrames - 1)], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  // 0 -> 1 -> 0: seberapa tertutup layarnya.
  const cover = Easing.inOut(Easing.cubic)(1 - Math.abs(2 * p - 1));
  if (kind === "iris") {
    const maxR = Math.hypot(width, height) / 2;
    return (
      <AbsoluteFill style={{ pointerEvents: "none" }}>
        <svg width={width} height={height}>
          <circle cx={width / 2} cy={height / 2} r={maxR * cover} fill={c.main} />
          <circle cx={width / 2} cy={height / 2} r={maxR * cover * 0.8} fill="none" stroke={c.shine} strokeWidth={24} opacity={cover} />
        </svg>
      </AbsoluteFill>
    );
  }
  if (kind === "bars") {
    const colors = [c.rim, c.main, c.shine];
    return (
      <AbsoluteFill style={{ pointerEvents: "none" }}>
        {colors.map((color, i) => (
          <div key={i} style={{ position: "absolute", left: 0, top: (height / 3) * i, width: width * Math.min(1, cover * (1.3 - i * 0.15)), height: height / 3 + 1, backgroundColor: color, ...(i % 2 ? { left: "auto", right: 0 } : {}) }} />
        ))}
      </AbsoluteFill>
    );
  }
  // swipe: panel miring menyapu dari kiri ke kanan.
  const x = interpolate(p, [0, 1], [-width * 1.3, width * 1.3]);
  return (
    <AbsoluteFill style={{ pointerEvents: "none", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: x, top: -100, width: width * 1.3, height: height + 200, transform: "skewX(-12deg)", backgroundColor: c.main, borderRight: `60px solid ${c.shine}`, borderLeft: `40px solid ${c.rim}`, boxSizing: "border-box" }} />
    </AbsoluteFill>
  );
};
