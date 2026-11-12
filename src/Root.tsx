import type React from "react";
import { Composition, Folder, Still } from "remotion";
import { EFFECTS_DEMO, EFFECTS_DEMO_DURATION, EffectsDemo } from "./assets/effects/EffectsDemo";
import { EDU_BACKDROPS_DEMO, EduBackdropsDemo } from "./assets/backdrops";
import { CAST_DEMO, CAST_DEMO_DURATION, CastDemo, CastExpressionSheet, SHEET } from "./characters/cast";
import { TAKO_DEMO, TAKO_DEMO_DURATION, TakoDemo } from "./characters/tako/TakoDemo";
import { EXPLAINERS_DEMO, EXPLAINERS_DEMO_DURATION, ExplainersDemo } from "./explainers/ExplainersDemo";
import { THUMBNAIL_DEMO, ThumbnailDemo } from "./explainers/ThumbnailDemo";
import { DARK_CHALK_GANJAR, PapanGanjar } from "./dark-chalk/PapanGanjar";
import { DARK_CHALK_GARIS, PapanGanjarGaris } from "./dark-chalk/PapanGanjarGaris";
import { BINGKAI, BingkaiKayu } from "./dark-chalk/BingkaiKayu";
import { LATAR_SHEET, LatarSheet } from "./dark-chalk/LatarSheet";
import { TEKSTUR, TeksturPapan } from "./dark-chalk/TeksturPapan";
import { PAPAN_AWAN, PapanAwan } from "./dark-chalk/PapanAwan";
import { PROPS_DEMO, PropsDemo } from "./props/PropsDemo";
import { VIDEOS } from "./videos";
import { VIDEO_DEFAULT_PROPS } from "./videos/_shared/ShortEdu";
import { Storyboard, storyboardSize } from "./videos/_shared/Storyboard";

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
      <Folder name="Storyboard">
        {VIDEOS.map((v) => (
          <Composition key={v.id} id={`${v.id}-Storyboard`} component={Storyboard} {...storyboardSize(v.storyboard.length)} fps={v.fps} durationInFrames={v.durationInFrames} defaultProps={{ videoId: v.id, safeZone: false }} />
        ))}
      </Folder>
      <Composition id={PAPAN_AWAN.id} component={PapanAwan} durationInFrames={PAPAN_AWAN.durationInFrames} fps={PAPAN_AWAN.fps} width={PAPAN_AWAN.width} height={PAPAN_AWAN.height} />
      <Composition id={DARK_CHALK_GANJAR.id} component={PapanGanjar} durationInFrames={DARK_CHALK_GANJAR.durationInFrames} fps={DARK_CHALK_GANJAR.fps} width={DARK_CHALK_GANJAR.width} height={DARK_CHALK_GANJAR.height} />
      <Composition id={DARK_CHALK_GARIS.id} component={PapanGanjarGaris} durationInFrames={DARK_CHALK_GARIS.durationInFrames} fps={DARK_CHALK_GARIS.fps} width={DARK_CHALK_GARIS.width} height={DARK_CHALK_GARIS.height} />
      <Still id={LATAR_SHEET.id} component={LatarSheet} width={LATAR_SHEET.width} height={LATAR_SHEET.height} defaultProps={{ varian: "navy" as const }} />
      <Still id="DarkChalk-LatarHijau" component={LatarSheet} width={LATAR_SHEET.width} height={LATAR_SHEET.height} defaultProps={{ varian: "hijau" as const }} />
      <Still id="DarkChalk-Bingkai" component={BingkaiKayu} width={BINGKAI.width} height={BINGKAI.height} />
      <Still id="DarkChalk-TeksturNavy" component={TeksturPapan} width={TEKSTUR.width} height={TEKSTUR.height} defaultProps={{ varian: "navy" as const }} />
      <Still id="DarkChalk-TeksturHijau" component={TeksturPapan} width={TEKSTUR.width} height={TEKSTUR.height} defaultProps={{ varian: "hijau" as const }} />
      <Still id={PROPS_DEMO.id} component={PropsDemo} width={PROPS_DEMO.width} height={PROPS_DEMO.height} />
      <Still id={THUMBNAIL_DEMO.id} component={ThumbnailDemo} width={THUMBNAIL_DEMO.width} height={THUMBNAIL_DEMO.height} />
      <Still id="EduBackdrops" component={EduBackdropsDemo} width={EDU_BACKDROPS_DEMO.width} height={EDU_BACKDROPS_DEMO.height} />
      <Still id="TakoCastExpressions" component={CastExpressionSheet} width={SHEET.width} height={SHEET.height} defaultProps={{ id: "awan" as const }} />
    </>
  );
};
