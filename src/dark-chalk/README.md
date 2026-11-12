# Dark Chalk Storytelling

Tema visual alternatif (prototipe, diputuskan Ganjar 12 Nov 2026 untuk dicoba): papan tulis navy, garis kapur, aksen emas.
Acuan: sheet "Billy's Curious Quest" dan gaya tokoh vektor datar tanpa wajah.

## Isi
- `palette.ts`: `KAPUR` (navy, teal, chalk, gold, orange, abu, biru, biruTerang). Belum masuk `TOPIC_COLORS`.
- `PapanBackdrop.tsx`: latar papan tulis bertekstur, `varian` navy (bawaan) atau hijau. Menampilkan PNG di `assets/`.
- `BingkaiKayu.tsx`: sumber bingkai kayu (empat potong bersambung miring, urat, simpul, kilap, bayangan ke papan), dirender sekali ke `assets/bingkai.png` (latar transparan): `npx remotion still src/index.ts DarkChalk-Bingkai src/dark-chalk/assets/bingkai.png`. `PapanBackdrop` memasangnya (matikan dengan `bingkai={false}`). Tebal 40 px di keempat sisi.
- `TeksturPapan.tsx`: sumber tekstur procedural (noda warna, bekas hapusan miring, debu, sudut gelap). Setelah mengubahnya, render ulang PNG:
  `npx remotion still src/index.ts DarkChalk-TeksturNavy src/dark-chalk/assets/papan-navy.png` (dan `DarkChalk-TeksturHijau` → `papan-hijau.png`).
- `LatarKapur.tsx`: latar bergambar garis kapur di atas papan: `polos`, `langit` (awan, burung, matahari terbenam), `malam` (bintang berkelip, bulan sabit), `hutan` (gunung, cemara), `kota` (gedung, jendela emas). Gambar redup dan menjauhi kolom tengah; zona caption polos. Tinjau di Still `DarkChalk-Latar` (navy) dan `DarkChalk-LatarHijau`.
- `GanjarGaris.tsx`: Ganjar stickman garis kapur dengan topi detektif dan mantel Inverness (atau newsboy cap tanpa baju); 14 ekspresi dan 13 gestur dari `GanjarStickman`. Demo: `DarkChalk-GanjarGaris`.
- `Kapur.tsx`: `KapurFilter` (pasang sekali) dan `Kapur` (pembungkus). Garis bergetar dan butiran kapur; seed berganti tiap 4 frame, deterministik.
- `Garis.tsx`: garis kapur yang digambar dari awal ke ujung. `Teks.tsx`: teks kapur dengan kata sorot emas.
- `GanjarDatar.tsx`: Ganjar (kepala bulat putih dengan mata titik, rambut tiga helai, kaos polos biru lengan pendek, celana pendek abu). Tampak depan. Pose: berdiri, tunjuk, mikir, kaget, sorak, menyerah. Ekspresi: bentuk mata (biasa, melebar saat kaget, melirik saat mikir, melengkung saat sorak, turun saat menyerah), tanda kecil (garis kejut, tanda tanya, keringat), dan kemiringan kepala. Gambar tokoh dibiarkan bersih, di luar `Kapur`.
- Demo di Studio: `DarkChalk-Ganjar` (enam pose) dan `DarkChalk-Awan` (naskah AwanTidakJatuh: Hook, Twist, Explain).

## Belum
- Belum lewat `ShortEdu` (tanpa VO, SFX, `at()` per kata). Caption demo sederhana.
- `check-videos` menolak latar selain `kertas` dan `Pembawa`; perlu dilonggarkan bila tema ini dipakai di `src/videos/`.
- Belum ada pola penjelas versi kapur, pose samping/3/4, dan `GanjarDatar` di `CastCharacter`.
