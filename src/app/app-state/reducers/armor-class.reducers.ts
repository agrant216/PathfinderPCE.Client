import { Action, createReducer, on } from "@ngrx/store";
import { ArmorClass } from "src/app/models/core-stats.model";
import { loadCharacterSuccess } from "../actions/pc.actions";


export const initialState: ArmorClass = {
  base: 0,
  armorBonus: 0,
  shieldBonus: 0,
  statBonus: 0,
  sizeBonus: 0,
  naturalArmor: 0,
  dodgeBonus: 0,
  deflectionBonus: 0,
  miscBonus: 0,
  modifiers: []
}

const armorClassReducer = createReducer(
  initialState,
  on(loadCharacterSuccess, (state, pc) => pc.ac)
  );

export function reducer(state: ArmorClass | undefined, action: Action):any {
  return armorClassReducer(state, action);
}
