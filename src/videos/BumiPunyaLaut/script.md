# Dari mana air laut berasal?

Topik: planet · Tema: dark-chalk · Suara: narator (Aldo) · Tokoh di layar: tidak ada (semua visual gambar kapur beranimasi)
Status: **dipindah ke tema Dark Chalk dan format baru (19 Nov 2026); naskah dan storyboard disetujui Ganjar; fakta dicek; VO dibuat.** Setup dan Twist dibuang (format lama); isi Setup jadi Explain1. Versi sebelumnya ada di riwayat git.

Pertanyaan Hook (5W1H): **Dari mana** air laut berasal?
Jawaban satu kalimat (Payoff): Air laut kemungkinan datang dari dua sumber: dari luar angkasa, dan dari dalam Bumi sendiri.

Struktur: Hook → Explain1–3 → Payoff → Cta. Perkiraan 38 detik; durasi akhir mengikuti audio.

## Naskah

| Scene | Narasi (narator) | Dur (dtk) | SFX |
|---|---|---|---|
| Hook | "Laut menutupi tujuh puluh satu persen permukaan Bumi. Dari mana semua air itu?" | 4.8 | pop |
| Explain1 | "Dulu, Bumi sangat panas dan penuh lava. Air cair sulit bertahan di permukaannya." | 5 | – |
| Explain2 | "Miliaran tahun lalu, banyak asteroid dan meteor jatuh ke Bumi. Sebagian membawa air di dalam batunya. Saat menabrak, airnya keluar." | 9 | – |
| Explain3 | "Gunung berapi juga mengeluarkan uap air dari dalam Bumi. Uap itu menjadi awan, lalu turun sebagai hujan. Air hujan terkumpul dan menjadi laut." | 9.5 | – |
| Payoff | "Jadi air laut kemungkinan datang dari dua sumber: dari luar angkasa, dan dari dalam Bumi sendiri." | 6.5 | tada |
| Cta | "Menurutmu, apakah planet lain juga punya laut? Tulis di komentar!" | 3.8 | – |

## Brief visual

| Scene | Pola | Judul (≤6 kata, satu disorot) | Objek utama | Label | Kata kunci → aksi |
|---|---|---|---|---|---|
| Hook | visual | Dari **mana** air laut? | Bumi besar, tiga tetes air | 71% laut (di bawah Bumi, bukan di dalamnya) | "tujuh" → label; "air" → tetes; "itu" → tanda tanya emas |
| Explain1 | visual | Dulu, Bumi **membara** | Bumi lava (oranye, retakan emas), api, tetes dicoret | panas membara; air sulit bertahan | "panas" → Bumi lava; "lava" → api; "bertahan" → tetes dicoret |
| Explain2 | SebabAkibat | Batu bawa **air** | Asteroid berisi tetes → Bumi dengan tetes keluar | asteroid dan meteor; air keluar | "asteroid" → batu; "membawa" → tetes di dalam; "menabrak" → Bumi; "keluar" → tetes keluar |
| Explain3 | Langkah | Dari gunung jadi **laut** | Ikon gunung api, awan, awan hujan | uap keluar; jadi awan; hujan jadi laut | "uap", "awan", "hujan" → tiap butir |
| Payoff | visual | **Dua** sumber air laut | Bumi; asteroid dari kiri-atas; gunung api di bawah, panah emas | luar angkasa; dalam Bumi | "luar" → asteroid + panah; "dalam" → gunung api + panah |
| Cta | visual | Planet lain punya **laut**? | Ikon planet besar, tanda tanya emas, tetes | tulis di komentar | "planet" → planet; "laut" → tanda tanya; "komentar" → ajakan |

Kunci: tidak dipakai di video ini.

## Objek yang dibutuhkan
Objek kapur baru di `src/dark-chalk/objek/Laut.tsx` (menunggu tinjauan Ganjar): `BumiLava`, `Tetes`. Selain itu memakai `Bumi` dan `Asteroid` (`Purba.tsx`), `Silang` (`LubangHitam.tsx`), dan ikon `volcano`, `cloud`, `cloud-rain`, `flame`, `droplet`, `planet`.

## Fakta dan sumber (dicek 19 Nov 2026 lewat pencarian web)
| Klaim di narasi | Hasil cek | Sumber |
|---|---|---|
| Laut menutupi 71% permukaan Bumi | Sesuai: USGS menyebut 71%; NOAA menyebut "lebih dari 70 persen" (tidak ada halaman NOAA dengan angka tepat 71% yang ditemukan) | [USGS: Top 10 things you didn't know about the ocean](https://www.usgs.gov/programs/cmhrp/news/top-10-things-you-didnt-know-about-ocean), [NOAA: How much water is in the ocean?](https://oceanservice.noaa.gov/facts/oceanwater.html) |
| Dulu Bumi sangat panas dan penuh lava | Sesuai: awal Hadean Bumi sebagian besar berupa lautan magma. **Koreksi:** klaim lama "tidak ada air setetes pun" tidak didukung; air bisa ada (terlarut, uap, atau cair di bawah tekanan atmosfer tinggi) dan bukti zirkon menunjukkan air cair mungkin sudah ada sangat awal. Narasi diganti jadi "air cair sulit bertahan di permukaannya" | [Universe Today: Molten Hellscape to Habitable Planet](https://universetoday.com/154874/how-did-earth-go-from-molten-hellscape-to-habitable-planet), [Phys.org 2014: Early Earth less hellish](https://phys.org/news/2014-09-early-earth-hellish-previously-thought.pdf) |
| Asteroid dan meteor membawa air ke Bumi | Sesuai sebagai teori utama: rasio D/H air laut (~1,56 × 10⁻⁴) mirip kondrit karbon; komet cenderung D/H lebih tinggi. Kondrit enstatit juga dekat; perdebatan proporsi masih berlanjut, dan sebagian air mungkin dari nebula matahari. Narasi memakai "sebagian", jadi aman | [Universe Today: Water was already here before Earth formed](https://www.universetoday.com/154397/water-was-already-here-before-the-earth-formed/), [Eos](https://eos.org/?p=40147) |
| Gunung berapi mengeluarkan uap air dari dalam Bumi; uap jadi awan, hujan, lalu laut | Sesuai: USGS menyebut gas dari ventilasi gunung berapi selama ratusan juta tahun membentuk atmosfer dan lautan paling awal; gas vulkanik terutama uap air (sekitar 80%) dan CO₂. NOAA: setelah suhu atmosfer turun di bawah titik didih air (sekitar 3,8 miliar tahun lalu), hujan turun dan terkumpul di cekungan. NASA Astrobiology: uap air vulkanik yang mengembun, bersama air dari asteroid dan komet, menghasilkan lautan pertama. Catatan: porsi vulkanik vs asteroid belum disepakati dan air di mantel sendiri mungkin sudah ada sejak Bumi terbentuk (klaim 2020), Payoff sudah memakai "kemungkinan datang dari dua sumber" (diubah 19 Nov 2026 atas permintaan Ganjar); narasi sengaja tanpa angka porsi | [USGS: Volcanoes](https://pubs.usgs.gov/gip/volc/text.html), [NOAA Ocean Exploration](https://oceanexplorer.noaa.gov/explainers/intro/), [NASA Astrobiology: Earth right after it formed](https://astrobiology.nasa.gov/education/alp/earth-right-after-it-formed/), [LPI: Early atmosphere and oceans](https://www.lpi.usra.edu/education/timeline/gallery/slide_17.html) |

## Caption unggahan dan tag

Handle akun `@dipapantulis`.

**Caption (Instagram dan TikTok)**
```
Dari mana air laut berasal? 🌊

Laut menutupi sekitar 71% permukaan Bumi. Dulu Bumi panas dan tanpa air. Asteroid dan meteor membawa air di dalam batunya, dan gunung berapi mengeluarkan uap air dari dalam Bumi. Uap jadi awan, turun sebagai hujan, lalu terkumpul menjadi laut.

Menurutmu, apakah planet lain juga punya laut? Tulis di komentar 👇

Follow @dipapantulis, 1 pertanyaan 1 animasi tiap Selasa, Kamis & Sabtu ✏️
```

**Tag**
`#laut #asalairlaut #bumi #asteroid #gunungberapi #faktaunik #animasiedukasi #belajarsains #tahukahkamu #dipapantulis`

**Judul YouTube Shorts:** Dari mana air laut berasal? #shorts
**Tag YouTube (kolom tag):** asal air laut, dari mana air laut, laut, bumi, asteroid, gunung berapi, fakta unik, animasi edukasi

Catatan: TikTok: aktifkan label konten AI (VO ElevenLabs). Caption hanya mengulang narasi; perbarui bila naskah atau fakta berubah.

## Status
- [x] Naskah dan storyboard disetujui Ganjar (19 Nov 2026)
- [x] scenes.ts diisi
- [x] views/ ditulis (Dark Chalk)
- [ ] Ditinjau di Studio
- [x] VO dibuat (Aldo, 19 Nov 2026)
- [ ] Render
