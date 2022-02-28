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

	sheetSource = ELEMENT_DATA;
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

	changeMainNav(nav: string) {
		nav = `${nav}Sheet`;
		this.navService.changeMainNav(nav);
	}
}

export interface sheetData {
	name: string;
	rpg: string;
}

const ELEMENT_DATA: sheetData[] = [
	{
		name: 'Ward',
		rpg: 'D&D 3.5e',
	},
	{
		name: 'Sima',
		rpg: 'D&D 3.5e',
	},
];
