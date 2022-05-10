import { createSelector } from "@ngrx/store";
import { AbilityScoresSelectors } from "../ability-scores/ability-scores.selectors";
import { Save, SavingThrows } from "../models/core-stats.model";
import { ModifierSelectors } from "../modifiers/modifiers.selectors";
import { dataHelper } from "../shared/static-data";

export interface SavingThrowState {
    savingThrows: SavingThrows
}

export class SavingThrowSelector {
    
    private static selectReducedModifiers = createSelector(
        ModifierSelectors.selectSavingThrowModifiers,
        saveMods => dataHelper.groupBySubtype(saveMods)
      );

      public static selectReflexSave = createSelector(
        AbilityScoresSelectors.selectModifiedAbility('Dexterity'),
        SavingThrowSelector.selectReducedModifiers,
        (dex, mods) => <Save>{
            classValue: 0,
            abilityValue: dex?.modValue ?? 0,
            modValue: mods['Reflex']?.totalMod ?? 0
        }
      );

      public static selectFortitudeSave = createSelector(
        AbilityScoresSelectors.selectModifiedAbility('Constitution'),
        SavingThrowSelector.selectReducedModifiers,
        (con, mods) => <Save>{
            classValue: 0,
            abilityValue: con?.modValue ?? 0,
            modValue: mods['Fortitude']?.totalMod ?? 0
        }
      );

      public static selectWillSave = createSelector(
        AbilityScoresSelectors.selectModifiedAbility('Dexterity'),
        SavingThrowSelector.selectReducedModifiers,
        (wis, mods) => <Save>{
            classValue: 0,
            abilityValue: wis?.modValue ?? 0,
            modValue: mods['Will']?.totalMod ?? 0
        }
      );

      private static selectSavingThrowsWithModifiers = createSelector(
        SavingThrowSelector.selectReflexSave,
        SavingThrowSelector.selectFortitudeSave,
        SavingThrowSelector.selectWillSave,
        (reflex, fort, will) => <SavingThrows>{
            reflex: reflex,
            fortitude: fort,
            will: will
        }
      );

      public static state = createSelector(
        SavingThrowSelector.selectSavingThrowsWithModifiers,
        (savingThrows) => <SavingThrowState>{
            savingThrows
        }
      );
}