---
name: edumotion-video
description: Wajib dipakai untuk membuat atau mengubah video edukasi di proyek edumotion-web, termasuk saat diminta "buat video baru" atau lewat /remotion-create. Menjamin struktur src/videos/<Nama> sama untuk semua video.
version: 1.0.0
---

Proyek ini sudah ada, jadi jangan menjalankan langkah scaffold proyek dari `remotion-create`.
Baca bagian "Struktur video (wajib, tanpa pengecualian)" dan "Audiens dan posisi akun" di `CLAUDE.md` di root, lalu:

1. Pastikan naskah ada dan disetujui Ganjar (`src/videos/<Nama>/script.md`). Jika belum, tulis drafnya dulu dan minta persetujuan. Untuk menulis atau merevisi naskah, pakai skill `edumotion-naskah`.
2. Buat kerangka dengan `npm run video:new -- <Nama> "<Judul>" --topic <topik> --cast <id,id> --voice <suara>`. Jangan membuat folder video dengan tangan.
3. Isi `scenes.ts` dari naskah, tinjau tempo di Studio dengan prop `animatic: true`, catat objek yang belum ada di `design-system/edumotion-design-system/props/registry.md`, buat objek di `src/props/<domain>/` sesuai `props/STYLE.md`, lalu tulis `views/<SceneId>.tsx`.
4. Di `views/`, picu gerak dengan `at("kata kunci")` (dari `SceneProps`) supaya objek muncul saat narator menyebutnya; jangan memakai pecahan durasi (`frames * 0.5`).
5. Untuk teknik Remotion (animasi, urutan, audio), ikuti `remotion-best-practices`; untuk visual, ikuti design system edumotion.
6. Konsep wajib: semua kalimat dibawakan **narator** (`who: "narator"`), tokoh di layar tidak berbicara; latar selalu polos (`<EduBackdrop topic={META.topic} />`); bahasa Indonesia sederhana (kalimat pendek, satu gagasan per kalimat, istilah langsung dijelaskan); SFX paling banyak satu per scene dan empat per video.
7. Jalankan `npm run lint` (menjalankan pemeriksa struktur), tinjau di Remotion Studio dengan `safeZone`, dan jangan menjalankan `vo-generate` tanpa persetujuan Ganjar; untuk voice over, pakai skill `edumotion-vo`.
