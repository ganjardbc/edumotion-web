import type React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Pop } from "../../../dark-chalk/Kanvas";
import { MedanMolekul, posisiMolekul } from "../../../dark-chalk/objek/Molekul";
import { Sorot } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain1: lensa memperbesar air cair; molekul air berdesakan dan terus bergeser (goyang makin kuat saat "berdesakan").
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const molekul = at("molekul");
  const desak = at("berdesakan");
  const goyang = interpolate(frame, [desak, desak + 24], [2, 6], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const contoh = posisiMolekul(540, 840, 100, 0, frame, goyang)[14];
  return (
    <Sorot
      judul="Air cair: molekul berdesakan"
      sorotJudul="berdesakan"
      gambar={({ x, y }) => (
        <Pop at={molekul}>
          <MedanMolekul cx={x} cy={y - 20} rusuk={100} r={22} t={0} frame={frame} goyang={goyang} />
        </Pop>
      )}
      penanda={{ teks: "molekul air", dari: { x: 250, y: 1230 }, ke: { x: contoh.x, y: contoh.y }, at: molekul + 14 }}
    />
  );
};
