import { Ability } from "./ability";
import { ACata } from "./acData";
import { Attack } from "./attack";
import { CharacterInfo } from "./characterInfo";
import { Feat } from "./feat";
import { GrappleData } from "./grappleData";
import { HitPointData } from "./hitPointData";
import { InitiativeData } from "./initiativeData";
import { InventoryData } from "./inventoryData";
import { Resistance } from "./resistance";
import { SavingThrow } from "./savingThrow";
import { Skill } from "./skill";
import { SpellData } from "./spellData";

export interface CharacterSheet {
  isNPC: boolean;
  playerNm: boolean;
  character: CharacterInfo;
  speed: number;
  abilities: Ability[];
  hitPoints: HitPointData;
  armorClass: ACata;
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

