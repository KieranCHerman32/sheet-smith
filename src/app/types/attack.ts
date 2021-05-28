export interface Attack {
  nm: string;
  atkBonus: number;
  damage: Roll;
  crit: number;
  range: AtkRange;
  type: string;
  notes: string;
  ammunition: Ammunition;
}
