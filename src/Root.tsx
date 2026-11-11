import type React from "react";
import { Composition, Still } from "remotion";
import { EFFECTS_DEMO, EFFECTS_DEMO_DURATION, EffectsDemo } from "./assets/effects/EffectsDemo";
import { EDU_BACKDROPS_DEMO, EduBackdropsDemo } from "./assets/backdrops";
import { CAST_DEMO, CAST_DEMO_DURATION, CastDemo, CastExpressionSheet, SHEET } from "./characters/cast";
import { TAKO_DEMO, TAKO_DEMO_DURATION, TakoDemo } from "./characters/tako/TakoDemo";
import { EXPLAINERS_DEMO, EXPLAINERS_DEMO_DURATION, ExplainersDemo } from "./explainers/ExplainersDemo";
import { THUMBNAIL_DEMO, ThumbnailDemo } from "./explainers/ThumbnailDemo";
import { PROPS_DEMO, PropsDemo } from "./props/PropsDemo";
import { VIDEOS } from "./videos";
import { VIDEO_DEFAULT_PROPS } from "./videos/_shared/ShortEdu";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id={TAKO_DEMO.id}
        component={TakoDemo}
        durationInFrames={TAKO_DEMO_DURATION}
        fps={TAKO_DEMO.fps}
        width={TAKO_DEMO.width}
        height={TAKO_DEMO.height}
      />
      <Composition
        id={CAST_DEMO.id}
        component={CastDemo}
        durationInFrames={CAST_DEMO_DURATION}
        fps={CAST_DEMO.fps}
        width={CAST_DEMO.width}
        height={CAST_DEMO.height}
      />
      <Composition id={EXPLAINERS_DEMO.id} component={ExplainersDemo} durationInFrames={EXPLAINERS_DEMO_DURATION} fps={EXPLAINERS_DEMO.fps} width={EXPLAINERS_DEMO.width} height={EXPLAINERS_DEMO.height} />
      <Composition id={EFFECTS_DEMO.id} component={EffectsDemo} durationInFrames={EFFECTS_DEMO_DURATION} fps={EFFECTS_DEMO.fps} width={EFFECTS_DEMO.width} height={EFFECTS_DEMO.height} />
      {VIDEOS.map((v) => (
        <Composition key={v.id} id={v.id} component={v.component} durationInFrames={v.durationInFrames} fps={v.fps} width={v.width} height={v.height} defaultProps={VIDEO_DEFAULT_PROPS} />
      ))}
      <Still id={PROPS_DEMO.id} component={PropsDemo} width={PROPS_DEMO.width} height={PROPS_DEMO.height} />
      <Still id={THUMBNAIL_DEMO.id} component={ThumbnailDemo} width={THUMBNAIL_DEMO.width} height={THUMBNAIL_DEMO.height} />
      <Still id="EduBackdrops" component={EduBackdropsDemo} width={EDU_BACKDROPS_DEMO.width} height={EDU_BACKDROPS_DEMO.height} />
      <Still id="TakoCastExpressions" component={CastExpressionSheet} width={SHEET.width} height={SHEET.height} defaultProps={{ id: "awan" as const }} />
    </>
  );
};
