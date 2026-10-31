import { Audio } from "@remotion/media";
import type React from "react";
import { useMemo } from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Caption, SafeZoneGuide } from "../../explainers";
import { ThemeProvider, useTheme } from "../../themes";
import { computeTimings, totalFrames } from "./timing";
import type { Scene, SceneRenderers } from "./types";
import type { Voiceover } from "./voiceover";

export const SHORT_EDU = { width: 1080, height: 1920, fps: 30 } as const;

export const durationOf = (scenes: ReadonlyArray<Scene>, vo: Voiceover): number => totalFrames(computeTimings(scenes, vo));

type Props = {
  readonly scenes: ReadonlyArray<Scene>;
  readonly renderers: SceneRenderers;
  readonly vo: Voiceover;
  // Tampilkan panduan safe zone (hanya untuk peninjauan).
  readonly safeZone?: boolean;
};

const Body: React.FC<Props> = ({ scenes, renderers, vo, safeZone = false }) => {
  const theme = useTheme();
  const timings = useMemo(() => computeTimings(scenes, vo), [scenes, vo]);
  return (
    <AbsoluteFill style={{ backgroundColor: theme.colors.canvas }}>
      {timings.map((t) => {
        const SceneView = renderers[t.scene.id];
        if (!SceneView) throw new Error(`Scene ${t.scene.id} tidak punya renderer di views/${t.scene.id}.tsx`);
        return (
          <Sequence key={t.scene.id} from={t.from} durationInFrames={t.frames} name={t.scene.id}>
            <SceneView scene={t.scene} frames={t.frames} lineStarts={t.lineStarts} />
            {t.scene.lines.map((line, i) => {
              const audio = vo.audioFor(vo.lineId(t.scene.id, i));
              return (
                <Sequence key={i} from={t.lineStarts[i]} durationInFrames={t.lineFrames[i]} name={`${t.scene.id}-${i + 1}`} layout="none">
                  {audio ? <Audio src={audio.src} /> : null}
                  <Caption text={line.text} />
                </Sequence>
              );
            })}
          </Sequence>
        );
      })}
      {safeZone ? <SafeZoneGuide /> : null}
    </AbsoluteFill>
  );
};

// Cangkang semua video edumotion (1080x1920, 30 fps): tema, urutan scene, audio VO, dan caption.
export const ShortEdu: React.FC<Props> = (props) => (
  <ThemeProvider name="edumotion">
    <Body {...props} />
  </ThemeProvider>
);
