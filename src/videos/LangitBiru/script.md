# Kenapa langit biru, bukan ungu?

Topik: cuaca · Suara: narator (Aldo) · Tema: Dark Chalk, tanpa tokoh di layar
Status naskah: **ditulis ulang ke format baru (13 Nov 2026) atas permintaan Ganjar; menunggu tinjauan.** VO Aldo (eleven_v4) dibuat 13 Nov 2026; storyboard menunggu tinjauan. Versi lama (Setup + Twist, stickman, latar kertas) ada di riwayat git.

Struktur: Hook (pertanyaan 5W1H) → Penjelasan ×4 → Payoff → Cta. ±58 detik (VO 45,2 dtk + jeda antar scene); durasi akhir mengikuti audio.

Jawaban dalam satu kalimat: udara menyebarkan cahaya biru Matahari ke segala arah (ungu kalah karena sedikit dan mata kurang peka), dan saat senja biru sudah habis tersebar di jalan, jadi tinggal merah.

## Naskah

| Scene | Narasi (narator) | Dur (dtk) | SFX |
|---|---|---|---|
| Hook | "Kenapa langit biru, bukan ungu?" | 2.2 | pop |
| Explain1 | "Cahaya Matahari terlihat putih. Padahal isinya campuran semua warna, seperti pelangi. Cahaya biru gelombangnya pendek. Cahaya merah gelombangnya panjang." | 11 | – |
| Explain2 | "Udara berisi partikel yang sangat kecil. Partikel ini menyebarkan cahaya biru ke segala arah. Cahaya merah lewat lurus saja. Itu sebabnya langit terlihat biru." | 11.2 | – |
| Explain3 | "Cahaya ungu sebenarnya tersebar lebih kuat lagi. Tapi cahaya ungu dari Matahari lebih sedikit, dan mata kita kurang peka pada warna ungu." | 9.2 | – |
| Explain4 | "Saat senja, cahaya Matahari harus melewati udara lebih jauh. Cahaya birunya sudah tersebar di jalan. Yang sampai ke mata kita tinggal kuning, jingga, dan merah." | 11.3 | – |
| Payoff | "Jadi langit biru dan senja merah punya sebab yang sama: cahaya biru yang tersebar oleh udara." | 6.4 | tada |
| Cta | "Lalu, kenapa laut berwarna biru? Tulis tebakanmu di komentar!" | 4 | – |

## Brief visual

Pola: kapur dari `src/dark-chalk/pola`. Tanpa tokoh, tanpa Pembawa. Tidak ada scene `Kunci` (poin "itu sebabnya langit terlihat biru" ada di akhir Explain2).

| Scene | Pola | Judul (≤6 kata) | Objek utama | Label | Kata kunci → aksi |
|---|---|---|---|---|
| Hook | visual | Kenapa langit biru, bukan **ungu**? | Ikon `sun` besar, gelombang biru lalu gelombang ungu lebih rapat di bawahnya | ? (ungu) | "langit" → gelombang biru; "ungu" → gelombang ungu dan tanda tanya |
| Explain1 | SebabAkibat → Bandingkan (kolom) | Cahaya putih itu **campuran** / Panjang **gelombangnya** beda | `sun`, `rainbow` / gelombang pendek biru vs panjang merah | Cahaya Matahari: putih; isinya semua warna; biru: pendek; merah: panjang | "Cahaya Matahari" → sun; "campuran" → pelangi; "Cahaya biru" → fase 2; "Cahaya merah" → gelombang merah |
| Explain2 | Sorot | Udara menyebarkan **biru** | Lensa berisi satu partikel udara; sinar putih masuk, 12 sinar biru memancar, satu sinar merah lurus | partikel udara | "partikel" → partikel dan sinar putih; "segala arah" → sinar biru memancar; "Cahaya merah" → sinar merah lurus |
| Explain3 | Bandingkan (kolom) → Langkah | **Ungu** tersebar lebih kuat / Tapi langit tetap **biru** | gelombang ungu (rapat, tinggi) vs biru / `sun`, `eye` | ungu: lebih kuat; biru: kuat; ungu dari Matahari sedikit; mata kurang peka | "lebih kuat" → gelombang biru; "Tapi" → fase 2; "mata kita" → butir 2 |
| Explain4 | Bandingkan (kolom) | Saat senja, jalurnya **panjang** | Dua panel: lapisan udara, sinar siang (tegak, pendek) vs senja (miring, panjang, jingga) | siang: pendek; senja: panjang | "Saat" → panel siang; "melewati" → panel senja |
| Payoff | visual | Cahaya biru **tersebar** | Kiri: sinar biru memancar (langit biru). Kanan: Matahari rendah dengan sinar jingga (senja merah) | langit biru; senja merah | "langit" → sinar biru; "senja" → Matahari dan sinar jingga |
| Cta | visual | Kenapa **laut** biru? | Ikon `ripple` besar, tanda tanya emas | ? | "laut" → ripple; "tebakanmu" → tanda tanya |

## Objek
- Ikon di `src/dark-chalk/ikon`: `sun`, `rainbow`, `eye`, `ripple`.
- Gambar gelombang dan sinar memakai `Garis` lewat helper `views/gambar.ts` (khusus video ini). Warna ungu `UNGU` didefinisikan di helper itu karena belum ada di `KAPUR`.
- Komponen: `Teks`, `Label`, `Kanvas`, pola `SebabAkibat`/`Bandingkan`/`Sorot`/`Langkah`, `Caption`.
- Props lama (`GelombangCahaya`, `Pelangi`, `MolekulUdara`, `Mata`, `JalurCahaya`) tidak dipakai lagi di video ini; tetap ada di registry.

## Fakta dan sumber

**Bersumber**
- Cahaya Matahari tampak putih tapi tersusun dari banyak warna dengan panjang gelombang berbeda; biru pendek, merah panjang. [Met Office](https://metoffice.gov.uk/learning/optics/why-is-the-sky-blue)
- Molekul udara jauh lebih kecil dari panjang gelombang cahaya tampak, sehingga gelombang pendek (biru, ungu) dihamburkan paling kuat (hamburan Rayleigh), dan biru terlihat dari segala arah. [Met Office](https://metoffice.gov.uk/learning/optics/why-is-the-sky-blue), [Live Science](https://www.livescience.com/planet-earth/why-is-the-sky-blue)
- Ungu dihamburkan lebih kuat daripada biru, tetapi langit tampak biru karena Matahari memancarkan lebih sedikit ungu dan mata kita kurang peka pada ungu. [Live Science (Ed Bloomer, Royal Observatory Greenwich)](https://www.livescience.com/planet-earth/why-is-the-sky-blue), [Met Office](https://metoffice.gov.uk/learning/optics/why-is-the-sky-blue), [UW–Madison (Steven Ackerman)](https://news.wisc.edu/curiosities-what-determines-the-colors-of-the-sky-at-sunrise-and-sunset)
- Saat senja cahaya menempuh jalur atmosfer lebih panjang; biru terhambur keluar dari berkas, tersisa kuning, jingga, merah. [Met Office](https://metoffice.gov.uk/learning/optics/why-is-the-sunset-red), [UW–Madison](https://news.wisc.edu/curiosities-what-determines-the-colors-of-the-sky-at-sunrise-and-sunset)
- "Langit bukan pantulan lautan" tidak lagi ada di narasi (Setup dan Twist dihapus); sumbernya tetap [Live Science](https://www.livescience.com/planet-earth/why-is-the-sky-blue) bila mau dipakai di video lain.

**Hitungan sendiri (bukan fakta bersumber)**
- Hamburan Rayleigh sebanding dengan 1/λ⁴, jadi biru sekitar 4–6 kali lebih kuat daripada merah (λ pilihan sendiri, belum bersumber). **Narasi tidak memakai angka ini.**

**Disederhanakan atau belum terverifikasi**
- Alasan "kenapa bukan ungu" dalam narasi hanya dua (sinar ungu lebih sedikit, mata kurang peka). Penjelasan lengkapnya melibatkan beberapa faktor, termasuk spektrum Matahari dan pelemahan di atmosfer ([WTAMU, Christopher Baird](https://wtamu.edu/~cbaird/sq/2013/03/28/why-is-the-sky-blue/)). Jangan dibilang "satu-satunya alasan".
- Penyerapan ungu oleh ozon: hanya muncul di sumber lemah, **tidak dipakai**.
- Warna senja dipengaruhi debu, asap, dan kelembapan. Narasi hanya membahas penyebab utama (jalur panjang).
- Gambar Explain4 (lapisan udara sebagai pita datar) disederhanakan; atmosfer sebenarnya melengkung.
- Cta hanya bertanya ("kenapa laut biru?"), tidak menyatakan fakta tentang laut. Jawabannya jadi bahan video berikutnya ([WHOI](https://www.whoi.edu/ocean-learning-hub/ocean-facts/why-is-the-ocean-blue/)).

## Catatan format
- Hook 5 kata, pertanyaan "kenapa". Teks layar sama dengan narasi.
- Satu gagasan per scene: Explain1 = cahaya putih itu campuran, Explain2 = udara menyebarkan biru, Explain3 = kenapa bukan ungu, Explain4 = senja.
- Narasi tidak berubah dari versi lama kecuali Setup dan Twist dihapus dan kalimat "Itu sebabnya langit terlihat biru." digabung ke akhir Explain2.
