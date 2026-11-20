import type React from "react";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { Pantai } from "../../../dark-chalk/objek/Tsunami";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Cta: pantai kapur; saat "tanda" tanda tanya menyala (jawaban sengaja tidak ditunjukkan); ajakan "tulis di komentar" saat "komentar".
export const Cta: React.FC<SceneProps> = ({ at }) => {
  const tanda = at("tanda");
  const komentar = at("komentar");
  return (
    <>
      <Judul teks="Tanda di pantai" sorot="pantai" />
      <Kanvas>
        <Pantai cx={540} cy={860} size={760} mulai={4} />
      </Kanvas>
      <Label teks="?" x={540} y={640} at={tanda + 20} size={260} warna={KAPUR.gold} lebar={260} />
      <Label teks="tulis di komentar" x={540} y={1220} at={komentar} size={60} warna={KAPUR.gold} lebar={760} />
    </>
  );
};
