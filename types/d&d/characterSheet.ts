import { Ability } from "./ability";
import { ACData } from "./acData";
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
  character: CharacterInfo; // implemented
  speed: number;
  abilities: Ability[]; // implemented
  hitPoints: HitPointData; // implemented
  armorClass: ACData; // implemented
  savingThrows: SavingThrow[]; // implemented
  initiative: InitiativeData; // implemented
  baseAtkBonus: number;
  resistances: Resistance[]; // implemented
  grapple: GrappleData; // implemented
  attacks: Attack[];
  skills: Skill[]; // implemented
  inventory: InventoryData;
  feats: Feat[];
  specialAbilities: string[];
  spellSheet: SpellData;
}

