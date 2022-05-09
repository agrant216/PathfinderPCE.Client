import { createSelector } from "@ngrx/store";
import { AbilityScoresSelectors } from "../ability-scores/ability-scores.selectors";
import { ArmorClass } from "../models/core-stats.model";
import { ModifierSelectors } from "../modifiers/modifiers.selectors";
import { dataHelper } from "../shared/static-data";


export interface ArmorClassState {
    ac: ArmorClass;
    totalAC: number;
    flatFootedAC: number;
    touchAC: number;
}

export class ArmorClassSelectors {

    private static selectReducedModifiers = createSelector(
        ModifierSelectors.selectArmorClassModifiers,
        acMods => dataHelper.groupBySubtype(acMods)
      );
      
    private static selectArmorClassWithModifiers = createSelector(
        ArmorClassSelectors.selectReducedModifiers,
        AbilityScoresSelectors.selectModifiedAbility('Dexterity'),
        (mods, dex) => <ArmorClass>{
            base: 10,
            armorBonus: mods['Armor']?.totalMod ?? 0,
            shieldBonus: mods['Shield']?.totalMod  ?? 0,
            statBonus: dex?.modValue ?? 0,
            sizeBonus: mods['Size']?.totalMod  ?? 0,
            naturalArmor: mods['Natural Armor']?.totalMod ?? 0,
            dodgeBonus: mods['Dodge']?.totalMod ?? 0,
            deflectionBonus: mods['Deflection']?.totalMod ?? 0,
            miscBonus: mods['Misc']?.totalMod ?? 0
        }
    );

    private static selectTotalAC = createSelector(
        ArmorClassSelectors.selectArmorClassWithModifiers,
        ac => {console.log('AC', ac); return ac.base + ac.armorBonus + ac.shieldBonus + ac.statBonus + ac.sizeBonus + ac.naturalArmor + ac.dodgeBonus + 
            ac.deflectionBonus + ac.miscBonus}
    );

    private static selectFlatFootedAC = createSelector(
        ArmorClassSelectors.selectArmorClassWithModifiers,
        ac => ac.base + ac.armorBonus + ac.shieldBonus + ac.sizeBonus + ac.naturalArmor + ac.deflectionBonus + ac.miscBonus
    );

    private static selectTouchAC = createSelector(
        ArmorClassSelectors.selectArmorClassWithModifiers,
        ac => ac.base + ac.statBonus + ac.sizeBonus + ac.dodgeBonus + ac.deflectionBonus + ac.miscBonus
    );

    public static state = createSelector(
        ArmorClassSelectors.selectArmorClassWithModifiers,
        ArmorClassSelectors.selectTotalAC,
        ArmorClassSelectors.selectFlatFootedAC,
        ArmorClassSelectors.selectTouchAC,
        (ac, totalAC, flatFootedAC, touchAC) => <ArmorClassState>{
            ac,
            totalAC,
            flatFootedAC,
            touchAC
        }
    );
}