import { loadFont } from "@remotion/google-fonts/Nunito";
import type React from "react";
import { AbsoluteFill, Easing, interpolate, Sequence, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { PlainBack } from "../../assets/backdrops/plain";
import { jumpHeight } from "./animations";
import { EXPRESSION_LABEL } from "./expressions";
import { TAKO_PALETTE } from "./assets/palette";
import { TakoCharacter } from "./TakoCharacter";
import { EXPRESSION_NAMES, type AnimationName, type ExpressionName } from "./types";

const { fontFamily } = loadFont("normal", { weights: ["800"] });

export const TAKO_DEMO = { id: "TakoCharacterDemo", width: 1080, height: 1920, fps: 30 } as const;

const FLOOR_Y = 1450;
const SIZE = 900;
const CENTER_X = 540;

const EXPRESSION_FRAMES = 18;
const REACTIONS: ReadonlyArray<{ readonly animation: AnimationName; readonly label: string; readonly frames: number }> = [
  { animation: "surprise", label: "Kaget!", frames: 38 },
  { animation: "confusion", label: "Bingung...", frames: 37 },
  { animation: "excitement", label: "Semangat!", frames: 38 },
  { animation: "thinking", label: "Hmm, berpikir", frames: 37 },
];
const CAPTIONS = ["Halo, teman-teman!", "Hari ini kita belajar", "sesuatu yang seru!"];

// Durasi tiap adegan dalam frame; total 900 frame = 30 detik.
const SCENES = {
  intro: 90,
  idle: 90,
  expressions: EXPRESSION_NAMES.length * EXPRESSION_FRAMES,
  walk: 120,
  jump: 90,
  talk: 120,
  reactions: REACTIONS.reduce((n, r) => n + r.frames, 0),
  finale: 60,
} as const;

export const TAKO_DEMO_DURATION = Object.values(SCENES).reduce((a, b) => a + b, 0);

const Label: React.FC<{ readonly text: string; readonly size?: number; readonly fade?: boolean }> = ({ text, size = 96, fade = true }) => {
  const frame = useCurrentFrame();
  const opacity = fade ? interpolate(frame, [0, 6], [0, 1], { extrapolateRight: "clamp" }) : 1;
  const dy = fade ? interpolate(frame, [0, 8], [24, 0], { extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }) : 0;
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 230,
        textAlign: "center",
        fontFamily,
        fontWeight: 800,
        fontSize: size,
        color: TAKO_PALETTE.dark,
        opacity,
        transform: `translateY(${dy}px)`,
      }}
    >
      {text}
    </div>
  );
};

const Shadow: React.FC<{ readonly x: number; readonly lift?: number }> = ({ x, lift = 0 }) => {
  const k = Math.max(0.35, 1 - lift / 700);
  return (
    <div
      style={{
        position: "absolute",
        left: x - 190 * k,
        top: FLOOR_Y - 18,
        width: 380 * k,
        height: 56 * k,
        borderRadius: "50%",
        backgroundColor: TAKO_PALETTE.dark,
        opacity: 0.16 * k,
      }}
    />
  );
};

const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const fall = interpolate(frame, [0, 14], [-900, 0], { extrapolateRight: "clamp", easing: Easing.in(Easing.quad) });
  const impact = interpolate(frame, [14, 18, 26, 34], [0, -0.22, 0.05, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const waving = frame >= 34;
  return (
    <>
      {frame >= 14 ? <Label text="Halo, aku Tako!" /> : null}
      <Shadow x={CENTER_X} lift={-fall} />
      <TakoCharacter
        x={CENTER_X}
        y={FLOOR_Y + fall}
        size={SIZE}
        animation={waving ? "wave" : "idle"}
        frameOffset={waving ? -34 : 0}
        pose={{ squashY: impact, squashX: -impact * 0.7 }}
      />
    </>
  );
};

const ExpressionPop: React.FC<{ readonly expression: ExpressionName }> = ({ expression }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame, fps, config: { damping: 9, stiffness: 220 }, durationInFrames: 14 });
  return (
    <>
      <Label text={EXPRESSION_LABEL[expression]} fade={false} />
      <Shadow x={CENTER_X} />
      <TakoCharacter x={CENTER_X} y={FLOOR_Y} size={SIZE} expression={expression} pose={{ squashY: (1 - pop) * -0.08, squashX: (1 - pop) * 0.06 }} />
    </>
  );
};

const Walk: React.FC = () => {
  const frame = useCurrentFrame();
  const x = interpolate(frame, [0, SCENES.walk], [300, 780]);
  return (
    <>
      <Label text="Berjalan" />
      <Shadow x={x} />
      <TakoCharacter x={x} y={FLOOR_Y} size={SIZE} animation="walk" expression="happy" />
    </>
  );
};

const Jump: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const lift = (jumpHeight(frame, fps) * SIZE) / 800;
  return (
    <>
      <Label text="Melompat" />
      <Shadow x={CENTER_X} lift={lift} />
      <TakoCharacter x={CENTER_X} y={FLOOR_Y} size={SIZE} animation="jump" expression={lift > 20 ? "laughing" : "happy"} />
    </>
  );
};

const Talk: React.FC = () => {
  const frame = useCurrentFrame();
  const caption = CAPTIONS[Math.min(CAPTIONS.length - 1, Math.floor(frame / 40))];
  return (
    <>
      <Label text="Berbicara" />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 420,
          textAlign: "center",
          fontFamily,
          fontWeight: 800,
          fontSize: 64,
          color: TAKO_PALETTE.primary,
        }}
      >
        {caption}
      </div>
      <Shadow x={CENTER_X} />
      <TakoCharacter x={CENTER_X} y={FLOOR_Y} size={SIZE} animation="talk" />
    </>
  );
};

const Reaction: React.FC<{ readonly animation: AnimationName; readonly label: string }> = ({ animation, label }) => (
  <>
    <Label text={label} />
    <Shadow x={CENTER_X} />
    <TakoCharacter x={CENTER_X} y={FLOOR_Y} size={SIZE} animation={animation} />
  </>
);

const Finale: React.FC = () => (
  <>
    <Label text="Sampai jumpa!" />
    <Shadow x={CENTER_X} />
    <TakoCharacter x={CENTER_X} y={FLOOR_Y} size={SIZE} animation="wave" />
  </>
);

// Komposisi demo: delapan adegan berurutan di atas latar polos yang sama.
export const TakoDemo: React.FC = () => {
  const starts: number[] = [];
  let at = 0;
  for (const d of Object.values(SCENES)) {
    starts.push(at);
    at += d;
  }
  const [intro, idle, expressions, walk, jump, talk, reactions, finale] = starts;

  let rAt = reactions;
  return (
    <AbsoluteFill>
      <PlainBack />
      <Sequence from={intro} durationInFrames={SCENES.intro} name="1 Perkenalan">
        <Intro />
      </Sequence>
      <Sequence from={idle} durationInFrames={SCENES.idle} name="2 Diam dan berkedip">
        <Label text="Diam & berkedip" />
        <Shadow x={CENTER_X} />
        <TakoCharacter x={CENTER_X} y={FLOOR_Y} size={SIZE} expression="happy" />
      </Sequence>
      {EXPRESSION_NAMES.map((name, i) => (
        <Sequence key={name} from={expressions + i * EXPRESSION_FRAMES} durationInFrames={EXPRESSION_FRAMES} name={`3 Ekspresi ${name}`}>
          <ExpressionPop expression={name} />
        </Sequence>
      ))}
      <Sequence from={walk} durationInFrames={SCENES.walk} name="4 Berjalan">
        <Walk />
      </Sequence>
      <Sequence from={jump} durationInFrames={SCENES.jump} name="5 Melompat">
        <Jump />
      </Sequence>
      <Sequence from={talk} durationInFrames={SCENES.talk} name="6 Berbicara">
        <Talk />
      </Sequence>
      {REACTIONS.map((r) => {
        const from = rAt;
        rAt += r.frames;
        return (
          <Sequence key={r.animation} from={from} durationInFrames={r.frames} name={`7 Reaksi ${r.animation}`}>
            <Reaction animation={r.animation} label={r.label} />
          </Sequence>
        );
      })}
      <Sequence from={finale} durationInFrames={SCENES.finale} name="8 Pose akhir">
        <Finale />
      </Sequence>
    </AbsoluteFill>
  );
};
