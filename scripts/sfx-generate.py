#!/usr/bin/env python3
"""Membuat pustaka SFX edumotion secara sintetis (tanpa kredit, tanpa acak tak berbiji) ke src/assets/sfx/*.mp3.

    python3 scripts/sfx-generate.py

Tiap bunyi dibuat dari gelombang dasar dan derau berbiji tetap, dinormalkan ke puncak -2 dBFS, lalu diubah ke mp3 mono
dengan ffmpeg. Nama berkas = kunci di src/assets/sfx/index.ts. Volume di dalam video diatur per cue (scenes.ts).
"""
import subprocess
import tempfile
import wave
from pathlib import Path

import numpy as np
from scipy.signal import butter, sosfilt

SR = 44100
OUT = Path(__file__).resolve().parent.parent / "src/assets/sfx"
rng = np.random.default_rng(7)


def t_of(dur):
    return np.arange(int(SR * dur)) / SR


def sweep(dur, f0, f1, curve=1.0):
    """Sinus dengan frekuensi bergeser f0 -> f1 (curve < 1 = cepat di awal)."""
    t = t_of(dur)
    f = f0 + (f1 - f0) * (t / dur) ** curve
    return np.sin(2 * np.pi * np.cumsum(f) / SR)


def decay(dur, tau, attack=0.004):
    t = t_of(dur)
    return np.minimum(1, t / attack) * np.exp(-t / tau)


def lowpass(x, hz):
    return sosfilt(butter(4, hz, "low", fs=SR, output="sos"), x)


def band(x, lo, hi):
    return sosfilt(butter(4, [lo, hi], "band", fs=SR, output="sos"), x)


def place(buf, clip, at):
    i = int(SR * at)
    end = min(len(buf), i + len(clip))
    buf[i:end] += clip[: end - i]


def finish(x):
    x = x - np.mean(x)
    x = x / max(1e-9, np.max(np.abs(x))) * 10 ** (-2 / 20)
    n = int(SR * 0.012)
    x[-n:] *= np.linspace(1, 0, n)
    return x


def heartbeat():
    out = np.zeros(int(SR * 0.7))
    thump = lambda dur, f0, f1, tau, amp: amp * (sweep(dur, f0, f1, 0.4) + 0.4 * lowpass(rng.standard_normal(int(SR * dur)), 160)) * decay(dur, tau)
    place(out, thump(0.3, 85, 42, 0.07, 1.0), 0.0)
    place(out, thump(0.25, 72, 38, 0.06, 0.7), 0.24)
    return out


def pop():
    n = int(SR * 0.18)
    return sweep(0.18, 720, 190, 0.35) * decay(0.18, 0.03) + 0.25 * lowpass(rng.standard_normal(n), 3000) * decay(0.18, 0.006)


def blip():
    return sweep(0.12, 1100, 1560, 0.6) * decay(0.12, 0.035)


def whoosh():
    dur = 0.5
    n = int(SR * dur)
    x = band(rng.standard_normal(n), 350, 3200)
    t = t_of(dur)
    return x * np.sin(np.pi * t / dur) ** 2


def rise():
    dur = 2.0
    t = t_of(dur)
    p = 1 - (1 - t / dur) ** 3
    f = 220 + 1100 * p
    ph = 2 * np.pi * np.cumsum(f) / SR
    x = np.sin(ph) + 0.3 * np.sin(2 * ph)
    env = np.minimum(1, t / 0.06) * np.minimum(1, (dur - t) / 0.35)
    return x * env * (0.6 + 0.4 * p) * (1 + 0.15 * np.sin(2 * np.pi * 14 * t))


def hmm():
    out = np.zeros(int(SR * 0.6))
    note = lambda f, dur: (np.sin(2 * np.pi * f * t_of(dur)) + 0.3 * np.sin(4 * np.pi * f * t_of(dur))) * decay(dur, 0.12)
    place(out, note(330, 0.25), 0.0)
    place(out, note(415, 0.4), 0.2)
    return out


def boing():
    dur = 0.45
    t = t_of(dur)
    f = 260 * 2 ** (2.2 * np.minimum(1, t / 0.18)) * (1 + 0.04 * np.sin(2 * np.pi * 22 * t))
    ph = 2 * np.pi * np.cumsum(f) / SR
    return (np.sin(ph) + 0.25 * np.sin(2 * ph)) * decay(dur, 0.14, 0.006)


def wrong():
    out = np.zeros(int(SR * 0.6))

    def buzz(f, dur):
        t = t_of(dur)
        ph = 2 * np.pi * f * t
        return lowpass(np.sign(np.sin(ph)) * 0.5 + np.sin(ph) * 0.5, 2400) * decay(dur, 0.25, 0.006)

    place(out, buzz(233, 0.2), 0.0)
    place(out, buzz(175, 0.34), 0.2)
    return out


def bell(f, dur, tau):
    t = t_of(dur)
    return (np.sin(2 * np.pi * f * t) + 0.3 * np.sin(2 * np.pi * 2 * f * t) + 0.12 * np.sin(2 * np.pi * 3.01 * f * t)) * decay(dur, tau, 0.003)


def tada():
    out = np.zeros(int(SR * 1.4))
    for i, f in enumerate([523.25, 659.25, 783.99, 1046.5]):
        place(out, bell(f, 1.0, 0.35) * 0.7, i * 0.09)
    for f in [523.25, 783.99, 1046.5]:
        place(out, bell(f, 1.1, 0.5) * 0.45, 0.36)
    return out


def ding():
    out = np.zeros(int(SR * 0.9))
    place(out, bell(1318.5, 0.9, 0.22), 0.0)
    return out


SOUNDS = {"heartbeat": heartbeat, "pop": pop, "blip": blip, "whoosh": whoosh, "rise": rise, "hmm": hmm, "boing": boing, "wrong": wrong, "tada": tada, "ding": ding}

OUT.mkdir(parents=True, exist_ok=True)
for name, fn in SOUNDS.items():
    x = finish(fn())
    with tempfile.TemporaryDirectory() as d:
        wav = Path(d) / f"{name}.wav"
        with wave.open(str(wav), "wb") as w:
            w.setnchannels(1)
            w.setsampwidth(2)
            w.setframerate(SR)
            w.writeframes((x * 32767).astype(np.int16).tobytes())
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", str(wav), "-c:a", "libmp3lame", "-q:a", "4", str(OUT / f"{name}.mp3")], check=True)
    print(f"{name}.mp3  {len(x) / SR:.2f}s")
