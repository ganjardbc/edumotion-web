import type React from "react";
import { CastCharacter } from "../characters/cast";
import { ThemeProvider } from "../themes";
import { ThumbnailCard } from "./ThumbnailCard";

export const THUMBNAIL_DEMO = { id: "ThumbnailDemo", width: 1080, height: 1920 } as const;

// Contoh sampul: hook 5 kata dengan satu kata disorot dan karakter pilar topiknya.
export const ThumbnailDemo: React.FC = () => (
  <ThemeProvider name="edumotion">
    <ThumbnailCard hook="Jantung kamu istirahat tiap detak!" highlight="istirahat" topic="tubuh" badge="Tubuh manusia">
      <CastCharacter id="jantung" x={460} y={500} size={560} animation="wave" expression="surprised" />
    </ThumbnailCard>
  </ThemeProvider>
);
