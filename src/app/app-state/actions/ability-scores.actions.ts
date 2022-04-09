import { createAction, props } from "@ngrx/store";
import { AbilityScore } from "src/app/models/core-stats.model";

export const setScore = createAction(
    '[Ability Score] Setting Ability Score',
    props<{score:AbilityScore}>()
)