# Registry objek

Format: `id | topik | mood | tipe | bagian bergerak | status`
Status: `ada` (sudah dibuat), `antre` (diminta storyboard, belum dibuat).

Claude Code memilih dari daftar ini saat menyusun storyboard; objek yang dibutuhkan tapi belum ada ditambahkan sebagai `antre`.

| id | topik | mood | tipe | bagian bergerak | status |
|----|-------|------|------|-----------------|--------|
| Stopwatch | tubuh | netral | prop | `progress` (jarum) | ada |
| EkgLine | tubuh | netral | prop | `progress` (garis) | ada |
| Mitochondria | tubuh | netral | prop | tidak ada | ada |
| MuscleCell | tubuh | netral | prop | `reveal` (mitokondria muncul) | ada |
| CoronaryVessels | tubuh | netral | prop | tidak ada | ada |
| QuestionMark | umum | penasaran | prop | `pop` | ada |
| ExclamationMark | umum | kejut | prop | `pop` | ada |
| LightBulb | umum | ide | prop | `on` | ada |
| Clock | umum | waktu | prop | `progress` (jarum hour, minute) | ada |
| CurvedArrow | umum | arah | prop | `progress` | ada |
| Star | umum | sorotan | prop | `pop` | ada |
| CheckMark | umum | benar | prop | `progress` | ada |
| CrossMark | umum | salah | prop | `progress` | ada |
| JantungAnatomi | tubuh | netral | prop | `beat` | ada |
| ParuParu | tubuh | netral | prop | `breath` | ada |
| SelDarahMerah | tubuh | netral | prop | tidak ada | ada |
| TetesDarah | tubuh | netral | prop | tidak ada | ada |
| Otot | tubuh | kuat | prop | `flex` | ada |
| Roket | antariksa | semangat | prop | `flame` | ada |
| PlanetBercincin | antariksa | tenang | prop | tidak ada | ada |
| Satelit | antariksa | netral | prop | tidak ada | ada |
| Meteor | antariksa | kejut | prop | tidak ada | ada |
| Orbit | antariksa | netral | prop | `progress` (planet mengorbit) | ada |
| AwanHujan | cuaca | sendu | prop | `progress` (tetes jatuh) | ada |
| Pelangi | cuaca | senang | prop | `progress` | ada |
| Termometer | cuaca | netral | prop | `level` | ada |
| SiklusAir | air | netral | prop | `progress` | ada |
| RodaGigi | teknologi | netral | prop | `progress` | ada |
| Chip | teknologi | netral | prop | `glow` | ada |
| WifiSignal | teknologi | netral | prop | `level` | ada |
| Gembok | teknologi | aman | prop | `open` (gagang) | ada |
| KodeTag | teknologi | netral | prop | `progress` | ada |
| GulunganPeta | sejarah | petualangan | prop | `progress` | ada |
| PerahuLayar | sejarah | petualangan | prop | `bob` | ada |
| Candi | sejarah | tenang | prop | tidak ada | ada |
| Koin | sejarah | netral | prop | `flip` | ada |

## Kumpulan awal untuk topik tubuh (jantung), 12 objek
`jantung-anatomi`, `bilik-atrium`, `pembuluh-arteri`, `pembuluh-vena`, `sel-darah-merah`, `paru-paru`, `denyut-ekg`, `stopwatch`, `otot`, `pompa-air`, `tetes-darah`, `tanda-tanya-besar`
Status:
- `ada`: `stopwatch` (`src/props/body/Stopwatch`), `denyut-ekg` (`EkgLine`), `mitokondria` (`Mitochondria`), `sel-otot` (`MuscleCell`), `pembuluh-koroner` (`CoronaryVessels`).
- `ada` (tambahan): `jantung-anatomi` (`JantungAnatomi`), `sel-darah-merah` (`SelDarahMerah`), `paru-paru` (`ParuParu`), `otot` (`Otot`), `tetes-darah` (`TetesDarah`), `tanda-tanya-besar` (`QuestionMark`).
- `antre`: `bilik-atrium`, `pembuluh-arteri`, `pembuluh-vena`, `pompa-air`.
