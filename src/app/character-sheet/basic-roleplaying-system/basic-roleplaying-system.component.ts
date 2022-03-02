import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	getNav() {
		this.subscription = this.navService.currentNav.subscribe(
			nav => (this.nav = nav),
		);
	}
}
