import { SHORT_EDU, durationOf } from "../_shared/ShortEdu";
import type { VideoEntry } from "../_shared/video";
import { JantungTidakCapek } from "./JantungTidakCapek";
import { BASE_SCENES, META } from "./scenes";
import { VO } from "./voiceover";

export const VIDEO: VideoEntry = {
  id: META.id,
  component: JantungTidakCapek,
  durationInFrames: durationOf(BASE_SCENES, VO),
  ...SHORT_EDU,
};
