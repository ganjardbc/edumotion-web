import type React from "react";
import { PenampangTanah } from "../../../dark-chalk/objek/Gempa";
import { Ombak, PenampangLaut } from "../../../dark-chalk/objek/Tsunami";
import { Langkah } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Payoff: gempa -> air tersentak -> gelombang besar di pantai (gambar sama dengan Explain).
export const Payoff: React.FC<SceneProps> = ({ at }) => {
  const gempa = at("gempa");
  const sentak = at("menyentak");
  const gelombang = at("gelombang");
  return (
    <Langkah
      judul="Gempa, sentakan, gelombang"
      sorotJudul="gelombang"
      butir={[
        { teks: "gempa", at: gempa, gambar: ({ x, y }) => <PenampangTanah cx={x} cy={y - 20} size={210} mulai={gempa + 8} rumah={false} getar={gempa + 14} retak={gempa + 14} geserPx={30} /> },
        { teks: "air tersentak", at: sentak, gambar: ({ x, y }) => <PenampangLaut cx={x} cy={y} size={210} mulai={sentak + 6} naik={sentak + 12} /> },
        { teks: "gelombang besar", at: gelombang, gambar: ({ x, y }) => <Ombak cx={x} cy={y} size={210} mulai={gelombang + 6} menjulang={gelombang + 12} /> },
      ]}
    />
  );
};
