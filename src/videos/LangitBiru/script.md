# Kenapa langit biru, bukan ungu?

Topik: cuaca · Suara: narator (Aldo) · Karakter di layar: Ganjar (pembawa), Awan, Matahari, Bumi
Status naskah: **ditulis ulang untuk konsep narator (11 Nov 2026), menunggu persetujuan Ganjar.** Visual dibangun ulang dengan pola penjelas (12 Nov 2026); storyboard menunggu persetujuan. Versi sebelumnya (Tako/Bumi berbicara sendiri) ada di riwayat git.

Struktur: Hook → Setup (tebakan umum yang keliru) → Twist (koreksi) → Penjelasan → Payoff → Ajakan. Perkiraan 59 detik; durasi akhir mengikuti audio.

Semua kalimat dibawakan narator. Tokoh di layar hanya bereaksi, tidak berbicara. Latar polos di semua scene.

| Scene | Narasi (narator) | Dur (dtk) | SFX |
|---|---|---|---|
| Hook | "Kenapa langit biru, bukan ungu?" | 1.85 | pop |
| Setup | "Banyak orang mengira langit biru karena memantulkan warna laut." | 4.5 | – |
| Twist | "Ternyata bukan!" / "Tanpa laut pun, langit tetap biru. Warna birunya berasal dari udara." | 1.2 + 4.2 | wrong |
| Explain1 | "Cahaya Matahari terlihat putih. Padahal isinya campuran semua warna, seperti pelangi. Cahaya biru gelombangnya pendek. Cahaya merah gelombangnya panjang." | 10.5 | – |
| Explain2 | "Udara berisi partikel yang sangat kecil. Partikel ini menyebarkan cahaya biru ke segala arah. Cahaya merah lewat lurus saja. Itu sebabnya langit terlihat biru." | 10 | – |
| Explain3 | "Cahaya ungu sebenarnya tersebar lebih kuat lagi. Tapi cahaya ungu dari Matahari lebih sedikit, dan mata kita kurang peka pada warna ungu." | 8 | – |
| Explain4 | "Saat senja, cahaya Matahari harus melewati udara lebih jauh. Cahaya birunya sudah tersebar di jalan. Yang sampai ke mata kita tinggal kuning, jingga, dan merah." | 9.5 | – |
| Payoff | "Jadi langit biru dan senja merah punya sebab yang sama: cahaya biru yang tersebar oleh udara." | 6 | tada |
| Cta | "Lalu, kenapa laut berwarna biru? Tulis tebakanmu di komentar!" | 3.5 | – |

## Brief visual

| Scene | Pola | Judul | Objek utama | Label | Kata kunci → aksi |
|---|---|---|---|---|---|
| Hook | karakter | Kenapa langit biru, bukan **ungu**? | Ganjar (pembawa), tanda tanya | – | – |
| Setup | SebabAkibat | Langit memantulkan **laut**? | gelombang (laut), tanda tanya | Laut berwarna biru; Langit ikut biru? | "Banyak" → sebab; "memantulkan" → akibat |
| Twist | Koreksi + karakter | – | kartu koreksi, Ganjar (pembawa) | Langit memantulkan laut → Warna dari udara | "bukan" → coret; "Warna birunya" → jawaban; "udara" → Ganjar (pembawa) paham |
| Explain1 | SebabAkibat → Bandingkan (kolom) | Cahaya putih itu **campuran** / Panjang **gelombangnya** beda | Matahari, pelangi / dua gelombang | Biru pendek; Merah panjang | "Cahaya Matahari" → sebab; "campuran" → pelangi; "Cahaya biru" → fase 2; "Cahaya merah" → merah |
| Explain2 | Sorot + cutaway | Udara menyebarkan **biru** | partikel udara (MolekulUdara) | partikel udara; merah: lurus | "partikel" → sinar mulai; "segala arah" → biru menyebar penuh; "Itu sebabnya" → cutaway |
| Explain3 | Bandingkan (baris) → Langkah | **Ungu** tersebar lebih kuat / Tapi langit tetap **biru** | dua gelombang / Matahari, mata | Ungu lebih kuat; 1 cahaya ungu sedikit; 2 mata kurang peka | "lebih kuat" → sorot Ungu; "Tapi" → fase 2; "mata kita" → butir 2 |
| Explain4 | Bandingkan (kolom) | Saat senja, jalurnya **panjang** | JalurCahaya siang dan senja | Siang jalur pendek; Senja jalur panjang | "melewati" → panel senja; "Cahaya birunya" → sorot senja |
| Payoff | karakter | Cahaya biru **tersebar** | JalurCahaya kecil siang dan senja, Ganjar (pembawa) | – | "langit biru" → panel siang; "senja merah" → panel senja |
| Cta | karakter | Kenapa **laut** biru? | Ganjar (pembawa), tanda tanya | – | – |

Cutaway: Explain2, mulai "Itu sebabnya", judul "Udara menyebarkan cahaya biru", keterangan "Biru datang dari segala arah langit".

## Objek
- Cast: Ganjar (pembawa) (Hook, Twist, Payoff, Cta), Matahari (gambar di dalam pola Explain1 dan Explain3). Awan dan Bumi tidak dipakai lagi.
- Props (semua berstatus `draf`, menunggu tinjauan Ganjar di `PropsSheet`): `GelombangCahaya`, `Pelangi`, `MolekulUdara`, `Mata`, `QuestionMark`, `JalurCahaya` (baru, menggantikan `LapisanAtmosfer` yang sulit dibaca).
- Pola: `SebabAkibat`, `Koreksi`, `Bandingkan`, `Sorot`, `Langkah`, `Fase`; cutaway lewat `scenes.ts`. Latar: `polos` di semua scene.

Baris untuk `props/registry.md` (sudah dicatat):

```
| JalurCahaya | cuaca | netral | prop | `progress` (sinar), param `waktu` siang/senja | draf |
```

## Fakta dan sumber

**Bersumber**
- Cahaya Matahari tampak putih tapi tersusun dari banyak warna dengan panjang gelombang berbeda; biru pendek, merah panjang. [Met Office](https://metoffice.gov.uk/learning/optics/why-is-the-sky-blue)
- Molekul udara jauh lebih kecil dari panjang gelombang cahaya tampak, sehingga gelombang pendek (biru, ungu) dihamburkan paling kuat (hamburan Rayleigh), dan biru terlihat dari segala arah. [Met Office](https://metoffice.gov.uk/learning/optics/why-is-the-sky-blue), [Live Science](https://www.livescience.com/planet-earth/why-is-the-sky-blue)
- Ungu dihamburkan lebih kuat daripada biru, tetapi langit tampak biru karena Matahari memancarkan lebih sedikit ungu dan mata kita kurang peka pada ungu. [Live Science (Ed Bloomer, Royal Observatory Greenwich)](https://www.livescience.com/planet-earth/why-is-the-sky-blue), [Met Office](https://metoffice.gov.uk/learning/optics/why-is-the-sky-blue), [UW–Madison (Steven Ackerman)](https://news.wisc.edu/curiosities-what-determines-the-colors-of-the-sky-at-sunrise-and-sunset)
- Langit bukan pantulan lautan. [Live Science](https://www.livescience.com/planet-earth/why-is-the-sky-blue)
- Tanpa lautan pun langit tetap biru, dan tanpa atmosfer langit gelap (contoh Bulan). [Big Think](https://bigthink.com/starts-with-a-bang/why-does-earth-appear-blue-from-space/), [ScienceAlert](https://www.sciencealert.com/why-is-the-sky-blue-the-answer-is-more-complex-than-you-might-think)
- Saat senja cahaya menempuh jalur atmosfer lebih panjang; biru terhambur keluar dari berkas, tersisa kuning, jingga, merah. [Met Office](https://metoffice.gov.uk/learning/optics/why-is-the-sunset-red), [UW–Madison](https://news.wisc.edu/curiosities-what-determines-the-colors-of-the-sky-at-sunrise-and-sunset)
- "Senja merah karena langit siang biru" (berkas sinar yang sama): kutipan NOAA/NWS (Stephen Corfidi) di [situs ini](https://www.theroamingboomers.com/what-makes-a-sunset-orange-or-red/). Tautan asli NOAA belum ditemukan; cari tautan langsungnya bila mau dikutip.

**Hitungan sendiri (bukan fakta bersumber)**
- Hamburan Rayleigh sebanding dengan 1/λ⁴. Dengan λ biru 450 nm: (650/450)⁴ ≈ 4,4 dan (700/450)⁴ ≈ 5,9, jadi biru sekitar 4–6 kali lebih kuat daripada merah, tergantung nilai λ merah yang dipilih. Angka λ itu pilihan sendiri, belum bersumber. **Narasi tidak memakai angka ini**, hanya "jauh lebih kuat".
- Estimasi durasi: 135 kata ÷ 2,6 kata/detik ≈ 52 detik. Kecepatan 2,6 kata/detik asumsi, belum diukur dari suara Aldo atau Zulfa. Rentang 2,3–2,7 kata/detik memberi 50–59 detik.

**Disederhanakan atau belum terverifikasi**
- Alasan "kenapa bukan ungu" dalam narasi hanya dua (sinar ungu lebih sedikit, mata kurang peka). Penjelasan lengkapnya melibatkan beberapa faktor, termasuk spektrum Matahari dan pelemahan di atmosfer ([WTAMU, Christopher Baird](https://wtamu.edu/~cbaird/sq/2013/03/28/why-is-the-sky-blue/)). Cukup untuk 60 detik, tapi jangan dibilang "satu-satunya alasan".
- Penyerapan ungu oleh ozon: hanya muncul di sumber lemah (forum, blog), **tidak dipakai**.
- Klaim "tanpa laut langit tetap biru" bertumpu pada satu sumber populer (Big Think). Logikanya konsisten dengan sumber lain, tapi cari satu sumber lagi bila mau dikutip tegas.
- Warna senja dipengaruhi debu, asap, dan kelembapan, dan sumber-sumber tidak seragam soal arahnya. Narasi hanya membahas penyebab utama (jalur panjang), tidak mengklaim apa pun soal polusi.
- Cta hanya bertanya ("kenapa laut biru?"), tidak menyatakan fakta tentang laut. Jawabannya jadi bahan video berikutnya ([WHOI](https://www.whoi.edu/ocean-learning-hub/ocean-facts/why-is-the-ocean-blue/)).

## Catatan format
- Hook 5 kata (batas 6). Teks layar sama dengan narasi.
- Satu ide per scene: Explain1 = cahaya putih itu campuran, Explain2 = molekul menghamburkan biru, Explain3 = kenapa bukan ungu, Explain4 = senja.
- Sorotan (`highlight`) satu per adegan: Explain3 pada "kurang peka", Payoff pada "cahaya biru terhambur".
