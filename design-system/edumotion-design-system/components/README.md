# Komponen penjelas

Dibangun di `src/explainers/`. Semua mengikuti token di sini.

| Komponen | Fungsi |
|----------|--------|
| `HookText` | Teks pembuka besar dengan animasi masuk, maks 6 kata, di dalam safe zone |
| `Caption` | Subtitle tersinkron dengan VO, 2 baris maks, penanda kata aktif |
| `Counter` | Angka naik/turun (mis. detak per hari) dengan `--text-number` |
| `Callout` | Panah dan label menunjuk bagian objek |
| `Cutaway` | Zoom ke dalam objek (tampak penampang) lewat `ShotCamera` |
| `Timeline` | Garis waktu horizontal atau vertikal untuk sejarah dan proses |
| `BarCompare` | Perbandingan dua atau tiga nilai dengan batang animasi |
| `MetaphorSwap` | Objek berubah menjadi metafora (jantung jadi pompa) |

## Status implementasi (`src/explainers/`)
Sudah ada: `Caption` (dipecah otomatis, maks 2 baris), `HookText`, `Counter`, `PhaseBar`, `GuessCard`, `EduBack`, `SafeZoneGuide`, dan:

| Komponen | Catatan |
|----------|---------|
| `CorrectionCard` | Twist Tako: tebakan dicoret lalu kartu "Yang benar"; membungkus `GuessCard`. Jawaban dijaga pendek |
| `Callout` | Titik berdenyut, garis tumbuh, label; satu per bagian objek |
| `Lensa` | Lensa bulat yang memperbesar `children`, dengan penanda sumber opsional. Tidak lewat `ShotCamera` |
| `BarCompare` | Batang horizontal, angka naik, satu item `highlight` |
| `Timeline` | Garis waktu mendatar, 2 sampai 4 peristiwa, label bergantian atas-bawah |
| `MetaphorSwap` | Objek asli berubah ke analoginya, label ikut berganti |
| `Transition` | `swipe`, `iris`, `bars`; pasang di Sequence berpusat di batas dua scene. Belum dipasang di `ShortEdu` |
| `ProgressDots` | "Fakta 2 dari 3" |
| `EndCard` | Kartu penutup (scene `Cta`): judul, tombol Ikuti dan Simpan, handle dari tema (placeholder `@edumotion`) |
| `ThumbnailCard` | Sampul 9:16: hook maks 6 kata, satu kata disorot, karakter |

Pengganti `Payoff` di daftar rencana: `EndCard` untuk penutup dan `MetaphorSwap` untuk momen "oh iya ya!".
Tinjau semuanya di Studio lewat komposisi `ExplainersDemo` dan Still `ThumbnailDemo`.
