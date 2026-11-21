import type React from "react";
import { FotoPin } from "../../../dark-chalk/FotoPin";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Hook: judul pertanyaan; foto badak jawa saja ditempel pin di papan saat "badak".
export const Hook: React.FC<SceneProps> = ({ at }) => (
  <>
    <Judul teks="Bagaimana nasib badak jawa saat Krakatau meletus?" sorot="nasib" />
    <FotoPin berkas="badak/4.webp" cx={540} cy={900} lebar={780} rasio={800 / 1200} miring={-3} mulai={Math.max(at("badak") - 6, 2)} />
  </>
);
