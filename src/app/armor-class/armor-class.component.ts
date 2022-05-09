import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import { ArmorClassSelectors, ArmorClassState } from './armor-class.selectors';

@Component({
  selector: 'pce-armor-class',
  templateUrl: './armor-class.component.html',
  styleUrls: ['./armor-class.component.scss']
})
export class ArmorClassComponent implements OnInit {
  state!: ArmorClassState;

  constructor(private store: Store<AppState>, private chageDetector: ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.store.select(ArmorClassSelectors.state).subscribe((vm) => {
      this.state = vm;
    });
  }

}
