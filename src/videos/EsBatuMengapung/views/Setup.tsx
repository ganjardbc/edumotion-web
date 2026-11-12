import type React from "react";
import { useCurrentFrame } from "remotion";
import { GelasAir, permukaanAir } from "../../../dark-chalk/objek/Gelas";
import { KubusEs } from "../../../dark-chalk/objek/KubusEs";
import { SebabAkibat } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Setup: tebakan umum yang keliru. Es mengapung (akibat) muncul dulu, lalu gelembung udara (sebab) dituding.
export const Setup: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  return (
    <SebabAkibat
      judul="Es mengapung karena udara?"
      sorotJudul="udara"
      sebab={{
        teks: "gelembung udara",
        at: at("gelembung"),
        gambar: (k) => <KubusEs cx={k.x} cy={k.y} size={k.size * 0.72} gelembung mulai={at("gelembung")} />,
      }}
      akibat={{
        teks: "es mengapung?",
        at: at("mengapung"),
        gambar: (k) => {
          const y = k.y + k.size * 0.5;
          const tinggi = k.size * 0.9;
          const muka = permukaanAir(y, tinggi, 0.7);
          return (
            <GelasAir x={k.x} y={y} lebar={k.size * 0.85} tinggi={tinggi} isi={0.7} mulai={at("mengapung")}>
              <KubusEs cx={k.x} cy={muka + 30 + Math.sin(frame / 12) * 3} size={k.size * 0.36} mulai={at("mengapung") + 6} />
            </GelasAir>
          );
        },
      }}
    />
  );
};
