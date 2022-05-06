import { AbilityScores, ArmorClass, Health, SavingThrows, Skill } from "./core-stats.model";

export interface PlayerCharacter {
    id: string;
    name: string;
    level: number;
    classLevels?: any;
    hitPoints?: Health;
    abilityScores: AbilityScores;
    ac: ArmorClass;
    skills?: Array<Skill>;
    savingThrows?: SavingThrows;
}
