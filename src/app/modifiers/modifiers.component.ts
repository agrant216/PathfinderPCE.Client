import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Dictionary } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import { addModifier } from '../app-state/actions/modifiers.actions';
import { Modifier } from '../models/modifier.model';
import { armorClassTypes, attributeTypes } from '../shared/static-data';
import { ModifierSelectors, ModifierState } from './modifiers.selectors';

@Component({
  selector: 'pce-modifiers',
  templateUrl: './modifiers.component.html',
  styleUrls: ['./modifiers.component.scss']
})
export class ModifiersComponent implements OnInit {
  state!: ModifierState;
  modifierTypes: Array<string> = ['Attribute', 'Armor Class'];
  modifierSubtypes: Array<string> = [];
  subtypeArrays: Dictionary<Array<string>> = {};

  modifierForm = this.fb.group({
    type: ['-1'],
    subtype: ['-1'],
    name: [''],
    modType: ['Untyped'], 
    mod: ['0'],
  });

  constructor(private fb: FormBuilder, private store: Store<AppState>, private chageDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.initializeSubtypeArray();
    this.store.select(ModifierSelectors.state).subscribe((vm) => {
      this.state = vm;
    });
  }

  onSubmit(){
    console.log(this.modifierForm.value);
    if(this.modifierForm.valid) {
      this.store.dispatch(addModifier({mod: new Modifier(
        this.modifierForm.value.name,this.modifierForm.value.type,this.modifierForm.value.subtype,this.modifierForm.value.mod)}));
      this.modifierForm.reset({type: -1, subtype: -1, name: '', modType: 'Untyped', mod: 0});
    }
  }

  onTypeSelection(){
    this.modifierSubtypes = this.subtypeArrays[this.modifierForm.value.type] ?? [];
    this.modifierForm.controls['subtype'].setValue('-1');
  }

  initializeSubtypeArray() {
    this.subtypeArrays['Attribute'] = attributeTypes;
    this.subtypeArrays['Armor Class'] = armorClassTypes;
  }
}
