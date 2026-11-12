import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { KAPUR } from "../../../dark-chalk/palette";

export const MULAI_VISUAL = 30;

export const Mikrofon: React.FC<{ readonly x: number; readonly y: number; readonly s?: number; readonly mulai: number }> = ({ x, y, s = 1, mulai }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} fill="none" stroke={KAPUR.chalk} strokeWidth={10 / s} strokeLinecap="round" strokeLinejoin="round">
    <Garis d="M-48 -70 Q-48 -120 0 -120 Q48 -120 48 -70 L48 25 Q48 70 0 70 Q-48 70 -48 25 Z" mulai={mulai} lama={5} tebal={10 / s} />
    <Garis d="M-88 -20 L-88 20 Q-88 100 0 100 Q88 100 88 20 L88 -20 M0 100 L0 145 M-42 145 L42 145" mulai={mulai + 1} lama={5} tebal={10 / s} />
    <Garis d="M-25 -75 L25 -75 M-25 -35 L25 -35 M-25 5 L25 5" mulai={mulai + 2} lama={4} warna={KAPUR.gold} tebal={7 / s} />
  </g>
);

export const Kepala: React.FC<{ readonly x: number; readonly y: number; readonly s?: number; readonly mulai: number }> = ({ x, y, s = 1, mulai }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} fill="none" stroke={KAPUR.chalk} strokeWidth={9 / s} strokeLinecap="round" strokeLinejoin="round">
    <Garis d="M-105 145 L-105 75 Q-108 10 -65 -65 Q-25 -130 45 -105 Q110 -78 105 -5 L92 78 L62 110 L54 150 Z" mulai={mulai} lama={5} tebal={9 / s} />
    <Garis d="M92 10 Q145 -4 140 42 Q135 76 91 72 M-34 21 Q-5 8 18 21 M40 34 L61 34 M25 65 Q48 81 68 64" mulai={mulai + 2} lama={5} warna={KAPUR.gold} tebal={8 / s} />
  </g>
);

export const Gelombang: React.FC<{ readonly x: number; readonly y: number; readonly s?: number; readonly mulai: number; readonly warna?: string }> = ({ x, y, s = 1, mulai, warna = KAPUR.gold }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} fill="none" stroke={warna} strokeWidth={8 / s} strokeLinecap="round">
    <Garis d="M-70 0 Q-35 -45 0 0 T70 0" mulai={mulai} lama={4} warna={warna} tebal={8 / s} />
    <Garis d="M-110 -38 Q-35 -105 40 -38 T190 -38 M-110 38 Q-35 105 40 38 T190 38" mulai={mulai + 1} lama={4} warna={warna} tebal={7 / s} />
  </g>
);

export const Perekam: React.FC<{ readonly x: number; readonly y: number; readonly s?: number; readonly mulai: number }> = ({ x, y, s = 1, mulai }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} fill="none" stroke={KAPUR.chalk} strokeWidth={9 / s} strokeLinecap="round" strokeLinejoin="round">
    <Garis d="M-82 -105 L82 -105 Q100 -105 100 -85 L100 85 Q100 105 82 105 L-82 105 Q-100 105 -100 85 L-100 -85 Q-100 -105 -82 -105 Z" mulai={mulai} lama={5} tebal={9 / s} />
    <Garis d="M-48 -55 L-48 55 L48 0 Z" mulai={mulai + 2} lama={4} warna={KAPUR.gold} tebal={9 / s} />
  </g>
);

export const TandaTanya: React.FC<{ readonly x: number; readonly y: number; readonly s?: number; readonly mulai: number }> = ({ x, y, s = 1, mulai }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} fill="none" stroke={KAPUR.gold} strokeWidth={12 / s} strokeLinecap="round" strokeLinejoin="round">
    <Garis d="M-42 -28 C-48 -92 54 -96 60 -36 C64 6 8 8 8 52 M8 94 L8 100" mulai={mulai} lama={6} warna={KAPUR.gold} tebal={12 / s} />
  </g>
);
