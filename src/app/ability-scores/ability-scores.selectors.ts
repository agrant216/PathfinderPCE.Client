import { createSelector } from "@ngrx/store";
import { map } from "rxjs";
import { AppState, selectAbilityScores } from "../app-state";
import { Abilities, AbilityScore, AbilityScores } from "../models/core-stats.model";
import { IModifierBySubtype } from "../models/modifier.model";

export const abilityArray = [
  {name:'Strength', short: 'STR'},
  {name:'Dexterity', short: 'DEX'},
  {name:'Constitution', short: 'CON'},
  {name:'Intelligence', short: 'INT'},
  {name:'Wisdom', short: 'WIS'},
  {name:'Charisma', short: 'CHA'}
];

export interface AbilityScoreState {
  modifiedAbilityScores: Abilities;
}

export class AbilityScoresSelectors {

  //private static selectAbilityScores = (state: AppState) => state.abilityScores;

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
    (scores, mods) => <Abilities>{
      'strength': this.createAbility('Strength', scores, mods),
      'dexterity': this.createAbility('Dexterity', scores, mods),
      'constitution': this.createAbility('Constitution', scores, mods),
      'intelligence': this.createAbility('Intelligence', scores, mods),
      'wisdom': this.createAbility('Wisdom', scores, mods),
      'charisma': this.createAbility('Charisma', scores, mods),
    }
  );

  public static state = createSelector(
    this.selectModifiedAbilityScores,
    (modifiedAbilityScores) => <AbilityScoreState>{
      modifiedAbilityScores
    }
  );

  private static createAbility(abilityName: string, scores: Abilities, mods:IModifierBySubtype): AbilityScore{
    console.log(scores);
    const base = scores[abilityName].baseValue;
    const mod: number= mods[abilityName] ? mods[abilityName].Mod : 0;
    return <AbilityScore>{baseValue:base, tempValue:base + mod, modValue:((base + mod)-10)/2}
  }

}
