import type React from "react";
import { AbsoluteFill } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { SebabAkibat } from "../../../explainers/pola";
import { QuestionMark } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Setup (pola SebabAkibat): tebakan umum yang keliru. Banyak aplikasi terbuka → ditutup semua?
export const Setup: React.FC<SceneProps> = ({ at }) => (
  <AbsoluteFill>
    <EduBackdrop topic={META.topic} />
    <SebabAkibat
      judul="Gara-gara aplikasi terbuka?"
      sorotJudul="aplikasi"
      topic="teknologi"
      sebab={{ teks: "Banyak aplikasi terbuka", at: at("aplikasi"), gambar: (k) => <CastCharacter id="hape" x={k.x} y={k.y + k.size * 0.45} size={k.size * 1.4} expression="scared" animation="idle" /> }}
      akibat={{ teks: "Tutup semua?", at: at("ditutup"), gambar: (k) => <QuestionMark {...k} topic="teknologi" pop={1} /> }}
    />
  </AbsoluteFill>
);
