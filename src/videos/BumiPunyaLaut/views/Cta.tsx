import type React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { EDU_FEET_Y, HookText } from "../../../explainers";
import { QuestionMark } from "../../../props";
import { useTheme } from "../../../themes";
import { TOPIC_COLORS } from "../../../themes/topics";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Cta: Bumi melambaikan tangan, card ajakan komentar, tanda tanya pop-in.
export const Cta: React.FC<SceneProps> = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = useTheme();
  const c = TOPIC_COLORS[META.topic];

  const floatY = Math.sin(frame / 36) * 12;
  const pop    = spring({ frame: frame - 10, fps, config: { damping: 10, stiffness: 140 } });
  const cardIn = spring({ frame: frame - 6,  fps, config: { damping: 14, stiffness: 120 } });

  return (
    <AbsoluteFill>
      <EduBackdrop kind="antariksa" topic={META.topic} floorY={1920} accent="ilmu" decorShift={{ x: 250, y: 760 }} moonShift={{ x: -70, y: 560 }} />
      <HookText text="Planet lain punya laut?" highlight="laut" size={88} color={t.colors.surface} shadow={`0 6px 0 ${t.colors.ink}`} />

      {/* Card ajakan */}
      <div
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 520,
          transform: `scale(${0.7 + 0.3 * cardIn})`,
          opacity: Math.min(1, cardIn * 1.5),
        }}
      >
        <div
          style={{
            backgroundColor: c.main,
            border: `8px solid ${c.ink}`,
            borderRadius: t.radius.card,
            padding: "26px 36px",
            boxShadow: t.shadows.md,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: t.fonts.heading,
              fontWeight: 800,
              fontSize: 48,
              color: t.colors.surface,
              lineHeight: 1.2,
            }}
          >
            Tulis jawabanmu di komentar!
          </div>
        </div>
      </div>

      <QuestionMark x={820} y={900} size={240} topic="planet" pop={pop} />

      <CastCharacter
        id="bumi"
        x={460}
        y={EDU_FEET_Y + floatY}
        size={560}
        expression="happy"
        animation="wave"
      />
    </AbsoluteFill>
  );
};
