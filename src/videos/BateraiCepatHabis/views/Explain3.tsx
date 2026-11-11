import type React from "react";
import { AbsoluteFill } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { Langkah } from "../../../explainers/pola";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Explain3 (pola Langkah, dua butir): baterai menua → isinya makin sedikit. Kalimat ketiga ("Panas ...")
// ditampilkan oleh cutaway layar penuh (lihat scenes.ts), jadi tidak ada butir ketiga.
export const Explain3: React.FC<SceneProps> = ({ at }) => (
  <AbsoluteFill>
    <EduBackdrop topic={META.topic} />
    <Langkah
      judul="Baterai ikut menua"
      sorotJudul="menua"
      topic="teknologi"
      butir={[
        { teks: "Baterai menua", at: at("menua"), gambar: (k) => <CastCharacter id="baterai" x={k.x} y={k.y + k.size * 0.45} size={k.size * 1.8} expression="sleepy" animation="idle" /> },
        { teks: "Isinya makin sedikit", at: at("makin sedikit"), gambar: (k) => <CastCharacter id="baterai" x={k.x} y={k.y + k.size * 0.45} size={k.size * 1.8} expression="sad" animation="idle" /> },
      ]}
    />
  </AbsoluteFill>
);
