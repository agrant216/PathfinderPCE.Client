import { Action, createReducer, on } from "@ngrx/store";
import { AbilityScores } from "src/app/models/core-stats.model";
import { PlayerCharacter } from "src/app/models/player-character.model";
import { loadCharacterSuccess } from "../actions/pc.actions";

export const initialState: AbilityScores = {
  strength: {baseValue: 0, tempValue: 0, modValue: 0},
  dexterity: {baseValue: 0, tempValue: 0, modValue: 0},
  constitution: {baseValue: 0, tempValue: 0, modValue: 0},
  intelligence: {baseValue: 0, tempValue: 0, modValue: 0},
  wisdom: {baseValue: 0, tempValue: 0, modValue: 0},
  charisma: {baseValue: 0, tempValue: 0, modValue: 0},
  modifiers: []
}

const abilityScoreReducer = createReducer(
  initialState,
  on(loadCharacterSuccess, (state, pc) => {console.log("pc.abilityScores",pc.abilityScores); return pc.abilityScores})
);

export function reducer(state: AbilityScores | undefined, action: Action):any {
  return abilityScoreReducer(state, action);
}
