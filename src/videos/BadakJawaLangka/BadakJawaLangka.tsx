import type React from "react";
import { ShortEdu, type VideoProps } from "../_shared/ShortEdu";
import { BASE_SCENES, META } from "./scenes";
import { RENDERERS } from "./views";
import { VO } from "./voiceover";

// Komposisi BadakJawaLangka (tema dark-chalk). Alur, audio, dan caption ditangani ShortEdu; isi visual ada di views/.
// Props `safeZone` dan `animatic` bisa diubah di panel props Remotion Studio.
export const BadakJawaLangka: React.FC<VideoProps> = (props) => <ShortEdu scenes={BASE_SCENES} renderers={RENDERERS} vo={VO} topic={META.topic} tema="dark-chalk" {...props} />;
