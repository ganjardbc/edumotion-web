import type React from "react";
import type { VideoProps } from "./ShortEdu";

// Bentuk yang diekspor index.ts tiap video dan dibaca src/videos/index.ts lalu Root.tsx.
export type VideoEntry = {
  readonly id: string;
  readonly component: React.ComponentType<VideoProps>;
  readonly durationInFrames: number;
  readonly width: 1080;
  readonly height: 1920;
  readonly fps: 30;
};
