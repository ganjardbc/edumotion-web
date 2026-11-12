import type React from "react";
import { useCurrentFrame } from "remotion";
import { Salju, Termometer } from "../../../dark-chalk/objek/Purba";
import { SebabAkibat } from "../../../dark-chalk/pola";
import { maju } from "../../../dark-chalk/Kanvas";
import type { SceneProps } from "../../_shared/types";

// Setup: tebakan keliru. Zaman es (sebab, kepingan salju) membuat Bumi terlalu dingin (akibat, termometer turun).
export const Setup: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const dingin = at("dingin");
  // Termometer muncul tak lama setelah salju (frame tetap, supaya layar tidak lama kosong); turunnya menunggu kata "dingin".
  const muncul = 26;
  return (
    <SebabAkibat
      renggang
      judul="Punah karena zaman es?"
      sorotJudul="es"
      sebab={{ teks: "zaman es", at: 8, gambar: (k) => <Salju cx={k.x} cy={k.y} size={k.size * 0.7} mulai={8} /> }}
      akibat={{
        teks: "terlalu dingin?",
        at: muncul,
        gambar: (k) => <Termometer cx={k.x} cy={k.y} tinggi={k.size * 0.55} level={0.85 - 0.6 * maju(frame, dingin, 40)} mulai={muncul} />,
      }}
    />
  );
};
