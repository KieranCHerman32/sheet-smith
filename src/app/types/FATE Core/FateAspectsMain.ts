import { FateAspect } from './FateAspect';

export class FateAspectsMain {
	// ID Unique to FATECoreCharSheet instance
  id?: any;
  // Character High Concept Aspect(s)
	highConcept?: FateAspect[];
  // Character Trouble Aspect(s)
  trouble?: FateAspect[];
  // Additional Character Aspect(s)
  other?: FateAspect[];
}
