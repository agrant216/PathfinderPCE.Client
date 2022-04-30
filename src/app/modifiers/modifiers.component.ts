import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'pce-modifiers',
  templateUrl: './modifiers.component.html',
  styleUrls: ['./modifiers.component.scss']
})
export class ModifiersComponent implements OnInit {

  modifierForm = this.fb.group({
    type: [''],
    subtype: [''],
    name: [''],
    modType: [''], 
    mod: [''],
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
