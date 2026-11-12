import type React from "react";
import { Teks } from "../Teks";
import { KAPUR } from "../palette";

// Judul scene (paling banyak 6 kata, satu kata disorot emas) di zona judul y 250.
export const Judul: React.FC<{ readonly teks: string; readonly sorot?: string; readonly at?: number; readonly warna?: string; readonly size?: number }> = ({ teks, sorot, at = 0, warna = KAPUR.chalk, size = 84 }) => (
  <Teks text={teks} sorot={sorot} size={size} top={250} mulai={at} warna={warna} />
);
