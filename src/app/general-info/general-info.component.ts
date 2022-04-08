import { Component, OnInit } from '@angular/core';
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
      this.responseData = data}
      );

  }

}
