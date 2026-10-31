# Kenapa langit biru, bukan ungu?

Topik: cuaca · Pemandu: Tako (suara Aldo, dipilih Ganjar) · Karakter: Awan (+ Matahari dan Bumi di Explain4)
Status naskah: **disetujui Ganjar (31 Okt 2026)**
Target tayang (kalender awal): Sel 10 Nov 2026, versi A (Tako bersuara sendiri)

Struktur: Hook → Setup (tebakan Tako) → Twist → Penjelasan ×4 → Payoff → Ajakan. Perkiraan durasi sekitar 52 detik (estimasi); durasi akhir mengikuti audio.

| Waktu (estimasi) | Scene | Narasi (Tako) | Visual dan aksi |
|---|---|---|---|
| 0–2 dtk | Hook | "Kenapa langit biru, bukan ungu?" | Teks layar besar: **Kenapa langit biru, bukan ungu?** Langit siang cerah, Tako menengadah dengan tanda tanya. |
| 2–7 dtk | Setup | "Aku tahu! Laut kan biru dan luas banget. Jadi langit tinggal mantulin warna laut!" | Tako percaya diri, menunjuk laut lalu langit. Panah melengkung dari laut ke langit (CurvedArrow). Awan menggeleng pelan. |
| 7–12 dtk | Twist | "Hah? Salah?! Kalau lautnya hilang pun, langit tetap biru. Warnanya datang dari udara!" | CorrectionCard. Laut menghilang dari layar, langit tetap biru. Tanda seru, Tako kaget lalu paham. Zoom ke udara. |
| 12–20 dtk | Explain1 | "Cahaya Matahari kelihatan putih. Padahal isinya campuran semua warna, kayak pelangi. Tiap warna punya panjang gelombang beda. Biru pendek, merah panjang." | Matahari memancarkan sinar putih, terurai jadi pelangi. Dua gelombang berdampingan: biru rapat/pendek, merah renggang/panjang. |
| 20–29 dtk | Explain2 | "Udara penuh molekul mungil. Mereka membelokkan cahaya biru jauh lebih kuat daripada merah, ke segala arah. Jadi biru kelihatan dari mana-mana!" | Sinar putih menembus kumpulan molekul. Cahaya merah lurus terus, cahaya biru memantul ke segala arah. Kamera mundur: langit penuh biru. |
| 29–36 dtk | Explain3 | "Ungu sebenarnya dihamburkan lebih kuat lagi. Tapi Matahari memancarkan ungu lebih sedikit, dan mata kita kurang peka pada ungu." | Bar "ungu" dan "biru" di spektrum; ungu terhambur kuat tapi sinar ungu yang datang tipis. Mata muncul, meredup saat melihat ungu. Sorotan pada "kurang peka". |
| 36–44 dtk | Explain4 | "Pas senja, cahaya menempuh jalur udara yang jauh lebih panjang. Birunya sudah terhambur duluan, tersisa kuning, jingga, dan merah." | Bumi dengan lapisan udara. Dua jalur sinar: siang (pendek), senja (panjang). Langit berganti sore, biru memudar jadi jingga-merah. |
| 44–49 dtk | Payoff | "Jadi langit biru dan senja merah itu satu sebab yang sama: cahaya biru yang terhambur!" | Langit siang dan senja berdampingan, satu panah penghubung. Teks layar (sorotan): **cahaya biru terhambur**. Tako dan Awan senang. |
| 49–52 dtk | Cta | "Lalu kenapa laut biru? Tebak di komentar!" | Tako menunjuk laut, tanda tanya. Mengundang komentar. Mengantar ke video berikutnya. |

## Objek
- Ada (cast): Tako, Awan, Matahari, Bumi.
- Ada (props): `Pelangi`, `QuestionMark`, `ExclamationMark`, `CurvedArrow`, `CrossMark`, `CheckMark`, `Star`.
- Antre (belum ada, perlu dibuat di `src/props/`):
  - `GelombangCahaya` (cuaca, netral, prop, `progress` = gelombang bergerak, parameter `wavelength`): dipakai Explain1.
  - `MolekulUdara` (cuaca, netral, prop, `scatter` = sinar membelok): dipakai Explain2.
  - `Mata` (tubuh, netral, prop, tidak ada gerak): dipakai Explain3.
  - `LapisanAtmosfer` (cuaca, netral, prop, `progress` = sinar menembus): dipakai Explain4.
- Komponen: `HookText`, `Caption`, `PhaseBar`, `GuessCard`, `CorrectionCard`, `Callout`, `ProgressDots`. Latar: `outdoor` atau `edu`, waktu hari siang ke sore.
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
