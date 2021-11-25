import { Gear } from './gear';
import { HxOpt } from './hxOpt';
import { Improvement } from './improvement';
import { LookOpts } from './lookOpts';
import { Move } from './move';
import { Stat } from './stat';

export interface Playbook {
  pbName: string;
  pbDesc: string;
  pbStats: Stat[][];
  pbFirstNameOpts: string[];
  pbLookOpts: LookOpts;
  pbMoves: Move[];
  pbSpecial: Move;
  pbRules: Move[];
  pbGear: Gear[];
  pbBarter: any;
  pbHx: HxOpt[];
  pbImprovement: Improvement;
}
