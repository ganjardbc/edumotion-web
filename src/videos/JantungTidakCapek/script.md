# Kok jantung tidak capek?

Topik: tubuh · Suara: narator (Aldo) · Karakter di layar: Tako, Jantung
Status naskah: **ditulis ulang untuk konsep narator (11 Nov 2026), menunggu persetujuan Ganjar.** Versi sebelumnya (Tako/Bumi berbicara sendiri) ada di riwayat git.

Struktur: Hook → Setup (tebakan umum yang keliru) → Twist (koreksi) → Penjelasan → Payoff → Ajakan. Perkiraan 42 detik; durasi akhir mengikuti audio.

Semua kalimat dibawakan narator. Tokoh di layar hanya bereaksi, tidak berbicara. Latar polos di semua scene.

| Scene | Narasi (narator) | Dur (dtk) | Visual dan aksi | SFX |
|---|---|---|---|---|
| Hook | "Jantungmu berdetak seratus ribu kali sehari. Kok tidak capek?" | 3.8 | Latar polos. Teks layar: **Kok jantung tidak capek?** Counter 100.000 naik. Jantung berdetak, Tako menatap heran. | heartbeat |
| Setup | "Banyak orang mengira jantung itu sangat kuat dan tidak pernah istirahat. Seperti mesin yang menyala terus." | 7 | Tako berpikir (tidak berbicara). Jantung menggeleng pelan menjelang akhir. | – |
| Twist | "Ternyata itu keliru!" | 1.6 | Tako kaget, Jantung melambai. Kamera mendekat sedikit. | wrong |
| Explain1 | "Satu detak lamanya sekitar satu detik. Jantung bekerja sebentar, lalu istirahat lebih lama." | 5.5 | Bar "Kerja" pendek dan "Istirahat" lebih panjang, stopwatch, garis EKG. Jantung bersantai. | – |
| Explain2 | "Otot jantung juga punya banyak mitokondria, yaitu pabrik energi kecil di dalam sel. Jumlahnya jauh lebih banyak daripada di otot lengan." | 8.5 | Dua sel otot: jantung penuh pabrik energi, lengan hanya sedikit. | – |
| Explain3 | "Jantung juga punya pembuluh darah sendiri. Jadi makanan dan oksigennya terus dikirim." | 5 | Pembuluh darah membungkus jantung, darah mengalir. | – |
| Payoff | "Jadi jantung tidak capek karena pintar istirahat. Ia beristirahat sebentar di antara tiap detak." | 7 | Tako dan Jantung berdampingan. Teks layar (sorotan): **jago istirahat**. | tada |
| Cta | "Menurutmu, bagian tubuh mana lagi yang tidak pernah capek?" | 4 | Teks layar: **Bagian tubuh mana lagi?** Tako berpikir. | – |

## Objek
- Ada: Tako, Jantung (cast).
- Dibuat di `src/props/body/`: `Stopwatch`, `EkgLine`, `Mitochondria`, `MuscleCell`, `CoronaryVessels`.
- Komponen: `Counter`, `HookText`, `PhaseBar`, `Caption`.

## Fakta dan sumber
- Otot jantung sekitar 30–35% mitokondria; otot rangka rata-rata 1–2% ([A Moment of Science](https://www.ipm.org/amomentofscience/why-doesnt-your-heart-get-tired/)). Angka otot rangka berbeda antar sumber, karena itu narasi memakai "jauh lebih sedikit".
- Jantung berdetak 60–80 kali per menit saat istirahat; fase istirahat (diastole) lebih panjang dari fase kerja ([Texas Heart Institute](https://www.texasheart.org/heart-health/heart-information-center/topics/the-heartbeat/)). "Seratus ribu per hari" adalah hitungan dari 60–80 kali per menit (sekitar 86–115 ribu).
- Belum bersumber: klaim jalur darah sendiri (arteri koroner). Perlu diverifikasi sebelum publikasi.
- "Istirahatnya lebih lama" berlaku saat tubuh istirahat; saat olahraga jeda memendek.
