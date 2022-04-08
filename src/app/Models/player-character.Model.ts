import { AbilityScores, ArmorClass, Health, Skills } from "./core-stats.Model";

export interface PlayerCharacter {
    id: string;
    name: string;
    level: number;
    classLevels: any;
    hitPoints: Health;
    AbilityScores: AbilityScores;
    AC: ArmorClass;
    Skills: Skills;
}
