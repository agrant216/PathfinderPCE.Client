import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import { updateOneScore } from '../app-state/actions/ability-scores.actions';
import { AbilityScoresSelectors, AbilityScoreState } from './ability-scores.selectors';

@Component({
  selector: 'pce-ability-scores',
  templateUrl: './ability-scores.component.html',
  styleUrls: ['./ability-scores.component.scss']
})
export class AbilityScoresComponent implements OnInit {
  state!: AbilityScoreState;
  editedScores: {[key: string]:number} = {};

  constructor(private store: Store<AppState>, private chageDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.store.select(AbilityScoresSelectors.state).subscribe((vm) => {
      this.state = vm;
      this.initializeEditScores();
    });
  }

  initializeEditScores() {
    this.state.modifiedAbilityScores.forEach((ability) => this.editedScores[ability.name] = ability.baseValue);
  };

  onCellEdit(ability: string) {
    console.log("OnBlur",{name: ability, value: this.editedScores[ability]});
    this.store.dispatch(updateOneScore({name: ability, value: this.editedScores[ability]}))
  };

  getModPrefix(mod: number): string {
    if(mod > 0) return '+';
    if(mod === 0) return '\u00A0';
    return '';

  }

}
