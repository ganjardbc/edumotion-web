import { loadFont } from "@remotion/google-fonts/Nunito";
import type React from "react";
import { AbsoluteFill, Easing, interpolate, Sequence, useCurrentFrame } from "remotion";
import { PlainBack } from "../../assets/backdrops/plain";
import { TAKO_PALETTE } from "../tako/assets/palette";
import { TakoCharacter } from "../tako/TakoCharacter";
import type { AnimationName, ExpressionName } from "../tako/types";
import { CastCharacter } from "./CastCharacter";
import { CAST } from "./characters";
import type { CastDefinition } from "./types";

const { fontFamily } = loadFont("normal", { weights: ["800"] });

export const CAST_DEMO = { id: "TakoCastDemo", width: 1080, height: 1920, fps: 30 } as const;

const FLOOR_Y = 1450;
const SIZE = 900;
const X = 540;

// Satu karakter memainkan rangkaian yang sama, jadi rig ketujuhnya bisa dibandingkan langsung.
const BEATS: ReadonlyArray<{ readonly animation: AnimationName; readonly expression?: ExpressionName; readonly frames: number; readonly label: string }> = [
  { animation: "wave", frames: 40, label: "Melambai" },
  { animation: "walk", expression: "happy", frames: 36, label: "Berjalan" },
  { animation: "jump", expression: "laughing", frames: 40, label: "Melompat" },
  { animation: "talk", frames: 36, label: "Berbicara" },
  { animation: "idle", expression: "surprised", frames: 16, label: "Terkejut" },
  { animation: "confusion", frames: 22, label: "Bingung" },
  { animation: "thinking", frames: 22, label: "Berpikir" },
];
const CHARACTER_FRAMES = BEATS.reduce((n, b) => n + b.frames, 0);
const LINEUP_FRAMES = 100;

export const CAST_DEMO_DURATION = CAST.length * CHARACTER_FRAMES + LINEUP_FRAMES;

const Text: React.FC<{ readonly top: number; readonly size: number; readonly opacity?: number; readonly children: React.ReactNode }> = ({ top, size, opacity = 1, children }) => (
  <div style={{ position: "absolute", left: 0, right: 0, top, textAlign: "center", fontFamily, fontWeight: 800, fontSize: size, color: TAKO_PALETTE.dark, opacity }}>{children}</div>
);

const Shadow: React.FC<{ readonly x: number; readonly y: number; readonly width: number }> = ({ x, y, width }) => (
  <div style={{ position: "absolute", left: x - width / 2, top: y - width * 0.04, width, height: width * 0.14, borderRadius: "50%", backgroundColor: TAKO_PALETTE.dark, opacity: 0.14 }} />
);

const CharacterScene: React.FC<{ readonly def: CastDefinition }> = ({ def }) => {
  let from = 0;
  return (
    <>
      <Text top={200} size={110}>
        {def.name}
      </Text>
      <Text top={340} size={46} opacity={0.65}>
        {def.topic}
      </Text>
      <Shadow x={X} y={FLOOR_Y} width={440} />
      {BEATS.map((b) => {
        const start = from;
        from += b.frames;
        return (
          <Sequence key={b.label} from={start} durationInFrames={b.frames} name={b.label} layout="none">
            <CastCharacter id={def.id} x={X} y={FLOOR_Y} size={SIZE} animation={b.animation} expression={b.expression} />
          </Sequence>
        );
      })}
    </>
  );
};

// Satu slot per karakter cast, ditambah satu terakhir untuk Tako; empat baris, lima kolom.
const SLOTS: ReadonlyArray<readonly [number, number]> = [
  [140, 700],
  [340, 700],
  [540, 700],
  [740, 700],
  [940, 700],
  [140, 960],
  [340, 960],
  [540, 960],
  [740, 960],
  [940, 960],
  [140, 1220],
  [340, 1220],
  [540, 1220],
  [740, 1220],
  [940, 1220],
  [140, 1450],
  [340, 1450],
  [540, 1450],
  [740, 1450],
  [940, 1450],
];

const Lineup: React.FC = () => {
  const frame = useCurrentFrame();
  const size = interpolate(frame, [0, 14], [175, 215], { extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  return (
    <>
      <Text top={200} size={96}>
        Teman Tako
      </Text>
      {CAST.map((def, i) => (
        <CastCharacter key={def.id} id={def.id} x={SLOTS[i][0]} y={SLOTS[i][1]} size={size} animation="wave" frameOffset={i * 3} />
      ))}
      <TakoCharacter x={SLOTS[CAST.length][0]} y={SLOTS[CAST.length][1]} size={size} animation="wave" />
    </>
  );
};

// Tiap karakter pendukung tampil bergiliran, lalu semuanya berkumpul bersama Tako.
export const CastDemo: React.FC = () => (
  <AbsoluteFill>
    <PlainBack />
    {CAST.map((def, i) => (
      <Sequence key={def.id} from={i * CHARACTER_FRAMES} durationInFrames={CHARACTER_FRAMES} name={def.name}>
        <CharacterScene def={def} />
      </Sequence>
    ))}
    <Sequence from={CAST.length * CHARACTER_FRAMES} durationInFrames={LINEUP_FRAMES} name="Kumpul">
      <Lineup />
    </Sequence>
  </AbsoluteFill>
);
