# Kenapa baterai HP cepat habis?

Topik: teknologi · Suara: narator (Aldo) · Tema: Dark Chalk, tanpa karakter di layar (visual 13 Nov 2026 diganti gambar kapur: Hape, Baterai, SinyalBar, Wifi di `src/dark-chalk/objek/Gawai.tsx`). Kolom Pembawa/Objek di brief bawah merujuk visual stickman lama
Status naskah: **disetujui Ganjar (12 Nov 2026)**. Visual draf pertama selesai; storyboard menunggu tinjauan. Video uji pertama format stickman.

Struktur: Hook → Setup (tebakan umum yang keliru) → Twist (koreksi) → Penjelasan ×3 → Payoff → Ajakan.
Perkiraan 52 detik (119 kata, sudah termasuk scene Kunci); durasi akhir mengikuti audio.

Jawaban dalam satu kalimat: yang paling menguras baterai bukan aplikasi yang terbuka, tetapi layar terang, sinyal lemah, dan baterai yang menua karena panas.

## Naskah

| Scene | Narasi (narator) | Dur (dtk) | SFX |
|---|---|---|---|
| Hook | "Pagi penuh, sore sudah merah. Kenapa baterai HP cepat habis?" | 4.5 | pop |
| Setup | "Banyak orang mengira penyebabnya aplikasi yang terbuka. Jadi semua aplikasi ditutup terus." | 5.5 | – |
| Twist | "Ternyata itu bukan penyebab utamanya." / "Apple sendiri menyarankan menutup aplikasi hanya kalau aplikasinya macet." | 2.5 + 4.5 | wrong |
| Explain1 | "Salah satu yang paling boros adalah layar. Makin terang layarnya, makin cepat baterai terkuras." | 6.5 | – |
| Explain2 | "Sinyal lemah juga boros. HP terus mencari sinyal yang lebih kuat, dan itu butuh tenaga. Wi-Fi lebih hemat daripada data seluler." | 9 | – |
| Explain3 | "Baterai juga menua. Makin tua, makin sedikit isi yang bisa disimpan." | 5.5 | – |
| Kunci | "Panas di atas tiga puluh lima derajat bisa merusaknya selamanya." | 4.5 | – |
| Payoff | "Jadi yang membuat boros bukan aplikasi terbuka. Tapi layar terang, sinyal lemah, dan baterai yang kepanasan." | 7 | tada |
| Cta | "Menurutmu, mengisi baterai semalaman itu bahaya atau tidak? Tulis di komentar!" | 4 | – |

## Brief visual

Pola: `karakter` (Hook, Twist, Payoff, Cta, dengan pembawa stickman Ganjar) atau pola penjelas (Setup, Explain). Latar kertas berpetak.

| Scene | Pola | Judul (≤6 kata) | Objek utama | Label | Pembawa (ekspresi + gestur) | Kata kunci → aksi |
|---|---|---|---|---|---|---|
| Hook | karakter | Kenapa baterai HP cepat **habis**? | Baterai (cast) di samping pembawa | – | kaget + garukKepala | "Pagi" → Baterai senang; "merah" → Baterai sedih |
| Setup | SebabAkibat | Gara-gara **aplikasi** terbuka? | Hape (cast) → tanda tanya | Banyak aplikasi terbuka; Tutup semua? | – | "aplikasi" → sebab; "ditutup" → akibat |
| Twist | Koreksi + karakter | – | kartu koreksi, pembawa | Aplikasi terbuka itu boros → Bukan penyebab utama | kaget + menyerah → senang + tunjuk | "bukan" → coret; "Apple" → jawaban; "macet" → pembawa paham |
| Explain1 | Bandingkan (baris) | Layar terang paling **boros** | LayarHp redup vs terang | Redup: hemat; Terang: boros | – | "paling" → kartu redup; "terang" → kartu terang menyala; "terkuras" → sorot |
| Explain2 | SebabAkibat → Bandingkan (baris) | Sinyal lemah ikut **boros** / Wi-Fi lebih **hemat** | SinyalBar (1 batang) → Hape bingung / WifiSignal vs SinyalBar | HP terus mencari; Wi-Fi hemat; Seluler boros | – | "Sinyal lemah" → sebab; "mencari" → akibat; "Wi-Fi" → fase 2 |
| Explain3 | Langkah (2 butir) | Baterai ikut **menua** | Baterai (cast) mengantuk lalu sedih | 1 Baterai menua; 2 Isinya makin sedikit | – | "menua" → butir 1; "makin sedikit" → butir 2 |
| Kunci | Kunci (frame layar penuh, tanpa karakter) | Panas merusak baterai **selamanya** | Termometer besar naik, latar merah | Jauhkan HP dari suhu di atas 35°C | – | "tiga" → termometer mulai naik; "derajat" → mencapai puncak |
| Payoff | karakter | Layar, sinyal, **panas** | tiga ikon kecil: LayarHp, SinyalBar, Termometer | – | senang + tunjuk → tertawa + sorak | "layar terang" → ikon 1; "sinyal lemah" → ikon 2; "kepanasan" → ikon 3 |
| Cta | karakter | Isi semalaman, **bahaya**? | Baterai (cast), tanda tanya | – | mikir + mikir | – |

Kunci (1 frame layar penuh): scene `Kunci` setelah Explain3, narasi "Panas di atas tiga puluh lima derajat bisa merusaknya selamanya.", judul "Panas merusak baterai selamanya" (sorot "Panas"), keterangan "Jauhkan HP dari suhu di atas 35°C", warna latar merah.

## Objek
- Cast: Baterai, Hape (sudah ada). Pembawa: stickman Ganjar.
- Props ada (berstatus `draf`): `Termometer` (Payoff), `WifiSignal`, `QuestionMark`.
- Baru dibuat 12 Nov 2026, berstatus `draf` (acuan ikon umum ponsel dan batang sinyal):
  - `LayarHp` (teknologi, prop, param `terang` 0..1: layar ponsel yang makin putih bercahaya). Acuan: ikon ponsel Lucide "smartphone".
  - `SinyalBar` (teknologi, prop, param `level` 0..4: empat batang sinyal seluler). Acuan: ikon Lucide "signal".

## Fakta dan sumber

**Bersumber**
- Apple menyarankan menutup paksa aplikasi hanya bila aplikasi tidak merespons. [TechRadar mengutip panduan Apple](https://www.techradar.com/phones/iphone/does-closing-apps-on-your-iphone-save-battery-life-the-surprising-answer-is-no-heres-why). Craig Federighi (Apple, 2016) menjawab "tidak" saat ditanya apakah menutup aplikasi menghemat baterai. [GSMArena](https://www.gsmarena.com/apple_software_svp_says_closing_recent_apps_does_not_improve_battery_life-blog-17184.php)
- Meredupkan layar memperpanjang baterai; Wi-Fi memakai daya lebih kecil daripada jaringan seluler; di area sinyal lemah perangkat terus mencari sinyal yang lebih baik. [Apple: Maximizing battery life](https://www.apple.com/batteries/maximizing-performance/)
- Suhu sekitar di atas 35°C dapat merusak kapasitas baterai secara permanen. [Apple: Maximizing battery life](https://www.apple.com/batteries/maximizing-performance/), [Apple Support HT213868](https://support.apple.com/en-gb/HT213868)
- Baterai isi ulang menua secara kimia; makin tua, makin sedikit muatan yang bisa disimpan. [Apple Support HT213868](https://support.apple.com/en-gb/HT213868)

**Disederhanakan atau belum terverifikasi**
- "Layar salah satu yang paling boros": didukung banyak sumber sekunder (blog teknologi, angka 30–50% tidak seragam), bukan sumber primer. Narasi sengaja memakai "salah satu", tanpa angka.
- Sisi Android: pernyataan Google (Hiroshi Lockheimer, 2016) bahwa menutup aplikasi tidak menghemat baterai hanya ditemukan lewat media sekunder. Narasi hanya mengutip Apple.
- Cta (mengisi semalaman) hanya bertanya, tidak menyatakan fakta; bahan video berikutnya.

## Caption unggahan dan tag

Untuk Instagram, TikTok, dan YouTube Shorts (bukan caption di layar). Handle akun `@dipapantulis`.

**Caption (Instagram dan TikTok)**
```
Kenapa baterai HP cepat habis? 🔋

Bukan karena aplikasi yang terbuka. Apple sendiri menyarankan menutup aplikasi hanya kalau aplikasinya macet. Yang paling boros: layar terang, sinyal lemah (HP terus mencari sinyal yang lebih kuat), dan baterai yang makin tua. Panas di atas 35°C bahkan bisa merusak baterai selamanya.

Menurutmu, mengisi baterai semalaman itu bahaya atau tidak? Tulis di komentar 👇

Follow @dipapantulis, 1 pertanyaan 1 animasi tiap Selasa, Kamis & Sabtu ✏️
```

**Tag**
`#bateraihp #hematbaterai #sains #faktaunik #animasiedukasi #teknologi #tipshp #belajarsains #tahukahkamu #dipapantulis`

**Judul YouTube Shorts:** Kenapa baterai HP cepat habis? #shorts
**Tag YouTube (kolom tag):** kenapa baterai hp cepat habis, baterai boros, hemat baterai hp, tutup aplikasi, baterai rusak karena panas, fakta unik, animasi edukasi, teknologi

Catatan: TikTok: aktifkan label konten AI (VO ElevenLabs). Caption hanya mengulang isi narasi dan sumber Apple di bagian "Fakta dan sumber"; tidak ada klaim baru. Jangan unggah dengan klaim angka persen layar.

## Catatan format
- Hook 5 kata. Satu sorotan per scene.
- Tiap scene Explain satu gagasan: layar, sinyal, umur baterai dan panas.
- Kalimat terpanjang 11 kata ("HP terus mencari sinyal yang lebih kuat, dan itu butuh tenaga.").
