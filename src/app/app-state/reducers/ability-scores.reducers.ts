import { Action, createReducer, on } from "@ngrx/store";
import { AbilityScores } from "src/app/models/core-stats.model";
import { updateAllScores, updateOneScore } from "../actions/ability-scores.actions";
import { loadCharacterSuccess } from "../actions/pc.actions";

export const initialState: AbilityScores = {
  abilities: {
    "Strength": {baseValue: 0, tempValue: 0, modValue: 0},
    "Dexterity": {baseValue: 0, tempValue: 0, modValue: 0},
    "Constitution": {baseValue: 0, tempValue: 0, modValue: 0},
    "Intelligence": {baseValue: 0, tempValue: 0, modValue: 0},
    "Wisdom": {baseValue: 0, tempValue: 0, modValue: 0},
    "Charisma": {baseValue: 0, tempValue: 0, modValue: 0},
  }
}

const abilityScoreReducer = createReducer(
  initialState,
  on(loadCharacterSuccess, (state, pc) => {console.log("pc.abilityScores",pc.abilityScores); return {...state, abilities: pc.abilityScores.abilities};}),
  //on(updateAllScores, (state, dict) => {return {...state, abilities: {...state.abilities, "Strength": {...state.abilities.strength, baseValue: dict["Strength"] ?? 0} }}}),
  on(updateOneScore, (state, score) => {return{...state, abilities: {...state.abilities, [score.name] : {...state.abilities[score.name], baseValue: score.value}}}})
);

export function reducer(state: AbilityScores | undefined, action: Action):any {
  return abilityScoreReducer(state, action);
}
