# Efek visual

Efek pendukung yang dipasang di atas latar dan karakter. Semuanya hanya bergantung pada `useCurrentFrame()` dan seed, jadi render selalu identik. Jangan memakai `Math.random()`; pakai `seeded(seed)` dari `seed.ts`.

| Efek | Fungsi | Props utama |
|---|---|---|
| `Confetti` | Hujan konfeti dari atas, warna topik dan `HIGHLIGHT` | `topic`, `count`, `seed`, `speed` |
| `Sparkle` | Kilau empat sudut yang berkedip di satu titik | `x`, `y`, `size`, `phase`, `period` |
| `SpeedLines` | Garis kecepatan memanjang | `direction` (`vertikal`/`horizontal`), `count`, `seed` |
| `PopBurst` | Cincin dan garis memancar sesaat (18 frame); pasang di `Sequence` saat kejutan | `x`, `y`, `size`, `rays` |
| `Bubbles` | Gelembung naik pelan | `topic`, `count`, `seed` |

Konfeti, garis kecepatan, dan gelembung memenuhi layar dan tidak menangkap pointer. Pakai satu efek per momen supaya tidak bertabrakan dengan `highlight` adegan.

Demo: komposisi `EffectsDemo` di Studio.
