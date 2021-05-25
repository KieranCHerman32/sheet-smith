import { Ability } from "./ability";
import { CharacterInfo } from "./characterInfo";

export class CharacterSheet {
  isNPC: boolean;
  playerNm: boolean;
  character: CharacterInfo;
  speed: number;
  abilities: Ability[];
  hitPoints: hitPointData;
  armorClass: acData;
  savingThrows: SavingThrow[];
  initiative: InitiativeData;
  baseAtkBonus: number;
  resistance: Resistance[];
  grapple: GrappleData;
  attacks: Attack[];
  skills: Skill[];
  inventory: InventoryData;
  feats: Feat[];
  specialAbilities: string[];
  spellSheet: SpellData;
}

