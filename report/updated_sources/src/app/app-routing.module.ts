import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BasicRoleplayingSystemComponent } from './character-sheet/basic-roleplaying-system/basic-roleplaying-system.component'
import { CharacterSheetComponent } from './character-sheet/character-sheet.component'
import { RpgSelectionComponent } from './rpg-selection/rpg-selection.component'

const routes: Routes = [
  {
    path: 'rpg-select',
    component: RpgSelectionComponent
  },
  {
    path: 'char-sheet',
    component: CharacterSheetComponent,
    children: [
      {
        path: 'brp',
        component: BasicRoleplayingSystemComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'rpg-select',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
