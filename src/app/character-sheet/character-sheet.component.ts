import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationService } from '../services/navigation.service';

@Component({
	selector: 'app-character-sheet',
	templateUrl: './character-sheet.component.html',
	styleUrls: ['./character-sheet.component.scss'],
})
export class CharacterSheetComponent implements OnInit {
	nav: string = '/';
	subscription!: Subscription;

	constructor(
		private navService: NavigationService,
		private router: Router,
		private route: ActivatedRoute,
	) {}

	ngOnInit(): void {
		console.log('Entering CharacterSheetComponent');
		this.setNav();
		this.routeTo(this.nav);
	}

	setNav() {
		this.subscription = this.navService.currentNav.subscribe(
			nav => (this.nav = nav),
		);
	}

	routeTo(nav: string) {
		this.router.navigate([`${nav}`], { relativeTo: this.route });
	}
}
