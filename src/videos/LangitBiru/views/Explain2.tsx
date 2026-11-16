import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { KAPUR } from "../../../dark-chalk/palette";
import { Sorot } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";
import { sinar } from "./gambar";

const CX = 540;
const CY = 860;

// Explain2 (pola Sorot): satu partikel udara di dalam lensa. Sinar putih masuk; biru memancar ke segala arah, merah lurus terus.
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const partikel = Math.max(8, at("partikel"));
  const biru = at("segala arah");
  const merah = at("Cahaya merah");
  return (
    <>
      <Sorot
        judul="Udara menyebarkan biru"
        sorotJudul="biru"
        gambar={() => (
          <>
            <Pop at={partikel} durasi={8}>
              <circle
                cx={CX}
                cy={CY}
                r={32}
                fill={KAPUR.esIsi}
                stroke={KAPUR.chalk}
                strokeWidth={7}
              />
            </Pop>
            <Garis
              d={`M${CX - 270} ${CY} L${CX - 44} ${CY}`}
              mulai={partikel + 6}
              lama={16}
              tebal={8}
              warna={KAPUR.chalk}
            />
            {sinar(CX, CY, 230, 12, 0).map((d, i) => (
              <Garis
                key={i}
                d={d}
                mulai={biru + i * 2}
                lama={14}
                tebal={7}
                warna={KAPUR.es}
                kasar={0.4}
              />
            ))}
            <Garis
              d={`M${CX + 44} ${CY} L${CX + 270} ${CY}`}
              mulai={merah}
              lama={18}
              tebal={8}
              warna={KAPUR.orange}
            />
            <Garis
              d={`M390 1185 L${CX - 30} ${CY + 34}`}
              mulai={partikel + 6}
              lama={14}
              tebal={6}
              warna={KAPUR.gold}
            />
          </>
        )}
      />
      <Label
        teks="partikel udara"
        x={390}
        y={1255}
        at={partikel + 6}
        size={48}
        warna={KAPUR.gold}
        lebar={400}
      />
    </>
  );
};
