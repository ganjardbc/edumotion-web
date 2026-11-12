import type React from "react";
import { Kanvas, Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { AngkaTeks, Nol } from "../../../dark-chalk/objek/Angka";
import { KAPUR } from "../../../dark-chalk/palette";
import { Teks } from "../../../dark-chalk/Teks";
import type { SceneProps } from "../../_shared/types";

// Hook: angka nol besar di tengah; saat "komputer" deret 0 dan 1 berjatuhan di sekelilingnya; saat "menemukannya" tanda tanya menyala.
const BINER: ReadonlyArray<{ readonly x: number; readonly y: number; readonly t: string }> = [
  { x: 190, y: 620, t: "1" },
  { x: 890, y: 650, t: "0" },
  { x: 160, y: 880, t: "0" },
  { x: 920, y: 910, t: "1" },
  { x: 230, y: 1110, t: "1" },
  { x: 860, y: 1100, t: "0" },
];
export const Hook: React.FC<SceneProps> = ({ at }) => {
  const komputer = Math.max(14, at("komputer"));
  const cari = at("menemukannya");
  return (
    <>
      <Teks text="Siapa penemu angka 0?" sorot="0" size={96} top={250} />
      <Kanvas>
        <Nol cx={540} cy={850} tinggi={470} mulai={6} />
        {BINER.map((b, i) => (
          <Pop key={i} at={komputer + i * 5}>
            <AngkaTeks cx={b.x} cy={b.y} teks={b.t} size={90} warna={KAPUR.abu} />
          </Pop>
        ))}
      </Kanvas>
      <Label teks="nol" x={540} y={1180} at={12} size={56} lebar={400} />
      <Label teks="?" x={540} y={850} at={cari} size={260} warna={KAPUR.gold} lebar={300} />
    </>
  );
};
