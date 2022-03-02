import { NgModule } from '@angular/core';
import {
	ScreenTrackingService,
	UserTrackingService,
} from '@angular/fire/analytics';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
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
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmorComponent } from './character-sheet/basic-roleplaying-system/armor/armor.component';
import { BasicRoleplayingSystemComponent } from './character-sheet/basic-roleplaying-system/basic-roleplaying-system.component';
import { CharacteristicsComponent } from './character-sheet/basic-roleplaying-system/characteristics/characteristics.component';
import { DerivedCharacteristicsComponent } from './character-sheet/basic-roleplaying-system/derived-characteristics/derived-characteristics.component';
import { EquipmentComponent } from './character-sheet/basic-roleplaying-system/equipment/equipment.component';
import { IdentityComponent } from './character-sheet/basic-roleplaying-system/identity/identity.component';
import { SkillsComponent } from './character-sheet/basic-roleplaying-system/skills/skills.component';
import { WeaponsShieldsComponent } from './character-sheet/basic-roleplaying-system/weapons-shields/weapons-shields.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { SideNavContentComponent } from './side-nav-content/side-nav-content.component';

@NgModule({
	declarations: [
		AppComponent,
		MainnavComponent,
		SideNavContentComponent,
		CharacterSheetComponent,
		BasicRoleplayingSystemComponent,
		IdentityComponent,
		CharacteristicsComponent,
		DerivedCharacteristicsComponent,
		SkillsComponent,
		WeaponsShieldsComponent,
		EquipmentComponent,
		ArmorComponent,
	],
	imports: [
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		FontAwesomeModule,
		FormsModule,
		MatButtonModule,
		MatDividerModule,
		MatExpansionModule,
		MatFormFieldModule,
		MatIconModule,
		MatSelectModule,
		MatSidenavModule,
		MatTableModule,
		MatToolbarModule,
	],
	providers: [
		ScreenTrackingService,
		ScreenTrackingService,
		UserTrackingService,
		UserTrackingService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
