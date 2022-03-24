import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { ArmorComponent } from './basic-roleplaying-system/armor/armor.component';
import { BasicRoleplayingSystemComponent } from './basic-roleplaying-system/basic-roleplaying-system.component';
import { CharacteristicsComponent } from './basic-roleplaying-system/characteristics/characteristics.component';
import { DerivedCharacteristicsComponent } from './basic-roleplaying-system/derived-characteristics/derived-characteristics.component';
import { EquipmentComponent } from './basic-roleplaying-system/equipment/equipment.component';
import { IdentityComponent } from './basic-roleplaying-system/identity/identity.component';
import { SkillsComponent } from './basic-roleplaying-system/skills/skills.component';
import { WeaponsShieldsComponent } from './basic-roleplaying-system/weapons-shields/weapons-shields.component';

@NgModule({
	declarations: [
		ArmorComponent,
		BasicRoleplayingSystemComponent,
		CharacteristicsComponent,
		DerivedCharacteristicsComponent,
		EquipmentComponent,
		IdentityComponent,
		SkillsComponent,
		WeaponsShieldsComponent,
	],
	imports: [CommonModule, MatDividerModule],
})
export class BrpModule {}
