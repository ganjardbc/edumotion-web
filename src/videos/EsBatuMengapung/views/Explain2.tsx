import type React from "react";
import { useCurrentFrame } from "remotion";
import { maju } from "../../../dark-chalk/Kanvas";
import { MedanMolekul } from "../../../dark-chalk/objek/Molekul";
import { Bandingkan } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain2: dua panel. Cair (rapat) di kiri sudah ada; di kanan molekul "mengunci" menjadi kisi sarang lebah yang berongga.
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const kunci = at("mengunci");
  const rongga = at("berongga");
  const t = maju(frame, kunci, 44);
  const sorot = maju(frame, rongga, 14);
  return (
    <Bandingkan
      judul="Beku: molekul renggang"
      sorotJudul="renggang"
      kiri={{ teks: "cair: rapat", at: 4, gambar: ({ x, y }) => <MedanMolekul cx={x} cy={y} rusuk={56} r={14} t={0} frame={frame} goyang={3} /> }}
      kanan={{ teks: "beku: renggang", at: kunci - 6, gambar: ({ x, y }) => <MedanMolekul cx={x} cy={y} rusuk={56} r={14} t={t} frame={frame} goyang={3} rongga={sorot} /> }}
    />
  );
};
