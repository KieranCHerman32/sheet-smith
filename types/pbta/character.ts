import { CharHx } from './charHx';
import { Gear } from "./gear";
import { Improvement } from './improvement';
import { Move } from "./move";
import { Playbook } from "./playbook";
import { Stat } from './stat';

export interface Character extends Playbook {
  charName: string;
  charLook: string[];
  charStats: Stat[][];
  charMoves: Move[];
  charGear: Gear[];
  charBarter: any;
  charHx: CharHx[];
  charImprovement: Improvement;
}
