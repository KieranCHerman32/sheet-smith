import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationService } from '../services/navigation.service';
import { DataService } from './../services/data.service';

@Component({
	selector: 'app-character-sheet',
	templateUrl: './character-sheet.component.html',
	styleUrls: ['./character-sheet.component.scss'],
})
export class CharacterSheetComponent implements OnInit {
	nav: string = '';
	subscription!: Subscription;

	constructor(
		private navService: NavigationService,
		private route: ActivatedRoute,
		private router: Router,
		private dataService: DataService,
	) {}

	async ngOnInit(): Promise<void> {
		console.log('Entering CharacterSheetComponent');
		this.getNav();
		this.routeTo(this.nav);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	getNav() {
		this.subscription = this.navService.currentNav.subscribe(
			nav => (this.nav = nav),
		);
	}

	routeTo(nav: string) {
		this.router.navigate([`${nav}`], { relativeTo: this.route });
	}
}
