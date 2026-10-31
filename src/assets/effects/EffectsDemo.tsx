import type React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { CastCharacter } from "../../characters/cast";
import { EDU_FEET_Y, EduBack } from "../../explainers/EduBack";
import { ThemeProvider } from "../../themes";
import { Bubbles, Confetti, PopBurst, Sparkle, SpeedLines } from "./index";

export const EFFECTS_DEMO = { id: "EffectsDemo", width: 1080, height: 1920, fps: 30 } as const;

const SCENE = 75;

const Stage: React.FC<{ readonly children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill>
    <EduBack />
    <CastCharacter id="atom" x={540} y={EDU_FEET_Y} size={460} animation="wave" />
    {children}
  </AbsoluteFill>
);

const VIEWS: ReadonlyArray<readonly [string, React.ReactNode]> = [
  ["Confetti", <Confetti key="c" topic="ilmu" />],
  ["Sparkle", <><Sparkle key="a" x={300} y={760} /><Sparkle key="b" x={780} y={640} size={110} phase={14} /><Sparkle key="d" x={640} y={900} size={60} phase={26} /></>],
  ["SpeedLines", <SpeedLines key="s" topic="planet" />],
  ["PopBurst", <PopBurst key="p" x={540} y={760} topic="tubuh" />],
  ["Bubbles", <Bubbles key="u" topic="air" />],
];

// Setiap efek tampil 2,5 detik di atas latar edu.
export const EFFECTS_DEMO_DURATION = VIEWS.length * SCENE;

export const EffectsDemo: React.FC = () => (
  <ThemeProvider name="edumotion">
    <AbsoluteFill>
      {VIEWS.map(([name, view], i) => (
        <Sequence key={name} from={i * SCENE} durationInFrames={SCENE} name={name}>
          <Stage>{view}</Stage>
        </Sequence>
      ))}
    </AbsoluteFill>
  </ThemeProvider>
);
