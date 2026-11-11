import { Audio } from "@remotion/media";
import type React from "react";
import { useMemo } from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { SFX } from "../../assets/sfx";
import { Caption, SafeZoneGuide, Transition } from "../../explainers";
import { ThemeProvider, useTheme } from "../../themes";
import { Animatic } from "./Animatic";
import { Cutaway } from "../../explainers/pola";
import { computeTimings, cueAt, cueLineEnd, totalFrames } from "./timing";
import type { Scene, SceneRenderers, VideoTopic } from "./types";
import type { Voiceover } from "./voiceover";

// Pengali volume semua SFX supaya campuran dengan VO tidak melewati -1 dBFS (diukur: VO + SFX = -13,8 LUFS stereo, puncak -1,0 dBFS).
const SFX_MASTER = 0.35;

// Panjang transisi antar scene; layar tertutup penuh tepat di batas scene.
const TRANSITION_FRAMES = 18;

// Memutar cue SFX scene. Dipasang di dalam Sequence scene, jadi waktu cue relatif ke awal scene.
const SceneSfx: React.FC<{ readonly scene: Scene; readonly frames: number }> = ({ scene, frames }) => (
  <>
    {(scene.sfx ?? []).flatMap((cue, ci) =>
      Array.from({ length: cue.times ?? 1 }, (_, k) => {
        const from = Math.round((cue.at + k * (cue.every ?? 0)) * SHORT_EDU.fps);
        if (from >= frames) return null;
        return (
          <Sequence key={`${ci}-${k}`} from={from} durationInFrames={frames - from} name={`sfx-${cue.sfx}`} layout="none">
            <Audio src={SFX[cue.sfx]} volume={(cue.volume ?? 0.5) * SFX_MASTER} />
          </Sequence>
        );
      }),
    )}
  </>
);

export const SHORT_EDU = { width: 1080, height: 1920, fps: 30 } as const;

export const durationOf = (scenes: ReadonlyArray<Scene>, vo: Voiceover): number => totalFrames(computeTimings(scenes, vo));

// Frame kunci lembar storyboard: tiap scene dua kali (a: 30% durasi, untuk fase pertama; b: dan sesaat sebelum selesai, saat
// semua objek sudah muncul dan caption masih tampil), ditambah satu frame cutaway bila ada. Akhir scene yang
// tertutup cutaway diambil sesaat sebelum cutaway muncul.
export const storyboardOf = (scenes: ReadonlyArray<Scene>, vo: Voiceover): ReadonlyArray<{ readonly id: string; readonly frame: number }> =>
  computeTimings(scenes, vo).flatMap((t) => {
    const last = t.lineStarts.length - 1;
    const akhir = t.lineStarts[last] + t.lineFrames[last] - 6;
    const cut = t.scene.cutaway ? cueAt(t, t.scene.cutaway.at) : null;
    const ujung = cut === null ? akhir : Math.max(0, cut - 4);
    const out = [
      { id: `${t.scene.id} a`, frame: t.from + Math.round(ujung * 0.3) },
      { id: `${t.scene.id} b`, frame: t.from + Math.max(0, ujung) },
    ];
    if (cut !== null) out.push({ id: `${t.scene.id} cut`, frame: t.from + cut + 20 });
    return out;
  });

// Props komposisi tiap video; bisa diubah di panel props Remotion Studio.
export type VideoProps = {
  // Tampilkan panduan safe zone (hanya untuk peninjauan).
  readonly safeZone?: boolean;
  // Mode animatik: ganti visual scene dengan kartu kasar (bagian, nomor scene, narasi, kata kunci) untuk menguji
  // tempo naskah dan VO sebelum views/ ditulis. Audio, caption, dan SFX tetap jalan.
  readonly animatic?: boolean;
};

export const VIDEO_DEFAULT_PROPS: Required<VideoProps> = { safeZone: false, animatic: false };

type Props = VideoProps & {
  readonly scenes: ReadonlyArray<Scene>;
  readonly renderers: SceneRenderers;
  readonly vo: Voiceover;
  // Warna transisi antar scene (lihat Scene.enter).
  readonly topic?: VideoTopic;
};

const Body: React.FC<Props> = ({ scenes, renderers, vo, safeZone = false, animatic = false, topic }) => {
  const theme = useTheme();
  const timings = useMemo(() => computeTimings(scenes, vo), [scenes, vo]);
  return (
    <AbsoluteFill style={{ backgroundColor: theme.colors.canvas }}>
      {timings.map((t) => {
        const SceneView = renderers[t.scene.id];
        if (!SceneView && !animatic) throw new Error(`Scene ${t.scene.id} tidak punya renderer di views/${t.scene.id}.tsx`);
        const at = (kata: string, nth?: number) => cueAt(t, kata, nth);
        return (
          <Sequence key={t.scene.id} from={t.from} durationInFrames={t.frames} name={t.scene.id}>
            {animatic || !SceneView ? <Animatic timing={t} index={timings.indexOf(t)} count={timings.length} topic={topic} /> : <SceneView scene={t.scene} frames={t.frames} lineStarts={t.lineStarts} at={at} />}
            {t.scene.cutaway ? (
              <Cutaway
                dari={cueAt(t, t.scene.cutaway.at)}
                sampai={t.scene.cutaway.sampai ? cueAt(t, t.scene.cutaway.sampai) : cueLineEnd(t, t.scene.cutaway.at)}
                judul={t.scene.cutaway.judul}
                sorot={t.scene.cutaway.sorot}
                sub={t.scene.cutaway.sub}
                topic={topic ?? "ilmu"}
              />
            ) : null}
            <SceneSfx scene={t.scene} frames={t.frames} />
            {t.scene.lines.map((line, i) => {
              const audio = vo.audioFor(vo.lineId(t.scene.id, i));
              return (
                <Sequence key={i} from={t.lineStarts[i]} durationInFrames={t.lineFrames[i]} name={`${t.scene.id}-${i + 1}`} layout="none">
                  {audio ? <Audio src={audio.src} /> : null}
                  <Caption text={line.text} words={t.lineAudioWords[i]} />
                </Sequence>
              );
            })}
          </Sequence>
        );
      })}
      {timings.map((t) =>
        t.scene.enter && t.from > 0 ? (
          <Sequence key={`tr-${t.scene.id}`} from={Math.max(0, t.from - TRANSITION_FRAMES / 2)} durationInFrames={TRANSITION_FRAMES} name={`transisi-${t.scene.id}`}>
            <Transition kind={t.scene.enter} topic={topic} />
          </Sequence>
        ) : null,
      )}
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
