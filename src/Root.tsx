import type React from "react";
import { Composition, Folder, Still } from "remotion";
import { EDU_BACKDROPS_DEMO, EduBackdropsDemo } from "./assets/backdrops";
import { EFFECTS_DEMO, EFFECTS_DEMO_DURATION, EffectsDemo } from "./assets/effects/EffectsDemo";
import { CAST_DEMO, CAST_DEMO_DURATION, CastDemo, CastExpressionSheet, SHEET } from "./characters/cast";
import { TAKO_DEMO, TAKO_DEMO_DURATION, TakoDemo } from "./characters/tako/TakoDemo";
import { BINGKAI, BingkaiKayu } from "./dark-chalk/BingkaiKayu";
import { IKON_SHEET, IkonSheet } from "./dark-chalk/ikon/IkonSheet";
import { LATAR_SHEET, LatarSheet } from "./dark-chalk/LatarSheet";
import { PAPAN_AWAN, PapanAwan } from "./dark-chalk/PapanAwan";
import { DARK_CHALK_GANJAR, PapanGanjar } from "./dark-chalk/PapanGanjar";
import { DARK_CHALK_GARIS, PapanGanjarGaris } from "./dark-chalk/PapanGanjarGaris";
import { TEKSTUR, TeksturPapan } from "./dark-chalk/TeksturPapan";
import { EXPLAINERS_DEMO, EXPLAINERS_DEMO_DURATION, ExplainersDemo } from "./explainers/ExplainersDemo";
import { THUMBNAIL_DEMO, ThumbnailDemo } from "./explainers/ThumbnailDemo";
import { PROPS_DEMO, PropsDemo } from "./props/PropsDemo";
import { VIDEOS } from "./videos";
import { VIDEO_DEFAULT_PROPS } from "./videos/_shared/ShortEdu";
import { Storyboard, storyboardSize } from "./videos/_shared/Storyboard";

// Ukuran dan durasi komposisi demo, supaya tiap entri di bawah cukup satu baris.
const spek = (d: { readonly id: string; readonly fps: number; readonly width: number; readonly height: number }, durationInFrames: number) => ({ id: d.id, fps: d.fps, width: d.width, height: d.height, durationInFrames });

// Menu Remotion Studio, dikelompokkan per Folder (urutan = urutan di sidebar):
//   Video        video edukasi (semua dari src/videos/index.ts; jangan menambah video langsung di sini)
//   Storyboard   lembar storyboard tiap video
//   Dark-Chalk   demo dan lembar tinjauan tema Dark Chalk Storytelling (src/dark-chalk)
//   Demo         demo karakter, penjelas, dan efek
//   Lembar       Still peninjauan: objek, thumbnail, latar, ekspresi cast
export const RemotionRoot: React.FC = () => (
  <>
    <Folder name="Video">
      {VIDEOS.map((v) => (
        <Composition key={v.id} id={v.id} component={v.component} durationInFrames={v.durationInFrames} fps={v.fps} width={v.width} height={v.height} defaultProps={VIDEO_DEFAULT_PROPS} />
      ))}
    </Folder>

    <Folder name="Storyboard">
      {VIDEOS.map((v) => (
        <Composition key={v.id} id={`${v.id}-Storyboard`} component={Storyboard} {...storyboardSize(v.storyboard.length)} fps={v.fps} durationInFrames={v.durationInFrames} defaultProps={{ videoId: v.id, safeZone: false }} />
      ))}
    </Folder>

    <Folder name="Dark-Chalk">
      <Composition {...spek(PAPAN_AWAN, PAPAN_AWAN.durationInFrames)} component={PapanAwan} />
      <Composition {...spek(DARK_CHALK_GANJAR, DARK_CHALK_GANJAR.durationInFrames)} component={PapanGanjar} />
      <Composition {...spek(DARK_CHALK_GARIS, DARK_CHALK_GARIS.durationInFrames)} component={PapanGanjarGaris} />
      <Still id={LATAR_SHEET.id} component={LatarSheet} width={LATAR_SHEET.width} height={LATAR_SHEET.height} defaultProps={{ varian: "navy" as const }} />
      <Still id="DarkChalk-LatarHijau" component={LatarSheet} width={LATAR_SHEET.width} height={LATAR_SHEET.height} defaultProps={{ varian: "hijau" as const }} />
      <Still id={IKON_SHEET.id} component={IkonSheet} width={IKON_SHEET.width} height={IKON_SHEET.height} />
      {/* Sumber PNG papan dan bingkai; render ulang bila diubah (perintah di src/dark-chalk/README.md) */}
      <Still id="DarkChalk-Bingkai" component={BingkaiKayu} width={BINGKAI.width} height={BINGKAI.height} />
      <Still id="DarkChalk-TeksturNavy" component={TeksturPapan} width={TEKSTUR.width} height={TEKSTUR.height} defaultProps={{ varian: "navy" as const }} />
      <Still id="DarkChalk-TeksturHijau" component={TeksturPapan} width={TEKSTUR.width} height={TEKSTUR.height} defaultProps={{ varian: "hijau" as const }} />
    </Folder>

    <Folder name="Demo">
      <Composition {...spek(TAKO_DEMO, TAKO_DEMO_DURATION)} component={TakoDemo} />
      <Composition {...spek(CAST_DEMO, CAST_DEMO_DURATION)} component={CastDemo} />
      <Composition {...spek(EXPLAINERS_DEMO, EXPLAINERS_DEMO_DURATION)} component={ExplainersDemo} />
      <Composition {...spek(EFFECTS_DEMO, EFFECTS_DEMO_DURATION)} component={EffectsDemo} />
    </Folder>

    <Folder name="Lembar">
      <Still id={PROPS_DEMO.id} component={PropsDemo} width={PROPS_DEMO.width} height={PROPS_DEMO.height} />
      <Still id={THUMBNAIL_DEMO.id} component={ThumbnailDemo} width={THUMBNAIL_DEMO.width} height={THUMBNAIL_DEMO.height} />
      <Still id="EduBackdrops" component={EduBackdropsDemo} width={EDU_BACKDROPS_DEMO.width} height={EDU_BACKDROPS_DEMO.height} />
      <Still id="TakoCastExpressions" component={CastExpressionSheet} width={SHEET.width} height={SHEET.height} defaultProps={{ id: "awan" as const }} />
    </Folder>
  </>
);
