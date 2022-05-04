import { createSelector } from "@ngrx/store";
import { selectModifiers } from "../app-state";
import { selectAllModifiers } from "../app-state/reducers/modifiers.reducers";


export interface ModifierState {

}

export class ModifierSelectors {

    private static selectEntityModifiers = createSelector(
        selectModifiers,
        selectAllModifiers
    );

    public static selectAttributeModifiers = createSelector(
        ModifierSelectors.selectEntityModifiers,
        (entities) => entities.filter(mods => mods.type === 'Attribute')
    );
}