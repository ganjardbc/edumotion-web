import type React from "react";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Borobudur } from "../../../dark-chalk/objek/Borobudur";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Payoff: teras Borobudur jatuh satu per satu ke tempatnya (disusun) mulai "batu", sampai candi lengkap saat "mengunci".
export const Payoff: React.FC<SceneProps> = ({ at }) => {
  const batu = at("batu");
  return (
    <>
      <Judul teks="Jutaan batu, saling mengunci" sorot="mengunci" />
      <Kanvas>
        <Borobudur cx={540} cy={900} size={760} mulai={batu} jeda={8} jatuh />
      </Kanvas>
    </>
  );
};
