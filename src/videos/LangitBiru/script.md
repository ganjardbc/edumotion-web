# Kenapa langit biru, bukan ungu?

Topik: cuaca · Suara: narator (Aldo) · Karakter di layar: Tako, Awan, Matahari, Bumi
Status naskah: **ditulis ulang untuk konsep narator (11 Nov 2026), menunggu persetujuan Ganjar.** Versi sebelumnya (Tako/Bumi berbicara sendiri) ada di riwayat git.

Struktur: Hook → Setup (tebakan umum yang keliru) → Twist (koreksi) → Penjelasan → Payoff → Ajakan. Perkiraan 59 detik; durasi akhir mengikuti audio.

Semua kalimat dibawakan narator. Tokoh di layar hanya bereaksi, tidak berbicara. Latar polos di semua scene.

| Scene | Narasi (narator) | Dur (dtk) | Visual dan aksi | SFX |
|---|---|---|---|---|
| Hook | "Kenapa langit biru, bukan ungu?" | 1.85 | Latar polos. Teks layar: **Kenapa langit biru, bukan ungu?** Tako dengan tanda tanya. | pop |
| Setup | "Banyak orang mengira langit biru karena memantulkan warna laut." | 4.5 | Label "laut" dan "langit" dihubungkan panah melengkung. Tako berpikir, Awan menggeleng menjelang akhir. | – |
| Twist | "Ternyata bukan!" / "Tanpa laut pun, langit tetap biru. Warna birunya berasal dari udara." | 1.2 + 4.2 | Kartu koreksi: "Langit memantulkan laut" dicoret, jawaban "Warna dari udara". Tako kaget lalu paham. | wrong |
| Explain1 | "Cahaya Matahari terlihat putih. Padahal isinya campuran semua warna, seperti pelangi. Cahaya biru gelombangnya pendek. Cahaya merah gelombangnya panjang." | 10.5 | Sinar putih Matahari terurai jadi pelangi, lalu dua gelombang: biru pendek, merah panjang. | – |
| Explain2 | "Udara berisi partikel yang sangat kecil. Partikel ini menyebarkan cahaya biru ke segala arah. Cahaya merah lewat lurus saja. Itu sebabnya langit terlihat biru." | 10 | Sinar menembus partikel udara: merah lurus, biru menyebar ke segala arah. | – |
| Explain3 | "Cahaya ungu sebenarnya tersebar lebih kuat lagi. Tapi cahaya ungu dari Matahari lebih sedikit, dan mata kita kurang peka pada warna ungu." | 8 | Batang ungu dan biru (ilustrasi), lalu mata dengan sorotan "kurang peka". | – |
| Explain4 | "Saat senja, cahaya Matahari harus melewati udara lebih jauh. Cahaya birunya sudah tersebar di jalan. Yang sampai ke mata kita tinggal kuning, jingga, dan merah." | 9.5 | Bumi dengan lapisan udara: jalur siang pendek, jalur senja panjang. Panel langit berganti ke jingga-merah. | – |
| Payoff | "Jadi langit biru dan senja merah punya sebab yang sama: cahaya biru yang tersebar oleh udara." | 6 | Panel langit biru dan senja merah dengan satu panah. Teks layar (sorotan): **Cahaya biru tersebar**. | tada |
| Cta | "Lalu, kenapa laut berwarna biru? Tulis tebakanmu di komentar!" | 3.5 | Teks layar: **Kenapa laut biru?** Tako dengan tanda tanya. | – |

## Objek
- Ada (cast): Tako, Awan, Matahari, Bumi.
- Ada (props): `Pelangi`, `QuestionMark`, `ExclamationMark`, `CurvedArrow`, `CrossMark`, `CheckMark`, `Star`.
- Antre (belum ada, perlu dibuat di `src/props/`):
  - `GelombangCahaya` (cuaca, netral, prop, `progress` = gelombang bergerak, parameter `wavelength`): dipakai Explain1.
  - `MolekulUdara` (cuaca, netral, prop, `scatter` = sinar membelok): dipakai Explain2.
  - `Mata` (tubuh, netral, prop, tidak ada gerak): dipakai Explain3.
  - `LapisanAtmosfer` (cuaca, netral, prop, `progress` = sinar menembus): dipakai Explain4.
- Komponen: `HookText`, `Caption`, `PhaseBar`, `GuessCard`, `CorrectionCard`, `Callout`, `ProgressDots`. Latar: `polos` di semua scene.
- Catatan: ungu mungkin tidak ada di palet topik cuaca. Cek `TOPIC_COLORS` dan prop `Pelangi` sebelum membuat warna; jangan menulis hex baru.

Baris untuk `props/registry.md`:

```
| GelombangCahaya | cuaca | netral | prop | `progress` (gelombang), param `wavelength` | antre |
| MolekulUdara | cuaca | netral | prop | `scatter` (sinar membelok) | antre |
| Mata | tubuh | netral | prop | tidak ada | antre |
| LapisanAtmosfer | cuaca | netral | prop | `progress` (sinar menembus) | antre |
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
