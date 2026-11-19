# Bagaimana Borobudur bisa dibangun?

Topik: sejarah · Suara: narator (Aldo) · Tokoh di layar: tidak ada (semua visual gambar kapur beranimasi)
Tema visual: **Dark Chalk Storytelling**. Status: naskah dan brief disetujui Ganjar (19 Nov 2026); scenes.ts terisi (19 Nov 2026).

Jawaban satu kalimat (calon Payoff): Borobudur dibangun dari jutaan batu gunung berapi yang dipahat satu per satu lalu disusun saling mengunci, tanpa semen.

Struktur: Hook → Explain1–3 → Payoff → Cta. Perkiraan 42 detik (sekitar 95 kata). Tanpa scene Kunci (bisa ditambah bila Ganjar mau, mis. "Tanpa semen").

| Scene | Narasi (narator) | Dur (dtk) | SFX |
|---|---|---|---|
| Hook | "Candi sebesar Borobudur dibangun seribu dua ratus tahun lalu. Bagaimana caranya?" | 5 | pop |
| Explain1 | "Pekerja mengambil batu andesit, yaitu batu gunung berapi. Jumlahnya sekitar dua juta blok." | 8 | – |
| Explain2 | "Tiap batu dipahat satu per satu. Lalu disusun lapis demi lapis, naik ke atas." | 8 | – |
| Explain3 | "Tidak ada semen di sini. Batunya punya sambungan yang saling mengunci, seperti mainan susun." | 9 | – |
| Payoff | "Jadi Borobudur dibangun dari jutaan batu yang dipahat, lalu disusun saling mengunci." | 6 | tada |
| Cta | "Menurutmu, bagaimana dulu batu seberat itu diangkat ke atas? Tulis di komentar." | 6 | – |

Catatan angka: "seribu dua ratus tahun" = sekitar abad ke-9 (selesai kira-kira 800–825 M), dibulatkan. Bila Ganjar lebih suka aman, ganti jadi "lebih dari seribu tahun lalu".

## Brief visual

| Scene | Pola | Judul | Objek utama | Label | Kata kunci → aksi |
|---|---|---|---|---|---|
| Hook | visual | Bagaimana **dibangun**? | Siluet Borobudur bertingkat dan stupa, digambar kapur garis demi garis | 1.200 tahun | "seribu" → label; "caranya" → tanda tanya |
| Explain1 | Sorot | Batu dari **gunung** | Gunung berapi kapur, blok batu kecil keluar dari lereng | andesit; ±2 juta blok | "andesit" → penanda ke blok; "dua juta" → blok berlipat ganda |
| Explain2 | Langkah | Dipahat, lalu **disusun** | 1) Blok kasar, 2) blok dipahat rapi, 3) susunan bertingkat naik | dipahat; disusun; naik | "dipahat" / "disusun" / "naik" → butir 1/2/3 |
| Explain3 | Bandingkan | Tanpa semen, saling **mengunci** | A: dua blok dengan semen dicoret, B: dua blok dengan tonjolan dan lekukan yang menyatu | semen; sambungan kunci | "semen" → coretan; "mengunci" → blok menyatu; "mainan susun" → ikon balok |
| Payoff | visual | Jutaan batu, saling **mengunci** | Siluet Borobudur tersusun dari blok-blok yang jatuh ke tempatnya | – | "dipahat" → blok; "mengunci" → candi lengkap |
| Cta | visual | Batu berat, naik **bagaimana**? | Blok besar di lereng miring dengan tanda tanya, garis jarak emas | tulis di komentar | "diangkat" → blok bergerak; "komentar" → ajakan |

Objek kapur baru di `src/dark-chalk/objek/Borobudur.tsx` (menunggu tinjauan Ganjar): `Borobudur`, `BlokBatu`, `Tumpukan`, `SusunanBlok`. Gunung memakai ikon `mountain`.

## Fakta dan sumber (dicek 19 Nov 2026 lewat pencarian web, perlu pengecekan sumber utama)
| Klaim di narasi | Hasil cek | Sumber |
|---|---|---|
| Dibangun sekitar seribu dua ratus tahun lalu | Konsensus: selesai sekitar 800–825 M. Tidak ada catatan tertulis pembangunan; tanggal dari perbandingan relief dan prasasti, jadi perkiraan | [World History Encyclopedia](https://www.worldhistory.org/Borobudur), [Wikipedia](https://en.wikipedia.org/wiki/Borobudur) |
| Batu andesit, batu gunung berapi | Sesuai: andesit adalah batuan vulkanik | World History Encyclopedia |
| Sekitar dua juta blok | Sumber berbeda: lebih dari 1,6 juta sampai lebih dari 2 juta blok. **Belum terverifikasi dari sumber utama**; narasi memakai "sekitar" | World History Encyclopedia, [seasia.co](https://seasia.co/2026/01/26/borobudur-the-worlds-largest-puzzle-with-2-million-interlocking-stones) |
| Dipahat satu per satu lalu disusun berurutan | Sesuai ringkasan sumber; sumber terbaik belum ditemukan, **belum terverifikasi** dari sumber utama (UNESCO / BPCB) | World History Encyclopedia |
| Tanpa semen, sambungan saling mengunci | Sesuai: tanpa mortar, blok saling mengunci. **Cek ulang di UNESCO** | World History Encyclopedia, Wikipedia |

Sengaja tidak dipakai: siapa pembangun (dinasti Sailendra/Sanjaya masih diperdebatkan), bukit alami sebagai inti (hanya satu sumber), cara mengangkat batu (tidak ada catatan; dipakai sebagai pertanyaan Cta), angka 55.000 m³ (satu sumber, bukan primer).

## Caption unggahan dan tag

Untuk Instagram, TikTok, dan YouTube Shorts (bukan caption di layar). Handle akun `@dipapantulis`.

**Caption (Instagram dan TikTok)**
```
Bagaimana Borobudur bisa dibangun? 🏛️

Borobudur dibangun sekitar seribu dua ratus tahun lalu dari sekitar dua juta blok batu andesit, yaitu batu gunung berapi. Tiap batu dipahat, lalu disusun lapis demi lapis. Tidak ada semen. Batunya saling mengunci lewat sambungan, seperti mainan susun.

Menurutmu, bagaimana dulu batu seberat itu diangkat ke atas? Tulis di komentar 👇

Follow @dipapantulis, 1 pertanyaan 1 animasi tiap Selasa, Kamis & Sabtu ✏️
```

**Tag**
`#borobudur #candiborobudur #sejarahindonesia #candi #wisatasejarah #faktaunik #animasiedukasi #belajarsejarah #tahukahkamu #dipapantulis`

**Judul YouTube Shorts:** Bagaimana Borobudur bisa dibangun? #shorts
**Tag YouTube (kolom tag):** bagaimana borobudur dibangun, candi borobudur, sejarah borobudur, cara membangun candi, fakta borobudur, sejarah indonesia, fakta unik, animasi edukasi

Catatan: TikTok: aktifkan label konten AI (VO ElevenLabs). Caption hanya mengulang narasi dan tabel fakta. Sengaja tanpa pembangun, kegunaan candi, dan cara batu diangkat (jawaban Cta tidak dibocorkan).
