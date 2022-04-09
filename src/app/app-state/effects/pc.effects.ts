import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap, Observable, of } from "rxjs";
import { PlayerCharacter } from "src/app/models/player-character.model";
import { PlayerCharacterService } from "src/app/services/player-character.service";
import * as pcActions from "../actions/pc.actions";

@Injectable()
export class characterEffects {

  constructor(private actions$: Actions, private pcService: PlayerCharacterService) {}

  private callActionGroup(response: PlayerCharacter){
    pcActions.loadCharacterSuccess(response);
    //Initialize for other parts (AC, Saves, etc.)
  }

  defaultCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(pcActions.loadNewCharacter),
      mergeMap(() =>
        this.pcService.getNewCharacter().pipe(
          map((response) => this.callActionGroup(response)),
          catchError((error: any) => of(pcActions.loadCharacterFailure(error)))
        )
    ))
  );
}
