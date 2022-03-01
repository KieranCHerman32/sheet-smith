import { environment } from './../../environments/environment.prod';
import { NavigationService } from './../services/navigation.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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

	displayedColumns: string[] = ['name', 'rpg'];

	charFilter = 'All';

	constructor(private navService: NavigationService) {}

	ngOnInit(): void {
		this.subscription = this.navService.currentMainNav.subscribe(
			nav => (this.nav = nav),
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
