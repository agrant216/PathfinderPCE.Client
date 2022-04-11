import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PlayerCharacter } from "src/app/models/player-character.model";

@Injectable({providedIn: "root"})
export class PlayerCharacterService {
  constructor(private http: HttpClient){}

  public getNewCharacter() {
    return this.http.get<PlayerCharacter>('https://localhost:7092/api/playercharacter/new');
  }
}
