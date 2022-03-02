import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

	constructor(
		private navService: NavigationService,
		private router: Router,
		private route: ActivatedRoute,
	) {}

	ngOnInit(): void {
		this.getNav();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	getNav() {
		this.subscription = this.navService.currentNav.subscribe(
			nav => (this.nav = nav),
		);
	}

	routeTo(route: string) {
		this.navService.updateNav(route);
		this.router.navigate([`${route}`]);
	}

	newCharacter(charType: string) {
		this.navService.updateNav(charType);
		this.getNav();
		this.router.navigate(['charSheet'], { relativeTo: this.route });
	}
}
