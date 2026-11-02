# Awan kok nggak jatuh?

Topik: cuaca · Pemandu: Tako (suara Aldo) · Karakter: Awan, Tetes
Status naskah: **disetujui Ganjar (2 Nov 2026)**

Struktur: Hook → Setup (tebakan Tako) → Twist → Penjelasan ×3 → Payoff → Ajakan. Perkiraan 45 detik; durasi akhir mengikuti audio.

| Waktu | Scene | Narasi (Tako) | Visual dan aksi |
|---|---|---|---|
| 0–4 dtk | Hook | "Awan beratnya seratus gajah. Kok nggak jatuh?" | Teks layar: **Awan seberat 100 gajah?** Awan besar melayang di langit, bayangan siluet gajah-gajah kecil bertambah di sampingnya (Counter naik). Tako mendongak. |
| 4–11 dtk | Setup | "Aku tahu! Awan itu ringan, kayak kapas. Makanya dia ngambang di langit!" | Tako percaya diri menunjuk. Awan digambar seperti kapas, Tako menekan awan dan awan memantul empuk. |
| 11–15 dtk | Twist | "Hah? Salah?! Awan itu berat banget?!" | Tako kaget, tanda tanya muncul. CorrectionCard: tebakan "ringan seperti kapas" dicoret. Timbangan menekan ke bawah, angka ±500 ton. |
| 15–24 dtk | Explain1 | "Awan itu kumpulan tetes air kecil sekali. Satu tetesnya jauh lebih tipis dari rambut. Jumlahnya jutaan, jadi totalnya berat." | Zoom ke dalam awan: banyak Tetes mungil. Perbandingan ukuran tetes awan dan rambut. Counter jumlah tetes naik, lalu mundur ke awan utuh dengan label berat. |
| 24–33 dtk | Explain2 | "Tetes sekecil itu jatuhnya pelan sekali. Udara hangat dari tanah terus mendorongnya naik. Jadi dia melayang." | Panah udara naik dari tanah ke awan. Tetes mungil naik-turun tipis di antara panah. Garis jatuh pelan vs batu jatuh cepat sebagai pembanding. |
| 33–40 dtk | Explain3 | "Kalau tetesnya saling nempel dan jadi besar, dorongan udara nggak sanggup lagi. Barulah dia jatuh sebagai hujan." | Beberapa Tetes menggabung jadi besar. Panah udara membengkok, tetes besar jatuh. AwanHujan menurunkan hujan. |
| 40–45 dtk | Payoff | "Jadi awan nggak ringan. Dia berat, tapi tetesnya terlalu kecil untuk jatuh!" | Tako dan Awan berdampingan. Teks layar (sorotan): **terlalu kecil untuk jatuh**. |
| 45–49 dtk | Cta | "Menurutmu, kenapa awan ada yang putih dan ada yang gelap?" | Tako mengangkat tangan, tanda tanya. Mengundang komentar. |

## Objek
- Ada: Tako, Awan, Tetes (cast). Props `AwanHujan`, `SiklusAir`, `MolekulUdara`, `LapisanAtmosfer` (`src/props/cuaca/`). Props umum `CheckMark`, `CrossMark`, `QuestionMark`.
- Baru dibuat dan tercatat di registry: `Timbangan` (`src/props/umum/`), `SiluetGajah` (`src/props/umum/`), `PanahUdara` (`src/props/cuaca/`).
- Pembanding rambut vs tetes memakai `BarCompare` (tanpa props `Rambut`).
- Komponen: `Counter`, `HookText`, `CorrectionCard`, `LabelPill`, `BarCompare`, `Caption`.

## Fakta dan sumber (verifikasi sebelum tayang)
- Awan kumulus biasa beratnya kira-kira 500 ton (sekitar 1,1 juta pon); perkiraan umum dari ilmuwan atmosfer NCAR (Peggy LeMone). Gajah Afrika dewasa rata-rata sekitar 4–6 ton, jadi "seratus gajah" = pembulatan 500 ton / 5 ton. Perlu dicek ulang dengan sumber primer.
- Tetes awan berdiameter sekitar 0,01 mm (10 mikron), jauh lebih tipis dari rambut (sekitar 0,07 mm). Kecepatan jatuhnya hanya sekitar 1 cm per detik, sehingga mudah tertahan arus udara naik.
- Tetes hujan jauh lebih besar (sekitar 1–2 mm) dan jatuh sekitar 4–9 m/detik. Hujan turun setelah tetes awan bertumbukan dan menyatu (koalesensi).
- "Awan di langit tampak ringan" adalah tebakan yang wajar bagi penonton; Tako menebak keliru, itu ciri akun.
- Aman: video tidak menjelaskan awan putih vs gelap (itu pertanyaan Cta; bisa jadi video lanjutan).

## Catatan
- Catatan nada: kalimat pendek, "aku" untuk Tako, "kamu" untuk penonton.
- Hook maksimal 6 kata: "Awan seberat 100 gajah?" (4 kata).
- Satu sorotan (`highlight`) per adegan; sorotan terpusat di Payoff.
