# Siapa penemu angka nol?

Topik: sejarah · Tema: **Dark Chalk** · Suara: narator (Aldo) · Tokoh di layar: tidak ada (semua visual gambar kapur beranimasi)
Status: naskah disetujui Ganjar (13 Nov 2026, "oke, lanjutkan"); `scenes.ts` dan `views/` sudah ditulis; storyboard (`out/PenemuNol-storyboard.png`) **menunggu persetujuan Ganjar**. VO belum dibuat (menunggu Ganjar meminta).

Jawaban satu kalimat (calon Payoff): Angka nol berkembang di India, lalu dibawa pedagang dan ilmuwan Arab ke dunia.

Struktur: Hook → Setup → Twist → Explain1–2 → Kunci → Payoff → Cta. Perkiraan 50 detik (sekitar 115 kata).

## Naskah

| Scene | Narasi (narator) | Dur (dtk) | SFX |
|---|---|---|---|
| Hook | "Tanpa angka nol, komputer tidak bisa bekerja. Lalu siapa yang menemukannya?" | 5 | pop |
| Setup | "Banyak orang mengira nol ditemukan orang Arab. Soalnya kita menyebutnya angka Arab." | 6 | – |
| Twist | "Ternyata keliru. Nol berkembang di India." | 4 | wrong |
| Explain1 | "Sekitar seribu tujuh ratus tahun lalu, orang India menulis titik kecil. Titik itu menandai tempat kosong. Dengan titik, angka satu dan sepuluh jadi berbeda." | 10 | – |
| Explain2 | "Tahun enam ratus dua puluh delapan, Brahmagupta menulis aturan menghitung dengan nol. Brahmagupta adalah ahli matematika India. Sejak itu, nol menjadi angka sendiri." | 10 | – |
| Kunci | "Nol berubah dari tanda kosong menjadi angka." | 4 | – |
| Payoff | "Jadi nol berkembang di India. Lalu ilmuwan dan pedagang Arab membawanya sampai ke Eropa." | 6 | tada |
| Cta | "Menurutmu, angka apa lagi yang lahir di India?" | 4 | – |

## Brief visual

| Scene | Pola | Judul (≤6 kata, satu kata disorot) | Objek utama | Label | Karakter | Kata kunci → aksi |
|---|---|---|---|---|---|---|
| Hook | visual | Siapa penemu angka **0**? | angka 0 besar berkapur; di sekitarnya kode biner 0 dan 1 berjatuhan pelan | nol | – | "komputer" → deret 0 dan 1 muncul; "menemukannya" → tanda tanya menyala di samping angka 0 |
| Setup | Bandingkan | Angka **Arab**? | dua kolom: "1 2 3" (ikon Tabler tanda tanya bendera) vs kartu tebakan "Penemu: Arab" | Angka Arab; Penemu Arab? | – | "orang Arab" → kartu tebakan muncul; "angka Arab" → nama di kolom kiri menyala |
| Twist | Koreksi | Ternyata **keliru**! | kartu koreksi; "Arab" dicoret, panah ke peta India | Arab → India | – | "keliru" → coret "Arab"; "India" → peta India muncul dan menyala |
| Explain1 | SebabAkibat | Titik **tempat kosong** | sebab: "1 0" dan "1" ditulis berdampingan (satu vs sepuluh); akibat: titik kecil mengisi tempat kosong | titik; tempat kosong; 1 ≠ 10 | – | "titik kecil" → titik muncul; "tempat kosong" → kotak kosong disorot; "sepuluh" → angka 10 menyala |
| Explain2 | Sorot | **Brahmagupta**, tahun 628 | naskah gulungan kapur dengan rumus 5 + 0 = 5 dan 5 × 0 = 0; penanda tahun | tahun 628; aturan nol; angka sendiri | – | "enam ratus dua puluh delapan" → penanda tahun; "aturan" → rumus muncul; "angka sendiri" → 0 membesar |
| Kunci | Kunci (layar penuh, tanpa karakter) | Nol jadi **angka** | titik kecil berubah menjadi lingkaran 0 besar bersinar | Tanda kosong → angka | – | gambar muncul → titik tumbuh jadi 0 |
| Payoff | Langkah | **India** → Arab → Eropa | 3 butir: India (lahir), Arab (dibawa), Eropa (dipakai) dengan panah | India; Arab; Eropa | – | "India" → butir 1; "Arab" → butir 2; "Eropa" → butir 3 |
| Cta | visual | Angka lain **dari India**? | angka 1–9 kapur berderet, satu angka menyala bergantian, tanda tanya | angka? | – | "angka" → deret muncul; "India" → tanda tanya menyala |

Latar: papan hijau Dark Chalk (cangkang `ShortEdu`, `tema="dark-chalk"`). Tanpa pembawa dan tanpa cast.

Kunci: kalimat "Nol berubah dari tanda kosong menjadi angka." dipisah menjadi baris sendiri; judul "Nol jadi **angka**"; gambar besar titik berubah jadi 0; keterangan "Tanda kosong → angka".

## Objek yang dibutuhkan (objek kapur, di `src/dark-chalk/objek/`, menunggu tinjauan Ganjar)
Di `src/dark-chalk/objek/Angka.tsx`: `Nol`, `Titik`, `AngkaTeks`, `TandaBeda`, `Gulungan`. `PetaIndia` diganti ikon Tabler `globe` dengan titik emas di India (Twist); `book` dan `globe` dipakai di Payoff. Deret biner di Hook memakai `AngkaTeks`.

## Fakta dan sumber
**Sudah bersumber (pencarian web, 13 Nov 2026):**
- Naskah Bakhshali memakai titik sebagai penanda tempat kosong (pengganti, bukan angka). Uji karbon Oxford (2017) menaksir halamannya berasal dari sekitar abad ke-3 atau ke-4 (kisaran 224–383 M). Naskah terdiri dari kulit kayu birch dari beberapa periode, jadi usianya sebaran, bukan satu titik. Titik ini yang akhirnya menjadi simbol nol kita. [Oxford (GLAM)](https://www.glam.ox.ac.uk/node/218481), [Smithsonian](https://www.smithsonianmag.com/smart-news/dating-ancient-indian-text-gives-new-timeline-history-zero-180964896/), [Atlas Obscura](https://www.atlasobscura.com/articles/oldest-example-zero-symbol-indian-manuscript).
- Nol sebagai angka (ada aturan hitungnya) dikaitkan dengan Brahmagupta, *Brahmasphutasiddhanta*, 628 M. Oxford (Marcus du Sautoy): nol di Bakhshali belum angka tersendiri. [Oxford](https://www.ox.ac.uk/node/1418850), [Smithsonian](https://www.smithsonianmag.com/smart-news/dating-ancient-indian-text-gives-new-timeline-history-zero-180964896/).
- Babilonia dan Maya juga memakai penanda kosong secara terpisah; yang berkembang menjadi simbol modern adalah titik India.

**Belum terverifikasi (dari pengetahuan umum, cek sebelum tayang):**
- Jalur ke Arab dan Eropa: al-Khwarizmi (sekitar abad ke-9) menjelaskan sistem angka India; Fibonacci (*Liber Abaci*, 1202) memperkenalkannya ke Eropa. Narasi Payoff hanya menyebut "ilmuwan dan pedagang Arab" dan "Eropa" tanpa nama atau tahun, sengaja.
- Klaim Hook, "tanpa nol komputer tidak bisa bekerja": nol dan satu dasar sistem biner; wajar, tetap diperiksa kata-katanya.
- Penyebutan "angka Arab" untuk 0–9 (istilah lazim, sering disebut angka Hindu-Arab). Cek ejaan istilah sebelum tayang.

## Caption unggahan dan tag

Untuk Instagram, TikTok, dan YouTube Shorts (bukan caption di layar). Handle akun `@dipapantulis`.

**Caption (Instagram dan TikTok)**
```
Siapa penemu angka nol? 0️⃣

Bukan orang Arab, walau kita menyebutnya "angka Arab". Nol berkembang di India. Awalnya cuma titik kecil penanda tempat kosong, supaya 1 dan 10 tidak tertukar. Tahun 628, Brahmagupta menulis aturan menghitung dengan nol, dan sejak itu nol jadi angka sendiri. Lalu ilmuwan dan pedagang Arab membawanya sampai ke Eropa.

Menurutmu, angka apa lagi yang lahir di India? Tulis di komentar 👇

Follow @dipapantulis, 1 pertanyaan 1 animasi tiap Selasa, Kamis & Sabtu ✏️
```

**Tag**
`#angkanol #nol #matematika #sejarah #faktaunik #animasiedukasi #india #belajarmatematika #tahukahkamu #dipapantulis`

**Judul YouTube Shorts:** Siapa penemu angka nol? #shorts
**Tag YouTube (kolom tag):** siapa penemu angka nol, sejarah angka nol, brahmagupta, angka nol india, angka arab, fakta unik, animasi edukasi, matematika

Catatan: TikTok: aktifkan label konten AI (VO ElevenLabs). Caption hanya mengulang isi narasi; "titik penanda kosong" mengikuti naskah Bakhshali dan "628 M" mengikuti Brahmagupta (lihat "Fakta dan sumber"). Sengaja tanpa nama penemu tunggal dan tanpa al-Khwarizmi atau Fibonacci, karena jalur ke Arab dan Eropa belum terverifikasi.

## Catatan
- "Sekitar seribu tujuh ratus tahun lalu" adalah pembulatan kisaran abad ke-3–4 M; narasi tidak mengklaim satu tahun pasti.
- Narasi tidak menyebut "penemu tunggal": peneliti masih membahas bagaimana penanda kosong menjadi angka. Judul "Siapa penemu nol?" dijawab dengan "berkembang di India", bukan satu nama.
- Maya dan Babilonia sengaja tidak masuk narasi (menambah gagasan, melewati satu gagasan per scene); bisa jadi video lanjutan.
- Setup memakai ikon Tabler untuk tanda tanya; cek daftar 61 ikon di `DarkChalk-Ikon` sebelum menulis views.
