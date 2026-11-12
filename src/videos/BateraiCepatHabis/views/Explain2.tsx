import type React from "react";
import { useCurrentFrame } from "remotion";
import { Fase } from "../../../explainers/pola";
import { maju } from "../../../dark-chalk/Kanvas";
import { Baterai, SinyalBar, Wifi } from "../../../dark-chalk/objek/Gawai";
import { Bandingkan, SebabAkibat } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain2, dua fase: (1) sinyal lemah → butuh tenaga (baterai turun); (2) Wi-Fi hemat vs seluler boros.
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const wifi = at("Wi-Fi");
  const butuh = at("butuh");
  return (
    <>
      <Fase sampai={wifi}>
        <SebabAkibat
          judul="Sinyal lemah ikut boros"
          sorotJudul="boros"
          sebab={{ teks: "sinyal lemah", at: Math.max(8, at("Sinyal")), gambar: (k) => <SinyalBar cx={k.x} cy={k.y} size={k.size * 0.8} level={1} /> }}
          akibat={{ teks: "butuh tenaga", at: butuh, gambar: (k) => <Baterai cx={k.x} cy={k.y} lebar={k.size * 1.3} level={0.8 - 0.5 * maju(frame, butuh, 40)} mulai={butuh} /> }}
        />
      </Fase>
      <Fase dari={wifi}>
        <Bandingkan
          judul="Wi-Fi lebih hemat"
          sorotJudul="hemat"
          kiri={{ teks: "Wi-Fi", at: wifi + 8, gambar: (p) => (<><Wifi cx={p.x} cy={p.y - 90} size={230} mulai={wifi + 8} /><Baterai cx={p.x} cy={p.y + 200} lebar={190} level={0.85} mulai={wifi + 14} /></>) }}
          kanan={{ teks: "seluler", at: at("seluler"), gambar: (p) => (<><SinyalBar cx={p.x} cy={p.y - 90} size={230} level={3} /><Baterai cx={p.x} cy={p.y + 200} lebar={190} level={0.4} mulai={at("seluler") + 6} /></>) }}
        />
      </Fase>
    </>
  );
};
