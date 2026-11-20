import type React from "react";
import { Label } from "../../../dark-chalk/Label";
import { BlokLempeng, Penggaris } from "../../../dark-chalk/objek/Gempa";
import { KAPUR } from "../../../dark-chalk/palette";
import { SebabAkibat } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Explain2: sebab = dua blok muncul saat "pertemuan", panah dorong saat "menekan", zig-zag dan label saat "tersangkut";
// akibat = penggaris melengkung pelan saat "penggaris".
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const pertemuan = at("pertemuan");
  const tekan = at("menekan");
  const sangkut = at("tersangkut");
  const menumpuk = at("menumpuk");
  const penggaris = at("penggaris");
  return (
    <>
      <SebabAkibat
        judul="Tekanan menumpuk"
        sorotJudul="menumpuk"
        sebab={{ teks: "pertemuan lempeng", at: pertemuan, gambar: ({ x, y }) => <BlokLempeng cx={x} cy={y} size={520} mulai={pertemuan} tekan={tekan} sangkut={sangkut} /> }}
        akibat={{ teks: "tenaga menumpuk", at: menumpuk, gambar: ({ x, y }) => <Penggaris cx={x} cy={y} size={480} mulai={menumpuk} lengkung={penggaris} /> }}
      />
      <Label teks="tersangkut" x={800} y={880} at={sangkut} size={52} warna={KAPUR.gold} lebar={300} />
    </>
  );
};
