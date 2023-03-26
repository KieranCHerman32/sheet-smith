import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { RpgSelectionComponent } from './rpg-selection/rpg-selection.component';
import { SideNavContentComponent } from './side-nav-content/side-nav-content.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';

@NgModule({
	declarations: [
		AppComponent,
		CharacterSheetComponent,
		MainnavComponent,
		RpgSelectionComponent,
		SideNavContentComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		FontAwesomeModule,
		FormsModule,
		MatButtonModule,
		MatCardModule,
		MatDividerModule,
		MatExpansionModule,
		MatFormFieldModule,
		MatIconModule,
		MatSelectModule,
		MatSidenavModule,
		MatTableModule,
		MatToolbarModule,
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideAuth(() => getAuth()),
  provideDatabase(() => getDatabase()),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
