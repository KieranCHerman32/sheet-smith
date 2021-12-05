import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-side-nav-content',
	templateUrl: './side-nav-content.component.html',
	styleUrls: ['./side-nav-content.component.scss'],
})
export class SideNavContentComponent implements OnInit {
	displayedColumns: string[] = [
		'name',
		'rpg',
	];

	sheetSource = ELEMENT_DATA;
	charFilter = 'All';

	constructor() { }

	ngOnInit(): void { }
}

export interface sheetData {
  name: string
  rpg: string
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

