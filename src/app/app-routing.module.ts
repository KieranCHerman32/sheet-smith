import { BasicRoleplayingSystemComponent } from './character-sheet/basic-roleplaying-system/basic-roleplaying-system.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'charSheet', component: CharacterSheetComponent },
	{ path: 'brp', component: BasicRoleplayingSystemComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
