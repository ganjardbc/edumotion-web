# Bagaimana proses terjadinya gempa bumi?

Topik: alam · Suara: narator (Aldo) · Tokoh di layar: tidak ada (semua visual gambar kapur beranimasi)
Tema visual: **Dark Chalk Storytelling**. Status: naskah dan brief disetujui Ganjar (20 Nov 2026); scenes.ts terisi; views dan storyboard disetujui Ganjar (20 Nov 2026). VO belum dibuat.

Jawaban satu kalimat (calon Payoff): Gempa terjadi saat lempeng bumi yang saling mendorong akhirnya patah, lalu getarannya merambat ke segala arah.

Struktur: Hook → Explain1–3 → Payoff → Cta. Perkiraan 40 detik (sekitar 95 kata). Tanpa scene Kunci (bisa ditambah bila Ganjar mau, mis. "Tenaga tersimpan lalu lepas").

| Scene | Narasi (narator) | Dur (dtk) | SFX |
|---|---|---|---|
| Hook | "Tanah yang kamu injak sebenarnya bergerak. Bagaimana gempa bumi terjadi?" | 5 | pop |
| Explain1 | "Kulit bumi terpecah menjadi potongan besar, yaitu lempeng. Lempeng bergerak sangat pelan, hanya beberapa sentimeter tiap tahun." | 9 | – |
| Explain2 | "Di pertemuan lempeng, batu saling menekan dan tersangkut. Tenaganya menumpuk, seperti penggaris yang terus dibengkokkan." | 9 | – |
| Explain3 | "Saat tekanan terlalu besar, batu patah dan bergeser tiba-tiba. Tenaga lepas sebagai getaran yang merambat lewat tanah." | 9 | – |
| Payoff | "Jadi gempa terjadi saat batu di antara lempeng patah, lalu getarannya sampai ke permukaan." | 6 | tada |
| Cta | "Menurutmu, kenapa Indonesia sering sekali diguncang gempa? Tulis di komentar." | 5 | – |

Catatan: Cta bertanya "kenapa Indonesia sering gempa" (jawaban: letak di pertemuan lempeng, Cincin Api) sebagai pancing video berikutnya, tidak dibocorkan.

## Brief visual

| Scene | Pola | Judul | Objek utama | Label | Kata kunci → aksi |
|---|---|---|---|---|---|
| Hook | visual | Tanah **bergerak**? | Garis tanah kapur dengan rumah kecil; tanah bergetar, retakan muncul | – | "bergerak" → tanah bergetar; "gempa" → tanda tanya |
| Explain1 | Sorot | Bumi terbelah jadi **lempeng** | Bola bumi kapur dengan garis batas lempeng, dua lempeng ditunjuk panah pelan | lempeng; beberapa cm/tahun | "lempeng" → penanda ke potongan; "sentimeter" → panah bergeser pelan |
| Explain2 | SebabAkibat | Tekanan **menumpuk** | Sebab: dua blok batu saling dorong, tersangkut di tengah. Akibat: penggaris melengkung | pertemuan lempeng; tersangkut; tenaga menumpuk | "pertemuan" → dua blok muncul; "menekan" → panah dorong; "tersangkut" → garis gesek + label; "penggaris" → penggaris melengkung |
| Explain3 | Langkah | Patah, lalu **bergetar** | 1) Dua blok saling dorong, 2) batu retak dan blok bergeser, 3) lingkaran gelombang melebar dari patahan | tekanan besar; patah, bergeser; getaran | "tekanan" / "patah" / "getaran" → butir 1/2/3 |
| Payoff | visual | Batu **patah**, tanah bergetar | Penampang tanah: retakan di bawah, gelombang naik ke rumah yang bergoyang | – | "patah" → retak; "permukaan" → gelombang sampai rumah |
| Cta | visual | Indonesia, kenapa **sering**? | Peta kapur sederhana Indonesia dengan titik-titik getar | tulis di komentar | "Indonesia" → peta; "komentar" → ajakan |

Objek kapur baru di `src/dark-chalk/objek/Gempa.tsx` (menunggu tinjauan Ganjar): `PenampangTanah`, `BlokLempeng`, `GelombangGempa`, `Penggaris`. Bumi dan ikon memakai yang sudah ada bila cocok.

## Fakta dan sumber (dicek 20 Nov 2026 lewat pencarian web ke USGS dan BMKG)
| Klaim di narasi | Hasil cek | Sumber |
|---|---|---|
| Kulit bumi terpecah jadi lempeng | Sesuai tektonik lempeng (secara teknis litosfer; "kulit bumi" disederhanakan) | [USGS This Dynamic Earth](https://pubs.usgs.gov/gip/dynamic/understanding.html) |
| Lempeng bergerak pelan, beberapa sentimeter tiap tahun | Sesuai: kecepatan rata-rata kurang dari 1 sampai lebih dari 15 cm/tahun; tipikal beberapa cm (Mid-Atlantic Ridge ±2,5; San Andreas ±5; subduksi 2–8) | [USGS This Dynamic Earth](https://pubs.usgs.gov/gip/dynamic/understanding.html) |
| Batu saling menekan dan tersangkut, tenaga menumpuk | Sesuai: gerak lempeng macet dan saling mengunci, energi menumpuk sampai batuan tidak kuat menahan; USGS: elastic rebound (tegangan elastis terkumpul) | [BMKG](https://pgt.bmkg.go.id/detail/berita/6), [USGS Elastic Rebound](https://earthquake.usgs.gov/earthquakes/events/1906calif/18april/reid.php) |
| Batu patah, bergeser tiba-tiba, tenaga lepas sebagai getaran | Sesuai: gempa = pelepasan energi tiba-tiba, ditandai patahnya lapisan batuan, dirasakan sebagai gelombang seismik | [BMKG](https://bbmkg3.bmkg.go.id/tentang-gempa), USGS Elastic Rebound |

Catatan: pencarian hanya mengembalikan ringkasan halaman; angka tepat bervariasi antarpublikasi USGS, dan narasi memakai "beberapa" supaya aman. Perumpamaan penggaris dan blok dipakai sebagai ilustrasi, bukan klaim sumber.

Sengaja tidak dipakai: skala Richter, jenis gempa lain (vulkanik, runtuhan), prediksi gempa, penyebab Indonesia sering gempa (jawaban Cta).

## Caption unggahan dan tag

Handle akun `@dipapantulis`.

**Caption (Instagram dan TikTok)**
```
Bagaimana proses terjadinya gempa bumi? 🌍

Kulit bumi terpecah menjadi lempeng yang bergerak pelan, beberapa sentimeter tiap tahun. Di pertemuannya, batu saling menekan dan tersangkut, sehingga tenaga menumpuk. Saat tekanan terlalu besar, batu patah dan bergeser tiba-tiba. Getarannya merambat lewat tanah, itulah gempa.

Menurutmu, kenapa Indonesia sering sekali diguncang gempa? Tulis di komentar 👇

Follow @dipapantulis, 1 pertanyaan 1 animasi tiap Selasa, Kamis & Sabtu ✏️
```

**Tag**
`#gempabumi #gempa #lempeng #tektonik #bumi #sainsindonesia #faktaunik #animasiedukasi #belajarsains #tahukahkamu #dipapantulis`

**Judul YouTube Shorts:** Bagaimana proses terjadinya gempa bumi? #shorts
**Tag YouTube:** gempa bumi, proses gempa, lempeng tektonik, penyebab gempa, fakta gempa, sains, fakta unik, animasi edukasi

Catatan: TikTok: aktifkan label konten AI (VO ElevenLabs). Caption hanya mengulang narasi dan tabel fakta. Jawaban Cta (Cincin Api) sengaja tidak dibocorkan.
