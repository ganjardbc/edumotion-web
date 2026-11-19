import type React from "react";
import { useCurrentFrame } from "remotion";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { AwanKapur, Rambut } from "../../../dark-chalk/objek/Awan";
import { Tetes } from "../../../dark-chalk/objek/Laut";
import { KAPUR } from "../../../dark-chalk/palette";
import { Bandingkan, Judul } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Titik tetes di dalam awan (koordinat kanvas), tetap tiap frame.
const ISI: ReadonlyArray<readonly [number, number]> = [
  [400, 770], [480, 700], [560, 740], [640, 690], [700, 770], [330, 840],
  [440, 850], [540, 830], [650, 850], [740, 850], [470, 780], [610, 790],
];

// Explain1: dua fase. (1) Bandingkan: tetes awan jauh lebih tipis dari rambut. (2) Awan berisi jutaan tetes = berat.
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const tetes = at("tetes");
  const rambut = at("rambut");
  const tapi = at("Tapi jumlahnya");
  const banyak = at("banyak");
  const berat = at("berat");
  if (frame < tapi) {
    return (
      <Bandingkan
        judul="Tetes awan sangat kecil"
        sorotJudul="kecil"
        kiri={{ teks: "tetes awan", at: tetes, gambar: ({ x, y }) => <Tetes cx={x} cy={y} size={60} mulai={tetes} /> }}
        kanan={{ teks: "sehelai rambut", at: rambut, gambar: ({ x, y }) => <Rambut cx={x} cy={y} mulai={rambut} /> }}
      />
    );
  }
  return (
    <>
      <Judul teks="Jutaan tetes, jadi berat" sorot="berat" at={tapi} />
      <Kanvas>
        <AwanKapur cx={540} cy={800} size={720} mulai={tapi} />
        {ISI.map(([x, y], i) => (
          <Tetes key={i} cx={x + 110} cy={y + 20} size={44} mulai={banyak + i * 3} />
        ))}
      </Kanvas>
      <Label teks="jutaan tetes" x={540} y={1110} at={banyak} size={56} lebar={520} />
      <Label teks="total sangat berat" x={540} y={1215} at={berat} size={56} warna={KAPUR.gold} lebar={640} />
    </>
  );
};
