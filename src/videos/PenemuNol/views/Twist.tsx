import type React from "react";
import { Ikon } from "../../../dark-chalk/ikon/Ikon";
import { Pop } from "../../../dark-chalk/Kanvas";
import { KAPUR } from "../../../dark-chalk/palette";
import { Koreksi } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Twist: "penemunya orang Arab" dicoret, lalu bola dunia muncul dengan titik emas di India.
export const Twist: React.FC<SceneProps> = ({ at }) => {
  const india = at("India");
  return (
    <Koreksi
      judul="Ternyata keliru!"
      salah="penemunya orang Arab"
      coretAt={at("keliru")}
      benar={{
        teks: "berkembang di India",
        at: india,
        gambar: (k) => (
          <>
            <Ikon nama="globe" cx={k.x} cy={k.y} size={k.size * 0.75} warna={KAPUR.es} mulai={4} tebal={8} />
            <Pop at={india}>
              <circle cx={k.x + 45} cy={k.y - 20} r={22} fill={KAPUR.gold} />
              <circle cx={k.x + 45} cy={k.y - 20} r={40} fill="none" stroke={KAPUR.gold} strokeWidth={6} />
            </Pop>
          </>
        ),
      }}
    />
  );
};
