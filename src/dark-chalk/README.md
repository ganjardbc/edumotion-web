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
- Penanda pola `Sorot` (`dari` → `ke`): label otomatis di belakang pangkal garis (di bawah `dari` bila `ke` lebih tinggi), jadi garis tidak menimpa teks. Letakkan `dari` di luar lensa (mis. y ≈ 1215–1290), jauh dari label lain; label tambahan dibuat terpisah dengan `Label` di posisi yang tidak dilewati garis.
- `GanjarDatar.tsx`: Ganjar (kepala bulat putih dengan mata titik, rambut tiga helai, kaos polos biru lengan pendek, celana pendek abu). Tampak depan. Pose: berdiri, tunjuk, mikir, kaget, sorak, menyerah. Ekspresi: bentuk mata (biasa, melebar saat kaget, melirik saat mikir, melengkung saat sorak, turun saat menyerah), tanda kecil (garis kejut, tanda tanya, keringat), dan kemiringan kepala. Gambar tokoh dibiarkan bersih, di luar `Kapur`.
- Demo di Studio: `DarkChalk-Ganjar` (enam pose) dan `DarkChalk-Awan` (naskah AwanTidakJatuh: Hook, Twist, Explain).

## Pustaka tambahan (Nov 2026)
- `font.ts`: font teks kapur **Patrick Hand** (`FONT_KAPUR`, `SKALA_FONT`); caption tetap Nunito. `tataTeks` dan `ukuranMuat` memakai `@remotion/layout-utils` (`fitText`, `measureText`) untuk menata judul menjadi 1–2 baris seimbang dan mengecilkan huruf bila tidak muat. Font harus siap dulu (`useFontKapur` menahan render); `Teks` dan `Label` sudah memakainya, jadi view tidak mengatur lebar atau ukuran sendiri.
- `kasar.ts` + prop `kasar` di `Garis`: goresan sketsa tangan (roughjs, deterministik: seed dari isi path). Syarat: path tidak boleh berubah antar frame; benda yang bergerak digambar di titik asal lalu digeser dengan `transform` (lihat `Asteroid` di `objek/Purba.tsx`). Isi (`isi`) digambar dari path mulus, terpisah dari kontur kasar. Bawaan 0 (mulus).
- `Arsir.tsx`: arsiran kapur diagonal di dalam sebuah path (clipPath, kotak batas dari `@remotion/paths`), pengganti isian warna datar. Dipakai di `Bumi` dan `Asteroid`.
- `DebuMelayang.tsx`: butiran debu kapur naik pelan di belakang gambar, dipasang `ShortEdu` untuk tema ini. Halo debu di sekeliling garis ada di filter `Kapur.tsx`.
- `ikon/`: 61 ikon garis dari **Tabler Icons (MIT)**; `<Ikon nama="cat" cx cy size />` menggambarnya bergaya kapur (tiap path digambar berurutan, goresan kasar). Data dihasilkan `node scripts/ikon-build.mjs <icons/outline Tabler>` ke `ikon/data.ts` (jangan diubah tangan; tambah nama di daftar skrip). Lisensi di `ikon/LICENSE-tabler.txt`. Lembar tinjauan: Still `DarkChalk-Ikon`. Tidak ada ikon dinosaurus dan burung.
- `objek/Purba.tsx`: objek kapur video DinosaurusPunah (`Dinosaurus`, `Asteroid`, `Bumi`, `Debu`, `Matahari`, `Tumbuhan`, `Termometer`, `Salju`).
- `objek/Gempa.tsx`: objek kapur video GempaBumi (`PenampangTanah`, `BumiLempeng`, `BlokLempeng`, `Penggaris`). `objek/PetaIndonesia.tsx`: `PetaIndonesia`, peta kapur kasar kepulauan Indonesia dengan titik getaran (props `cx`, `cy`, `size`, `mulai`, `getar`); dapat dipakai ulang di video lain.
- Pola `SebabAkibat` punya mode `renggang` (jarak ikon, label, dan panah lebih lebar untuk gambar kecil).
- Dicoba lalu dibuang atas keputusan Ganjar: kapur yang bergerak di ujung goresan, dan transisi penghapus papan.

## Belum
- `check-videos` menolak latar selain `kertas` dan `Pembawa`; perlu dilonggarkan bila tema ini dipakai di `src/videos/`.
- Belum ada pola penjelas versi kapur, pose samping/3/4, dan `GanjarDatar` di `CastCharacter`.
