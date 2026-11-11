import type React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { beat, Callout, Counter, EDU_FEET_Y, HookText } from "../../../explainers";
import { useTheme } from "../../../themes";
import { TOPIC_COLORS } from "../../../themes/topics";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Hook: judul + angka 71% naik (rasa penasaran terukur), Bumi besar berdenyut pelan, penanda "laut" menunjuk bagian biru.
export const Hook: React.FC<SceneProps> = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = useTheme();
  const c = TOPIC_COLORS[META.topic];
  const glow = spring({ frame, fps, config: { damping: 18, stiffness: 60 } });
  const floatY = Math.sin(frame / 38) * 12;
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} floorY={1920} />
      <HookText text="Kenapa Bumi punya laut?" highlight="kenapa" size={96} />

      <div style={{ position: "absolute", left: 160, right: 160, top: 520 }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", color: t.colors.ink }}>
          <Counter to={71} frames={50} size={130} />
          <span style={{ fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 90 }}>%</span>
        </div>
        <div style={{ textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 700, fontSize: 40, color: t.colors.muted }}>permukaan Bumi tertutup laut</div>
      </div>

      <div style={{ position: "absolute", left: 540 - 420, top: 1000 + floatY - 420, width: 840, height: 840, borderRadius: "50%", background: `radial-gradient(circle, ${c.shine} 0%, transparent 65%)`, opacity: 0.4 * glow }} />
      <CastCharacter id="bumi" x={540} y={EDU_FEET_Y - 10 + floatY} size={(600) * (1 + 0.03 * beat(frame, 40))} expression="curious" animation="thinking" />
      <Callout target={{ x: 450, y: 1070 + floatY }} label={{ x: 200, y: 900 }} text="laut" topic="planet" at={40} />
    </AbsoluteFill>
  );
};
