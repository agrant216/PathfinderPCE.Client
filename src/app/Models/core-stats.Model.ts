import { Modifer } from "./modifier.model";

export interface ArmorClass {
    Base: number;
    ArmorBonus: number;
    ShieldBonus: number;
    StatBonus: number;
    SizeBonus: number;
    NaturalArmor: number;
    DodgeBonus: number;
    DeflectionBonus: number;
    MiscBonus: number;
    Modifiers: Array<Modifer>;
}

export interface Health {
    Total: number;
    Wounds: number;
    NonLethal: number;
}

export interface Save {
    TotalValue: number;
    BaseValue: number;
    AbilityValue: number;
    ModValue: number;
}

export interface SavingThrows {
    Fortitude: Save;
    Reflex: Save;
    Will: Save;
    Modifiers: Array<Modifer>
}

export interface AbilityScore {
    BaseValue: number;
    TempValue: number;
    readonly ModValue: number;
}

export interface AbilityScores {
    Strength: AbilityScore;
    Dexterity: AbilityScore;
    Constitution: AbilityScore;
    Intelligence: AbilityScore;
    Wisdom: AbilityScore;
    Charisma: AbilityScore;
    Modifiers: Array<Modifer>;
}

export interface Skill {
    Name: string;
    Ability: string;
    IsClassSkill: boolean;
    TotalModValue: number;
    AbilityMod: number;
    Ranks: number;
    MiscMod: number;
}

export interface Skills{
    SkillsList: Array<Skill>;
    Modifiers: Array<Modifer>;
}

export interface Save {
    TotalValue: number;
    BaseValue: number;
    AbilityValue: number;
    ModValue: number;
}
