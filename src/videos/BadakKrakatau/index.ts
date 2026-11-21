import { SHORT_EDU, durationOf, storyboardOf } from "../_shared/ShortEdu";
import type { VideoEntry } from "../_shared/video";
import { BadakKrakatau } from "./BadakKrakatau";
import { BASE_SCENES, META } from "./scenes";
import { VO } from "./voiceover";

export const VIDEO: VideoEntry = {
  id: META.id,
  component: BadakKrakatau,
  durationInFrames: durationOf(BASE_SCENES, VO),
  storyboard: storyboardOf(BASE_SCENES, VO),
  ...SHORT_EDU,
};
