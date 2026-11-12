import type React from "react";
import { useCurrentFrame } from "remotion";
import { GelasAir, permukaanAir } from "../../../dark-chalk/objek/Gelas";
import { KubusEs } from "../../../dark-chalk/objek/KubusEs";
import { Pop } from "../../../dark-chalk/Kanvas";
import { Koreksi } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Twist: "karena gelembung udara" dicoret, lalu gelas dengan kubus es bening (tanpa gelembung) tetap mengapung.
export const Twist: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const mulai = at("bening");
  return (
    <Koreksi
      judul="Ternyata keliru!"
      salah="karena gelembung udara"
      coretAt={at("bukan")}
      benar={{
        teks: "es bening tetap mengapung",
        at: mulai,
        gambar: (k) => {
          const y = k.y + 200;
          const tinggi = 360;
          const muka = permukaanAir(y, tinggi, 0.7);
          return (
            <Pop at={mulai - 6}>
              <GelasAir x={k.x} y={y} lebar={330} tinggi={tinggi} isi={0.7} mulai={mulai - 6}>
                <KubusEs cx={k.x} cy={muka + 40 + Math.sin(frame / 12) * 3} size={130} tilt={Math.sin(frame / 15) * 3} mulai={mulai} />
              </GelasAir>
            </Pop>
          );
        },
      }}
    />
  );
};
