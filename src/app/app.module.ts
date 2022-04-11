import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { AbilityScoresComponent } from './ability-scores/ability-scores.component';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { characterEffects } from './app-state/effects/pc.effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app-state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    GeneralInfoComponent,
    AbilityScoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({maxAge: 5}),
    EffectsModule.forRoot([characterEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
