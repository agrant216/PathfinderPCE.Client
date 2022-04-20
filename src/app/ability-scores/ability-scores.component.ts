import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import { updateAllScores } from '../app-state/actions/ability-scores.actions';
import { AbilityScoresSelectors, AbilityScoreState } from './ability-scores.selectors';

@Component({
  selector: 'pce-ability-scores',
  templateUrl: './ability-scores.component.html',
  styleUrls: ['./ability-scores.component.scss']
})
export class AbilityScoresComponent implements OnInit {
  state!: AbilityScoreState;
  editable: boolean = false;
  editedScores: Dictionary<number> = {};

  constructor(private store: Store<AppState>, private chageDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.store.select(AbilityScoresSelectors.state).subscribe((vm) => {
      this.state = vm
    });
    console.log("comp",this.state?.modifiedAbilityScores);
  }

  setEditMode() {
    console.log(this.editedScores);
    if(Object.keys(this.editedScores).length === 0){
      this.initializeEditScores();
    }
    this.editable = !this.editable;
    console.log("clicked", this.editable);
  }

  onSaveClick(){
    this.store.dispatch(updateAllScores(this.editedScores));
    this.editable = false;
  }
  initializeEditScores() {
    this.state.modifiedAbilityScores.forEach((ability) => this.editedScores[ability.name] = ability.baseValue);
  }

}
