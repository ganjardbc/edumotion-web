import { SHORT_EDU, durationOf, storyboardOf } from "../_shared/ShortEdu";
import type { VideoEntry } from "../_shared/video";
import { BulanCakrawala } from "./BulanCakrawala";
import { BASE_SCENES, META } from "./scenes";
import { VO } from "./voiceover";

export const VIDEO: VideoEntry = {
  id: META.id,
  component: BulanCakrawala,
  durationInFrames: durationOf(BASE_SCENES, VO),
  storyboard: storyboardOf(BASE_SCENES, VO),
  ...SHORT_EDU,
};
