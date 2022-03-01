import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

	constructor(private navService: NavigationService, private router: Router) {}

	ngOnInit(): void {
		this.setNav();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	setNav() {
		this.subscription = this.navService.currentNav.subscribe(
			nav => (this.nav = nav),
		);
	}

	newCharacter(charType: string) {
		this.navService.changeNav(charType);
		this.router.navigate(['charSheet']);
	}
}
