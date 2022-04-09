import { Modifer } from "./modifier.model";


export interface ArmorClass {
    base: number;
    armorBonus: number;
    shieldBonus: number;
    statBonus: number;
    sizeBonus: number;
    naturalArmor: number;
    dodgeBonus: number;
    deflectionBonus: number;
    miscBonus: number;
    modifiers: Array<Modifer>;
}

export interface Health {
    total: number;
    wounds: number;
    nonLethal: number;
}

export interface Save {
    totalValue: number;
    baseValue: number;
    abilityValue: number;
    modValue: number;
}

export interface SavingThrows {
    fortitude: Save;
    reflex: Save;
    will: Save;
    modifiers: Array<Modifer>
}

export interface AbilityScore {
    baseValue: number;
    tempValue: number;
    readonly modValue: number;
}

export interface AbilityScores {
    strength: AbilityScore;
    dexterity: AbilityScore;
    constitution: AbilityScore;
    intelligence: AbilityScore;
    wisdom: AbilityScore;
    charisma: AbilityScore;
    modifiers: Array<Modifer>;
}

export interface Skill {
    name: string;
    ability: string;
    isClassSkill: boolean;
    totalModValue: number;
    abilityMod: number;
    ranks: number;
    miscMod: number;
}

export interface Skills{
    skillsList: Array<Skill>;
    modifiers: Array<Modifer>;
}

export interface Save {
    totalValue: number;
    baseValue: number;
    abilityValue: number;
    modValue: number;
}
