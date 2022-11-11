import { FateConsequenceSlot } from './FateConsequenceSlot';
import { FateStressTrack } from './FateStressTrack';

export class FateStressConsequences {
	// ID Unique to FATECoreCharSheet instance
  id?: any;
  // Character Stress Track(s)
  stressTrack?: FateStressTrack[];
  // Character Consequence Slot(s)
  consequences?: FateConsequenceSlot[];
}
