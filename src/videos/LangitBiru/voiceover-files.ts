// Dibuat otomatis oleh scripts/vo-process.py. Jangan diubah tangan.
import f0 from "./voiceover/Cta-1.mp3";
import f1 from "./voiceover/Explain1-1.mp3";
import f2 from "./voiceover/Explain2-1.mp3";
import f3 from "./voiceover/Explain3-1.mp3";
import f4 from "./voiceover/Explain4-1.mp3";
import f5 from "./voiceover/Hook-1.mp3";
import f6 from "./voiceover/Payoff-1.mp3";

export const VO_FILES: Readonly<Record<string, string>> = {
  "Cta-1": f0,
  "Explain1-1": f1,
  "Explain2-1": f2,
  "Explain3-1": f3,
  "Explain4-1": f4,
  "Hook-1": f5,
  "Payoff-1": f6,
};
