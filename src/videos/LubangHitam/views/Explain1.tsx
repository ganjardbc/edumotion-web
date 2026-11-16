import type React from "react";
import { Kanvas } from "../../../dark-chalk/Kanvas";
import type { SceneProps } from "../../_shared/types";

// Scene Explain1 (explain), tema Dark Chalk. Hanya bergantung pada useCurrentFrame().
// ShortEdu sudah menggambar papan, bingkai, filter kapur, dan caption: view hanya menggambar isi (tanpa EduBackdrop).
// Pakai pola dari src/dark-chalk/pola, objek dari src/dark-chalk/objek, warna dari KAPUR (palette.ts), bukan hex baru.
// Tanpa karakter di layar kecuali Ganjar memintanya (GanjarGaris di dalam <Kapur>). Contoh: src/videos/EsBatuMengapung/views/.
// Picu gerak dengan at(kata) dari props (frame saat narator mengucapkan kata itu), bukan pecahan durasi.
export const Explain1: React.FC<SceneProps> = () => (
  <Kanvas>
    <g />
  </Kanvas>
);
