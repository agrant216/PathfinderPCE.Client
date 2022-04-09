import { createAction, props } from "@ngrx/store";
import { AbilityScores, ArmorClass, Health, SavingThrows, Skills } from "src/app/models/core-stats.model";

export const loadAbilityScores = createAction(
    '[Attributes] Loading Ability Scores',
    props<{scores:AbilityScores}>()
  );

export const loadArmorClass = createAction(
    '[Attributes] Loading Armor Class',
    props<{ac:ArmorClass}>()
  );

  export const loadSavingThrows = createAction(
    '[Attributes] Loading Saving Throws',
    props<{saves:SavingThrows}>()
  );

  export const loadSkillRanks = createAction(
    '[Attributes] Loading Skill Ranks',
    props<{skills:Skills}>()
  );

  export const loadHitPoints = createAction(
    '[Attributes] Loading Hit Points',
    props<{hp:Health}>()
  );