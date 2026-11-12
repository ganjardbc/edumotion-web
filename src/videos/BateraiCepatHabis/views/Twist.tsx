import type React from "react";
import { Garis } from "../../../dark-chalk/Garis";
import { Pop } from "../../../dark-chalk/Kanvas";
import { Hape } from "../../../dark-chalk/objek/Gawai";
import { KAPUR } from "../../../dark-chalk/palette";
import { Koreksi } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

// Twist: "aplikasi terbuka boros" dicoret di "bukan"; hape dengan tanda centang muncul saat Apple menyarankan.
export const Twist: React.FC<SceneProps> = ({ at }) => {
  const apple = at("Apple");
  return (
    <Koreksi
      judul="Ternyata keliru!"
      salah="aplikasi terbuka itu boros"
      coretAt={at("bukan")}
      benar={{
        teks: "tutup hanya bila macet",
        at: apple,
        gambar: (k) => (
          <Pop at={apple}>
            <Hape cx={k.x - 40} cy={k.y} tinggi={k.size * 0.95} aplikasi terang={0.3} mulai={apple} />
            <Garis kasar={1} d={`M${k.x + 90} ${k.y + 20} L${k.x + 140} ${k.y + 80} L${k.x + 240} ${k.y - 60}`} mulai={at("macet")} lama={14} warna={KAPUR.daun} tebal={16} />
          </Pop>
        ),
      }}
    />
  );
};
