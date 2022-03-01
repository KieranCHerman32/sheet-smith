import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { NavigationService } from './../services/navigation.service';

@Component({
	selector: 'app-side-nav-content',
	templateUrl: './side-nav-content.component.html',
	styleUrls: ['./side-nav-content.component.scss'],
})
export class SideNavContentComponent implements OnInit {
	feature = environment.features;
	faPlus = faPlus;

	nav: string = '';
	subscription!: Subscription;

	charFilter = 'brp';

	constructor(private navService: NavigationService) {}

	ngOnInit(): void {
		this.subscription = this.navService.currentNav.subscribe(
			nav => (this.nav = nav),
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	newCharacter(charType: string) {
		this.navService.changeNav(charType);
		return '/charSheet';
	}
}
