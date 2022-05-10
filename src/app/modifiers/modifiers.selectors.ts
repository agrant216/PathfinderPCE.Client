import { createSelector } from "@ngrx/store";
import { selectModifiers } from "../app-state";
import { selectAllModifiers } from "../app-state/reducers/modifiers.reducers";
import { Modifier } from "../models/modifier.model";


export interface ModifierState {
    modifierList: Array<Modifier>
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

    public static selectArmorClassModifiers = createSelector(
        ModifierSelectors.selectEntityModifiers,
        entities => entities.filter(mods => mods.type === 'Armor Class')
    );

    public static selectSavingThrowModifiers = createSelector(
        ModifierSelectors.selectEntityModifiers,
        entities => entities.filter(mods => mods.type === 'Saving Throw')
    );

    public static state = createSelector(
        this.selectEntityModifiers,
        (modifierList)=> <ModifierState>{
            modifierList
        }
    )
}