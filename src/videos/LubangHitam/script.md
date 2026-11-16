# Apa yang terjadi di lubang hitam?

Topik: planet · Tema: dark-chalk · Suara: narator (Aldo) · Tokoh di layar: tidak ada (semua visual gambar kapur beranimasi)
Status: naskah dan brief disetujui Ganjar (16 Nov 2026). Fakta dicek 16 Nov 2026 lewat pencarian web (tabel di bawah). Views ditulis; **storyboard menunggu persetujuan Ganjar**. VO belum dibuat.

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
| Hook | visual | Apa yang **terjadi** di lubang hitam? | Lingkaran hitam besar dengan cincin kapur; garis cahaya melengkung lalu tersedot masuk | cahaya | – | "cahaya" → garis cahaya muncul; "kabur" → garis tertarik masuk; "dalamnya" → tanda tanya di lingkaran |
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
Objek kapur baru di `src/dark-chalk/objek/LubangHitam.tsx` (menunggu tinjauan Ganjar): `LubangHitam`, `BintangRuntuh`, `Spageti`, `Silang`. Selain itu memakai `Aliran` (`Terbang.tsx`) dan ikon `telescope`.

## Fakta dan sumber (dicek 16 Nov 2026 lewat pencarian web)
| Klaim di narasi | Hasil cek | Sumber |
|---|---|---|
| Cahaya tidak bisa kabur dari lubang hitam | Sesuai: di dalam cakrawala peristiwa, kecepatan lepas melebihi kecepatan cahaya | [NASA: What Are Black Holes?](https://www.nasa.gov/universe/what-are-black-holes/), [NASA Science: Anatomy](https://science.nasa.gov/universe/black-holes/anatomy/) |
| Bintang yang sangat besar runtuh di akhir hidupnya dan isinya terpampat ke ruang sangat kecil | Sebagian: halaman NASA yang ditemukan menyebut materi runtuh ke satu titik, tapi tidak menjelaskan keruntuhan bintang. Pembentukan lubang hitam dari bintang masif adalah pengetahuan umum astronomi; **cari sumber NASA yang eksplisit sebelum tayang** | [NASA Hubble: Black Holes](https://science.nasa.gov/mission/hubble/science/science-behind-the-discoveries/hubble-black-holes/) |
| Cakrawala peristiwa = batas tanpa jalan kembali | Sesuai: NASA menyebutnya titik tanpa kembali (permukaan lubang hitam) | NASA Science: Anatomy |
| Benda terulur seperti mi karena tarikan sisi dekat lebih keras | Sesuai: gaya pasang surut (selisih tarikan sisi dekat dan jauh) meregangkan benda ("spaghettifikasi"). Berlaku jelas untuk lubang hitam kecil; untuk yang sangat besar efeknya baru terasa jauh di dalam. Narasi sengaja tidak menyebut ukuran | [NASA Science: Too Close to a Black Hole](https://science.nasa.gov/universe/what-happens-when-something-gets-too-close-to-a-black-hole/), [NASA Space Math: Tidal Forces](https://spacemath.gsfc.nasa.gov/stars/4Page33.pdf) |
| Apa yang ada di pusat belum diketahui pasti | **Belum terverifikasi**: pencarian tidak menemukan sumber untuk singularitas. Cek sebelum tayang, atau ganti kalimatnya | – |
| (Cta, tidak dibocorkan) lubang hitam bisa dilihat lewat cahaya di sekitarnya | Sesuai: foto pertama (M87) dirilis 10 April 2019 oleh Event Horizon Telescope; NASA: cahaya berasal dari materi yang belum jatuh, terutama cakram | [ESO: First Image of a Black Hole](https://eso.org/public/images/eso1907a), NASA Science: Anatomy |

Klaim yang sengaja **tidak** dipakai: "lubang hitam menyedot semuanya" (keliru), angka massa atau jarak, dan apa yang terjadi di pusat.

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
