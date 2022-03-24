import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { environment } from './../../environments/environment.prod';
import { NavigationService } from './../services/navigation.service';

@Component({
	selector: 'app-side-nav-content',
	templateUrl: './side-nav-content.component.html',
	styleUrls: ['./side-nav-content.component.scss']
})
export class SideNavContentComponent implements OnInit {
	feature = environment.features;
	faPlus = faPlus;

	charFilter = 'brp';

	constructor(public nav: NavigationService) {}

	ngOnInit(): void {}

	ngOnDestroy() {}

	newCharacter(charType: string) {
	  this.nav.to(charType, false);
	}
}
