# Kenapa es batu mengapung?

Topik: air · Suara: narator (Aldo) · Tokoh di layar: tidak ada (semua visual gambar kapur beranimasi)
Tema visual: **Dark Chalk Storytelling** (papan hijau, garis kapur, aksen emas). Status: naskah disetujui Ganjar (12 Nov 2026) dengan perubahan: tanpa karakter pendukung, Hook/Twist/Payoff/Cta juga murni visual. Storyboard disetujui Ganjar (12 Nov 2026). VO ditahan dulu atas permintaan Ganjar.

Jawaban satu kalimat (calon Payoff): Es mengapung karena saat membeku, air menjadi lebih renggang dan lebih ringan.

Struktur: Hook → Setup → Twist → Explain1–3 → Kunci → Payoff → Cta. Perkiraan 50 detik (sekitar 115 kata).

| Scene | Narasi (narator) | Dur (dtk) | SFX |
|---|---|---|---|
| Hook | "Zat padat biasanya tenggelam di cairannya sendiri. Tapi es mengapung. Kok bisa?" | 4.5 | pop |
| Setup | "Banyak orang mengira es mengapung karena ada gelembung udara di dalamnya." | 4.5 | – |
| Twist | "Ternyata bukan. Es bening tanpa gelembung pun tetap mengapung." | 4 | wrong |
| Explain1 | "Air terbuat dari molekul, yaitu butiran yang sangat kecil. Di air cair, molekul-molekul itu berdesakan dan terus bergeser." | 8 | – |
| Explain2 | "Saat air membeku, molekul itu mengunci diri dalam susunan teratur. Susunan ini berongga, jadi molekulnya lebih renggang." | 8 | – |
| Explain3 | "Karena lebih renggang, air yang membeku memuai sekitar sembilan persen. Jumlah molekulnya sama, tapi tempatnya lebih luas." | 8 | – |
| Kunci | "Es lebih renggang, jadi lebih ringan daripada air." | 3 | – |
| Payoff | "Jadi es mengapung karena saat membeku, air menjadi lebih renggang dan lebih ringan." | 6 | tada |
| Cta | "Menurutmu, apa jadinya kalau es tenggelam di danau?" | 4 | – |

## Brief visual

| Scene | Pola | Judul | Objek utama | Label | Kata kunci → aksi |
|---|---|---|---|---|---|
| Hook | visual | Es kok **mengapung**? | dua gelas: batu tenggelam, kubus es mengapung | batu; es | "tenggelam" → batu jatuh; "mengapung" → es jatuh lalu mengapung |
| Setup | SebabAkibat | Es mengapung karena **udara**? | kubus es dengan gelembung | Gelembung udara; Es mengapung? | "gelembung" → sebab; "mengapung" → akibat |
| Twist | Koreksi | Ternyata keliru! | kartu koreksi; kubus es bening di gelas | Gelembung udara → Bukan itu | "bukan" → coret; "bening" → es bening mengapung |
| Explain1 | Sorot | Air cair: molekul **berdesakan** | MolekulAir (cair) banyak, rapat, bergeser | molekul air | "molekul" → muncul; "berdesakan" → bergeser; "bergeser" → bergerak |
| Explain2 | Bandingkan (kolom) | Beku: molekul **renggang** | MolekulAir cair vs beku (teratur, berongga) | Cair: rapat; Beku: renggang | "mengunci" → panel beku; "berongga" → sorot rongga |
| Explain3 | SebabAkibat | Membeku, air **memuai** | gelas penuh air → es menggembung | Lebih renggang; ±9% | "renggang" → sebab; "sembilan persen" → akibat |
| Kunci | Kunci (layar penuh, tanpa karakter) | Es lebih **renggang** | gelas dengan es mengapung, es naik pelan | Lebih ringan dari air | gambar muncul → es mengapung |
| Payoff | Langkah | Beku = lebih **renggang** | 3 butir: molekul rapat, kisi renggang, gelas dan es | air membeku; molekul renggang; es lebih ringan | "membeku" → butir 1; "renggang" → butir 2; "ringan" → butir 3 |
| Cta | visual | Es **tenggelam** di danau? | penampang danau, lempeng es, ikan | es | "es" → lempeng muncul; "tenggelam" → lempeng tenggelam ke dasar |

Latar: papan hijau Dark Chalk (digambar cangkang ShortEdu, `tema="dark-chalk"`). Tanpa pembawa dan tanpa cast di semua scene; Hook, Twist, Payoff, dan Cta berupa gambar kapur (gelas, es, molekul, danau).

## Objek
- Objek kapur di `src/dark-chalk/objek/` (di luar `src/props`, jadi tidak lewat registry design system lama; menunggu tinjauan Ganjar): `GelasAir`, `KubusEs`, `Batu`, `Molekul` dan `MedanMolekul` (cair ke es, ikatan, rongga heksagon).
- Pola kapur di `src/dark-chalk/pola/`: `SebabAkibat`, `Koreksi`, `Sorot`, `Bandingkan`, `Langkah`, `Kunci`.

## Fakta dan sumber (verifikasi sebelum tayang)
**Bersumber**
- Es kurang padat daripada air cair; saat membeku kepadatan turun sekitar 9 persen; susunan kristal es membuat molekul lebih renggang. [USGS Water Science School](https://www.usgs.gov/water-science-school/science/water-density)
- Kepadatan es sekitar 917 kg/m³, air cair sekitar 1000 kg/m³ (pada 4°C). [Science Focus](https://www.sciencefocus.com/science/why-does-ice-float-on-water)
- Es mengapung karena kepadatan lebih rendah, didorong ikatan hidrogen yang menyusun molekul. [Live Science](https://www.livescience.com/chemistry/why-does-ice-float)

**Belum terverifikasi**
- "Zat padat biasanya tenggelam di cairannya sendiri" (Hook): umumnya benar, air termasuk pengecualian langka; cari sumber khusus bahwa kebanyakan zat memadat lebih padat.
- "Sembilan persen" memuai: USGS memuat penurunan kepadatan sekitar 9 persen; memuai volume 9 persen perlu dicek ulang (angka literatur sekitar 9 persen, bergantung pembulatan).
- Susunan "berongga" yang dibayangkan sebagai heksagonal: tidak dikatakan di narasi; cek bila visual menampilkannya.
- "Es bening tanpa gelembung tetap mengapung": benar secara fisika, tapi belum dicarikan kutipan.

## Catatan
- Pengaruh gelembung udara pada es keruh nyata tapi kecil; narasi hanya menyatakan itu bukan penyebab utama, tidak mengklaim es "tidak berisi udara".
- Cta tidak membocorkan jawaban video lanjutan.
