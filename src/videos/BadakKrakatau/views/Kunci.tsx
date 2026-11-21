import type React from "react";
import { Pop } from "../../../dark-chalk/Kanvas";
import { Label } from "../../../dark-chalk/Label";
import { BadakKapur } from "../../../dark-chalk/objek/Badak";
import { GarisWaktu, xWaktu } from "../../../dark-chalk/objek/Krakatau";
import { KAPUR } from "../../../dark-chalk/palette";
import { Kunci as KunciPola } from "../../../dark-chalk/pola";
import type { SceneProps } from "../../_shared/types";

const CX = 540;
const LEBAR = 780;
const CY = 960;
const AWAL = 1880;
const AKHIR = 1910;
const x = (tahun: number): number => xWaktu(tahun, CX, LEBAR, AWAL, AKHIR);

// Kunci (layar penuh, tanpa karakter): garis waktu diperbesar ke 1880-1910 supaya longgar. Tanda 1883 (jingga) muncul lebih dulu;
// badak 1892 saat "letusan", badak 1906 saat "sesekali". Semua label tahun sebaris di bawah garis.
export const Kunci: React.FC<SceneProps> = ({ at }) => {
  const letusan = at("letusan");
  const sesekali = at("sesekali");
  return (
    <>
      <KunciPola
        judul="Badak masih dilaporkan"
        sorotJudul="dilaporkan"
        keterangan="Tidak ada petunjuk musnah"
        keteranganAt={at("petunjuk")}
        gambar={
          <>
            <GarisWaktu cx={CX} cy={CY} lebar={LEBAR} awal={AWAL} akhir={AKHIR} mulai={8} isi={10} lamaIsi={24} tanda={[{ tahun: 1883, warna: KAPUR.orange }, { tahun: 1892 }, { tahun: 1906 }]} />
            <Pop at={letusan}>
              <BadakKapur cx={x(1892)} cy={CY - 90} size={190} mulai={letusan} />
            </Pop>
            <Pop at={sesekali}>
              <BadakKapur cx={x(1906)} cy={CY - 90} size={190} mulai={sesekali} />
            </Pop>
          </>
        }
      />
      <Label teks="1883" x={x(1883)} y={CY + 80} at={at("Hasilnya") + 12} size={52} warna={KAPUR.orange} lebar={160} />
      <Label teks="1892" x={x(1892)} y={CY + 80} at={letusan + 4} size={52} lebar={160} />
      <Label teks="1906" x={x(1906)} y={CY + 80} at={sesekali + 4} size={52} lebar={160} />
    </>
  );
};
