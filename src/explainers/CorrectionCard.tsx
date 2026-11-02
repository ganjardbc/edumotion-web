import type React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useTheme } from "../themes";
import { TOPIC_COLORS } from "../themes/topics";
import type { VideoTopic } from "../videos/_shared/types";
import { GuessCard } from "./GuessCard";

// Twist khas Tako: tebakan keliru dicoret, lalu jawaban benar muncul di bawahnya.
// Pasang di dalam Sequence; `crossAt` dan `answerAt` dalam frame relatif terhadap awal Sequence.
export const CorrectionCard: React.FC<{
  readonly top: number;
  readonly guess: string;
  readonly answer: string;
  readonly topic?: VideoTopic;
  readonly crossAt?: number;
  readonly answerAt?: number;
  readonly guessLabel?: string;
}> = ({ top, guess, answer, topic = "alam", crossAt = 20, answerAt = 44, guessLabel }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = useTheme();
  const c = TOPIC_COLORS[topic];
  const crossed = interpolate(frame, [crossAt, crossAt + 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const pop = spring({ frame: frame - answerAt, fps, config: { damping: 12, stiffness: 150 } });
  return (
    <>
      <GuessCard top={top} text={guess} crossed={crossed} label={guessLabel} />
      <div style={{ position: "absolute", left: 64, right: 160, top: top + 300, display: "flex", justifyContent: "center", opacity: Math.min(1, pop * 1.5), transform: `scale(${0.7 + 0.3 * pop})` }}>
        <div style={{ backgroundColor: c.main, border: `8px solid ${c.ink}`, borderRadius: t.radius.card, padding: "28px 40px", boxShadow: t.shadows.md, textAlign: "center" }}>
          <div style={{ fontFamily: t.fonts.heading, fontWeight: 700, fontSize: 40, color: c.ink }}>Yang benar</div>
          <div style={{ fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 66, lineHeight: 1.1, color: t.colors.surface }}>{answer}</div>
        </div>
      </div>
    </>
  );
};
