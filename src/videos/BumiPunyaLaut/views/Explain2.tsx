import type React from "react";
import { Bumi, Asteroid } from "../../../dark-chalk/objek/Purba";
import { Tetes } from "../../../dark-chalk/objek/Laut";
import { SebabAkibat } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain2: sebab = batu angkasa yang membawa air (tetes di dalam batu, saat "membawa");
// akibat = Bumi menerima air saat "menabrak" (tetes keluar saat "keluar").
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const asteroid = at("asteroid");
  const membawa = at("membawa");
  const menabrak = at("menabrak");
  const keluar = at("keluar");
  return (
    <SebabAkibat
      renggang
      judul="Batu bawa air"
      sorotJudul="air"
      sebab={{
        teks: "asteroid dan meteor",
        at: asteroid,
        gambar: ({ x, y }) => (
          <>
            <Asteroid cx={x} cy={y} size={230} mulai={asteroid} />
            <Tetes cx={x - 10} cy={y + 6} size={70} mulai={membawa} />
          </>
        ),
      }}
      akibat={{
        teks: "air keluar",
        at: menabrak,
        gambar: ({ x, y }) => (
          <>
            <Bumi cx={x} cy={y} r={105} mulai={menabrak} />
            <Tetes cx={x + 170} cy={y - 40} size={60} mulai={keluar} />
            <Tetes cx={x - 170} cy={y - 10} size={50} mulai={keluar + 6} />
          </>
        ),
      }}
    />
  );
};
