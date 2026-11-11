# Kenapa Bumi punya laut?

Topik: planet · Suara: narator (Aldo) · Karakter di layar: Bumi, Tetes
Status naskah: **ditulis ulang untuk konsep narator (11 Nov 2026), menunggu persetujuan Ganjar.** Versi sebelumnya (Tako/Bumi berbicara sendiri) ada di riwayat git.

Struktur: Hook → Setup (tebakan umum yang keliru) → Twist (koreksi) → Penjelasan → Payoff → Ajakan. Perkiraan 46 detik; durasi akhir mengikuti audio.

Semua kalimat dibawakan narator. Tokoh di layar hanya bereaksi, tidak berbicara. Latar polos di semua scene.

| Scene | Narasi (narator) | Dur (dtk) | Visual dan aksi | SFX |
|---|---|---|---|---|
| Hook | "Laut menutupi tujuh puluh satu persen permukaan Bumi. Dari mana semua air itu?" | 4.8 | Latar polos. Teks layar: **Kenapa Bumi punya laut?** Angka 71% naik, Bumi berdenyut, penanda "laut". | pop |
| Setup | "Dulu, Bumi sangat panas dan penuh lava. Tidak ada air setetes pun." | 5 | Bumi dengan pijar panas. Tiga label bertahap: baru lahir, panas membara, tanpa setetes air. | – |
| Twist | "Banyak yang mengira air Bumi muncul sendiri." / "Ternyata, sebagian datang dari luar angkasa!" | 2.8 + 3 | Tebakan "Muncul sendiri dari dalam" dicoret + silang. Meteor melesat, centang + "Sebagian dari luar angkasa!". | wrong |
| Explain1 | "Miliaran tahun lalu, banyak asteroid dan meteor jatuh ke Bumi. Sebagian membawa air." | 6 | `Timeline` (lahir, hujan batu, laut). Meteor menghujani Bumi. | – |
| Explain2 | "Air itu tersimpan di dalam batunya. Saat batu itu menabrak Bumi, airnya keluar." | 6 | `BarCompare` kadar air (batu biasa vs asteroid karbon), lalu Tetes muncul. | – |
| Explain3 | "Gunung berapi juga mengeluarkan uap air dari dalam Bumi. Uap itu menjadi awan, lalu turun sebagai hujan. Air hujan terkumpul dan menjadi laut." | 9.5 | Empat langkah bernomor: gunung menyembur, uap naik, awan, hujan. Permukaan laut naik. | – |
| Payoff | "Jadi air laut punya dua asal: dari luar angkasa, dan dari dalam Bumi sendiri." | 5.5 | Meteor + gunung api bertemu di Bumi. Teks layar: **Laut = luar + dalam!** | tada |
| Cta | "Menurutmu, apakah planet lain juga punya laut? Tulis di komentar!" | 3.8 | Teks layar: **Planet lain punya laut?** Bumi melambai, kartu ajakan komentar. | – |

## Objek & aset yang dipakai

- **Latar:** `polos` di semua scene
- **Karakter:** `CastCharacter` (bumi, tetes)
- **Props:** `Meteor`, `GunungApi`, `AwanHujan`, `CheckMark`, `CrossMark`
- **Explainers:** `HookText`, `Counter`, `Callout`, `Timeline`, `BarCompare`, `LabelPill`, `beat`

---

## Fakta & sumber (untuk verifikasi sebelum tayang)

0. Perlu diverifikasi sebelum tayang: "71% permukaan Bumi tertutup laut" (umum dipakai) dan kadar air asteroid karbon "kira-kira 10%" (batu biasa "kurang dari 1%"; angka di `BarCompare` hanya ilustrasi).
1. Teori utama asal air Bumi: kiriman asteroid/komet karbonaseus (Chondrit-C), dikuatkan rasio D/H air laut.
2. Sumber sekunder: degassing vulkanik (uap air dari mantel) menyumbang sebagian.
3. Perdebatan ilmiah masih berlanjut (2024); video menyajikan konsensus dominan.
4. Sumber referensi: NASA Astrobiology, *Nature* (Hartmann & Davis, 1975 versi modern); verifikasi mandiri Ganjar sebelum tayang.

---

## Status

- [ ] Naskah disetujui Ganjar
- [x] scenes.ts diisi
- [x] views/ ditulis
- [ ] Ditinjau di Studio
- [ ] VO dibuat (tunggu persetujuan Ganjar)
- [ ] Render
