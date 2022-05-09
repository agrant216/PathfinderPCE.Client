import { createSelector } from "@ngrx/store";
import { selectAbilityScores } from "../app-state";
import { Abilities, AbilityScore } from "../models/core-stats.model";
import { ModifierSelectors } from "../modifiers/modifiers.selectors";
import { dataHelper } from "../shared/static-data";

export interface AbilitiesArray{
  [index: string]: {name: string, short: string } & AbilityScore;
}

export interface AbilityScoreState {
  modifiedAbilityScores: Array<{name: string, short: string } & AbilityScore>;
}

export class AbilityScoresSelectors {

  private static displayAbilities = [
    {name: 'Strength', short: 'STR'},{name: 'Dexterity', short: 'DEX'},{name: 'Constitution', short: 'CON'},
    {name: 'Intelligence', short: 'INT'},{name: 'Wisdom', short: 'WIS'},{name: 'Charisma', short: 'CHA'}
  ];

  private static selectScores = createSelector(
    selectAbilityScores,
    (abilityScores) => abilityScores.abilities
  );

  private static selectReducedModifiers = createSelector(
    ModifierSelectors.selectAttributeModifiers,
    attributeMods => dataHelper.groupBySubtype(attributeMods)
  );

  private static selectModifiedAbilityScores = createSelector(
    this.selectScores,
    this.selectReducedModifiers,
    (scores, mods) => {
      let abilitiesArray: Array<{name: string, short: string } & AbilityScore> = [];
      this.displayAbilities.forEach(ability => abilitiesArray.push(
        {name: ability.name, short: ability.short, ...this.createAbility(ability.name, scores, mods[ability.name]?.totalMod ?? 0)}))
      return abilitiesArray;
    }
  );

  public static selectModifiedAbility = (ability: string) => createSelector(
    AbilityScoresSelectors.selectModifiedAbilityScores,
    moddedScores => moddedScores.find(score => score.name.toLowerCase() === ability.toLowerCase())
  );

  public static state = createSelector(
    this.selectModifiedAbilityScores,
    (modifiedAbilityScores) => <AbilityScoreState>{
      modifiedAbilityScores
    }
  );

  private static createAbility(abilityName: string, scores: Abilities, mods:number){
    const base = scores[abilityName] ? scores[abilityName].baseValue : 0;
    return <AbilityScore>{baseValue:base, tempValue:base + mods, modValue:Math.floor(((base + mods)-10)/2)}
  }

}
