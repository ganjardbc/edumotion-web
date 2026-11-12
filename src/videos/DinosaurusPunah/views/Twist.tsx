import type React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { Pop } from "../../../dark-chalk/Kanvas";
import { Asteroid } from "../../../dark-chalk/objek/Purba";
import { Koreksi } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Twist: "karena zaman es" dicoret, lalu asteroid meluncur masuk dari luar angkasa.
export const Twist: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const mulai = at("luar angkasa");
  // Asteroid mulai meluncur sejak "bukan" (tidak menunggu label), label jawaban menyusul di "luar angkasa".
  const masuk = Math.max(24, at("bukan") + 4);
  return (
    <Koreksi
      judul="Ternyata keliru!"
      salah="karena zaman es"
      coretAt={at("bukan")}
      benar={{
        teks: "asteroid dari luar angkasa",
        at: mulai,
        gambar: (k) => {
          const t = interpolate(frame, [masuk, masuk + 28], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
          return (
            <Pop at={masuk}>
              <Asteroid cx={k.x + 120 - 120 * t} cy={k.y - 130 + 100 * t} size={k.size * 0.4} api mulai={masuk} />
            </Pop>
          );
        },
      }}
    />
  );
};
