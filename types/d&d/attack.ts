import { Ammunition } from "./ammunition";
import { Roll } from "./roll";

export interface Attack {
  nm: string;
  atkBonus: number;
  damage: Roll;
  crit: number;
  range: number;
  type: string;
  notes: string;
  ammunition: Ammunition;
}
