---
name: edumotion-vo
description: Wajib dipakai sebelum membuat, membuat ulang, atau menguji voice over ElevenLabs di proyek edumotion-web, termasuk saat diminta "buat VO", "generate suara", "tes suara narator", atau "ganti suara". Voice over memakai kredit berbayar, jadi alurnya harus lewat persetujuan Ganjar.
version: 1.0.0
---

Voice over memakai kredit ElevenLabs berbayar (kira-kira satu kredit per huruf). Tidak ada generate tanpa persetujuan Ganjar di percakapan ini, untuk video itu, dengan jumlah yang sudah ditampilkan.

## Larangan
- Jangan membaca, mencetak, menyalin, atau meng-commit `.env.local`.
- Jangan memakai `--yes` kecuali Ganjar sudah menyetujui jumlah baris dan huruf yang persis sama.
- Jangan menulis voice id di luar `src/videos/_shared/voices.ts`.
- Jangan memakai connector ElevenLabs (MCP) untuk VO video; pakai skrip proyek supaya manifest dan hash tetap benar.
- Jangan mengulang generate untuk "mencoba lagi" tanpa izin; tiap percobaan memakai kredit.

## Alur
1. **Naskah harus sudah disetujui.** Cek status di `src/videos/<Nama>/script.md`. Bila belum, berhenti dan minta persetujuan naskah dulu; mengubah teks setelah VO dibuat berarti membayar dua kali.
2. **Pastikan suara narator.** Lihat `voiceover.ts` video itu (`voices: { narator: VOICES.<suara> }`). Suara yang belum pernah didengar Ganjar (lihat daftar di `CLAUDE.md`) perlu tes dulu: usulkan satu kalimat pendek, sebutkan jumlah hurufnya, minta izin.
3. **Hitung tanpa kredit:** `node scripts/vo-lines.mjs --video <Nama>`. Baris berstatus `ok` tidak dibuat ulang.
4. **Tampilkan ke Ganjar:** nama video, suara, jumlah baris yang akan dibuat, jumlah huruf (≈ kredit), dan baris mana saja. Lalu minta persetujuan dan tunggu jawabannya.
5. **Generate setelah disetujui:** `node scripts/vo-generate.mjs --video <Nama>`. Skrip meminta konfirmasi di terminal; `--yes` hanya bila langkah 4 sudah disetujui dan sesi tidak interaktif. Skrip memakai endpoint `with-timestamps` (audio + waktu per huruf, satu panggilan). Klip mentah dan `.align.json` masuk `out/vo-raw/<Nama>/`, lalu `vo-process.py` memotong awal tepat sebelum huruf pertama, menyimpan waktu per kata (`words`), memotong senyap di akhir, menyamakan kenyaringan (-16 LUFS), dan menulis `voiceover.json` serta `voiceover-files.ts`.
6. **Periksa hasil:** jalankan lagi `vo-lines` (semua harus `ok`), lalu `npm run lint` (tidak boleh ada peringatan "audio usang"). Bandingkan durasi audio dengan `dur` di naskah; gerak yang memakai `at()` ikut menyesuaikan sendiri, tapi cek di Studio bahwa caption dan objek jatuh pada kata yang benar. Bila kata di `tts` berbeda jumlahnya dari `text`, stempel waktu tidak dipakai dan kembali ke perkiraan.
7. **Laporkan:** jumlah baris dan huruf yang benar-benar dibuat, durasi total video yang baru, dan baris yang gagal bila ada.

## Mengubah teks setelah VO ada
- Hash tiap baris = suara + model + teks. Mengubah satu kata membuat baris itu `berubah` dan audionya usang; `npm run lint` memberi peringatan.
- Audio usang tetap terputar dengan caption baru. Jadi setelah mengubah teks: buat ulang baris itu (dengan izin), atau hapus entrinya dari `voiceover.json` dan `voiceover-files.ts` supaya durasi kembali memakai estimasi naskah.
- Perbaikan pelafalan dilakukan lewat `tts` pada baris di `scenes.ts` (ejaan untuk TTS), bukan dengan mengubah `text` yang tampil sebagai caption.

## Hemat kredit
- Tulis angka dengan huruf dan periksa ejaan sebelum generate, bukan sesudahnya.
- Ubah naskah sekaligus, lalu generate sekali.
- Mengganti suara membuat semua baris `berubah`; sebutkan total hurufnya sebelum mengusulkan ganti suara.
