import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as pcActions from './app-state/actions/pc.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PathfinderPCE.Client';

  constructor(private readonly store: Store){
    this.store.dispatch(pcActions.loadNewCharacter())
  }
}
