---
name: edumotion-video
description: Wajib dipakai untuk membuat atau mengubah video edukasi di proyek edumotion-web, termasuk saat diminta "buat video baru" atau saat skill remotion-create dipanggil. Menjamin struktur src/videos/<Nama> sama untuk semua video.
version: 1.0.0
---

Proyek ini sudah ada, jadi jangan menjalankan langkah scaffold proyek dari `remotion-create`.
Baca bagian "Struktur video (wajib, tanpa pengecualian)" dan "Audiens dan posisi akun" di `CLAUDE.md` di root, lalu:

0. **Tema dan karakter:** tema (kertas berpetak atau Dark Chalk) dipilih Ganjar per video tanpa bawaan. **Bila permintaan belum menyebut tema, tanyakan dulu** (jangan menebak). Karakter di layar bukan bawaan: buat video tanpa tokoh kecuali Ganjar memintanya.
1. Pastikan naskah ada dan disetujui Ganjar (`src/videos/<Nama>/script.md`). Jika belum, tulis drafnya dulu dan minta persetujuan. Untuk menulis atau merevisi naskah, pakai skill `edumotion-naskah`.
2. Buat kerangka dengan `npm run video:new -- <Nama> "<Judul>" --topic <topik> --tema <kertas|dark-chalk> [--cast <id,id>] --voice <suara>` (`--tema` wajib). Jangan membuat folder video dengan tangan.
3. Isi `scenes.ts` dari naskah, tinjau tempo di Studio dengan prop `animatic: true`, catat objek yang belum ada di `design-system/edumotion-design-system/props/registry.md`, buat objek di `src/props/<domain>/` sesuai `props/STYLE.md`, lalu tulis `views/<SceneId>.tsx`.
4. Tulis `views/` dari brief visual: Setup dan Explain memakai pola dari `src/explainers/pola` (contoh: `src/videos/LangitBiru/views/`), bila Ganjar meminta tokoh, pembawa `<Pembawa topic={META.topic} />` (stickman Ganjar) hanya di Hook/Twist/Payoff/Cta dengan ekspresi dan gestur yang sesuai makna (tanpa permintaan, tanpa karakter), poin terpenting sebagai scene `Kunci` (frame layar penuh tanpa karakter, pola `Kunci`). Picu gerak dengan `at("kata kunci")` (dari `SceneProps`) supaya objek muncul saat narator menyebutnya; jangan memakai pecahan durasi (`frames * 0.5`).
5. Untuk teknik Remotion (animasi, urutan, audio), ikuti `remotion-best-practices`; untuk visual, ikuti design system edumotion.
6. Konsep wajib: semua kalimat dibawakan **narator** (`who: "narator"`), tokoh di layar tidak berbicara; tema kertas: latar kertas berpetak (`<EduBackdrop topic={META.topic} />`), pembawa Ganjar stickman, tanpa Tako; bahasa Indonesia sederhana (kalimat pendek, satu gagasan per kalimat, istilah langsung dijelaskan); SFX paling banyak satu per scene dan empat per video.
6b. Tema **Dark Chalk** (papan hijau + garis kapur; lihat "Tema alternatif" di `CLAUDE.md`): `video:new --tema dark-chalk` sudah memasang `tema="dark-chalk"` pada `<ShortEdu>`; view hanya menggambar isi (tanpa `EduBackdrop` dan tanpa `Pembawa` bila video tanpa tokoh) dengan objek, `Garis`/`Teks`/`Label`, dan pola dari `src/dark-chalk` (contoh `src/videos/EsBatuMengapung/views/`). Warna dari `KAPUR`, bukan hex baru. Tokoh bila perlu: `GanjarGaris` di dalam `<Kapur>`.
7. Render lembar storyboard (`npx remotion still src/index.ts <Nama>-Storyboard out/<Nama>-storyboard.png`), lihat gambarnya, perbaiki scene yang tidak terbaca atau tidak nyambung, lalu minta Ganjar menyetujui storyboard sebelum menganggap visual selesai.
8. Jalankan `npm run lint` (menjalankan pemeriksa struktur), tinjau di Remotion Studio dengan `safeZone`, dan jangan menjalankan `vo-generate` tanpa persetujuan Ganjar; untuk voice over, pakai skill `edumotion-vo`.
