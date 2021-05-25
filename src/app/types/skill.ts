import { Ability } from "./ability";

export class Skill {
  name: string;
  keyAbility: Ability;

  abilityMod: number;
  ranks: number;
  miscMod: number;
  skillMod: number;

  hasArmorCheckPenalty: boolean;
  canUseUntrained: boolean;
  classSkill: boolean;
}
