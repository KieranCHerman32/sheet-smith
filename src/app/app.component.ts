import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'sheet-smith';

	constructor(private dataService: DataService) {}

	ngOnInit(): void {}
}
