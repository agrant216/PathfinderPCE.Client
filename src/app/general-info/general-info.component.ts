import { Component, OnInit } from '@angular/core';
import { PlayerCharacter } from '../models/player-character.model';
import { PlayerCharacterService } from '../services/player-character.service';

@Component({
  selector: 'general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {
  characterService: PlayerCharacterService;
  responseData:any;

  constructor(pcService: PlayerCharacterService) {
    this.characterService = pcService;
  }

  ngOnInit(): void {
    this.characterService.getNewCharacter().subscribe(data => {
      console.log(data);
      this.responseData = data;
      var pc:PlayerCharacter = data;//this.responseData;
      Object.assign(pc,data)
      console.log(pc.ac);
    }
      );

  }

}
