import { FateAspectsMain } from './FateAspectsMain';
import { FateId } from './FateId';
import { FateSkillLevel } from './FateSkillLevel';
import { FateStressConsequences } from './FateStressConsequences';
import { FateStuntsExtras } from './FateStuntExtras';

export class FATECoreCharSheet {
	// Shared between all components of FATECoreCharSheet instance
	id?: any;
  // # FATE Points held by Character
  fatePts?: number;
  // # FATE Points on each reset
  refresh?: number;
  // "ID" Section of FATE CORE Character Sheet
	fateId?: FateId;
  // "Aspects" Section of FATE CORE Character Sheet
  aspects?: FateAspectsMain;
  // "Skills" Section of FATE CORE Character Sheet
  skillLadder?: FateSkillLevel[];
  // "Stress & Consequences" Section of FATE CORE Character Sheet
  stressCon?: FateStressConsequences;
  // "Stunts & Extras" Section of FATE CORE Character Sheet
  stuntsExtras?: FateStuntsExtras;
}
