import type React from "react";
import { ShortEdu } from "../_shared/ShortEdu";
import { BASE_SCENES } from "./scenes";
import { RENDERERS } from "./views";
import { VO } from "./voiceover";

// Komposisi JantungTidakCapek. Alur, audio, dan caption ditangani ShortEdu; isi visual ada di views/.
export const JantungTidakCapek: React.FC<{ readonly safeZone?: boolean }> = ({ safeZone }) => <ShortEdu scenes={BASE_SCENES} renderers={RENDERERS} vo={VO} safeZone={safeZone} />;
