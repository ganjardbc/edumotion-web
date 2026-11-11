import type React from "react";
import { AbsoluteFill } from "remotion";
import { EduBackdrop } from "../../../assets/backdrops";
import { CastCharacter } from "../../../characters/cast";
import { Bandingkan, Fase, SebabAkibat } from "../../../explainers/pola";
import { SinyalBar, WifiSignal } from "../../../props";
import { META } from "../scenes";
import type { SceneProps } from "../../_shared/types";

// Explain2, dua fase: (1) SebabAkibat: sinyal lemah → HP terus mencari; (2) Bandingkan: Wi-Fi hemat, seluler boros.
export const Explain2: React.FC<SceneProps> = ({ at }) => {
  const wifi = at("Wi-Fi");
  const seluler = at("seluler");
  return (
    <AbsoluteFill>
      <EduBackdrop topic={META.topic} />
      <Fase sampai={wifi}>
        <SebabAkibat
          judul="Sinyal lemah ikut boros"
          sorotJudul="boros"
          topic="teknologi"
          sebab={{ teks: "Sinyal lemah", at: at("Sinyal"), gambar: (k) => <SinyalBar {...k} level={1} /> }}
          akibat={{ teks: "Terus mencari sinyal", at: at("mencari"), gambar: (k) => <CastCharacter id="hape" x={k.x} y={k.y + k.size * 0.45} size={k.size * 1.7} expression="confused" animation="confusion" /> }}
        />
      </Fase>
      <Fase dari={wifi}>
        <Bandingkan
          judul="Wi-Fi lebih hemat"
          sorotJudul="hemat"
          judulAt={wifi}
          topic="teknologi"
          pemenang="a"
          sorotAt={seluler + 15}
          a={{ label: "Wi-Fi", nilai: "hemat", at: wifi, gambar: (k) => <WifiSignal {...k} level={3} /> }}
          b={{ label: "Seluler", nilai: "boros", at: seluler, gambar: (k) => <SinyalBar {...k} level={2} /> }}
        />
      </Fase>
    </AbsoluteFill>
  );
};
