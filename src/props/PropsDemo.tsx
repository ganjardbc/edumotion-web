import type React from "react";
import { AbsoluteFill } from "remotion";
import { ThemeProvider, useTheme } from "../themes";
import {
  AwanHujan, Candi, CheckMark, Chip, Clock, CrossMark, CurvedArrow, ExclamationMark, Gembok, GulunganPeta, JantungAnatomi, Koin, KodeTag, LightBulb, Meteor, Orbit, Otot, ParuParu, Pelangi, PerahuLayar,
  PlanetBercincin, QuestionMark, RodaGigi, Roket, Satelit, SelDarahMerah, SiklusAir, Star, Termometer, TetesDarah, WifiSignal,
} from "./index";

export const PROPS_DEMO = { id: "PropsSheet", width: 1080, height: 1280 } as const;

const COLS = 6;
const CELL = 180;

const Sheet: React.FC = () => {
  const t = useTheme();
  const items: ReadonlyArray<readonly [string, (p: { x: number; y: number; size: number }) => React.ReactNode]> = [
    ["QuestionMark", (p) => <QuestionMark {...p} />],
    ["ExclamationMark", (p) => <ExclamationMark {...p} />],
    ["LightBulb", (p) => <LightBulb {...p} />],
    ["Clock", (p) => <Clock {...p} progress={0.2} />],
    ["CurvedArrow", (p) => <CurvedArrow {...p} />],
    ["Star", (p) => <Star {...p} />],
    ["CheckMark", (p) => <CheckMark {...p} />],
    ["CrossMark", (p) => <CrossMark {...p} />],
    ["JantungAnatomi", (p) => <JantungAnatomi {...p} />],
    ["ParuParu", (p) => <ParuParu {...p} />],
    ["SelDarahMerah", (p) => <SelDarahMerah {...p} />],
    ["TetesDarah", (p) => <TetesDarah {...p} />],
    ["Otot", (p) => <Otot {...p} flex={0.5} />],
    ["Roket", (p) => <Roket {...p} />],
    ["PlanetBercincin", (p) => <PlanetBercincin {...p} />],
    ["Satelit", (p) => <Satelit {...p} />],
    ["Meteor", (p) => <Meteor {...p} />],
    ["Orbit", (p) => <Orbit {...p} progress={0.12} />],
    ["AwanHujan", (p) => <AwanHujan {...p} progress={0.3} />],
    ["Pelangi", (p) => <Pelangi {...p} />],
    ["Termometer", (p) => <Termometer {...p} />],
    ["SiklusAir", (p) => <SiklusAir {...p} />],
    ["RodaGigi", (p) => <RodaGigi {...p} />],
    ["Chip", (p) => <Chip {...p} glow={1} />],
    ["WifiSignal", (p) => <WifiSignal {...p} />],
    ["Gembok", (p) => <Gembok {...p} />],
    ["KodeTag", (p) => <KodeTag {...p} />],
    ["GulunganPeta", (p) => <GulunganPeta {...p} />],
    ["PerahuLayar", (p) => <PerahuLayar {...p} />],
    ["Candi", (p) => <Candi {...p} />],
    ["Koin", (p) => <Koin {...p} />],
  ];
  return (
    <AbsoluteFill style={{ backgroundColor: t.colors.canvas }}>
      {items.map(([name, render], i) => {
        const x = (i % COLS) * CELL + CELL / 2;
        const y = Math.floor(i / COLS) * (CELL + 30) + CELL / 2 + 10;
        return (
          <div key={name}>
            {render({ x, y, size: 150 })}
            <div style={{ position: "absolute", left: x - CELL / 2, top: y + 78, width: CELL, textAlign: "center", fontFamily: t.fonts.heading, fontWeight: 700, fontSize: 18, color: t.colors.muted }}>{name}</div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

// Lembar semua objek di `src/props/` (kecuali yang lama) untuk ditinjau sekaligus.
export const PropsDemo: React.FC = () => (
  <ThemeProvider name="edumotion">
    <Sheet />
  </ThemeProvider>
);
