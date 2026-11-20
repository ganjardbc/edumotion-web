import type React from "react";
import { BlokLempeng, PenampangTanah } from "../../../dark-chalk/objek/Gempa";
import { Langkah } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain3: tiga butir dengan gambar berbeda: tekanan besar (blok saling dorong), patah dan bergeser (blok kanan naik jauh),
// getaran (cincin melebar dari patahan).
export const Explain3: React.FC<SceneProps> = ({ at }) => {
  const tekanan = at("tekanan");
  const patah = at("patah");
  const getaran = at("getaran");
  return (
    <Langkah
      judul="Patah, lalu bergetar"
      sorotJudul="bergetar"
      butir={[
        { teks: "tekanan besar", at: tekanan, gambar: ({ x, y }) => <BlokLempeng cx={x - 5} cy={y} size={240} mulai={tekanan + 8} tekan={tekanan + 12} /> },
        { teks: "patah, bergeser", at: patah, gambar: ({ x, y }) => <PenampangTanah cx={x - 5} cy={y - 20} size={240} mulai={patah + 8} retak={patah + 10} rumah={false} geserPx={34} /> },
        { teks: "getaran", at: getaran, gambar: ({ x, y }) => <PenampangTanah cx={x - 5} cy={y - 20} size={240} mulai={getaran + 8} retak={getaran + 8} gelombang={getaran + 16} rumah={false} geserPx={34} /> },
      ]}
    />
  );
};
