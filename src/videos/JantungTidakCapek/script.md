# Kenapa jantung tidak pernah capek?

Topik: tubuh · Suara: narator (Aldo) · Tema: Dark Chalk, tanpa tokoh di layar
Status naskah: **ditulis ulang ke format baru (13 Nov 2026), disetujui Ganjar. VO Aldo (eleven_v4) dibuat 13 Nov 2026; storyboard menunggu tinjauan.** Versi lama (Setup + Twist, stickman, latar kertas) ada di riwayat git.

Struktur: Hook (pertanyaan 5W1H) → Penjelasan ×3 → Payoff → Cta. Perkiraan 37 detik (±85 kata); durasi akhir mengikuti audio.

Jawaban dalam satu kalimat: jantung tidak capek karena ia bekerja sebentar lalu langsung istirahat, punya banyak pabrik energi, dan dialiri darahnya sendiri.

## Naskah

| Scene | Narasi (narator) | Dur (dtk) | SFX |
|---|---|---|---|
| Hook | "Kenapa jantungmu tidak pernah capek?" | 3 | heartbeat |
| Explain1 | "Jantung bekerja sebentar, lalu langsung istirahat. Satu detak lamanya sekitar satu detik, dan istirahatnya lebih lama." | 8 | – |
| Explain2 | "Otot jantung juga punya banyak mitokondria, yaitu pabrik energi kecil di dalam sel. Jumlahnya jauh lebih banyak daripada di otot lengan." | 9 | – |
| Explain3 | "Jantung punya pembuluh darah sendiri. Jadi makanan dan oksigennya terus dikirim." | 5.5 | – |
| Payoff | "Jadi jantung tidak capek karena pintar istirahat. Ia beristirahat sebentar di antara tiap detak." | 6.5 | tada |
| Cta | "Menurutmu, bagian tubuh mana lagi yang tidak pernah capek?" | 4 | – |

## Brief visual

Pola: `visual` (Hook, Payoff, Cta) atau pola kapur (Explain). Tanpa tokoh, tanpa Pembawa. Semua dari `src/dark-chalk`.

| Scene | Pola | Judul (≤6 kata) | Objek utama | Label | Kata kunci → aksi |
|---|---|---|---|---|
| Hook | visual | Kenapa jantung tidak **capek**? | Ikon `heart` besar berdetak (kapur merah muda), garis EKG kapur di bawahnya | – | "jantungmu" → hati muncul dan mulai berdetak; "capek" → hati berhenti sesaat lalu lanjut |
| Explain1 | Bandingkan (baris) | **Istirahat** lebih lama | Dua batang kapur: "Kerja" pendek vs "Istirahat" panjang, `Stopwatch`/jam di samping | Kerja; Istirahat | "bekerja" → batang pendek; "istirahat" → batang panjang menyala; "lebih lama" → sorot batang panjang |
| Explain2 | Bandingkan (kolom) | Otot jantung **penuh** pabrik energi | Sel otot jantung (banyak `Mitochondria`) vs sel otot lengan (sedikit) | Otot jantung; Otot lengan; Mitokondria | "mitokondria" → label dan satu mitokondria disorot; "lebih banyak" → sel jantung penuh, sel lengan hanya sedikit |
| Explain3 | Sorot | Jantung punya **pembuluh** sendiri | Jantung besar dibungkus `CoronaryVessels`, titik darah mengalir | Pembuluh sendiri; Makanan; Oksigen | "pembuluh darah" → pembuluh digambar; "makanan" → label; "oksigen" → label |
| Payoff | visual | Jago **istirahat** | Hati kecil berdetak dengan jeda panjang di antara detak (garis EKG datar di sela) | – | "istirahat" → jeda datar disorot; "tiap detak" → detak berikutnya |
| Cta | visual | Bagian tubuh mana **lagi**? | Ikon `brain`, `eye`, `bone` bergantian muncul, tanda tanya kapur | – | "bagian tubuh" → tiga ikon muncul; "capek" → tanda tanya |

Tidak ada scene `Kunci` (tidak ada satu poin yang jauh lebih penting dari lainnya).

## Objek
- Ada di `src/dark-chalk/ikon`: `heart`, `brain`, `eye`, `bone`.
- Ada di `src/props/body/` (gaya edumotion, bukan kapur): `Stopwatch`, `EkgLine`, `Mitochondria`, `MuscleCell`, `CoronaryVessels`. Karena tema kapur, view menggambar ulang versi garis kapur dengan `Garis`/`Ikon`; tidak memakai props berwarna.
- Komponen: `Teks`, `Label`, `Kanvas`, pola `Bandingkan`/`Sorot`, `Caption`.

## Fakta dan sumber
- Otot jantung sekitar 30–35% mitokondria; otot rangka rata-rata 1–2% ([A Moment of Science](https://www.ipm.org/amomentofscience/why-doesnt-your-heart-get-tired/)). Angka otot rangka berbeda antar sumber, karena itu narasi memakai "jauh lebih banyak".
- Jantung berdetak 60–80 kali per menit saat istirahat; fase istirahat (diastole) lebih panjang dari fase kerja ([Texas Heart Institute](https://www.texasheart.org/heart-health/heart-information-center/topics/the-heartbeat/)). Narasi tidak lagi menyebut "seratus ribu kali sehari" (hitungan turunan, bukan inti jawaban).
- Arteri koroner kiri dan kanan keluar dari aorta, membungkus jantung, dan mengalirkan darah beroksigen ke otot jantung; fungsi utamanya memasok jantung sendiri ([Cleveland Clinic: Coronary Arteries](https://my.clevelandclinic.org/health/body/22973-coronary-arteries)). Diverifikasi 13 Nov 2026 lewat pencarian web (halaman edukasi pasien, bukan pedoman klinis). Narasi dan gambar (dua arteri utama dari aorta, cabang kecil) sesuai. "Makanan" di narasi = nutrisi (mis. glukosa, asam lemak) yang ikut terbawa darah; sumber di atas menekankan oksigen, jadi bila ingin ketat, kata "makanan" bisa diganti "nutrisi" (akan membuat VO baris itu usang).
- "Istirahatnya lebih lama" berlaku saat tubuh istirahat; saat olahraga jeda memendek.

## Catatan format
- Hook 5 kata (teks layar 4 kata), pertanyaan "kenapa".
- Satu gagasan per scene Explain. Kalimat terpanjang 17 kata di Explain2 (kalimat kedua 12 kata; kalimat pertama 15 kata).
