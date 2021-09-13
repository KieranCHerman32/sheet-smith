import { Ability } from "./ability";
import { ConditionalMod } from "./conditionalMod";

export interface SavingThrow {
  saveName: string;
  saveTotal: number;
  keyAbility: Ability; // implemented
  baseSae: number;
  abilityMod: number;
  magicMod: number;
  miscMod: number;
  tempMod: number;
  conditionalMods: ConditionalMod; // implemented
}
