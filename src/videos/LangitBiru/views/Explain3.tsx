import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { Bandingkan, Fase, Langkah } from "../../../explainers/pola";
import { GelombangCahaya, Mata } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Explain3, dua fase: (1) Bandingkan: ungu tersebar lebih kuat daripada biru; (2) Langkah: dua alasan langit tetap biru.
export const Explain3: React.FC<SceneProps> = ({ at }) => {
  const frame = useCurrentFrame();
  const tapi = at("Tapi");
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <Fase sampai={tapi}>
        <Bandingkan
          judul="Ungu tersebar lebih kuat"
          sorotJudul="Ungu"
          topic="ilmu"
          pemenang="a"
          sorotAt={at("lebih kuat")}
          a={{ label: "Ungu", nilai: "lebih kuat", gambar: (k) => <GelombangCahaya {...k} topic="ilmu" wavelength={70} progress={frame / 40} /> }}
          b={{ label: "Biru", nilai: "kuat", gambar: (k) => <GelombangCahaya {...k} topic="planet" wavelength={90} progress={frame / 45} /> }}
        />
      </Fase>
      <Fase dari={tapi}>
        <Langkah
          judul="Tapi langit tetap biru"
          sorotJudul="biru"
          judulAt={tapi}
          topic="planet"
          butir={[
            { teks: "Cahaya ungu dari Matahari sedikit", at: at("cahaya ungu", 1), gambar: (k) => <CastCharacter id="matahari" x={k.x} y={k.y + k.size * 0.45} size={k.size} expression="happy" animation="idle" /> },
            { teks: "Mata kurang peka pada ungu", at: at("mata kita"), gambar: (k) => <Mata {...k} topic="tubuh" /> },
          ]}
        />
      </Fase>
    </AbsoluteFill>
  );
};
