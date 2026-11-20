# Bagaimana tsunami terjadi?

Topik: alam · Tema: dark-chalk · Suara: narator (aldo) · Tokoh di layar: tidak ada (semua visual gambar kapur beranimasi)
Status naskah: disetujui Ganjar (20 Nov 2026); storyboard disetujui (20 Nov 2026); fakta dicek 20 Nov 2026. VO Aldo dibuat 20 Nov 2026 (7 baris, 677 huruf).

Jawaban satu kalimat (calon Payoff): Gempa di dasar laut menyentak air di atasnya, lalu sentakan itu merambat sebagai gelombang yang makin tinggi di dekat pantai.

Struktur: Hook → Explain1–3 → Kunci → Payoff → Cta. Perkiraan 45 detik (sekitar 100 kata). `Kunci` ditambah manual setelah naskah disetujui (`video:new --scenes` belum menerima Kunci).

| Scene | Narasi (narator) | Dur (dtk) | SFX |
|---|---|---|---|
| Hook | "Bagaimana tsunami terjadi? Biasanya semuanya dimulai jauh di dasar laut." | 5 | pop |
| Explain1 | "Di dasar laut, dua lempeng bumi saling menekan. Suatu saat, salah satunya terlepas dan terangkat. Itulah gempa." | 9 | – |
| Explain2 | "Dasar laut yang naik menyentak seluruh air di atasnya. Sentakan itu menyebar ke segala arah sebagai gelombang." | 9 | – |
| Explain3 | "Di laut dalam, gelombangnya rendah tapi sangat cepat, secepat pesawat jet. Dekat pantai, laut jadi dangkal dan gelombang melambat." | 10 | – |
| Kunci | "Gelombang yang melambat menumpuk, lalu menjulang tinggi." | 4 | – |
| Payoff | "Jadi tsunami terjadi karena gempa di dasar laut menyentak air, dan sentakannya menjadi gelombang besar di pantai." | 8 | tada |
| Cta | "Menurutmu, tanda apa di pantai yang harus kita waspadai? Tulis jawabanmu di komentar." | 6 | – |

## Brief visual

Pola: `visual` untuk Hook, Payoff, Cta; pola kapur untuk Explain; `Kunci` layar penuh.

| Scene | Pola | Judul (≤6 kata, satu kata disorot) | Objek utama | Label | Karakter | Kata kunci → aksi |
|---|---|---|---|---|---|---|
| Hook | visual | Bagaimana **tsunami** terjadi? | Potongan laut: permukaan tenang, panah turun ke dasar laut, tanda tanya | dasar laut | – | "tsunami" → judul; "dasar" → panah turun ke dasar |
| Explain1 | SebabAkibat | Lempeng **terlepas** | Dua lempeng di dasar laut saling menekan; satu terangkat, garis getar | lempeng; gempa | – | "menekan" → sebab (dua panah beradu); "terangkat" → akibat (lempeng naik) |
| Explain2 | SebabAkibat | Air **tersentak** | Penampang laut: dasar naik, kolom air terdorong, riak melebar ke kiri-kanan | air; gelombang | – | "menyentak" → air terdorong naik; "menyebar" → riak melebar |
| Explain3 | Bandingkan | Dalam **cepat**, dangkal lambat | Kiri: laut dalam, gelombang rendah, panah panjang. Kanan: pantai dangkal, gelombang melambat, panah pendek | laut dalam; pantai | – | "dalam" → kolom kiri; "jet" → ikon pesawat; "dangkal" → kolom kanan |
| Kunci | Kunci | Melambat lalu **menjulang** | Gelombang kapur besar menumpuk lalu menjulang di tepi pantai | melambat; menumpuk | – | "melambat" → gelombang menyempit; "menjulang" → gelombang naik. Latar biru |
| Payoff | Langkah | Gempa, sentakan, **gelombang** | 3 butir: lempeng terangkat, air tersentak, gelombang tinggi di pantai | gempa; sentakan; gelombang | – | "gempa" / "menyentak" / "gelombang" → butir 1/2/3 |
| Cta | visual | Tanda di **pantai** | Pantai kapur, air laut surut jauh (garis air mundur), tanda tanya | tulis di komentar | – | "pantai" → pantai; "tanda" → tanda tanya; "komentar" → ajakan |

Kunci: kalimat "Gelombang yang melambat menumpuk, lalu menjulang tinggi." · judul "Melambat lalu **menjulang**" · gambar besar: gelombang kapur menumpuk dan naik di tepi pantai · keterangan "Dangkal bikin gelombang menumpuk" · latar biru.

## Aturan naskah
- Hook satu pertanyaan 5W1H yang dijawab langsung di Penjelasan; tanpa tebakan keliru.
- Semua kalimat dibawakan narator; tanpa tokoh.
- Kalimat pendek, satu gagasan, kata sehari-hari; satu istilah baru per scene paling banyak.
- SFX: pop (Hook), tada (Payoff); 2 dari batas 4.

## Objek yang dibutuhkan
Objek kapur baru (belum ada, perlu dibuat setelah naskah disetujui; ditulis di `src/dark-chalk/objek/`): `Lempeng` (dua lempeng + panah), `PenampangLaut` (dasar laut, kolom air, riak), `GelombangLaut` (gelombang yang bisa rendah, melambat, menjulang), `Pantai`. Pesawat jet: pakai `Pesawat` dari `Terbang.tsx` bila cocok. Ikon dari `Ikon` bila ada (mis. gelombang, panah). Status registry belum dicatat.

## Fakta dan sumber (dicek 20 Nov 2026 lewat pencarian web)
| Klaim di narasi | Hasil cek | Sumber |
|---|---|---|
| Dua lempeng saling menekan, satu terlepas dan terangkat (gempa) | Sesuai: di zona subduksi, tepi lempeng atas patah dan melenting ke arah laut, dasar laut dan air di atasnya terangkat | [USGS Cascadia](https://usgs.gov/centers/pcmsc/could-it-happen-here), [WHOI](https://whoi.edu/know-your-ocean/ocean-topics/ocean-human-lives/natural-disasters/tsunamis) |
| Dasar laut naik menyentak air di atasnya, lalu menyebar sebagai gelombang | Sesuai: tsunami dibangkitkan oleh perpindahan seluruh kolom air secara cepat | USGS (Geist & Oglesby), [NOAA](https://noaa.gov/explainers/science-behind-tsunamis) |
| Di laut dalam gelombang rendah | Sesuai: di laut dalam hanya beberapa inci sampai kurang dari sekitar satu meter | NOAA, [Smithsonian Ocean](https://www.ocean.si.edu/planet-ocean/waves-storms-tsunamis/tsunami-science) |
| Secepat pesawat jet | Sesuai: NOAA menyebut di laut dalam bisa melebihi 500 mil/jam (sekitar 800 km/jam), setara pesawat jet | [NOAA Jetstream](https://noaa.gov/jetstream/tsunamis/tsunami-propagation) |
| Dekat pantai laut dangkal, gelombang melambat, lalu menumpuk dan menjulang | Sesuai: di perairan dangkal melambat (sekitar 20–30 mil/jam) dan tingginya naik | NOAA Jetstream, NOAA explainer |

Catatan: "Gempa" bukan satu-satunya pemicu. Sebagian besar tsunami (sekitar 80%, sumber media; belum dicek ke NOAA) dipicu gempa; longsor dan letusan gunung api bisa juga. Narasi hanya membahas jalur gempa, jadi Hook dan caption memakai "sebagian besar" bukan "semua". Kecepatan jet sengaja tanpa angka di narasi.

## Caption unggahan dan tag

Untuk Instagram, TikTok, dan YouTube Shorts (bukan caption di layar). Handle akun `@dipapantulis`.

**Caption (Instagram dan TikTok)**
```
Bagaimana tsunami terjadi? 🌊

Sebagian besar tsunami dimulai di dasar laut. Dua lempeng bumi saling menekan, lalu salah satunya terlepas dan terangkat. Air di atasnya tersentak dan menyebar sebagai gelombang. Di laut dalam gelombangnya rendah tapi sangat cepat. Dekat pantai, laut jadi dangkal, gelombang melambat, menumpuk, lalu menjulang tinggi.

Menurutmu, tanda apa di pantai yang harus kita waspadai? Tulis jawabanmu di komentar 👇

Follow @dipapantulis, 1 pertanyaan 1 animasi tiap Selasa, Kamis & Sabtu ✏️
```

**Tag**
`#tsunami #gempabumi #lautan #bencanaalam #sains #faktaunik #animasiedukasi #belajarsains #tahukahkamu #dipapantulis`

**Judul YouTube Shorts:** Bagaimana tsunami terjadi? #shorts
**Tag YouTube (kolom tag):** bagaimana tsunami terjadi, tsunami, gempa bumi, gelombang laut, bencana alam, sains, fakta unik, animasi edukasi

Catatan: TikTok: aktifkan label konten AI (VO ElevenLabs). Caption hanya mengulang narasi; perbarui bila fakta atau naskah berubah. Jawaban Cta (tanda tsunami di pantai) sengaja tidak dibocorkan.
