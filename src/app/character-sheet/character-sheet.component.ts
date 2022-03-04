import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

@Component({
	selector: 'app-character-sheet',
	templateUrl: './character-sheet.component.html',
	styleUrls: ['./character-sheet.component.scss'],
})
export class CharacterSheetComponent implements OnInit {
	nav: string = '';

	constructor(
		private navService: NavigationService,
		private route: ActivatedRoute,
		private router: Router,
	) {}

	async ngOnInit(): Promise<void> {
		console.log('Entering CharacterSheetComponent');
		this.routeTo(this.nav);
	}

	ngOnDestroy() {}

	routeTo(nav: string) {
		this.router.navigate([`${nav}`], { relativeTo: this.route });
	}
}
