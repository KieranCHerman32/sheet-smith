import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Testing } from './types/testing';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'sheet-smith';

	testData?: Testing[];
	currentTestData?: Testing;
	currentIndex: number = 1;

	constructor(private dataService: DataService) {}

	ngOnInit(): void {
		this.retrieveTestData();
	}

	refreshList(): void {
		this.currentTestData = undefined;
		this.currentIndex = -1;
		this.retrieveTestData();
	}

	retrieveTestData(): void {
		this.dataService
			.getAll()
			.snapshotChanges()
			.pipe(
				map(changes =>
					changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data() })),
				),
			)
			.subscribe(data => {
				this.testData = data;
			});
	}

	setActiveTestData(testing: Testing, index: number): void {
		this.currentTestData = testing;
		this.currentIndex = index;
	}
}
