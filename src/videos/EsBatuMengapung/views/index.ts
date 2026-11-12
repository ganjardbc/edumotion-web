import type { SceneRenderers } from "../../_shared/types";
import { Cta } from "./Cta";
import { Explain1 } from "./Explain1";
import { Explain2 } from "./Explain2";
import { Explain3 } from "./Explain3";
import { Hook } from "./Hook";
import { Kunci } from "./Kunci";
import { Payoff } from "./Payoff";
import { Setup } from "./Setup";
import { Twist } from "./Twist";

export const RENDERERS: SceneRenderers = { Hook, Setup, Twist, Explain1, Explain2, Explain3, Kunci, Payoff, Cta };
