#!/usr/bin/env python3
"""Mengolah satu klip voice over hasil ElevenLabs menjadi berkas siap pakai dan mencatatnya di manifest.

    python3 scripts/vo-process.py <id-baris> <berkas-mentah.mp3> --hash <hash> --video <Nama> [--align <berkas.align.json>]

Dengan --align (keluaran ElevenLabs `with-timestamps`: characters, character_start_times_seconds,
character_end_times_seconds), awal klip dipotong tepat sebelum huruf pertama dan waktu tiap kata disimpan di
manifest sebagai `words` [{w, s, e}] (detik dari awal klip hasil). Remotion memakainya untuk caption dan `at()`.

Langkah: potong senyap di awal dan akhir (ambang -45 dB, sisakan 60 ms), samakan kenyaringan (loudnorm -16 LUFS,
puncak -1,5 dB), simpan sebagai mp3 mono ke src/videos/<video>/voiceover/<id>.mp3, ukur durasi, tulis
src/videos/<video>/voiceover.json, lalu buat ulang src/videos/<video>/voiceover-files.ts (impor tiap mp3, dipakai
voiceover.ts). Aset ada di folder video, bukan public/, jadi ikut dibundel Remotion. <hash> dari `node scripts/vo-lines.mjs` (kolom hash baris itu).
Butuh ffmpeg dan ffprobe.
"""
import argparse
import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

ap = argparse.ArgumentParser()
ap.add_argument("id")
ap.add_argument("raw")
ap.add_argument("--hash", required=True)
ap.add_argument("--video", required=True, help="nama folder di src/videos")
ap.add_argument("--align", help="berkas JSON alignment per huruf dari ElevenLabs with-timestamps")
a = ap.parse_args()

VIDEO = ROOT / "src/videos" / a.video
MANIFEST = VIDEO / "voiceover.json"

raw = Path(a.raw)
if not raw.is_file():
    sys.exit(f"berkas tidak ada: {raw}")
dst = VIDEO / "voiceover" / f"{a.id}.mp3"
dst.parent.mkdir(parents=True, exist_ok=True)

LEAD = 0.06  # detik senyap yang disisakan sebelum huruf pertama


def words_from(align):
    """Kelompokkan waktu per huruf menjadi kata (dipisah spasi)."""
    out, cur = [], None
    for ch, s, e in zip(align["characters"], align["character_start_times_seconds"], align["character_end_times_seconds"]):
        if ch.isspace():
            cur = None
            continue
        if cur is None:
            cur = {"w": "", "s": s, "e": e}
            out.append(cur)
        cur["w"] += ch
        cur["e"] = e
    # Token tanpa huruf/angka (mis. "–") tidak dihitung, sama seperti textWords di timing.ts.
    return [w for w in out if any(c.isalnum() for c in w["w"])]


align = json.loads(Path(a.align).read_text()) if a.align else None
words = words_from(align) if align else None
end_trim = "areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.06,areverse"
if words:
    # Potong awal berdasarkan huruf pertama (bukan deteksi senyap) supaya waktu kata tetap tepat.
    offset = max(0.0, words[0]["s"] - LEAD)
    trim = f"atrim=start={offset:.3f},asetpts=PTS-STARTPTS,{end_trim}"
else:
    offset = 0.0
    # silenceremove dua kali (awal, lalu balik untuk akhir) agar ujung bersih; ambang -45 dB.
    trim = f"silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.06,{end_trim}"
chain = f"{trim},loudnorm=I=-16:TP=-1.5:LRA=11"
subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", str(raw), "-af", chain, "-ac", "1", "-ar", "44100", "-codec:a", "libmp3lame", "-b:a", "128k", str(dst)], check=True)
dur = float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(dst)], check=True, capture_output=True, text=True).stdout.strip())

data = json.loads(MANIFEST.read_text()) if MANIFEST.exists() else {"lines": {}}
entry = {"hash": a.hash, "file": f"voiceover/{a.id}.mp3", "duration": round(dur, 2)}
if words:
    entry["words"] = [{"w": w["w"], "s": round(max(0.0, w["s"] - offset), 3), "e": round(min(dur, w["e"] - offset), 3)} for w in words]
data["lines"][a.id] = entry
data["lines"] = dict(sorted(data["lines"].items()))
MANIFEST.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")

# Impor statis tiap mp3 agar bundler Remotion memberi URL-nya (dibaca voiceover.ts lewat VO_FILES).
ids = sorted(data["lines"])
names = {i: "f" + str(n) for n, i in enumerate(ids)}
lines = ["// Dibuat otomatis oleh scripts/vo-process.py. Jangan diubah tangan."]
lines += [f'import {names[i]} from "./voiceover/{i}.mp3";' for i in ids]
lines += ["", "export const VO_FILES: Readonly<Record<string, string>> = {"]
lines += [f'  "{i}": {names[i]},' for i in ids]
lines += ["};", ""]
(VIDEO / "voiceover-files.ts").write_text("\n".join(lines))
print(f"ok {a.id}: {dur:.2f} dtk -> {dst.relative_to(ROOT)}")
