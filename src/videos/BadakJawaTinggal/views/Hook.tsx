import type React from "react";
import { FotoPin } from "../../../dark-chalk/FotoPin";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Hook:  saat "badak"; foto badak jawa ditempel pin di papan, tanda tanya emas menyala saat "tinggal".
export const Hook: React.FC<SceneProps> = ({ at }) => {
  const badak = at("badak");
  const tinggal = at("tinggal");
  return (
    <>
      <Judul teks="Di mana badak jawa tinggal?" sorot="badak" />
      <FotoPin berkas="badak/4.webp" cx={540} cy={900} lebar={780} rasio={800 / 1200} miring={-3} mulai={Math.max(badak - 6, 2)} />
      <Label teks="?" x={800} y={600} at={tinggal} size={260} warna={KAPUR.gold} lebar={260} />
    </>
  );
};
