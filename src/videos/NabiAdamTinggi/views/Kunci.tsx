import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Kunci as KunciPola } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

export const Kunci: React.FC<SceneProps> = ({ at }) => <KunciPola judul="Enam puluh hasta" sorotJudul="hasta" mulai={at("enam puluh")}
  keterangan="satuan yang disebut hadis" keteranganAt={at("hasta")}
  gambar={<>
    <Kanvas>
      <Garis d="M430 620 L430 1130" mulai={at("enam puluh")} lama={24} warna={KAPUR.gold} tebal={8} />
      {[620, 722, 824, 926, 1028, 1130].map((y, i) => <Garis key={y} d={`M${i % 2 === 0 ? 400 : 410} ${y} L${i % 2 === 0 ? 460 : 450} ${y}`} mulai={at("enam puluh") + 4 + i * 3} lama={5} warna={KAPUR.gold} tebal={7} />)}
    </Kanvas>
    <Label teks="60" x={650} y={860} at={at("enam puluh")} size={170} warna={KAPUR.chalk} lebar={360} />
    <Label teks="hasta" x={650} y={990} at={at("hasta")} size={52} warna={KAPUR.gold} lebar={300} />
  </>} />;
