# BumiPunyaLaut — Script

**Topik:** Kenapa bumi punya laut?
**Pilar:** planet & tata surya
**Karakter:** Bumi (narator, bicara orang pertama "aku" kepada penonton "kamu"), Tetes (cast)
**Suara:** Aldo (pilihan akhir Ganjar)
**Durasi estimasi:** ±44 detik

---

## Struktur cerita

Hook → Setup → Twist → Explain1 → Explain2 → Explain3 → Payoff → Cta

---

## Naskah + tabel shot

Bumi menjelaskan sendiri kepada penonton; tidak ada lawan bicara. Twist = tebakan *penonton* ("kamu kira...") yang dikoreksi Bumi.
Acuan tata visual: JantungTidakCapek (satu objek penjelas besar per scene, backdrop polos/papan diagram, angka naik di Hook, `beat()`).

| Scene    | Segment | Siapa | Teks VO | Dur (s) | Visual / Latar |
|----------|---------|-------|---------|---------|----------------|
| Hook     | hook    | bumi  | Laut menutupi tujuh puluh satu persen tubuhku. Kenapa bisa? | 4.0 | Antariksa, judul "Kenapa aku punya laut?", angka 71% naik, Bumi berdenyut, penanda "laut" |
| Setup    | setup   | bumi  | Dulu aku panas membara, penuh lava. Tidak ada setetes air pun. | 5.0 | Antariksa, semburat panas, tiga label bertahap |
| Twist    | twist   | bumi  | Kamu kira airku muncul sendiri? / Ternyata sebagian datang dari luar angkasa! | 2.0 + 3.0 | Tebakan dicoret + silang merah; meteor melesat, centang + jawaban |
| Explain1 | explain | bumi  | Miliaran tahun lalu, asteroid dan meteor menghujaniku. Banyak yang membawa air. | 6.0 | Papan diagram, `Timeline` (lahir, hujan batu, laut), meteor menghujani Bumi |
| Explain2 | explain | bumi  | Batu-batu itu menyimpan air di dalam mineralnya. Saat menabrakku, airnya terlepas. | 6.5 | Papan diagram, `BarCompare` kadar air (batu biasa vs asteroid karbon), lalu Tetes muncul |
| Explain3 | explain | bumi  | Dari dalam, gunung berapi menyemburkan uap. Uap jadi awan, turun sebagai hujan, lalu mengisi cekungan jadi laut. | 8.5 | Papan diagram, jalur 4 langkah (gunung, uap, awan, hujan), permukaan laut naik |
| Payoff   | payoff  | bumi  | Jadi lautku campuran: kiriman dari luar angkasa, dan uap dari dalam diriku! | 5.5 | Laut sore, meteor + gunung api bertemu di Bumi |
| Cta      | cta     | bumi  | Menurutmu, planet lain punya laut juga? Tulis di komentar! | 3.5 | Antariksa, Bumi melambai |

Total estimasi: ±44 detik (sebelumnya ±56).

---

## Objek & aset yang dipakai

- **Latar:** `antariksa`, `laut`, `papanDiagram`
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
- [ ] scenes.ts diisi
- [ ] views/ ditulis
- [ ] Ditinjau di Studio
- [ ] VO dibuat (tunggu persetujuan Ganjar)
- [ ] Render
