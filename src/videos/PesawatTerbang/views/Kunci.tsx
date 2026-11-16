import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Label } from "../../../dark-chalk/Label";
import { Panah, Pesawat } from "../../../dark-chalk/objek/Terbang";
import { KAPUR } from "../../../dark-chalk/palette";
import { Kunci as KunciPola } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

const CLAMP = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

// Kunci (layar penuh, tanpa karakter): panah angkat (emas, panjang) di atas pesawat melawan panah berat (abu, pendek);
// pesawat naik dan mendongak saat "naik".
export const Kunci: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const angkat = at("angkat");
  const berat = at("berat");
  const naik = at("naik");
  const geser = interpolate(frame, [naik, naik + 36], [0, -70], CLAMP);
  return (
    <>
      <KunciPola
        judul="Angkat lebih besar dari berat"
        sorotJudul="besar"
        keterangan="pesawat naik"
        keteranganAt={naik}
        gambar={
          <>
            <Ikon nama="cloud" cx={170} cy={1080} size={150} mulai={10} warna={KAPUR.abu} tebal={6} />
            <Ikon nama="cloud" cx={910} cy={1100} size={130} mulai={16} warna={KAPUR.abu} tebal={6} />
            <g transform={`translate(0 ${geser})`}>
              <Panah cx={540} cy={660} size={200} arah="atas" mulai={angkat} tebal={16} />
              <Pesawat cx={540} cy={880} size={480} mulai={4} />
              <Panah cx={540} cy={1050} size={100} arah="bawah" mulai={berat} warna={KAPUR.abu} tebal={13} />
            </g>
          </>
        }
      />
      <Label teks="angkat" x={730} y={640 + geser} at={angkat + 6} size={60} warna={KAPUR.gold} lebar={260} />
      <Label teks="berat" x={710} y={1050 + geser} at={berat + 6} size={56} warna={KAPUR.abu} lebar={240} />
    </>
  );
};
