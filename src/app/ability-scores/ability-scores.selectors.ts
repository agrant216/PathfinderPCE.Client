import { createSelector } from "@ngrx/store";
import { map } from "rxjs";
import { AppState, selectAbilityScores } from "../app-state";
import { Abilities, AbilityScore, AbilityScores } from "../models/core-stats.model";
import { IModifierBySubtype } from "../models/modifier.model";

export interface AbilitiesArray{
  [index: string]: {name: string, short: string } & AbilityScore;
}

export interface AbilityScoreState {
  modifiedAbilityScores: Array<{name: string, short: string } & AbilityScore>;
}

export class AbilityScoresSelectors {

  private static selectScores = createSelector(
    selectAbilityScores,
    (abilityScores) => abilityScores.abilities
  );

  private static selectabilityModifiers = createSelector(
    selectAbilityScores,
    (scores) => scores.modifiers.modifiersBySubtype
  );

  private static selectModifiedAbilityScores = createSelector(
    this.selectScores,
    this.selectabilityModifiers,
    (scores, mods) => {
      let abilitiesArray: Array<{name: string, short: string } & AbilityScore> = [];
      abilitiesArray.push({name: 'Strength', short: 'STR', ...this.createAbility('Strength', scores, mods)});
      abilitiesArray.push({name: 'Dexterity', short: 'DEX', ...this.createAbility('Dexterity', scores, mods)});
      abilitiesArray.push({name: 'Constitution', short: 'CON', ...this.createAbility('Constitution', scores, mods)});
      abilitiesArray.push({name: 'Intelligence', short: 'INT', ...this.createAbility('Intelligence', scores, mods)});
      abilitiesArray.push({name: 'Wisdom', short: 'WIS', ...this.createAbility('Wisdom', scores, mods)});
      abilitiesArray.push({name: 'Charisma', short: 'CHA', ...this.createAbility('Charisma', scores, mods)});
      return abilitiesArray;
    }
    // (scores, mods) => <AbilitiesArray>{
    //   'strength' : {name: 'Strength', short: 'STR', ...this.createAbility('Strength', scores, mods)},
    //   'dexterity': {name: 'Dexterity', short: 'DEX', ...this.createAbility('Dexterity', scores, mods)},
    //   'constitution': {name: 'Constitution', short: 'CON', ...this.createAbility('Constitution', scores, mods)},
    //   'intelligence': {name: 'Intelligence', short: 'INT', ...this.createAbility('Intelligence', scores, mods)},
    //   'wisdom': {name: 'Wisdom', short: 'WIS', ...this.createAbility('Wisdom', scores, mods)},
    //   'charisma': {name: 'Charisma', short: 'CHA', ...this.createAbility('Charisma', scores, mods)},
    // }
  );

  public static state = createSelector(
    this.selectModifiedAbilityScores,
    (modifiedAbilityScores) => <AbilityScoreState>{
      modifiedAbilityScores
    }
  );

  private static createAbility(abilityName: string, scores: Abilities, mods:IModifierBySubtype){
    const base = scores[abilityName] ? scores[abilityName].baseValue : 0;
    const mod: number= mods[abilityName] ? mods[abilityName].Mod : 0;
    return <AbilityScore>{baseValue:base, tempValue:base + mod, modValue:((base + mod)-10)/2}
  }

}
