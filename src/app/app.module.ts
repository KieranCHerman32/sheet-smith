import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< Updated upstream
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { AbilityScoresComponent } from './ability-scores/ability-scores.component';
import { SavingThrowsComponent } from './saving-throws/saving-throws.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    CharacterInfoComponent,
    AbilityScoresComponent,
    SavingThrowsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
