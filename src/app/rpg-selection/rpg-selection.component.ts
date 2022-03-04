import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-rpg-selection',
	templateUrl: './rpg-selection.component.html',
	styleUrls: ['./rpg-selection.component.scss'],
})
export class RpgSelectionComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {
		console.log('Entering RpgSelectionComponent');
	}
}
