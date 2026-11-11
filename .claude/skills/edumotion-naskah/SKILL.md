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
- Semua kalimat dibawakan **narator**. Tokoh di layar (Tako, cast) tidak berbicara; reaksinya ditulis di kolom Visual.
- Narator menyapa penonton dengan "kamu". Tidak memakai "aku", "gue", "lo".
- Kalimat pendek: sekitar 12 kata, paling banyak 15. Satu gagasan per kalimat.
- Kata sehari-hari yang baku tetapi tidak kaku: "tidak" (bukan "nggak"), "seperti" (bukan "kayak"), "kok" dan "ternyata" boleh.
- Istilah ilmiah hanya bila penonton perlu mengenalnya, dan langsung dijelaskan: "mitokondria, yaitu pabrik energi kecil di dalam sel". Paling banyak satu istilah baru per scene.
- Ganti kata berat dengan kata kerja sederhana: dihamburkan → disebarkan, berkoalesensi → bergabung, menempuh lintasan → melewati.
- Angka dibulatkan dan diberi pembanding: "seperti seratus gajah". Angka ditulis dengan huruf di narasi supaya TTS membacanya benar.
- Subjek diulang, jangan bergantung pada kata ganti yang jauh ("Cahaya biru …" bukan "Ia …" tiga kalimat kemudian).
- Tanpa lelucon yang memutus penjelasan, tanpa kalimat pengisi ("Nah, jadi begini ya").

## Visual dan suara pendukung
- Latar polos di semua scene. Konteks (laut, langit, tubuh) ditunjukkan lewat objek dan label, bukan latar.
- Satu objek penjelas besar dan satu sorotan per scene. Objek dipilih dari `design-system/edumotion-design-system/props/registry.md`; yang belum ada ditulis `antre`.
- Teks layar mendukung narasi dengan kata kunci (2–5 kata), bukan menyalin kalimat narasi.
- SFX paling banyak satu per scene dan empat per video; isi kolom SFX hanya di Hook, Twist, Payoff, atau satu momen tematik.

## Daftar periksa sebelum minta persetujuan
- [ ] Jawaban video bisa diucapkan dalam satu kalimat.
- [ ] Tiap scene Explain hanya memuat satu gagasan.
- [ ] Tidak ada kalimat lebih dari 15 kata.
- [ ] Tiap istilah baru dijelaskan di kalimat yang sama.
- [ ] Tiap klaim punya sumber, atau ditandai belum terverifikasi.
- [ ] Narasi tidak mengklaim lebih dari yang didukung sumber ("sebagian", "kira-kira" bila memang begitu).
- [ ] Cta tidak membocorkan jawaban video berikutnya.

Untuk ejaan dan tata bahasa, pakai skill `bahasa-indonesia` bila tersedia.
