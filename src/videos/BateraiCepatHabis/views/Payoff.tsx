import type React from "react";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { Pop } from "../../../dark-chalk/Kanvas";
import { Hape, SinyalBar } from "../../../dark-chalk/objek/Gawai";
import { KAPUR } from "../../../dark-chalk/palette";
import { Termometer } from "../../../dark-chalk/objek/Purba";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Payoff: tiga penyebab muncul saat disebut (layar, sinyal, panas). Tanpa tokoh.
export const Payoff: React.FC<SceneProps> = ({ at }) => {
  const layar = Math.max(8, at("layar"));
  const sinyal = at("sinyal");
  const panas = at("kepanasan");
  return (
    <>
      <Teks text="Layar, sinyal, panas" sorot="panas" size={96} top={250} />
      <Kanvas>
        <Pop at={layar}><Hape cx={250} cy={800} tinggi={330} terang={1} mulai={layar} /></Pop>
        <Pop at={sinyal}><SinyalBar cx={540} cy={800} size={230} level={1} /></Pop>
        <Pop at={panas}><Termometer cx={830} cy={800} tinggi={380} level={0.9} warna={KAPUR.orange} mulai={panas} /></Pop>
      </Kanvas>
      <Label teks="layar terang" x={250} y={1050} at={layar} size={46} lebar={280} />
      <Label teks="sinyal lemah" x={540} y={1050} at={sinyal} size={46} lebar={280} />
      <Label teks="kepanasan" x={830} y={1050} at={panas} size={46} lebar={280} warna={KAPUR.gold} />
    </>
  );
};
