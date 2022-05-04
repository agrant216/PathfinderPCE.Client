import * as fromArmorClass from './reducers/armor-class.reducers';
import * as fromAbilityScores from './reducers/ability-scores.reducers';
import * as fromModifiers from './reducers/modifiers.reducers'
import { AbilityScores, ArmorClass } from '../models/core-stats.model';
import { ActionReducer, ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { EntityState } from '@ngrx/entity';
import { Modifier } from '../models/modifier.model';


export interface AppState {
  abilityScores: AbilityScores;
  armorClass: ArmorClass;
  modifiers: EntityState<Modifier>;
}

export const selectAbilityScores = (state:AppState) => {console.log(state.abilityScores); return state.abilityScores;}
export const selectModifiers = (state: AppState) => state.modifiers;
export const selectArmorClass = createFeatureSelector<ArmorClass>('armorClass');

export const reducers: ActionReducerMap<AppState> = {
  abilityScores: fromAbilityScores.reducer,
  armorClass: fromArmorClass.reducer,
  modifiers: fromModifiers.reducer
}

const reducerKeys = ['abilityScores', 'armorClass', 'modifiers'];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducerKeys, rehydrate: true})(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
