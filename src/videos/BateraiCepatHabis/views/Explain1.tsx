import type React from "react";
import { useCurrentFrame } from "remotion";
import { maju } from "../../../dark-chalk/Kanvas";
import { Baterai, Hape } from "../../../dark-chalk/objek/Gawai";
import { Bandingkan } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain1: layar redup vs terang. Di sisi terang, layar makin menyala dan baterai di bawahnya terkuras.
export const Explain1: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const terang = at("terang");
  const nyala = 0.15 + 0.85 * maju(frame, terang, 20);
  const kuras = maju(frame, at("cepat"), 40);
  return (
    <Bandingkan
      judul="Layar terang paling boros"
      sorotJudul="boros"
      kiri={{ teks: "redup", at: Math.max(8, at("paling")), gambar: (p) => (<><Hape cx={p.x} cy={p.y - 90} tinggi={340} terang={0.1} mulai={8} /><Baterai cx={p.x} cy={p.y + 200} lebar={190} level={0.85} mulai={14} /></>) }}
      kanan={{ teks: "terang", at: terang, gambar: (p) => (<><Hape cx={p.x} cy={p.y - 90} tinggi={340} terang={nyala} mulai={terang} /><Baterai cx={p.x} cy={p.y + 200} lebar={190} level={0.85 - 0.6 * kuras} mulai={terang + 6} /></>) }}
    />
  );
};
