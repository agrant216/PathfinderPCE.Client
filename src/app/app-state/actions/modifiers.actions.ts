import { createAction, props } from "@ngrx/store";
import { Modifier } from "src/app/models/modifier.model";

export const addModifier = createAction(
    '[Modifiers] Adding modifier',
    props<{mod: Modifier}>()
);