import { CharClass } from "./charclass";
import { Deity } from "./deity";
import { Race } from "./race";
import { Size } from "./size";

export interface CharacterInfo {
name: string;
careerXp: number;
classInfo: CharClass[];
race: Race;
alignment: string;
Deity: Deity;
size: Size;
age: number;
pronouns: string[];
height: string;
weight: string;
eyes: string;
hair: string;
skin: string;
miscInfo: string;
}
