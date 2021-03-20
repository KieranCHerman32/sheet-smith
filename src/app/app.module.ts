import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { AbilityScoresComponent } from './ability-scores/ability-scores.component';
import { SavingThrowsComponent } from './saving-throws/saving-throws.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterInfoComponent,
    AbilityScoresComponent,
    SavingThrowsComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
