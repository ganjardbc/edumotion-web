import type React from "react";
import { EDU_BACKDROP_FLOOR_Y, PlainBack } from "../assets/backdrops";
import { EDU_PLAIN } from "../themes/topics";

// Lantai berada di atas caption (blok caption sekitar y 1310-1440) supaya karakter berdiri di atas teks, bukan tertutup. Kaki karakter di EDU_FEET_Y.
export const EDU_FLOOR_Y = EDU_BACKDROP_FLOOR_Y;
export const EDU_FEET_Y = 1215;

export const EduBack: React.FC = () => <PlainBack anchors={{ floorY: EDU_FLOOR_Y, spotX: 540 }} palette={EDU_PLAIN} />;

// Denyut 0..1 yang naik tajam lalu meluruh, berulang tiap `period` frame (25 frame ≈ 72 denyut per menit).
export const beat = (frame: number, period = 25): number => Math.exp(-((frame % period) / 5));
