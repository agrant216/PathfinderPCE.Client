import * as fromArmorClass from './reducers/armor-class.reducers';
import * as fromAbilityScores from './reducers/ability-scores.reducers';
import { AbilityScores, ArmorClass } from '../models/core-stats.model';
import { ActionReducer, ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';


export interface AppState {
  abilityScores: AbilityScores;
  armorClass: ArmorClass;
}

export const selectAbilityScores = (state:AppState) => state.abilityScores;
//export const selectAbilityScores = createFeatureSelector<AppState,AbilityScores>('abilityScores');
export const selectArmorClass = createFeatureSelector<ArmorClass>('armorClass');

export const reducers: ActionReducerMap<AppState> = {
  abilityScores: fromAbilityScores.reducer,
  armorClass: fromArmorClass.reducer
}

const reducerKeys = ['abilityScores', 'armorClass'];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducerKeys})(reducer);
}
