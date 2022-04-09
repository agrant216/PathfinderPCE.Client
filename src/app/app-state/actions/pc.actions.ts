import { createAction, props } from "@ngrx/store";
import { PlayerCharacter } from "src/app/models/player-character.model";

export const loadNewCharacter = createAction(
  '[PC] Loading New Character',
  props<any>()
);

export const loadExistingCharacter = createAction(
  '[PC] Loading Existing Character',
  props<any>()
);

export const loadCharacterSuccess = createAction(
  '[PC] Load Character Success',
  props<any>()
);

export const loadCharacterFailure = createAction(
  '[PC] Load Character Failure',
  props<any>()
);


export const saveCharacter = createAction(
  '[PC] Saving Character',
  props<{pc: PlayerCharacter}>()
);

export const saveCharacterSuccess = createAction(
  '[PC] Save Character Success',
  props<any>()
);

export const saveCharacterFailure = createAction(
  '[PC] Save Character Failure',
  props<{message:string}>()
);
