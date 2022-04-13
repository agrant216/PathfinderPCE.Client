import { state } from '@angular/animations';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectAbilityScores } from '../app-state';
import { AbilityScoresSelectors, AbilityScoreState } from './ability-scores.selectors';

@Component({
  selector: 'pce-ability-scores',
  templateUrl: './ability-scores.component.html',
  styleUrls: ['./ability-scores.component.scss']
})
export class AbilityScoresComponent implements OnInit {
  state$: AbilityScoreState | undefined;

  constructor(private store: Store<AppState>, private chageDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.store.select(AbilityScoresSelectors.state).subscribe((vm) => {
      console.log(vm);
      this.state$ = vm
    });
    console.log(this.state$)
  }

}
