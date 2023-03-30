import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { LiveTestComponent } from './live-test/live-test.component';
import { RpgSelectionComponent } from './rpg-selection/rpg-selection.component';

const routes: Routes = [
	{
		path: 'live-test',
		component: LiveTestComponent
	},
	{
		path: 'rpg-select',
		component: RpgSelectionComponent,
	},
	{
		path: 'char-sheet',
		component: CharacterSheetComponent,
		children: [],
	},
	{
		path: '',
		redirectTo: 'live-test',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		initialNavigation: 'enabledBlocking'
	})],
	exports: [RouterModule],
})
export class AppRoutingModule { }
