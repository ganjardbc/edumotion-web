# Apa yang terjadi di lubang hitam?

Topik: planet · Tema: dark-chalk · Suara: narator (Aldo) · Tokoh di layar: tidak ada (semua visual gambar kapur beranimasi)
Status naskah: **draf, menunggu persetujuan Ganjar** (16 Nov 2026). Fakta belum dicek ulang lewat pencarian web; lihat tabel fakta.

Pertanyaan Hook (5W1H): **Apa** yang terjadi di lubang hitam?
Jawaban satu kalimat (calon Payoff): Di dalam lubang hitam, gravitasinya begitu kuat sampai tidak ada yang bisa keluar, bahkan cahaya.

Struktur: Hook → Explain1–3 → Kunci → Payoff → Cta. Perkiraan 45 detik (sekitar 100 kata).

## Naskah

| Scene | Narasi (narator) | Dur (dtk) | SFX |
|---|---|---|---|
| Hook | "Cahaya pun tidak bisa kabur dari lubang hitam. Apa yang terjadi di dalamnya?" | 5 | pop |
| Explain1 | "Bintang yang sangat besar bisa runtuh di akhir hidupnya. Semua isinya terpampat ke ruang yang sangat kecil." | 9 | – |
| Explain2 | "Gravitasi di sana sangat kuat. Ada batas yang disebut cakrawala peristiwa, yaitu batas tanpa jalan kembali." | 9 | – |
| Explain3 | "Benda yang jatuh ke dalam ditarik makin kuat. Bagian yang lebih dekat tertarik lebih keras, jadi benda terulur panjang seperti mi." | 10 | – |
| Kunci | "Di dalam batas itu, cahaya pun tidak bisa keluar." | 4 | – |
| Payoff | "Jadi di dalam lubang hitam, tidak ada yang bisa keluar. Apa yang ada di pusatnya, ilmuwan belum tahu pasti." | 8 | tada |
| Cta | "Menurutmu, bagaimana kita bisa melihat lubang hitam kalau cahayanya tidak keluar? Tulis jawabanmu di komentar." | 7 | – |

## Brief visual

| Scene | Pola | Judul (≤6 kata, satu disorot) | Objek utama | Label | Karakter | Kata kunci → aksi |
|---|---|---|---|---|---|---|
| Hook | visual | Apa di **lubang hitam**? | Lingkaran hitam besar dengan cincin kapur; garis cahaya melengkung lalu tersedot masuk | cahaya | – | "cahaya" → garis cahaya muncul; "kabur" → garis tertarik masuk; "dalamnya" → tanda tanya di lingkaran |
| Explain1 | SebabAkibat | Bintang besar **runtuh** | Bintang besar (sebab) → titik hitam kecil (akibat), panah mengerut | bintang besar; lubang hitam | – | "runtuh" → bintang mengerut; "terpampat" → titik hitam muncul |
| Explain2 | Sorot | Batas **tanpa kembali** | Lubang hitam besar, lingkaran putus-putus di sekelilingnya, panah masuk lewat batas | cakrawala peristiwa; gravitasi | – | "gravitasi" → panah tarik; "cakrawala peristiwa" → lingkaran putus-putus; "tanpa jalan kembali" → panah balik dicoret |
| Explain3 | SebabAkibat | Ditarik, lalu **terulur** | Bola kecil mendekati lubang hitam, lalu memanjang seperti mi | tarikan kuat; tarikan lemah | – | "jatuh" → bola mendekat; "lebih keras" → panah dekat tebal, panah jauh tipis; "mi" → bola memanjang |
| Kunci | Kunci | Cahaya pun **terjebak** | Lubang hitam besar; sinar cahaya masuk lewat batas dan tidak keluar (warna latar gelap) | cakrawala | – | "batas" → lingkaran; "cahaya" → sinar masuk; "keluar" → tanda silang di panah keluar |
| Payoff | visual | Dari dalam, **tak ada** jalan keluar | Lubang hitam, tanda tanya emas muncul di pusat | pusatnya: belum tahu | – | "keluar" → panah dicoret; "pusatnya" → tanda tanya di pusat; "belum tahu" → label |
| Cta | visual | Bagaimana kita **melihatnya**? | Lubang hitam dengan cincin cahaya terang di sekelilingnya, kaca pembesar | tulis di komentar | – | "melihat" → kaca pembesar; "komentar" → ajakan |

Kunci (1 dari paling banyak 2): kalimat "Di dalam batas itu, cahaya pun tidak bisa keluar." dipisah jadi scene sendiri, layar penuh, tanpa karakter.

## Aturan naskah
- Hook satu pertanyaan 5W1H dijawab langsung. Semua kalimat narator. Kalimat paling banyak 15 kata. Satu istilah baru per scene (cakrawala peristiwa dijelaskan di kalimat yang sama).

## Objek yang dibutuhkan
Objek kapur baru, status `antre`, dibuat di `src/dark-chalk/objek/` setelah naskah disetujui: `LubangHitam` (lingkaran hitam + cincin), `BintangRuntuh` (bintang yang mengerut), `Spageti` (bola yang memanjang). Panah dan kaca pembesar memakai yang sudah ada (`Panah` di `Terbang.tsx`, `Ikon`). Acuan: gambar skematis NASA tentang lubang hitam.

## Fakta dan sumber (**belum terverifikasi**; dari pengetahuan umum, perlu dicek sebelum VO dan tayang)
| Klaim di narasi | Status | Sumber yang perlu dicek |
|---|---|---|
| Cahaya tidak bisa kabur dari lubang hitam | Umum diterima; belum dicek | NASA Science: "Black Holes" |
| Bintang yang sangat besar bisa runtuh di akhir hidupnya jadi lubang hitam | Umum diterima (bintang bermassa sangat besar); belum dicek | NASA Science: "Black Holes Overview" |
| Cakrawala peristiwa = batas tanpa jalan kembali | Umum diterima; belum dicek | NASA Science: "Event Horizon" |
| Benda terulur seperti mi (spaghettifikasi) karena beda tarikan dekat dan jauh | Berlaku untuk lubang hitam bermassa bintang; untuk yang sangat besar, efek ini baru terjadi jauh di dalam. Narasi sengaja tidak menyebut ukuran. Belum dicek | NASA Science / ESA |
| Apa yang ada di pusat belum diketahui pasti | Umum diterima (singularitas adalah prediksi teori, bukan hasil pengamatan); belum dicek | NASA Science |
| Lubang hitam bisa "dilihat" lewat bayangan dan cincin cahaya di sekitarnya (hanya di Cta, tidak dibocorkan) | Foto pertama M87 oleh Event Horizon Telescope, 2019; belum dicek | EHT Collaboration |

Klaim yang sengaja **tidak** dipakai: "lubang hitam menyedot semuanya" (keliru, gravitasi dari jauh sama seperti benda bermassa sama), angka massa/jarak, dan apa yang terjadi di pusat.

## Caption unggahan dan tag

Untuk Instagram, TikTok, dan YouTube Shorts (bukan caption di layar). Handle akun `@dipapantulis`.

**Caption (Instagram dan TikTok)**
```
Apa yang terjadi di lubang hitam? 🕳️

Cahaya pun tidak bisa kabur dari lubang hitam. Bintang yang sangat besar bisa runtuh di akhir hidupnya, lalu isinya terpampat ke ruang yang sangat kecil. Di sekitarnya ada batas yang disebut cakrawala peristiwa, yaitu batas tanpa jalan kembali. Benda yang jatuh ke dalam bisa terulur panjang seperti mi. Apa yang ada di pusatnya, ilmuwan belum tahu pasti.

Menurutmu, bagaimana kita bisa melihat lubang hitam kalau cahayanya tidak keluar? Tulis jawabanmu di komentar 👇

Follow @dipapantulis, 1 pertanyaan 1 animasi tiap Selasa, Kamis & Sabtu ✏️
```

**Tag**
`#lubanghitam #blackhole #antariksa #astronomi #gravitasi #faktaunik #animasiedukasi #belajarsains #tahukahkamu #dipapantulis`

**Judul YouTube Shorts:** Apa yang terjadi di lubang hitam? #shorts
**Tag YouTube (kolom tag):** lubang hitam, apa yang terjadi di lubang hitam, black hole, cakrawala peristiwa, antariksa, gravitasi, fakta unik, animasi edukasi

Catatan: TikTok: aktifkan label konten AI (VO ElevenLabs). Caption hanya mengulang narasi; perbarui bila naskah atau fakta berubah. Jawaban Cta (cara melihat lubang hitam) sengaja tidak dibocorkan.
