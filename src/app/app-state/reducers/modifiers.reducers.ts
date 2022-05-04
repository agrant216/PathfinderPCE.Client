import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { Modifier } from "src/app/models/modifier.model";
import { addModifier } from "../actions/modifiers.actions";

interface ModifierState extends EntityState<Modifier> {}

export const adapter: EntityAdapter<Modifier> = createEntityAdapter<Modifier>({
    selectId: modifier => modifier.id,
    sortComparer: (a,b) => a.id.localeCompare(b.id)
});

export const initialState: ModifierState = adapter.getInitialState({});

const {selectIds, selectEntities, selectAll, selectTotal} = adapter.getSelectors();

export const selectAllModifiers = selectAll;

const modifierReducer = createReducer(
    initialState,
    on(addModifier, (state, {mod}) => {
        return adapter.addOne(mod, state);
    })
);

export function reducer(state: ModifierState | undefined, action: Action):any {
    return modifierReducer(state, action);
  }