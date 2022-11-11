import { FateAspect } from './FateAspect';

export class FateStuntsExtras {
	// ID Unique to FATECoreCharSheet instance
  id?: any;
  // Character High Concept Aspect(s)
	stunts?: FateAspect[];
  // Character Trouble Aspect(s)
  extras?: FateAspect[];
  // Additional Character Aspect(s)
}
