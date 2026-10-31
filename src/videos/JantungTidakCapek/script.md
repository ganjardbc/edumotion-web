# Kok jantung nggak capek?

Topik: tubuh · Pemandu: Tako (suara Aldo/Zulfa) · Karakter: Jantung
Status naskah: **disetujui Ganjar (31 Okt 2026)**

Struktur: Hook → Setup (tebakan Tako) → Twist → Penjelasan ×3 → Payoff → Ajakan. Perkiraan 45–50 detik; durasi akhir mengikuti audio.

| Waktu | Scene | Narasi (Tako) | Visual dan aksi |
|---|---|---|---|
| 0–4 dtk | Hook | "Jantungmu berdetak seratus ribu kali sehari. Kok nggak capek?" | Counter 100.000 naik cepat. Teks layar: **Kok jantung nggak capek?** Jantung berdetak di tengah, Tako menatap heran. |
| 4–12 dtk | Setup | "Aku tahu! Soalnya jantung itu super kuat, dan nggak pernah istirahat. Kayak mesin yang nyala terus!" | Tako percaya diri, menunjuk. Jantung menoleh dan mengangkat tangan (isyarat "stop"). |
| 12–16 dtk | Twist | "Hah? Salah?!" | Tako kaget lalu bingung, tanda tanya muncul. Zoom cepat ke jantung. |
| 16–24 dtk | Explain1 | "Satu detak cuma sekitar satu detik. Kerjanya sebentar, istirahatnya malah lebih lama." | Garis EKG dan stopwatch. Dalam satu detak, bar "kerja" pendek dan bar "istirahat" lebih panjang. Jantung bersantai (Zz). |
| 24–34 dtk | Explain2 | "Dan otot jantung punya banyak mitokondria, pabrik energi kecil. Sepertiga isi selnya! Otot lengan jauh lebih sedikit." | Perbandingan dua sel: otot jantung penuh pabrik kecil, otot lengan hanya sedikit. |
| 34–40 dtk | Explain3 | "Dia juga punya jalur darah sendiri, jadi bahan bakarnya nggak pernah habis." | Pembuluh koroner membungkus jantung, darah mengalir. |
| 40–46 dtk | Payoff | "Jadi jantung nggak capek bukan karena nggak pernah istirahat, tapi karena jago istirahat di sela tiap detak!" | Tako dan Jantung berdampingan. Teks layar (sorotan): **jago istirahat**. |
| 46–50 dtk | Cta | "Bagian tubuh mana lagi yang menurutmu nggak pernah capek?" | Tako mengangkat tangan, tanda tanya. Mengundang komentar. |

## Objek
- Ada: Tako, Jantung (cast).
- Dibuat di `src/props/body/`: `Stopwatch`, `EkgLine`, `Mitochondria`, `MuscleCell`, `CoronaryVessels`.
- Komponen: `Counter`, `HookText`, `PhaseBar`, `Caption`.

## Fakta dan sumber
- Otot jantung sekitar 30–35% mitokondria; otot rangka rata-rata 1–2% ([A Moment of Science](https://www.ipm.org/amomentofscience/why-doesnt-your-heart-get-tired/)). Angka otot rangka berbeda antar sumber, karena itu narasi memakai "jauh lebih sedikit".
- Jantung berdetak 60–80 kali per menit saat istirahat; fase istirahat (diastole) lebih panjang dari fase kerja ([Texas Heart Institute](https://www.texasheart.org/heart-health/heart-information-center/topics/the-heartbeat/)). "Seratus ribu per hari" adalah hitungan dari 60–80 kali per menit (sekitar 86–115 ribu).
- Belum bersumber: klaim jalur darah sendiri (arteri koroner). Perlu diverifikasi sebelum publikasi.
- "Istirahatnya lebih lama" berlaku saat tubuh istirahat; saat olahraga jeda memendek.
