# Kenapa awan tidak jatuh?

Topik: cuaca · Tema: dark-chalk · Suara: narator (Aldo) · Tokoh di layar: tidak ada (semua visual gambar kapur beranimasi)
Status: **dipindah ke tema Dark Chalk dan format baru (19 Nov 2026); storyboard disetujui Ganjar (19 Nov 2026); fakta dicek 19 Nov 2026.** Hook diubah dari "beratnya seperti" jadi "bisa seberat" karena 500 ton adalah perkiraan awan kumulus tipikal. Setup dan Twist dibuang (format lama); narasi Explain1–3, Payoff, dan Cta tidak berubah; gajah kapur ditambah di Hook. Versi sebelumnya (kertas berpetak, pembawa Ganjar) ada di riwayat git.

Pertanyaan Hook (5W1H): **Kenapa** awan tidak jatuh?
Jawaban satu kalimat (Payoff): Awan berat, tapi tidak jatuh karena tetes airnya terlalu kecil.

Struktur: Hook → Explain1–3 → Payoff → Cta. Perkiraan 42 detik; durasi akhir mengikuti audio.

## Naskah

| Scene | Narasi (narator) | Dur (dtk) | SFX |
|---|---|---|---|
| Hook | "Satu awan bisa seberat seratus gajah. Kok tidak jatuh?" | 4 | pop |
| Explain1 | "Awan adalah kumpulan tetes air yang sangat kecil. Satu tetes jauh lebih tipis dari sehelai rambut. Tapi jumlahnya sangat banyak, jadi totalnya berat." | 9 | – |
| Explain2 | "Tetes sekecil itu jatuhnya sangat pelan. Udara hangat dari bawah terus mendorongnya ke atas. Akibatnya, tetes itu melayang." | 8 | – |
| Explain3 | "Kalau tetes-tetes itu bergabung, ukurannya jadi besar dan berat. Udara tidak kuat lagi menahannya. Tetes itu pun jatuh sebagai hujan." | 8.5 | – |
| Payoff | "Jadi awan itu berat. Ia tidak jatuh karena tetes airnya terlalu kecil." | 6 | tada |
| Cta | "Menurutmu, kenapa ada awan putih dan ada awan gelap?" | 4.2 | – |

## Brief visual

| Scene | Pola | Judul (≤6 kata, satu disorot) | Objek utama | Label | Kata kunci → aksi |
|---|---|---|---|---|---|
| Hook | visual | Awan seberat **100** gajah? | Awan besar, panah turun | × 100; ? | "awan" → awan; "seratus" → gajah dan × 100; "jatuh" → panah + tanda tanya emas |
| Explain1 | Fase 1: Bandingkan; Fase 2: visual | Tetes awan sangat **kecil** / Jutaan tetes, jadi **berat** | Tetes kecil vs rambut; awan berisi banyak tetes | tetes awan; sehelai rambut; jutaan tetes; total sangat berat | "tetes" → tetes; "rambut" → rambut; "Tapi jumlahnya" → ganti fase; "banyak" → tetes memenuhi awan; "berat" → label |
| Explain2 | Fase 1: visual; Fase 2: SebabAkibat | Tetes kecil jatuh **pelan** / Udara **menahan** tetes | Tetes + panah turun kecil; tiga panah oranye naik → tiga tetes melayang | jatuh sangat pelan; udara hangat naik; tetes melayang | "pelan" → panah; "hangat" → ganti fase, panah naik; "melayang" → tetes bergoyang |
| Explain3 | Langkah | Dari melayang jadi **hujan** | Tiga tetes, satu tetes besar, ikon awan hujan | tetes bergabung; jadi besar, berat; jatuh jadi hujan | "bergabung", "besar", "hujan" → tiap butir |
| Payoff | visual | Terlalu **kecil** untuk jatuh | Awan besar dengan empat tetes kecil melayang | awan itu berat; tetesnya kecil | "berat" → awan; "terlalu" → judul; "kecil" → tetes |
| Cta | visual | Awan putih atau **gelap**? | Ikon awan dan awan badai, tanda tanya emas | putih; gelap; ? | "kenapa" → ?; "putih" → awan; "gelap" → awan badai |

Kunci: tidak dipakai di video ini.

## Objek yang dibutuhkan
Objek kapur baru di `src/dark-chalk/objek/Awan.tsx` (menunggu tinjauan Ganjar): `AwanKapur`, `TetesMelayang`, `Rambut`, `Gajah`. Selain itu memakai `Tetes` (`Laut.tsx`), `Panah` (`Terbang.tsx`), dan ikon `cloud`, `cloud-storm`, `cloud-rain`. `Gajah` (kapur, samping) ditambah di `Awan.tsx` untuk Hook ("× 100").

## Fakta dan sumber (dicek 19 Nov 2026 lewat pencarian web)
| Klaim | Hasil cek | Sumber |
|---|---|---|
| Satu awan bisa seberat ~100 gajah (±500 ton) | Sesuai sebagai **perkiraan**: Peggy LeMone (NCAR) menghitung awan kumulus tipikal sekitar 550 ton (499 metrik), dibandingkan dengan ±100 gajah. Dasarnya kerapatan air ±0,5 g/m³ dan awan sekitar 1 km per sisi, bukan hasil timbang. Karena itu Hook memakai "bisa seberat", bukan "beratnya". | [Live Science](https://livescience.com/how-much-does-a-cloud-weigh), [Mental Floss](https://www.mentalfloss.com/article/49786/how-much-does-cloud-weigh), [ZME Science](https://www.zmescience.com/science/how-much-do-clouds-weigh) |
| Gajah rata-rata ±5 ton (dasar "100 gajah") | Kasar: gajah Afrika dewasa 2,5–7 ton (betina ±3, jantan ±6). 500 ton / 100 = 5 ton per gajah, masuk rentang. | [National Geographic](https://www.nationalgeographic.com/animals/mammals/a/african-elephant/) |
| Tetes awan jauh lebih tipis dari rambut | Sesuai: tetes awan 10–20 mikron, rambut manusia sekitar 70–100 mikron. | [Live Science](https://livescience.com/planet-earth/why-do-clouds-float) |
| Tetes jatuh sangat pelan | Sesuai, tapi **angka lama janggal**: "10 mikron dan 1 cm/detik" tidak cocok. Hukum Stokes: 1 cm/detik untuk tetes ±20 mikron; tetes 10 mikron sekitar 0,3 cm/detik. Narasi tidak menyebut angka, jadi aman; jangan tambahkan angka tanpa memilih satu ukuran. | [Stull, Practical Meteorology](https://geo.libretexts.org/Bookshelves/Meteorology_and_Climate_Science/Practical_Meteorology_(Stull)/07%3A_Precipitation_Processes/7.06%3A_Collision_and_Collection) |
| Tetes bergabung jadi besar lalu jatuh sebagai hujan | Sesuai (tumbukan dan penyatuan, koalesensi). Tetes hujan ±1–2 mm. | Stull (di atas) |
| Udara hangat dari bawah mendorong tetes ke atas | Sesuai sebagai penyederhanaan (arus naik/updraft). Tetes mengembun di arus naik, jadi awan terus terbentuk. | Stull (di atas) |
| Aman: video tidak menjelaskan awan putih vs gelap | Itu pertanyaan Cta; bisa jadi video lanjutan. | – |

## Caption unggahan dan tag

Handle akun `@dipapantulis`.

**Caption (Instagram dan TikTok)**
```
Kenapa awan tidak jatuh? ☁️

Satu awan bisa seberat ratusan ton. Tapi awan itu terdiri dari tetes air yang sangat kecil, jauh lebih tipis dari sehelai rambut. Tetes sekecil itu jatuh sangat pelan dan tertahan udara hangat yang naik dari bawah. Kalau tetes-tetes itu bergabung jadi besar dan berat, barulah jatuh sebagai hujan.

Menurutmu, kenapa ada awan putih dan ada awan gelap? Tulis di komentar 👇

Follow @dipapantulis, 1 pertanyaan 1 animasi tiap Selasa, Kamis & Sabtu ✏️
```

**Tag**
`#awan #cuaca #hujan #faktaunik #animasiedukasi #belajarsains #tahukahkamu #sainsdasar #dipapantulis`

**Judul YouTube Shorts:** Kenapa awan tidak jatuh? #shorts
**Tag YouTube (kolom tag):** kenapa awan tidak jatuh, awan, hujan, cuaca, fakta unik, animasi edukasi

Catatan: TikTok: aktifkan label konten AI (VO ElevenLabs). Caption hanya mengulang narasi; perbarui bila naskah atau fakta berubah.

## Status
- [x] Naskah dan storyboard disetujui Ganjar (19 Nov 2026)
- [x] scenes.ts diisi
- [x] views/ ditulis (Dark Chalk)
- [ ] Ditinjau di Studio
- [x] Fakta diverifikasi (19 Nov 2026)
- [ ] VO dibuat
- [ ] Render
