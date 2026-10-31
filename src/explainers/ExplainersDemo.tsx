import type React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { CastCharacter } from "../characters/cast";
import { TakoCharacter } from "../characters/tako/TakoCharacter";
import { Stopwatch } from "../props";
import { ThemeProvider, useTheme } from "../themes";
import { BarCompare } from "./BarCompare";
import { Callout } from "./Callout";
import { CorrectionCard } from "./CorrectionCard";
import { Cutaway } from "./Cutaway";
import { EDU_FEET_Y, EduBack } from "./EduBack";
import { EndCard } from "./EndCard";
import { MetaphorSwap } from "./MetaphorSwap";
import { ProgressDots } from "./ProgressDots";
import { SafeZoneGuide } from "./SafeZoneGuide";
import { Timeline } from "./Timeline";
import { Transition, type TransitionKind } from "./Transition";

export const EXPLAINERS_DEMO = { id: "ExplainersDemo", width: 1080, height: 1920, fps: 30 } as const;

const SCENE = 90;
const TRANSITIONS: ReadonlyArray<TransitionKind> = ["swipe", "iris", "bars"];
const TRANSITION_FRAMES = 30;

const Label: React.FC<{ readonly children: React.ReactNode }> = ({ children }) => {
  const t = useTheme();
  return <div style={{ position: "absolute", left: 64, right: 160, top: 230, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 800, fontSize: 56, color: t.colors.muted }}>{children}</div>;
};

const Scene: React.FC<{ readonly title: string; readonly children: React.ReactNode }> = ({ title, children }) => (
  <AbsoluteFill>
    <EduBack />
    <Label>{title}</Label>
    {children}
  </AbsoluteFill>
);

const SCENES: ReadonlyArray<{ readonly title: string; readonly view: React.ReactNode }> = [
  {
    title: "CorrectionCard",
    view: (
      <>
        <CorrectionCard top={380} guess="Jantung itu capek" answer="Istirahat tiap detak" topic="tubuh" />
        <TakoCharacter x={540} y={EDU_FEET_Y} size={340} animation="idle" />
      </>
    ),
  },
  {
    title: "Callout",
    view: (
      <>
        <CastCharacter id="jantung" x={540} y={EDU_FEET_Y} size={520} animation="idle" />
        <Callout target={{ x: 600, y: 900 }} label={{ x: 760, y: 560 }} text="Otot jantung" topic="tubuh" at={10} />
      </>
    ),
  },
  {
    title: "Cutaway",
    view: (
      <>
        <CastCharacter id="jantung" x={400} y={EDU_FEET_Y} size={520} animation="idle" />
        <Cutaway x={640} y={620} size={420} label="Sel otot" topic="tubuh" at={8} source={{ x: 470, y: 930, r: 50 }}>
          <Stopwatch x={0} y={0} size={240} progress={0.4} />
        </Cutaway>
      </>
    ),
  },
  {
    title: "BarCompare",
    view: <BarCompare top={460} unit="kali" topic="tubuh" items={[{ label: "Kedip mata", value: 15000 }, { label: "Detak jantung", value: 100000, highlight: true }]} />,
  },
  {
    title: "Timeline",
    view: <Timeline top={520} topic="sejarah" events={[{ year: "1945", label: "Merdeka" }, { year: "1955", label: "KAA" }, { year: "1998", label: "Reformasi" }]} />,
  },
  {
    title: "MetaphorSwap",
    view: (
      <MetaphorSwap
        x={540}
        y={700}
        topic="tubuh"
        fromLabel="Jantung"
        toLabel="Pompa"
        from={<CastCharacter id="jantung" x={0} y={200} size={420} animation="idle" />}
        to={<CastCharacter id="robo" x={0} y={200} size={420} animation="idle" />}
      />
    ),
  },
  {
    title: "ProgressDots",
    view: (
      <>
        <ProgressDots top={420} total={3} current={2} label="Fakta 2 dari 3" topic="ilmu" />
        <CastCharacter id="buku" x={540} y={EDU_FEET_Y} size={460} animation="idle" />
      </>
    ),
  },
];

// Setiap komponen penjelas tampil 3 detik, lalu tiga jenis transisi, lalu kartu penutup.
export const EXPLAINERS_DEMO_DURATION = SCENES.length * SCENE + TRANSITIONS.length * SCENE + SCENE;

export const ExplainersDemo: React.FC<{ readonly safeZone?: boolean }> = ({ safeZone = false }) => (
  <ThemeProvider name="edumotion">
    <AbsoluteFill>
      {SCENES.map((s, i) => (
        <Sequence key={s.title} from={i * SCENE} durationInFrames={SCENE} name={s.title}>
          <Scene title={s.title}>{s.view}</Scene>
        </Sequence>
      ))}
      {TRANSITIONS.map((kind, i) => (
        <Sequence key={kind} from={(SCENES.length + i) * SCENE} durationInFrames={SCENE} name={`Transition ${kind}`}>
          <Scene title={`Transition: ${kind}`}>
            <CastCharacter id="atom" x={540} y={EDU_FEET_Y} size={460} animation="wave" />
          </Scene>
          <Sequence from={(SCENE - TRANSITION_FRAMES) / 2} durationInFrames={TRANSITION_FRAMES} layout="none">
            <Transition kind={kind} topic="planet" />
          </Sequence>
        </Sequence>
      ))}
      <Sequence from={(SCENES.length + TRANSITIONS.length) * SCENE} durationInFrames={SCENE} name="EndCard">
        <EndCard topic="alam">
          <TakoCharacter x={240} y={460} size={460} animation="wave" />
        </EndCard>
      </Sequence>
      {safeZone ? <SafeZoneGuide /> : null}
    </AbsoluteFill>
  </ThemeProvider>
);
