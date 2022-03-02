import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Testing } from './types/testing';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'sheet-smith';

	constructor() {}

	ngOnInit(): void {}
}
