import type React from "react";

// Tata letak bersama semua pola penjelas (kanvas 1080x1920). Semua pola memakai angka ini, bukan posisi bebas,
// supaya tiap scene punya ukuran huruf, margin, dan zona yang sama.
//
//   y 250        JUDUL (paling banyak 2 baris)
//   y 460-1240   PANGGUNG (objek penjelas)
//   y 1310-1440  caption (diurus ShortEdu)
//   x 160-920    lebar isi 760, pusat x 540 (di dalam safe zone kiri 64 / kanan 160, sejajar caption)
export const AREA = { left: 160, right: 920, width: 760, cx: 540, judulTop: 250, top: 460, bottom: 1240 } as const;

// Skala huruf. Pola tidak memakai ukuran lain; teks terkecil 40 px supaya terbaca di layar ponsel.
export const TEKS = { judul: 76, besar: 104, label: 52, kecil: 40, angka: 200 } as const;

// Kotak tempat gambar (props berkanvas 800x800) diletakkan: pusat (x, y) dan sisi `size` dalam piksel kanvas.
export type Kotak = { readonly x: number; readonly y: number; readonly size: number };
// Gambar di dalam pola ditulis sebagai fungsi kotak, mis. (k) => <Pelangi {...k} topic="cuaca" />.
export type Gambar = (k: Kotak) => React.ReactNode;

export const CLAMP = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
