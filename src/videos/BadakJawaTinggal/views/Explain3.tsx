import type React from "react";
import { FotoPin } from "../../../dark-chalk/FotoPin";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Semenanjung } from "../../../dark-chalk/objek/Badak";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain3: semenanjung diperbesar; garis batas emas melingkar saat "dilindungi"; foto Ujung Kulon ditempel pin saat "sejak".
export const Explain3: React.FC<SceneProps> = ({ at }) => {
  const lindung = at("dilindungi");
  return (
    <>
      <Judul teks="Dilindungi sejak 1921" sorot="1921" />
      <Kanvas>
        <Semenanjung cx={540} cy={620} size={540} mulai={4} batas={lindung} />
      </Kanvas>
      <FotoPin berkas="badak/6.jpg" cx={540} cy={1010} lebar={500} rasio={400 / 600} miring={2} mulai={at("sejak")} />
    </>
  );
};
