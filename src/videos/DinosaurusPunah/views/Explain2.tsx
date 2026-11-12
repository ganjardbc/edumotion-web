import type React from "react";
import { Asteroid, Debu, Matahari } from "../../../dark-chalk/objek/Purba";
import { Garis } from "../../../dark-chalk/Garis";
import { KAPUR } from "../../../dark-chalk/palette";
import { Langkah } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain2: tiga langkah seperti narasi: tabrakan melempar debu → debu menutupi matahari → tumbuhan mati (lanjut di Kunci).
export const Explain2: React.FC<SceneProps> = ({ at }) => (
  <Langkah
    judul="Debu menutupi matahari"
    sorotJudul="menutupi"
    butir={[
      {
        teks: "tabrakan",
        at: 8,
        gambar: ({ x, y }) => (
          <>
            <Asteroid cx={x} cy={y - 10} size={80} />
            <Garis kasar={1} d={`M${x - 60} ${y + 50} L${x - 90} ${y + 20} M${x} ${y + 60} L${x} ${y + 20} M${x + 60} ${y + 50} L${x + 90} ${y + 20}`} mulai={14} lama={8} warna={KAPUR.orange} tebal={8} />
          </>
        ),
      },
      { teks: "debu naik", at: at("langit") - 4, gambar: ({ x, y }) => <Debu cx={x} cy={y} size={170} /> },
      { teks: "matahari gelap", at: at("menutupi"), gambar: ({ x, y }) => <Matahari cx={x} cy={y} size={180} tutup={1} mulai={at("menutupi")} /> },
    ]}
  />
);
