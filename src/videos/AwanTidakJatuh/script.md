# Kenapa awan tidak jatuh?

Topik: cuaca · Suara: narator (Aldo) · Karakter di layar: Ganjar (pembawa), Awan, Tetes
Status naskah: **ditulis ulang untuk konsep narator (11 Nov 2026), menunggu persetujuan Ganjar.** Versi sebelumnya (Tako/Bumi berbicara sendiri) ada di riwayat git.

Struktur: Hook → Setup (tebakan umum yang keliru) → Twist (koreksi) → Penjelasan → Payoff → Ajakan. Perkiraan 49 detik; durasi akhir mengikuti audio.

Semua kalimat dibawakan narator. Tokoh di layar hanya bereaksi, tidak berbicara. Latar polos di semua scene.

| Scene | Narasi (narator) | Dur (dtk) | Visual dan aksi | SFX |
|---|---|---|---|---|
| Hook | "Satu awan beratnya seperti seratus gajah. Kok tidak jatuh?" | 4 | Latar polos. Teks layar: **Awan seberat 100 gajah?** Counter 100 naik. Awan dan Ganjar (pembawa) berdiri berdampingan. | pop |
| Setup | "Banyak orang mengira awan itu ringan seperti kapas. Makanya ia bisa melayang." | 6 | Ganjar (pembawa) berpikir (tidak berbicara). Label "ringan seperti kapas?". Awan menggeleng menjelang akhir. | – |
| Twist | "Ternyata keliru. Awan itu berat sekali!" | 3.2 | Kartu koreksi: "Ringan seperti kapas" dicoret, jawaban "Berat ±500 ton". Timbangan turun, Ganjar (pembawa) kaget. | wrong |
| Explain1 | "Awan adalah kumpulan tetes air yang sangat kecil. Satu tetes jauh lebih tipis dari sehelai rambut. Tapi jumlahnya sangat banyak, jadi totalnya berat." | 9 | `BarCompare` lebar rambut vs tetes awan, lalu sembilan Tetes muncul: "Jutaan tetes = berat". | – |
| Explain2 | "Tetes sekecil itu jatuhnya sangat pelan. Udara hangat dari bawah terus mendorongnya ke atas. Akibatnya, tetes itu melayang." | 8 | Panah udara naik, Tetes naik-turun pelan di bawah Awan. Label "udara hangat" dan "melayang". | – |
| Explain3 | "Kalau tetes-tetes itu bergabung, ukurannya jadi besar dan berat. Udara tidak kuat lagi menahannya. Tetes itu pun jatuh sebagai hujan." | 8.5 | Tiga Tetes bergabung jadi satu yang besar, lalu awan menurunkan hujan. | – |
| Payoff | "Jadi awan itu berat. Ia tidak jatuh karena tetes airnya terlalu kecil." | 6 | Ganjar (pembawa) dan Awan berdampingan. Teks layar (sorotan): **Terlalu kecil untuk jatuh**. | tada |
| Cta | "Menurutmu, kenapa ada awan putih dan ada awan gelap?" | 4.2 | Teks layar: **Awan putih atau gelap?** Ganjar (pembawa) berpikir. | – |

## Objek
- Ada: Ganjar (pembawa), Awan, Tetes (cast). Props `AwanHujan`, `SiklusAir`, `MolekulUdara`, `LapisanAtmosfer` (`src/props/cuaca/`). Props umum `CheckMark`, `CrossMark`, `QuestionMark`.
- Baru dibuat dan tercatat di registry: `Timbangan` (`src/props/umum/`), `SiluetGajah` (`src/props/umum/`), `PanahUdara` (`src/props/cuaca/`).
- Pembanding rambut vs tetes memakai `BarCompare` (tanpa props `Rambut`).
- Komponen: `Counter`, `HookText`, `CorrectionCard`, `LabelPill`, `BarCompare`, `Caption`.

## Fakta dan sumber (verifikasi sebelum tayang)
- Awan kumulus biasa beratnya kira-kira 500 ton (sekitar 1,1 juta pon); perkiraan umum dari ilmuwan atmosfer NCAR (Peggy LeMone). Gajah Afrika dewasa rata-rata sekitar 4–6 ton, jadi "seratus gajah" = pembulatan 500 ton / 5 ton. Perlu dicek ulang dengan sumber primer.
- Tetes awan berdiameter sekitar 0,01 mm (10 mikron), jauh lebih tipis dari rambut (sekitar 0,07 mm). Kecepatan jatuhnya hanya sekitar 1 cm per detik, sehingga mudah tertahan arus udara naik.
- Tetes hujan jauh lebih besar (sekitar 1–2 mm) dan jatuh sekitar 4–9 m/detik. Hujan turun setelah tetes awan bertumbukan dan menyatu (koalesensi).
- "Awan di langit tampak ringan" adalah tebakan yang wajar bagi penonton; narator menyebutnya sebagai tebakan umum, lalu mengoreksinya.
- Aman: video tidak menjelaskan awan putih vs gelap (itu pertanyaan Cta; bisa jadi video lanjutan).

## Catatan
- Catatan nada: narator, kalimat pendek, menyapa penonton "kamu".
- Hook maksimal 6 kata: "Awan seberat 100 gajah?" (4 kata).
- Satu sorotan (`highlight`) per adegan; sorotan terpusat di Payoff.
