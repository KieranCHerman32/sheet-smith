import {NavigationService} from './../services/navigation.service';
import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
	selector: 'app-side-nav-content',
	templateUrl: './side-nav-content.component.html',
	styleUrls: ['./side-nav-content.component.scss'],
})
export class SideNavContentComponent implements OnInit {
	nav: string = '';
	subscription!: Subscription;

	displayedColumns: string[] = ['name', 'rpg'];

	sheetSource = ELEMENT_DATA;
	charFilter = 'All';

	constructor(private data: NavigationService) {}

	ngOnInit(): void {
		this.subscription = this.data.currentMainNav.subscribe(
			nav => (this.nav = nav),
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	changeMainNav(nav: string) {
		nav = `${nav}Sheet`;
		this.data.changeMainNav(nav);
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
