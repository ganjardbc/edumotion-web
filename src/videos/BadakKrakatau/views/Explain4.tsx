import type React from "react";
import { Kanvas, Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { BadakKapur, Semenanjung } from "../../../dark-chalk/objek/Badak";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain4: semenanjung dikelilingi garis emas saat "dilindungi"; tiga badak kecil dan label "40-50 ekor" saat "empat".
export const Explain4: React.FC<SceneProps> = ({ at }) => {
  const badak = at("badak");
  return (
    <>
      <Judul teks="Dilindungi sejak 1921" sorot="1921" />
      <Kanvas>
        <Semenanjung cx={540} cy={740} size={780} mulai={4} batas={at("dilindungi")} />
        {[[370, 740], [530, 705], [450, 815]].map(([x, y], i) => (
          <Pop key={i} at={badak + i * 8}>
            <BadakKapur cx={x} cy={y} size={140} mulai={badak + i * 8} />
          </Pop>
        ))}
      </Kanvas>
      <Label teks="Sampai 1949" x={540} y={1110} at={at("Sampai")} size={54} lebar={560} />
      <Label teks="Sekitar 40–50 ekor" x={540} y={1200} at={at("empat")} size={62} warna={KAPUR.gold} lebar={700} />
    </>
  );
};
