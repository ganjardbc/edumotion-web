import type React from "react";
import { ShortEdu } from "../_shared/ShortEdu";
import { BASE_SCENES, META } from "./scenes";
import { RENDERERS } from "./views";
import { VO } from "./voiceover";

// Komposisi BumiPunyaLaut. Alur, audio, dan caption ditangani ShortEdu; isi visual ada di views/.
export const BumiPunyaLaut: React.FC<{ readonly safeZone?: boolean }> = ({ safeZone }) => <ShortEdu scenes={BASE_SCENES} renderers={RENDERERS} vo={VO} safeZone={safeZone} topic={META.topic} />;
