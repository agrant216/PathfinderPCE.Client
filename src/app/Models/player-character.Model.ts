import { AbilityScores, ArmorClass, Health, SavingThrows, Skills } from "./core-stats.model";

export interface PlayerCharacter {
    id: string;
    name: string;
    level: number;
    classLevels?: any;
    hitPoints?: Health;
    abilityScores: AbilityScores;
    ac: ArmorClass;
    skills?: Skills;
    savingThrows?: SavingThrows;
}
