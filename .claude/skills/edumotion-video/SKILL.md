---
name: edumotion-video
description: Wajib dipakai untuk membuat atau mengubah video edukasi di proyek edumotion-web, termasuk saat diminta "buat video baru" atau lewat /remotion-create. Menjamin struktur src/videos/<Nama> sama untuk semua video.
version: 1.0.0
---

Proyek ini sudah ada, jadi jangan menjalankan langkah scaffold proyek dari `remotion-create`.
Baca bagian "Struktur video (wajib, tanpa pengecualian)" dan "Audiens dan posisi akun" di `CLAUDE.md` di root, lalu:

1. Pastikan naskah ada dan disetujui Ganjar (`src/videos/<Nama>/script.md`). Jika belum, tulis drafnya dulu dan minta persetujuan.
2. Buat kerangka dengan `npm run video:new -- <Nama> "<Judul>" --topic <topik> --cast <id,id> --voice <suara>`. Jangan membuat folder video dengan tangan.
3. Isi `scenes.ts` dari naskah, catat objek yang belum ada di `design-system/edumotion-design-system/props/registry.md`, buat objek di `src/props/<domain>/` sesuai `props/STYLE.md`, lalu tulis `views/<SceneId>.tsx`.
4. Untuk teknik Remotion (animasi, urutan, audio), ikuti `remotion-best-practices`; untuk visual, ikuti design system edumotion.
5. Jalankan `npm run lint` (menjalankan pemeriksa struktur), tinjau di Remotion Studio dengan `safeZone`, dan jangan menjalankan `vo-generate` tanpa persetujuan Ganjar.
