---
name: edumotion-naskah
description: Wajib dipakai saat menulis, merevisi, atau menilai naskah video edumotion (script.md dan baris VO di scenes.ts), termasuk saat diminta "buat naskah", "tulis script", "sederhanakan bahasanya", atau "ide video baru". Menjamin naskah berkonsep narator, berbahasa Indonesia sederhana, dan bersumber.
version: 1.0.0
---

Naskah adalah sumber kebenaran video. Kode (`scenes.ts`, `views/`) mengikuti naskah, bukan sebaliknya.
Aturan konsep ada di `CLAUDE.md` bagian "Format video"; skill ini menjelaskan cara menulisnya.

## Urutan kerja
1. **Satu pertanyaan sehari-hari.** Tulis dulu satu kalimat jawaban (calon Payoff). Bila jawabannya butuh lebih dari satu kalimat pendek, topiknya terlalu lebar; persempit.
2. **Kumpulkan fakta dan sumber dulu**, baru menulis. Tiap klaim angka atau sebab-akibat harus punya sumber di bagian "Fakta dan sumber". Yang belum bersumber ditandai "belum terverifikasi", jangan disamarkan.
3. **Tulis `script.md`** mengikuti templat (tabel: Scene, Narasi, Dur, Visual dan aksi, SFX).
4. **Baca keras-keras dalam hati.** Kalimat yang membuat tersandung dipecah atau diganti.
5. **Berhenti dan minta persetujuan Ganjar.** Jangan mengisi `scenes.ts` atau `views/` sebelum naskah disetujui. Setelah disetujui, salin narasi ke `scenes.ts` apa adanya.

## Struktur (30–60 detik, sekitar 110–150 kata)
| Scene | Isi | Panjang |
|---|---|---|
| Hook | Fakta mengejutkan + pertanyaan. Teks layar paling banyak 6 kata, muncul di 3 detik pertama. | 2–5 dtk |
| Setup | Tebakan umum yang keliru: "Banyak orang mengira …". | 4–7 dtk |
| Twist | Koreksi singkat: "Ternyata keliru." Boleh dua kalimat. | 2–5 dtk |
| Explain1..n | Satu gagasan per scene, 2–4 scene. Urut dari sebab ke akibat. | 5–10 dtk tiap scene |
| Payoff | Jawaban dalam satu sampai dua kalimat, diawali "Jadi …". | 5–7 dtk |
| Cta | Satu pertanyaan lanjutan untuk komentar. Tidak menyatakan fakta baru. | 3–4 dtk |

## Suara dan bahasa
- Semua kalimat dibawakan **narator**. Tokoh di layar (pembawa stickman Ganjar, cast) tidak berbicara; reaksinya ditulis di brief visual.
- Narator menyapa penonton dengan "kamu". Tidak memakai "aku", "gue", "lo".
- Kalimat pendek: sekitar 12 kata, paling banyak 15. Satu gagasan per kalimat.
- Kata sehari-hari yang baku tetapi tidak kaku: "tidak" (bukan "nggak"), "seperti" (bukan "kayak"), "kok" dan "ternyata" boleh.
- Istilah ilmiah hanya bila penonton perlu mengenalnya, dan langsung dijelaskan: "mitokondria, yaitu pabrik energi kecil di dalam sel". Paling banyak satu istilah baru per scene.
- Ganti kata berat dengan kata kerja sederhana: dihamburkan → disebarkan, berkoalesensi → bergabung, menempuh lintasan → melewati.
- Angka dibulatkan dan diberi pembanding: "seperti seratus gajah". Angka ditulis dengan huruf di narasi supaya TTS membacanya benar.
- Subjek diulang, jangan bergantung pada kata ganti yang jauh ("Cahaya biru …" bukan "Ia …" tiga kalimat kemudian).
- Tanpa lelucon yang memutus penjelasan, tanpa kalimat pengisi ("Nah, jadi begini ya").

## Brief visual (wajib, disetujui bersama naskah)
Visual yang tidak nyambung biasanya berasal dari brief yang kabur. Isi tabel "Brief visual" di `script.md` per scene:
- **Pola:** `karakter` untuk Hook, Twist, Payoff, Cta; untuk Setup dan Explain pilih satu pola per gagasan:
  `Bandingkan` (dua hal, A vs B), `Langkah` (urutan atau daftar alasan, 2–4 butir), `SebabAkibat` (satu sebab, satu akibat),
  `Sorot` (satu objek, bagian-bagiannya ditunjuk), `AngkaBesar` (satu angka mengejutkan). Paling banyak dua pola (dua fase) per scene.
- **Judul:** paling banyak 6 kata, menyatakan inti scene (bukan topik umum), satu kata disorot.
- **Objek utama:** dari registry. Bila belum ada, tulis `antre` dan sebutkan acuan gambar (tautan atau berkas). Pilih objek yang
  terbaca di ukuran kecil; konsep abstrak lebih baik dijelaskan dengan `Bandingkan` atau `Langkah` daripada digambar rumit.
- **Label:** paling banyak 3, tiap label paling banyak 3 kata. Label menamai, bukan mengulang kalimat narasi.
- **Kata kunci → aksi:** kata di narasi yang memicu tiap kemunculan ("lebih kuat → sorot Ungu"). Tiap objek muncul tepat saat disebut.
- **Uji nyambung:** baca narasi scene sambil membayangkan layar. Bila ada kalimat tanpa visual, atau visual tanpa kalimat, ubah salah satunya.
- **Kunci:** pilih paling banyak 2 poin terpenting video untuk frame layar penuh tanpa karakter (scene `Kunci` tersendiri), biasanya kalimat "Itu sebabnya …" atau inti Payoff. Pisahkan kalimat kuncinya menjadi baris tersendiri di naskah, lalu tulis judul (≤6 kata, satu kata disorot), gambar besar (nama prop + apa yang beranimasi, mis. Termometer naik), keterangan pendek, dan warna latar bila perlu (mis. merah untuk panas).
- **Pembawa:** untuk scene `karakter`, tulis ekspresi + gestur stickman yang sesuai makna kalimat (mis. kaget + menyerah di Twist, senang + tunjuk saat jawaban muncul). Variasikan antar scene.
- Latar kertas berpetak; SFX paling banyak satu per scene dan empat per video, hanya di Hook, Twist, Payoff, atau satu momen tematik.

## Daftar periksa sebelum minta persetujuan
- [ ] Jawaban video bisa diucapkan dalam satu kalimat.
- [ ] Tiap scene Explain hanya memuat satu gagasan.
- [ ] Tidak ada kalimat lebih dari 15 kata.
- [ ] Tiap istilah baru dijelaskan di kalimat yang sama.
- [ ] Tiap klaim punya sumber, atau ditandai belum terverifikasi.
- [ ] Narasi tidak mengklaim lebih dari yang didukung sumber ("sebagian", "kira-kira" bila memang begitu).
- [ ] Cta tidak membocorkan jawaban video berikutnya.
- [ ] Tiap scene punya brief visual lengkap; tiap kata kunci ada di narasi scene-nya.
- [ ] Tidak ada kalimat narasi tanpa visual, dan tidak ada visual tanpa kalimat.

Untuk ejaan dan tata bahasa, pakai skill `bahasa-indonesia` bila tersedia.
