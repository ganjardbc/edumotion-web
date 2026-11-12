import type React from "react";
import { useCurrentFrame } from "remotion";
import { GelasAir, permukaanAir } from "../../../dark-chalk/objek/Gelas";
import { KubusEs } from "../../../dark-chalk/objek/KubusEs";
import { MedanMolekul } from "../../../dark-chalk/objek/Molekul";
import { Langkah } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Payoff: tiga langkah berurutan seperti narasi: membeku → molekul renggang → es lebih ringan, jadi mengapung.
export const Payoff: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  return (
    <Langkah
      judul="Beku = lebih renggang"
      sorotJudul="renggang"
      butir={[
        { teks: "air membeku", at: at("membeku"), gambar: ({ x, y }) => <MedanMolekul cx={x} cy={y} rusuk={34} r={8} t={0} frame={frame} goyang={2} /> },
        { teks: "molekul renggang", at: at("renggang"), gambar: ({ x, y }) => <MedanMolekul cx={x} cy={y} rusuk={34} r={8} t={1} frame={frame} goyang={0} /> },
        {
          teks: "es lebih ringan",
          at: at("lebih ringan"),
          gambar: ({ x, y }) => {
            const alas = y + 80;
            const muka = permukaanAir(alas, 150, 0.7);
            return (
              <GelasAir x={x} y={alas} lebar={140} tinggi={150} isi={0.7} mulai={at("lebih ringan")}>
                <KubusEs cx={x} cy={muka + 16 + Math.sin(frame / 12) * 2} size={50} mulai={at("lebih ringan") + 4} />
              </GelasAir>
            );
          },
        },
      ]}
    />
  );
};
