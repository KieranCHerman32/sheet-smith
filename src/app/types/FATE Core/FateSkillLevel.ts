import { FateSkill } from './FateSkill';

export class FateSkillLevel {
	// ID Unique to FATECoreCharSheet instance
  id?: any;
  // Skill Ladder Level
	level?: number;
  // Label for Skill Level
  label?: string;
  // Skill(s) at Level
  skills?: FateSkill[];
}
