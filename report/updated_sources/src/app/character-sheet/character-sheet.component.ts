import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-character-sheet',
	templateUrl: './character-sheet.component.html',
	styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {
	constructor() {}

	async ngOnInit(): Promise<void> {
		console.log('Entering CharacterSheetComponent');
	}

	ngOnDestroy() {}
}
