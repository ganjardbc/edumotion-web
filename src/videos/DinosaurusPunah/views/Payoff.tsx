import type React from "react";
import { useCurrentFrame } from "remotion";
import { maju } from "../../../dark-chalk/Kanvas";
import { Asteroid, Matahari, Tumbuhan } from "../../../dark-chalk/objek/Purba";
import { Langkah } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Payoff: tiga langkah berurutan seperti narasi: asteroid → matahari tertutup → makanan habis (tumbuhan layu).
export const Payoff: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const habis = at("habis");
  return (
    <Langkah
      judul="Asteroid, lalu makanan habis"
      sorotJudul="habis"
      butir={[
        { teks: "asteroid jatuh", at: 8, gambar: ({ x, y }) => <Asteroid cx={x} cy={y} size={110} api mulai={8} /> },
        { teks: "matahari gelap", at: at("menutup"), gambar: ({ x, y }) => <Matahari cx={x} cy={y} size={180} tutup={1} mulai={at("menutup")} /> },
        { teks: "makanan habis", at: habis, gambar: ({ x, y }) => <Tumbuhan cx={x} cy={y + 70} tinggi={150} layu={maju(frame, habis + 8, 30)} /> },
      ]}
    />
  );
};
