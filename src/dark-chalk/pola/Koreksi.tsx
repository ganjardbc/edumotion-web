import type React from "react";
import { Garis } from "../Garis";
import { Kanvas } from "../Kanvas";
import { Label } from "../Label";
import { KAPUR } from "../palette";
import { Judul } from "./Judul";
import type { Kotak } from "./SebabAkibat";

// Pola KOREKSI (Twist): tebakan keliru ditulis, dicoret oranye saat `coretAt`, lalu jawaban benar (gambar + label) muncul di `benarAt`.
export const Koreksi: React.FC<{
  readonly judul: string;
  readonly salah: string;
  readonly coretAt: number;
  readonly benar: { readonly teks: string; readonly at: number; readonly gambar: (k: Kotak) => React.ReactNode };
  readonly cepat?: boolean;
  readonly salahAt?: number;
}> = ({ judul, salah, coretAt, benar, cepat = false, salahAt = 0 }) => (
  <>
    <Judul teks={judul} />
    <Label teks={salah} x={540} y={600} at={salahAt} size={58} lebar={800} durasi={cepat ? 3 : 10} />
    <Kanvas>
      <Garis kasar={1} d="M170 604 Q540 586 910 612" mulai={coretAt} lama={cepat ? 6 : 12} warna={KAPUR.orange} tebal={14} />
      {benar.gambar({ x: 540, y: 960, size: 420 })}
    </Kanvas>
    <Label teks={benar.teks} x={540} y={1215} at={benar.at} size={52} warna={KAPUR.gold} lebar={800} durasi={cepat ? 3 : 10} />
  </>
);
