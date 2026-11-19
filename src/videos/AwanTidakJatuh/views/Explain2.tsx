import type React from "react";
import { useCurrentFrame } from "remotion";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { TetesMelayang } from "../../../dark-chalk/objek/Awan";
import { Tetes } from "../../../dark-chalk/objek/Laut";
import { Panah } from "../../../dark-chalk/objek/Terbang";
import { KAPUR } from "../../../dark-chalk/palette";
import { Judul, SebabAkibat } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain2: dua fase. (1) tetes kecil jatuh sangat pelan. (2) SebabAkibat: udara hangat mendorong ke atas, tetes melayang.
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const pelan = at("pelan");
  const hangat = at("hangat");
  const melayang = at("melayang");
  if (frame < hangat - 6) {
    return (
      <>
        <Judul teks="Tetes kecil jatuh pelan" sorot="pelan" />
        <Kanvas>
          <Tetes cx={540} cy={800} size={220} mulai={4} />
          <Panah cx={540} cy={1060} size={110} arah="bawah" mulai={pelan} warna={KAPUR.abu} tebal={9} />
        </Kanvas>
        <Label teks="jatuh sangat pelan" x={540} y={1215} at={pelan} size={56} lebar={640} />
      </>
    );
  }
  return (
    <SebabAkibat
      renggang
      judul="Udara menahan tetes"
      sorotJudul="menahan"
      sebab={{
        teks: "udara hangat naik",
        at: hangat,
        gambar: ({ x, y }) => (
          <>
            <Panah cx={x - 90} cy={y} size={150} arah="atas" mulai={hangat} warna={KAPUR.orange} />
            <Panah cx={x} cy={y} size={190} arah="atas" mulai={hangat + 4} warna={KAPUR.orange} />
            <Panah cx={x + 90} cy={y} size={150} arah="atas" mulai={hangat + 8} warna={KAPUR.orange} />
          </>
        ),
      }}
      akibat={{
        teks: "tetes melayang",
        at: melayang,
        gambar: ({ x, y }) => (
          <>
            <TetesMelayang cx={x - 110} cy={y} size={80} mulai={melayang} />
            <TetesMelayang cx={x + 10} cy={y - 30} size={80} mulai={melayang + 4} fase={9} />
            <TetesMelayang cx={x + 120} cy={y + 10} size={80} mulai={melayang + 8} fase={18} />
          </>
        ),
      }}
    />
  );
};
