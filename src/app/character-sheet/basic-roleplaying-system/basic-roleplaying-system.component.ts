import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavigationService } from 'src/app/services/navigation.service';
import { DataService } from './../../services/data.service';

@Component({
	selector: 'app-basic-roleplaying-system',
	templateUrl: './basic-roleplaying-system.component.html',
	styleUrls: ['./basic-roleplaying-system.component.scss'],
})
export class BasicRoleplayingSystemComponent implements OnInit {
	nav: string = '';
	subscription!: Subscription;

	panelOpenState = false;

	sheetData: any;

	constructor(
		private dataService: DataService,
		private navService: NavigationService,
		private route: ActivatedRoute,
		private router: Router,
	) {}

	ngOnInit(): void {
		console.log('Entering BasicRoleplayingSystemComponent');
		this.getNav();
		this.fetchSheetData();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	getNav() {
		this.subscription = this.navService.currentNav.subscribe(
			nav => (this.nav = nav),
		);
	}

	fetchSheetData() {
		this.dataService.dbPath = '/charSheets';
		this.sheetData = this.dataService
			.getDocument('brp')
			.valueChanges()
			.subscribe(res => (this.sheetData = res));
		console.log(this.sheetData);
	}
}
